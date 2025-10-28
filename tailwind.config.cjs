module.exports = {
  // Используем shared preset из @realist-ui/tokens
  presets: [require('./packages/tokens/tailwind.preset.cjs')],

  // Content для Storybook - сканируем все компоненты и stories
  content: [
    './packages/*/src/**/*.{ts,tsx}',
    './.storybook/**/*.{ts,tsx}'
  ],
};
