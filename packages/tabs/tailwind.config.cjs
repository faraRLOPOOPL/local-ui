module.exports = {
  // Используем shared preset из @realist-ui/tokens
  presets: [require('@realist-ui/tokens/tailwind')],

  // Только специфичные для этого пакета настройки
  content: ['./src/**/*.{ts,tsx}'],
};