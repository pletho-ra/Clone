/** @type {import('tailwindcss').Config} */
module.exports = {
  mode : 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens : {
          'xs': '300px',
           'mdMax': {'max': '768px'},
           'mdx':{'min': '992px'},
           'sm':{'min':'576px'},
           'mdNav':{'max':'991.98'}
      }
    },
  },
  plugins: []
}
