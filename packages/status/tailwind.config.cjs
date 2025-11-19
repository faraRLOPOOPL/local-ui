module.exports = {
  // Используем shared preset из @realist-ui/design-system
  presets: [require('@realist-ui/design-system/tailwind')],

  // Только специфичные для этого пакета настройки
  content: ['./src/**/*.{ts,tsx}'],
};
