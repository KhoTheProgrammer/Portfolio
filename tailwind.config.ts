// tailwind.config.js
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Open Sans"', 'sans-serif'],
        },
        colors: {
          body: '#272829',
        },
      },
    },
    plugins: [],
  }
  