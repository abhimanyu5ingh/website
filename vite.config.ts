import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' // <-- You added this plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr() // <-- And you told Vite to use it here
  ],
})