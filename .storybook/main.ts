import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../packages/**/src/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: { name: '@storybook/react-vite', options: {} },
  viteFinal: async (config) => {
    // отключаем sourcemap'ы, чтобы не было предупреждений
    if (!config.build) config.build = {}
    config.build.sourcemap = false
    return config
  }
  
}
export default config