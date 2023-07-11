/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '360px', 
        'large-desktop': '1580px'
      },
      keyframes: {
        slideIn: {
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(0)'}
        },
      },
      animation: {
        headerIn: 'slideIn 0.5s ease-out',
      }
    },
  },  
  plugins: [],
}