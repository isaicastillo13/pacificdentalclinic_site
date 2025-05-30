/** @type {import('tailwindcss').Config} */
import svgr from "vite-plugin-svgr";

export default {
  content: ["/index.html", "../src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        'display': '108px',  // Display 108px con una línea de altura de 1.2
        'h2': ['54px', '1.3'],        // H2 54px con una línea de altura de 1.3
        'p': ['16px', '1.5'],         // P 16px con una línea de altura de 1.5
      }
    },
  },
  plugins: [svgr()],
};
