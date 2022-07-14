const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      colors: {
        amber: colors.amber,
        emerald: colors.emerald,
        cyan: colors.cyan,
        'unibrown': '#F26E50',
        'uniblue':'#5BCEFC',
        'uniyellow':'#F0ED62',
      },

      blur: {
        xxs: '1px',
        xs: '2px',
      },

      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
        'text':'0 2px 2px rgb(50 120 150 / 0.65)',
      },

      animation: {
        blob: "blob 7s infinite",
      },

      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            // top: "-300px",
            // left: "200px",
            // right: "-300px",
            // width: "100%",
          },
          "33%": {
            transform: "translate(50px, -80px) scale(1.1)",
            // top: "-130px",
            // left: "-80px",
            // right: "-60px",
            // width: "100%",
          },
          "66%": {
            transform: "translate(-30px, 30px) scale(0.9)",
            // top: "80px",
            // left: "30px",
            // right: "0px",
            // width: "70%",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
            // top: "-300px",
            // left: "200px",
            // right: "-300px",
            // width: "100%",
          },
        },
      },
      
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

// {'postcss-import': {},tailwindcss: {},
//   autoprefixer: {}}