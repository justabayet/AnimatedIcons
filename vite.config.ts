import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import dts from 'vite-plugin-dts'
import { glob } from 'glob'

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['lib'] })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        glob.sync('lib/**/*.{ts,tsx}').map(file => [
          relative(
            'lib',
            file.slice(0, file.length - extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        entryFileNames: '[name].js',
      }
    }
  }
})