import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// GitHub Pages configuration (without obfuscation for faster builds)
export default defineConfig({
  base: '/YT_homepage/', // GitHub repo name
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  }
}) 