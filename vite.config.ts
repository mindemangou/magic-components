/// <reference types="vitest/config" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  test: {
    environment: 'jsdom',
    setupFiles: ['tests/setup.ts'],
    // globals: true,
    // restoreMocks: true,
    // clearMocks: true
  },
  
  build: {
    
    lib: {

      entry: ['src/magiccomponents.ts','src/magiccomponents-react.ts'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    
    rollupOptions: {
      external: [ 'react', 'react-dom/client'],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})

