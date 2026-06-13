const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2B4A',
          light: '#1A3F62',
          dark: '#061E33',
        },
        secondary: {
          DEFAULT: '#C8A45C',
          light: '#D4B87A',
          dark: '#A8883E',
        },
        accent: {
          DEFAULT: '#2E7D32',
          light: '#4CAF50',
        },
        background: '#FFFFFF',
        'background-alt': '#F8F9FA',
        'background-dark': '#0A2B4A',
        foreground: '#1A1A2E',
        muted: '#4A4A5A',
        'muted-light': '#9CA3AF',
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        heading: ['Plus Jakarta Sans', ...fontFamily.sans],
      },
      borderRadius: {
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.07)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        hero: '0 20px 25px -5px rgba(0, 0, 0, 0.15)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
