/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    extend: {
      backgroundImage: {
        mobileBackground: "url('./bg-intro-mobile.png')"
      },
      colors: {
        "primary-red": "hsl(0, 100%, 74%)",
        "primary-green": "hsl(154, 59%, 51%)",
        "accent-blue": "hsl(248, 32%, 49%)",
        "dark-blue": "hsl(249, 10%, 26%)",
        "grayish-blue": "hsl(246, 25%, 77%)",
        "outline-gray": "hsl(0, 0%, 87.1%)",
      },
      fontFamily: {
        "Poppins": ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}
