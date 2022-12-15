/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*/.{js,jsx,ts,tsx,html}",
    "./public/index.html",
    "./components/*/.{html,js,ts,tsx,jsx}",
    "./pages/*/.{html,js,ts,tsx,jsx}",
    "./src/*/.{html,js}",
    "./node_modules/tw-elements/dist/js/*/.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
