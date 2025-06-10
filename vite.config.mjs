import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // para usar describe, it, expect sin importar
    environment: "jsdom", // Me es necesario para poder testear componentes web
    setupFiles: "src/__test__/App.test.jsx", //Si tuviesde configuraciones globales
  },
  build: {
    outDir: "dist",
  },
});
