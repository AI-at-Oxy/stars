import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { GoogleGenAI } from '@google/genai'
import { SYSTEM_PROMPT } from './systemPrompt.js'

const app = express()
const PORT = 3001

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

const apiKey = process.env.GEMINI_API_KEY ?? ''
console.log('GEMINI_API_KEY loaded:', apiKey ? `${apiKey.slice(0, 6)}...` : 'MISSING')
const genAI = new GoogleGenAI({ apiKey })

interface ChatRequestMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ChatRequest {
  messages: ChatRequestMessage[]
  context?: {
    selectedConstellation: string | null
    exploredConstellations: string[]
    userFamiliarityLevel: string
    constellationEngagement: Record<string, number>
  }
  constellationEvent?: {
    type: 'selected'
    constellationName: string
    constellationId: string
  }
  quizRequest?: boolean
}

app.post('/api/chat', async (req, res) => {
  const { messages, context, constellationEvent, quizRequest } = req.body as ChatRequest

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array required' })
  }

  // Determine the new user message to send, and what becomes history
  let newUserMessage: string
  let historyMessages: ChatRequestMessage[]

  if (constellationEvent?.type === 'selected') {
    newUserMessage = `[CONTEXT: The user just clicked on ${constellationEvent.constellationName} on the interactive star map. Open with ONE vivid image or exciting story hook — just a sentence or two. Then ask the learner what they already know about it or what it looks like to them. Do not give a full introduction yet. Let their answer guide what comes next.]`
    historyMessages = messages.filter(m => m.content.trim() !== '')
  } else if (quizRequest) {
    const explored = context?.exploredConstellations?.join(', ') ?? 'several constellations'
    newUserMessage = `[QUIZ REQUEST: The user has now explored ${explored}. Please generate 5 quiz questions as described in your instructions. Respond with ONLY the JSON object — no other text before or after it.]`
    historyMessages = messages.filter(m => m.content.trim() !== '')
  } else {
    // Regular message — last entry is the current user message
    const lastMsg = messages[messages.length - 1]
    newUserMessage = lastMsg?.content ?? ''
    historyMessages = messages.slice(0, -1).filter(m => m.content.trim() !== '')
  }

  // Convert history to Gemini format (role must be 'user' | 'model')
  const geminiHistory = historyMessages.map(m => ({
    role: m.role === 'assistant' ? ('model' as const) : ('user' as const),
    parts: [{ text: m.content }],
  }))

  // Set SSE headers
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')

  try {
    const chat = genAI.chats.create({
      model: 'gemini-2.5-flash',
      config: { systemInstruction: SYSTEM_PROMPT },
      history: geminiHistory,
    })

    const stream = await chat.sendMessageStream({ message: newUserMessage })

    for await (const chunk of stream) {
      const text = chunk.text
      if (text) {
        res.write(`data: ${JSON.stringify({ token: text })}\n\n`)
      }
    }

    res.write('data: [DONE]\n\n')
    res.end()
  } catch (err) {
    console.error('Gemini API error:', err)
    res.write(`data: ${JSON.stringify({ error: 'Failed to get response from AI' })}\n\n`)
    res.end()
  }
})

app.listen(PORT, () => {
  console.log(`Stars server running on http://localhost:${PORT}`)
})
