import { defineConfig } from "@tailwindcss/postcss";

export default defineConfig({
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
});
