import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://elshafie.github.io/3d-portfolio/",
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: resolve("index.html"),
  //       404: resolve("public/404.html"),
  //     },
  //   },
  // },
});
