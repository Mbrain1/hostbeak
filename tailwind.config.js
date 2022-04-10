module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue : {
          500 : '#3DB0FF',
          700 : '#081494',
          800 : '#0A043C',
          900 : '#272262',
        },
        gray : {
          300 : '#727E8C',
          400 : '#BFBFBF',
          500 : '#82869A',
          600 : '#282C40',
          700 : `#8C8C8C`,
          800 : '#373C56',
          900 : '#304156',
        },
        green : {
          200 : '#F9F9F9'
        }
      }
    },
  },
  plugins: [],
}
