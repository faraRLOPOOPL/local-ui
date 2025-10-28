/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  prefix: 'rl-',
  corePlugins: { preflight: false },
  darkMode: ['class'],

  content: ['./src/**/*.{ts,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        rl: 'var(--rl-font-family)',
      },
      borderRadius: { rl: '12px' },
      colors: {
        neutral: {
          0:  'var(--rl-color-neutral-00)',
          5:  'var(--rl-color-neutral-05)',
          10: 'var(--rl-color-neutral-10)',
          15: 'var(--rl-color-neutral-15)',
          20: 'var(--rl-color-neutral-20)',
          40: 'var(--rl-color-neutral-40)',
          50: 'var(--rl-color-neutral-50)',
          60: 'var(--rl-color-neutral-60)',
          80: 'var(--rl-color-neutral-80)',
          90: 'var(--rl-color-neutral-90)'
        },
        electric: { 50: 'var(--rl-color-electric-50)' },
        error:    { 60: 'var(--rl-color-error-60)' }
      }
    }
  },

  safelist: [
    { pattern: /rl-placeholder-neutral-50/ },
    { pattern: /rl-text-(neutral-(60|80|90)|error-60)/ },
    { pattern: /rl-border-(neutral-20|error-60|electric-50)/ },
    { pattern: /rl-bg-neutral-0/ },
    { pattern: /rl-h-(8|10|12)/ },
    { pattern: /rl-px-(3|4)/ },
  ]
};
