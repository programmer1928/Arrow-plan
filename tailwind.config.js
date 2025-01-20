/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}", "./index.html"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
        sm: '0rem',
        lg: '0rem',
        xl: '0rem',
        '2xl': '0rem',
      },
    },
    extend: {
      colors: {
        "primary": "#B273FF",
        "myWhite": "#E5E5E6",
        "sections": "#1D2023",
        "paragraph": "#737577",
        "icon": "#747D85",
        "background": "#2C3137",
        "myYellow": "#FFD700",
        "myBlue": "#007BFF",
        "myGreen": "#00B74A",
        "myRed": "#FF4C4C",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}