import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import path from 'node:path';

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    dts({ entryRoot: path.resolve(__dirname, 'src'), outDir: 'dist' })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'RealistUISelect',
      formats: ['es'],
      fileName: () => 'index.mjs'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'antd']
    },
    sourcemap: true,
    emptyOutDir: true
  }
});
