import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin(), dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es','cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
      name: 'RealistUIButton',
    },
    rollupOptions: {
      // ⬇️ это критично
      external: ['react', 'react-dom', 'react/jsx-runtime', 'antd'],
    },
  },
});
