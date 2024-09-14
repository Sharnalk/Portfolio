// tailwind.config.js
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.mainTheme': {
          color: '#333333',
          backgroundColor: '#E6E6FA',
          '.dark &': {
            color: '#EAEAEA',
            backgroundColor: '#17191d',
          },
        },
        '.path-1': {
          fill: '#FFC2AD',
          '.dark &': {
            fill : '#003d52'
          }
        },
        '.path-2': {
          fill: '#FF5C5B',
          '.dark &': {
            fill : '#00a3a4'
          }
        },
        '.path-3': {
          fill: '#BE2545',
          '.dark &': {
            fill : '#41daba'
          },
        },
        '.bg-menu': {
          backgroundColor: '#FFC2AD',
          '.dark &': {
            backgroundColor : '#003d52'
          },
        },
        '.bg-features': {
          backgroundColor: '#FFC2AD',
          '.dark &': {
            backgroundColor : '#41daba',
            textColor:'',
          },
        },
        '.bg-features-2': {
          backgroundColor: '#FF5C5B',
          '.dark &': {
            backgroundColor : '#00a3a4',
            textColor:'',
          },
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ]
}