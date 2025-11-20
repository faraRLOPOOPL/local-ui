module.exports = {
  // Используем shared preset из @realist-ui/tokens
  presets: [require('@realist-ui/design-system/tailwind-preset')],

  // Только специфичные для этого пакета настройки
  content: ['./src/**/*.{ts,tsx}'],
};