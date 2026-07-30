// vite.config.js
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "vendor-framer";
            if (id.includes("@chakra-ui")) return "vendor-chakra";
            if (id.includes("@emotion")) return "vendor-emotion";
            if (id.includes("react-icons")) return "vendor-icons";
            if (id.includes("react-dom") || id.includes("react/"))
              return "vendor-react";
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1500,
  },
});
