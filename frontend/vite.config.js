import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // GitHub Pages project URL:
  // https://farhan28-opp.github.io/House-price-prediction-lab/
  base: "/House-price-prediction-lab/",

  server: {
    port: 5173,
  },
});
