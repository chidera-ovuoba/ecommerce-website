/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.js","./src/components/{Navbar,Search,Silder,Product}.js","./src/pages/{SignIn,SingleProduct,Carts,SignUp,Home,Products}.js"],
  theme: {
    extend: {
        boxShadow: {
        '3xl': '1px 1px 3px 1px rgba(0, 0, 0,0.1), 1px -1px 3px 1px rgba(0, 0, 0,0.1), -1px 1px 3px 1px rgba(0, 0, 0,0.1), -1px -1px 3px 1px rgba(0, 0, 0,0.1)',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(3, minmax(0, 1fr))'
      }

    },
  },
  plugins: [],
}
