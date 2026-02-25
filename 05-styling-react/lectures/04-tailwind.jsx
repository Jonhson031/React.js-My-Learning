// ? Tailwind css
// - npm install tailwindcss @tailwindcss/vite

// If there is code ERESOLVE
// npm error ERESOLVE unable to resolve dependency tree:

// We need to downgade to stable versions of React and Tailwind css:
// npm install react@18 react-dom@18
// npm install -D tailwindcss@3 postcss@8 autoprefixer@10

// https://v3.tailwindcss.com/docs/installation

// ? For tailwind v3:
// tailwind.config:
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// index.css: v
// @tailwind base;
// @tailwind components;
// @tailwind utilities;