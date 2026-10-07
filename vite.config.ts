import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/edumatecsifpicapir2026/',
  plugins: [react(), tailwindcss()],
})
