/** @type {import('tailwindcss').Config} */
import svgr from 'vite-plugin-svgr';
export default {
  content: [
    "/index.html",
    "../src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#40484D', // Add your custom color here
        secundary: '#121922', // Add your custom color here
        accent: '#847D81', // Add your custom color here
        neutralsligth: '#F3F4F8', // Add your custom color here
        degradado: 'linear-gradient(90deg, #486488 0%, #121922 100%)', // Custom gradient
      },
    },
  },
  plugins: [svgr()],
}
