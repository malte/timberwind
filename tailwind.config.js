module.exports = {
  content: ["./theme/**/*.{php,twig,html,js}"],
  theme: {
    extend: {
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          primary: {
            light: '#009FE3',
            DEFAULT: '#046AB3',
            dark: '#4747A5',
          }
        }
    },
    fontFamily: {
      'sans': ['cabin', "Helvetica Neue", "Noto Sans", 'sans-serif'],
    }
  },
  plugins: [],
}
