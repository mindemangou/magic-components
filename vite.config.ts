/// <reference types="vitest/config" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom'
  },
  build: {
    lib: {
      entry: {
        'my-lib': resolve(__dirname, 'src/bridgejs.ts'),
        'brigeprovider': resolve(__dirname, 'src/BridgeProvider.tsx'),
      },
      name: 'MyLib',
    },
    rollupOptions: {

      external: ['react'],
     
    }
   
  }
})
/*  server: {
    cors: {
      origin: 'http://localhost:8000',
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: ['/src/bridgejs.ts','/src/globaleElement.ts'],
    },
  }, */

  /*  rollupOptions: {

      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    }, */