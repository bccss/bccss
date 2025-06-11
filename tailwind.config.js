/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#00ff88',
          teal: '#00d4ff',
        },
        accent: {
          purple: '#8b5cf6',
          pink: '#f472b6',
        },
        surface: {
          black: '#0a0a0f',
          gray: '#1a1a24',
          border: '#2a2a3a',
        },
        text: {
          white: '#ffffff',
          gray: '#a1a1aa',
          dim: '#71717a',
        }
      },
      fontFamily: {
        'header': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
        'slideUp': 'slideUp 0.5s ease-out forwards',
        'pulse': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)',
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(0, 255, 136, 0.6)',
          },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(0, 255, 136, 0.4)',
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}
