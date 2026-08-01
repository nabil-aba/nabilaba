// vite.config.js
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig(({ isSsrBuild }) => {
  return {
    plugins: [
      react(),
      {
        name: "ssg-preview-router",
        configurePreviewServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url.includes(".")) return next();
            const url = req.url.replace(/\/$/, "") || "/";

            if (url === "/") req.url = "/index.html";
            else if (url === "/id") req.url = "/id/index.html";
            else if (url.startsWith("/id/")) req.url = "/id/404.html";
            else req.url = "/404.html";

            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    esbuild: {
      drop: ["console", "debugger"],
    },
    build: {
      target: "esnext",
      rollupOptions: {
        output: {
          manualChunks: isSsrBuild
            ? undefined
            : {
                "vendor-react": [
                  "react",
                  "react-dom",
                  "react-router-dom",
                  "react-helmet-async",
                ],
                "vendor-chakra": [
                  "@chakra-ui/react",
                  "@emotion/react",
                  "@emotion/styled",
                ],
                "vendor-framer": ["framer-motion"],
                "vendor-icons": ["react-icons"],
              },
        },
      },
      chunkSizeWarningLimit: 600,
    },
  };
});
