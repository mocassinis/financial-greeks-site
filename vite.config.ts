import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// While the site is served at https://<user>.github.io/<repo>/, every asset
// path needs to be prefixed. When the custom domain points at the apex and
// the site lives at the root, change `base` back to "/" (or just delete it).
export default defineConfig({
  base: "/financial-greeks-site/",
  plugins: [
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
