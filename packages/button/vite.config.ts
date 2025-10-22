import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'node:path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react(), dts({ entryRoot: path.resolve(__dirname, 'src'), outDir: 'dist' })],
  css: {
    postcss: {
      plugins: [
        tailwindcss({ config: path.resolve(__dirname, '../../tailwind.config.cjs') }),
        autoprefixer()
      ]
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'RealistUIButton',
      formats: ['es', 'cjs'],
      fileName: (f) => (f === 'es' ? 'index.mjs' : 'index.cjs')
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime']
    },
    sourcemap: true,
    emptyOutDir: true
  }
});
