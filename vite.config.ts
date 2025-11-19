import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Para GitHub Pages
  server: {
    host: true, // Permite acceso desde la red local
    port: 5173,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
