import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/contact': {
        target: 'https://crm-be.securedapp.io',
        changeOrigin: true,
        secure: true,
        rewrite: (path: string) => path.replace(/^\/api\/contact/, '/api/public/project-inquiry'),
      },
    },
  },
})



