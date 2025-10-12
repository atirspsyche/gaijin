// Gaijin Brand Colors
// Japanese-inspired color palette for authentic restaurant experience

export const colors = {
  // Primary Brand Colors
  reishyRed: "#61072D", // Deep burgundy red - for accents and highlights
  kushiBlue: "#0D3862", // Dark navy blue - for depth and sophistication
  rabataFlame: "#F37043", // Vibrant orange-red - for energy and warmth
  sage: "#5F8683", // Muted teal-green - for natural harmony
  zenShadow: "#CEC1A7", // Warm beige-gray - for subtle backgrounds
  zenLight: "#E4DCCA", // Light cream - for main backgrounds

  // Semantic Color Mappings (for easier component usage)
  primary: "#61072D", // Reishy Red
  secondary: "#0D3862", // Kushi Blue
  accent: "#F37043", // Rabata Flame
  neutral: "#5F8683", // Sage
  background: "#E4DCCA", // Zen Light
  backgroundDark: "#CEC1A7", // Zen Shadow
};

// CSS Custom Properties for use in stylesheets
export const cssVariables = {
  "--color-reishy-red": "#61072D",
  "--color-kushi-blue": "#0D3862",
  "--color-rabata-flame": "#F37043",
  "--color-sage": "#5F8683",
  "--color-zen-shadow": "#CEC1A7",
  "--color-zen-light": "#E4DCCA",
};

// Tailwind CSS color configuration (for tailwind.config.js)
export const tailwindColors = {
  "reishy-red": "#61072D",
  "kushi-blue": "#0D3862",
  "rabata-flame": "#F37043",
  sage: "#5F8683",
  "zen-shadow": "#CEC1A7",
  "zen-light": "#E4DCCA",
};

export default colors;
