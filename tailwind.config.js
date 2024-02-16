/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    screens: {
      sm: "800px",
      md: "1200px",
      lg: "1530px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
      extend: {}
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        aspire: {
          primary: "#223FAB",
          secondary: "#6600CC",
          accent: "#22AB7A",
          neutral: "#E6E6E6",
          "base-100": "#F3F3F3",
          info: "#0078A8",
          success: "#539B4B",
          warning: "#B38000",
          error: "#D42142",
        },
        dark: {
          primary: "#223FAB",
          secondary: "#6600CC",
          accent: "#22AB7A",
          neutral: "#26292B",
          "base-100": "#181A1B",
          info: "#008BCC",
          success: "#59A527",
          warning: "#B38000",
          error: "#D42142",
        },
      },
    ],
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true,
  },
};
``;