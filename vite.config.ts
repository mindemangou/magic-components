/// <reference types="vitest/config" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom' 
   },
  
  build: {
    lib: {
      entry: ['src/magiccomponents.ts'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      name: 'magiccomponents',
    },
    rollupOptions: {
      external: [
        '@mindemangou/magiccomponents-react'
      ],
      output: {
        globals: {
          '@mindemangou/magiccomponents-react': 'MagiccomponentsReact'
        },
      },
    }
  }
})
