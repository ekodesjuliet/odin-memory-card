import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: '/odin-memory-card/',
    server: {
        proxy: {
            '/api': {
                target: 'https://rickandmortyapi.com',
                changeOrigin: true,
            },
        },
    },
})
