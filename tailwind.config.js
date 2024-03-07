/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.cut-corner': {
          position: 'relative',
          overflow: 'hidden',
        },
        '.cut-corner::after': {
          content: '""',
          position: 'absolute',
          bottom: '0',
          right: '0',
          borderLeft: '20px solid transparent',
          borderBottom: '20px solid white',
          width: '0',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
