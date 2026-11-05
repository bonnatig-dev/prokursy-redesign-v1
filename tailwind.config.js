/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        headline: ["'Golos Text'", 'Arial', 'sans-serif'],
        text: ["'Inter Tight'", 'Arial', 'sans-serif'],
      },
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1.04)' },
          '100%': { transform: 'scale(1.14)' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.2s ease-out',
        kenburns: 'kenburns 22s ease-in-out alternate infinite',
      },
    },
  },
  plugins: [],
}
