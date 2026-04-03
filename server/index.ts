import express from 'express'
import cors from 'cors'
import Anthropic from '@anthropic-ai/sdk'
import { SYSTEM_PROMPT } from './systemPrompt.js'

const app = express()
const PORT = 3001

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

const client = new Anthropic()

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

  // Build the messages array for Anthropic, injecting context as needed
  const anthropicMessages: Anthropic.MessageParam[] = [...messages]

  // If a constellation was just selected, prepend a context injection
  if (constellationEvent?.type === 'selected') {
    const contextNote = `[CONTEXT: The user just clicked on ${constellationEvent.constellationName} on the interactive star map. Guide them to explore this constellation. Begin with an engaging story hook or evocative image — don't just announce what it is.]`

    // Inject as a user message prefix (will be part of the current user turn)
    const lastMsg = anthropicMessages[anthropicMessages.length - 1]
    if (lastMsg && lastMsg.role === 'user') {
      anthropicMessages[anthropicMessages.length - 1] = {
        role: 'user',
        content: `${contextNote}\n\n${lastMsg.content}`,
      }
    } else {
      anthropicMessages.push({
        role: 'user',
        content: contextNote,
      })
    }
  }

  // If quiz is requested, replace/append quiz generation instruction
  if (quizRequest) {
    const explored = context?.exploredConstellations?.join(', ') ?? 'several constellations'
    anthropicMessages.push({
      role: 'user',
      content: `[QUIZ REQUEST: The user has now explored ${explored}. Please generate 5 quiz questions as described in your instructions. Respond with ONLY the JSON object — no other text before or after it.]`,
    })
  }

  // Set SSE headers
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')

  try {
    const stream = client.messages.stream({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: [
        {
          type: 'text',
          text: SYSTEM_PROMPT,
          // @ts-ignore — cache_control is a valid field in the API
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages: anthropicMessages,
    })

    for await (const event of stream) {
      if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
        res.write(`data: ${JSON.stringify({ token: event.delta.text })}\n\n`)
      }
    }

    res.write('data: [DONE]\n\n')
    res.end()
  } catch (err) {
    console.error('Anthropic API error:', err)
    res.write(`data: ${JSON.stringify({ error: 'Failed to get response from AI' })}\n\n`)
    res.end()
  }
})

app.listen(PORT, () => {
  console.log(`Stars server running on http://localhost:${PORT}`)
})
