import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Build optimization
  build: {
    // Generate sourcemaps for production debugging (optional)
    sourcemap: false,

    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false, // Keep console.logs in production
        drop_debugger: false
      }
    },

    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['gsap', 'lenis']
        }
      }
    },

    // Asset handling
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    chunkSizeWarningLimit: 1000
  },

  // Server configuration
  server: {
    port: 3000,
    strictPort: false,
    open: true
  },

  // Preview server
  preview: {
    port: 4173,
    strictPort: false,
    open: true
  }
})
