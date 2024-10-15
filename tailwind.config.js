/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-blue": "#5044EB",
        "custom-gray": "#636D78"
      },
    },
  },
  plugins: [],
};



// extend: {
//   // Add custom colors
//   colors: {
//     'custom-blue': '#1fb6ff',
//     'custom-purple': '#7e5bef',
//   },
//   // Add custom font sizes
//   fontSize: {
//     'xxs': '.625rem',
//   },
//   // Add custom spacing
//   spacing: {
//     '72': '18rem',
//     '84': '21rem',
//     '96': '24rem',
//   },
//   // Add custom classes
//   textShadow: {
//     'default': '0 2px 5px rgba(0, 0, 0, 0.5)',
//     'lg': '0 2px 10px rgba(0, 0, 0, 0.5)',
//   },
// },
// },