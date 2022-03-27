const defaultTheme = require("tailwindcss/defaultTheme");

const spacing = {
  0: "0px",
  0.75: "12px",
  1: "16px",
  1.5: "24px",
  2: "36px",
  3: "48px",
  4: "64px",
  6: "96px",
  8: "128px",
  // Input width
  12: "192px",
  // Newsletter content width
  39: "624px",
  // Section content width
  59: "948px",
};

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minWidth: spacing,
      maxWidth: spacing,
    },
    spacing: spacing,
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      regular: 400,
      medium: 500,
    },
    fontSize: {
      "sm": ["14px", { lineHeight: "22px" /* 1.571em */ }],
      "base": ["16px", { lineHeight: "24px" /* 1.5 */ }],
      "xl": ["20px", { lineHeight: "30px" /* 1.666em */ }],
      "2xl": ["24px", { lineHeight: "40px" /* 1.666em */ }],
      "3xl": ["32px", { lineHeight: "48px" /* 1.4em */ }],
      "4xl": ["40px", { lineHeight: "56px" /* 1.4em */ }],
      "5xl": ["48px", { lineHeight: "64px" /* 1.333em */ }],
    },
    colors: {
      "transparent": "transparent",

      // Background + text on background + border
      "surface-1": "#ffffff",
      "surface-2": "#f1f0f0",
      "surface-3": "#dddddd",
      "surface-4": "#c5c5c5",
      "on-surface-1": "#231e1e",
      "surface-border": "#F1F0F0",

      // Contrast background + text on contrast background
      "contrast-surface-1": "#231e1e",
      "on-contrast-surface-1": "#F1F0F0",
      "on-contrast-surface-2": "#989898",

      // Primary color + text on primary color
      "primary": "#dac2f2",
      "primary-2": "#bfa8d6",
      "on-primary": "#231E1E",

      // Secondary color + text on secondary color
      "success": "#5edc4b",
      "on-success": "#ffffff",

      // Error color + text on error color
      "error": "#db2c2c",
      "on-error": "#ffffff",
    },
  },
  plugins: [],
};
