import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Hill Country Americana Colors - Mike Switzer Workshop Inspired
        'hill-sage': '#9CAF88',        // Texas sage green - natural hill country
        'barn-red': '#B85450',         // Classic barn red - warmth and tradition
        'limestone': '#E8E6E1',        // Texas limestone - natural elegance
        'cedar': '#8B7355',            // Hill country cedar - authentic wood
        'creek-blue': '#87CEEB',       // Hill country creek - open sky feeling
        'workshop-charcoal': '#3E3E3C', // Workshop tools and machinery
        'weathered-wood': '#A0907A',   // Aged barn wood character
        'sunset-orange': '#CC8B65',    // Texas sunset warmth
        'prairie-grass': '#C4B896',    // Native grass tones
        'ironwork': '#4A4A48'          // Hand-forged hardware
      },
      fontFamily: {
        'craftsman': ['Playfair Display', 'serif'], // Elegant, quality craftsmanship
        'workshop': ['Source Sans Pro', 'sans-serif'], // Clean, readable, professional
        'signature': ['Kalam', 'cursive'] // Mike's authentic personal touch
      },
      animation: {
        'barn-door': 'barnDoor 0.5s ease-in-out',
        'wood-grain': 'woodGrain 2s ease-in-out infinite',
        'craft-fade': 'craftFade 0.8s ease-in-out',
        'tool-hover': 'toolHover 0.3s ease-in-out'
      },
      keyframes: {
        barnDoor: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        woodGrain: {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' }
        },
        craftFade: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        toolHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' }
        }
      },
      backgroundImage: {
        'wood-grain': "url('/images/textures/wood-grain-subtle.jpg')",
        'hill-country': "url('/images/backgrounds/spicewood-hills.jpg')",
        'workshop-tools': "url('/images/backgrounds/mike-tools-subtle.jpg')"
      },
      boxShadow: {
        'craftsman': '0 8px 32px rgba(139, 115, 85, 0.15)',
        'european': '0 4px 16px rgba(62, 62, 60, 0.1)',
        'barn-warm': '0 6px 24px rgba(184, 84, 80, 0.2)'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      }
    },
  },
  plugins: [],
}

export default config