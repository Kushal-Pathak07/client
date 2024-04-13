import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Output directory for production build
  },
  server: {
    proxy: {
      "/api": {
        target: "https://server-oa8d.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove the "/api" prefix
      },
    },
  },
});
