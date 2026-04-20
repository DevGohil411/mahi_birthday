/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0E0E10',
        'dark-surface': '#1A1A1D',
        'light-text': '#E5E5E5',
        'secondary-text': '#A1A1AA',
        'accent': '#D4D4D8',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        'safe': 'clamp(1rem, 5vw, 4rem)',
      },
      maxWidth: {
        '7xl': '80rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'stagger': 'fadeIn 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 212, 216, 0.7)' },
          '50%': { boxShadow: '0 0 0 20px rgba(212, 212, 216, 0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '20px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(212, 212, 216, 0.3)',
        'glow-lg': '0 0 40px rgba(212, 212, 216, 0.4)',
      },
    },
  },
  plugins: [],
}

