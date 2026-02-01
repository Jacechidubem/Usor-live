/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // The exact "Luxury" palette from your images
        'usor-gold': '#FFC107',      
        'usor-black': '#0B0B0B',     
        'usor-card': '#121212',      
        'usor-border': '#262626',
        'usor-gray': '#B0B0B0',
      },
      backgroundImage: {
        // Metallic gold effect for the title and main buttons
        'gold-gradient': 'linear-gradient(135deg, #FFC107 0%, #F9E29C 50%, #C9A227 100%)',
      },
      animation: {
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}