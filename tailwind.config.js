/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        full: '1em',
      },
      colors: {
        UbPink: '#82123f',
        UbOrange: '#d44216',
        UbGray: '#3e3d39',
        UbLightGray: '#55534b',
        UbGreen: '#87d231',
        UbDarkPurple: '#2d0922',
      },
    },
  },
  plugins: [],
}