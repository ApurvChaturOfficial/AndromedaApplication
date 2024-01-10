import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        "registerType": 'autoUpdate',
        "name":"Andromeda Organisation",
        "short_name":"Andromeda",
        "display": "standalone",
        "background_color": "#22092C",
        "theme_color": "#22092C",
        "icons":[
          {
            src: "Business/Andromeda/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/Andromeda/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
    })
  ],
 
  resolve: {
    alias: {
      src: "/src",
    },
  },
})
