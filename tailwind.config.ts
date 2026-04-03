import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#020409',
          900: '#050d1a',
          800: '#0a1628',
          700: '#0f2040',
          600: '#162d5a',
        },
        star: {
          gold: '#ffd97d',
          blue: '#a8d8ea',
          white: '#f0f4ff',
          dim: '#6b7aaa',
        },
        nebula: {
          purple: '#7c3aed',
          teal: '#0d9488',
          pink: '#db2777',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 4px rgba(168,216,234,0.6))' },
          '50%': { filter: 'drop-shadow(0 0 12px rgba(168,216,234,1))' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config
