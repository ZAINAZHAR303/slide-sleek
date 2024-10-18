/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'typing': 'typing 3.5s steps(30) 1s 1 normal both, blink 0.75s step-end infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
          '100%': { 'border-color': 'black' },
        },
      },
      width: {
        'calc-screen-360': 'calc(100vw - 300px)', // Define the custom width utility
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-blue": "#5044EB",
        "custom-gray": "#636D78"
      },
    },
  },
  plugins: [
    // If you want to use custom utilities like text-shadow
    // require('tailwindcss-textshadow')
  ],
};

// Remove commented code if not needed or activate plugins/utilities
