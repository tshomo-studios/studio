import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  integrations: [react()],
  output: "static",
  // Update this to your actual GitHub Pages URL: https://<username>.github.io
  site: "https://tshomo.njmtech.co.za",
  server: {
    port: 8080,
    host: true,
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
});
