module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

    options: {
      safelist: [/^bg-/],
    },
  },
  darkMode: false, // or 'media' or 'class' 
  theme: {
    "extend": {
      colors: {
        'yt-black': '#191919',
        'yt-gray': '#212121',
        'yt-text': '#aaa',
        'yt-border': '#303030'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
