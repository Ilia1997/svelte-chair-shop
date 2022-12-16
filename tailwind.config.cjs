/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "100%",
        lg: "1180px",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "shop-pink": "#FB2E86",
        "shop-off-navy-blue": "#3F509E",
        "shop-navy-blue": "#151875",
        "shop-purple": "#7E33E0",
        "shop-purple-light": "#A9ACC6",
        "shop-off-purple": "#9F63B5",
        "shop-off-purple-white": "#F2F0FF",
        "shop-red": "#FB2448",
        "shop-sky-blue": "#F3F9FF",
        "shop-blue": "#2F1AC4",
        "shop-off-blue": "#151875",
        "shop-pantone": "#E0D3F5",
        "shop-green": "#08D15F",
        "shop-sub-text": "#8A8FB9",
      },
      boxShadow: {
        base: "0px 8px 40px rgba(49, 32, 138, 0.05)",
      },
      dropShadow: {
        base: "0px 8px 40px rgba(49, 32, 138, 0.05)",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
