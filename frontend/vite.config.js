import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  server: {
    host: true,
    port: 5173
  },
  preview: {
    host: true,
    port: 4173,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'reporay.yashraj.tech',
      '.yashraj.tech' // Allow all subdomains
    ]
  }
})
