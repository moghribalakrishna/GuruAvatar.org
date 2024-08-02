// File: tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E3A8A',
        'secondary': '#0D9488',
        'accent': '#F97316',
        'background': '#F3F4F6'
      },
    },
  },
  plugins: [],
}


// Primary: Deep Blue (#1E3A8A) - Represents trust and intelligence
// Secondary: Vibrant Teal (#0D9488) - Signifies growth and innovation
// Accent: Warm Orange (#F97316) - Conveys energy and creativity
// Background: Light Gray (#F3F4F6) - Ensures readability and clean aesthetics
