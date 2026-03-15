import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const vitePrerender = require('vite-plugin-prerender')
const PuppeteerRenderer = vitePrerender.PuppeteerRenderer

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/',
        '/about',
        '/services',
        '/modules',
        '/pricing',
        '/contact',
        '/security',
      ],
      renderer: new PuppeteerRenderer({ renderAfterTime: 2000 }),
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
