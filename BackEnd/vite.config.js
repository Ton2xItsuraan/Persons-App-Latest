import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      "/users": "http://localhost:3000",
      "/persons": "http://localhost:3000",
    }
  }
})
