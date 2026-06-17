module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      colors: {
        "primary-green": "#5BB336",
        "deep-green": "#428C27",
        "dark-green": "#1E3310",
        "transition-green": "#4A8222",
        "sage": "#EBF3E6",
        "tech-white": "#F5F6F5",
        "charcoal": "#333333",
        "premium-black": "#0E0E0E",
        "premium-dark": "#151515",
        "premium-gray": "#1C1C1C",
        "premium-line": "#2A2A2A",
        "premium-muted": "#9CA39A",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "float-slow": "floatSlow 7s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
      },
    },
  },
  plugins: [],
}
