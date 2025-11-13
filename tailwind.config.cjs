module.exports = {
  // Используем shared preset из @realist-ui/design-system
  presets: [require('./packages/design-system/tailwind.preset.cjs')],

  // Content для Storybook - сканируем все компоненты и stories
  content: [
    './packages/*/src/**/*.{ts,tsx}',
    './.storybook/**/*.{ts,tsx}'
  ],
};
