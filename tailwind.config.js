/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "rgba(255,255,255,0.5)",
          200: "#f9fafb",   //Main div background
          500: "#90959f"    //text color(E.g. Added on 10/03/2024)
        },
        purple: {
          600: "#5046e4",
          500: "#5249cf",
          300: "#e0e7ff"
        }
      }
    },
  },
  plugins: [],
}

