import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/odin-memory-card/",
  server: {
    proxy: {
      "/api": {
        target: "https://rickandmortyapi.com",
        changeOrigin: true,
      }
    }
  }
})
