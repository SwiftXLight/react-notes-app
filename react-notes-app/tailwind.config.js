/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "RocknRoll": ["RocknRoll One", "sans-serif"]
      },
      dropShadow: {
        "h1-shadow": [
          "0 0 5px #433aa8",
          "3px -1px 5px #271c6c"
        ],
        "add-btn-shadow": "2px 4px 10px #271c6c"
      },
      width: {
        "vw75": "75vw"
      },
      colors: {
        "silver": "rgb(180, 182, 218)",
        "archive-bg" : "#867bcd",
        "text-main": "#e1ebfd",
        "archive-border": "#272727",
        "add-btn-bg": "#271c6c",
        "app-bg-start": "rgb(134, 123, 205) 0%",
        "app-bg-end": "rgb(106, 90, 171) 100%"
      },
    },
  },
  plugins: [],
}
