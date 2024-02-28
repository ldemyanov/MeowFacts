/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    import('flowbite/plugin'),
  ],
}