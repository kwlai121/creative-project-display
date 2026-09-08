import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => ({
  // GitHub Pages serves this app from a /creative-project-display/ subpath, so
  // production builds default to that base. Netlify (and any host serving
  // from the domain root) overrides it via VITE_BASE_PATH — see netlify.toml.
  base: process.env.VITE_BASE_PATH ?? (command === "build" ? "/creative-project-display/" : "/"),
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
