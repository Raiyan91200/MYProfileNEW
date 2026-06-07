/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'void': '#0A0A0F',
        'panel': '#12121A',
        'surface': '#1A1A2E',
        'neon-blue': '#00D4FF',
        'neon-purple': '#B24BF3',
        'neon-green': '#39FF14',
        'neon-pink': '#FF2E63',
        'neon-cyan': '#00FFF5',
        'grid-line': 'rgba(0,212,255,0.05)',
        'text-primary': '#E8E6E3',
        'text-muted': '#6B6B7B',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.5' }],
        '3xl': ['1.875rem', { lineHeight: '1.4' }],
        '4xl': ['2.25rem', { lineHeight: '1.3' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '0.95' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'glitch': 'glitch 2s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'scan': 'scan 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'charge': 'charge 1.5s ease-out forwards',
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'fadeInLeft': 'fadeInLeft 0.8s ease-out',
        'fadeInRight': 'fadeInRight 0.8s ease-out',
        'slideDown': 'slideDown 0.5s ease-out',
        'typing': 'typing 3s steps(40, end)',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        charge: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--charge-level, 100%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#00D4FF' },
        },
      },
      backgroundImage: {
        'hex-grid': `linear-gradient(30deg, rgba(0,212,255,0.03) 12%, transparent 12.5%, transparent 87%, rgba(0,212,255,0.03) 87.5%, rgba(0,212,255,0.03)),
                      linear-gradient(150deg, rgba(0,212,255,0.03) 12%, transparent 12.5%, transparent 87%, rgba(0,212,255,0.03) 87.5%, rgba(0,212,255,0.03)),
                      linear-gradient(30deg, rgba(0,212,255,0.03) 12%, transparent 12.5%, transparent 87%, rgba(0,212,255,0.03) 87.5%, rgba(0,212,255,0.03)),
                      linear-gradient(150deg, rgba(0,212,255,0.03) 12%, transparent 12.5%, transparent 87%, rgba(0,212,255,0.03) 87.5%, rgba(0,212,255,0.03)),
                      linear-gradient(60deg, rgba(178,75,243,0.04) 25%, transparent 25.5%, transparent 75%, rgba(178,75,243,0.04) 75%, rgba(178,75,243,0.04)),
                      linear-gradient(60deg, rgba(178,75,243,0.04) 25%, transparent 25.5%, transparent 75%, rgba(178,75,243,0.04) 75%, rgba(178,75,243,0.04))`,
      },
    },
  },
  plugins: [],
}
