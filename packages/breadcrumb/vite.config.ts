import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import cssInject from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    react(),
    cssInject(),
    dts({
      rollupTypes: true,
      exclude: ['**/*.stories.tsx', '**/*.test.tsx', 'node_modules/**'],
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: () => 'index.mjs',
      name: 'RealistUIBreadcrumb',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'antd',
        '@realist-ui/design-system',
        '@realist-ui/design-system/icons',
      ],
    },
  },
});
