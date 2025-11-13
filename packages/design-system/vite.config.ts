import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['src/**/*.stories.tsx', 'src/**/*.test.ts', 'src/**/*.test.tsx']
    })
  ],
  build: {
    lib: {
      entry: {
        index: 'src/index.ts',
        icons: 'src/icons/index.ts',
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`,
      name: 'RealistUIDesignSystem',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', '@phosphor-icons/react'],
      output: {
        preserveModules: false,
      },
    },
  },
});
