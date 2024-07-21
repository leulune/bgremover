/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'conic-gradient': 'conic-gradient(red, yellow, lime, cyan, blue, magenta, red)',
      },
      height: {
        'custom': 'calc(100% - 150px)',
      },
      padding: {
        '5.5': '1.375rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'neutral-ink-700': '#212b39',
        'neutral-ink-400': '#a3a3a3',
        'grey-08': '#000000',
        'neutral-ink': {
          500: '#5a5a5a',
        },
      },
      fontSize: {
        '5.5xl': '3.5rem',
        'H30B': '30px',
        'H48B': '48px',
        'H56B': '56px',
        'T16R': '16px',
        'T20R': '20px',
      },
    },
    screens: {
      'lg': '1024px',
      'lg+': '1280px',
      'sm+': '784px',
      'md': '768px',
      'md+': '896px',
      't2xl': '1536px',
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
