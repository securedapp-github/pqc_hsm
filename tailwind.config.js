/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'], 
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist)', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--bg-primary) / <alpha-value>)',
        foreground: 'hsl(var(--text-primary) / <alpha-value>)',
        muted: 'hsl(var(--text-secondary) / <alpha-value>)',
        primary: 'hsl(var(--accent-blue) / <alpha-value>)',
        secondary: 'hsl(var(--accent-purple) / <alpha-value>)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, hsl(var(--accent-blue)), hsl(var(--accent-purple)))',
      }
    },
  },
  plugins: [],
}
