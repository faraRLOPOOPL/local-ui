import type { StorybookConfig } from '@storybook/react-vite';
import { resolve } from 'node:path';

const config: StorybookConfig = {
  stories: ['../packages/**/src/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: { name: '@storybook/react-vite', options: {} },
  viteFinal: async (config) => {
    // настраиваем алиасы для монорепы - резолвим в исходники, а не в dist
    if (!config.resolve) config.resolve = {}
    config.resolve.alias = {
      ...config.resolve.alias,
      '@realist-ui/button': resolve(import.meta.dirname, '../packages/button/src'),
      '@realist-ui/input': resolve(import.meta.dirname, '../packages/input/src'),
      '@realist-ui/select': resolve(import.meta.dirname, '../packages/select/src'),
      '@realist-ui/modal': resolve(import.meta.dirname, '../packages/modal/src'),
      '@realist-ui/switchtheme': resolve(import.meta.dirname, '../packages/switchtheme/src'),
      '@realist-ui/dataTable': resolve(import.meta.dirname, '../packages/dataTable/src'),
      '@realist-ui/tokens': resolve(import.meta.dirname, '../packages/tokens/src'),
    }

    return config
  }

}
export default config