/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#08090B',
          secondary: '#0E1015',
          tertiary: '#161920',
          elevated: '#1D212B',
        },
        surface: {
          dark: '#0C0D11',
          card: '#12141A',
          border: '#232733',
          subtle: '#191C24',
        },
        brand: {
          lime: '#D4FF00', // electric lime / acid green
          limeGlow: 'rgba(212, 255, 0, 0.35)',
          limeDim: '#99B800',
          charcoal: '#0F1117',
          graphite: '#1B1E28',
          concrete: '#3F4452',
          silver: '#8A91A0',
          platinum: '#C8CDD8',
          bone: '#EAE6DF',
          obsidian: '#111216',
          signal: '#FF3B30',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Syne', 'Space Grotesk', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.2em',
        mega: '0.35em',
      },
      backgroundImage: {
        'radial-vignette': 'radial-gradient(circle at center, transparent 40%, #08090B 100%)',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      },
      boxShadow: {
        'lime-sm': '0 0 15px rgba(212, 255, 0, 0.2)',
        'lime-md': '0 0 25px rgba(212, 255, 0, 0.35)',
        'dark-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
