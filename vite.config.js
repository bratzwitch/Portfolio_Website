import { defineConfig } from 'vite'

export default defineConfig({
  // Base URL for assets
  base: './',
  
  // Build configuration
  build: {
    // Output directory
    outDir: 'dist',
    
    // Generate sourcemaps for debugging
    sourcemap: true,
    
    // Minify the output
    minify: 'esbuild',
    
    // Asset handling
    assetsDir: 'assets',
    
    // Rollup options for advanced bundling
    rollupOptions: {
      output: {
        // Chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]'
          }
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  },
  
  // Development server configuration
  server: {
    port: 3000,
    open: true, // Automatically open browser
    host: true  // Allow external connections
  },
  
  // Preview server configuration
  preview: {
    port: 4173,
    open: true
  }
})
