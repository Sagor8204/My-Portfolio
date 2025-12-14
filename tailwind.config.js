/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0f172a',
        'secondary': '#1e293b',
        'accent': {
          500: '#f97316',
          600: '#ea580c',
        },
        'text-primary': '#f8fafc',
        'text-secondary': '#94a3b8',
        'border-slate': '#334155',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};