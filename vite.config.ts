import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  mode: 'production',
  build: {
    target: 'esnext',
    outDir: './dist',
    lib: {
      entry: './src/index.ts',
      formats:['es'],
      fileName: 'index',
    },
  },
})
