import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Repo_IC_CD/', // Esto es para que funcione en GitHub Pages
  test: {
    globals: true, // para usar describe, it, expect sin importar
    environment: 'jsdom', // Me es necesario para poder testear componentes web
    setupFiles: './setupTest.js' //Este es para la configuraciones globales de vitest
  }
});
