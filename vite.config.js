import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
    server: {
    allowedHosts: [
      'hosea-retroflex-frumpishly.ngrok-free.dev'
    ]
  }
})
