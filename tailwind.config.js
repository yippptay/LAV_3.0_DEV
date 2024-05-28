/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../layout/.{liquid,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** npx tailwindcss -i ../assets/input.css -o ../assets/output.css --watch */