/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'green-elec': '#57CC99',
        'jaune': '#FFFF00',
        'bleu-elec': '#00BFFF',
        'orange-vif': '#FF8C00'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

