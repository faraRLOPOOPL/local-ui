/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  prefix: 'rl-',
  corePlugins: { preflight: false },
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],

  theme: {
    extend: {
      colors: {
        neutral: {
          0:  'var(--rl-color-neutral-00)',
          20: 'var(--rl-color-neutral-20)',
          30: 'var(--rl-color-neutral-30)',
          50: 'var(--rl-color-neutral-50)'
        },
        indigo: { 70: 'var(--rl-color-indigo-70)' }
      }
    }
  },

  // только паттерны — чтобы purge ничего не вырезал
  safelist: [
    // каркас/форма/размеры корня свитча
    { pattern: /rl-(inline-flex|items-center|justify-center|w-12|h-6|rounded-full|origin-left|px-1)/ },
    // масштаб для xs/s/m
    { pattern: /rl-scale-(90|100|110)/ },
    // цвет иконок
    { pattern: /rl-text-neutral-(20)/ },
    // интеракции/состояния
    { pattern: /rl-opacity-60/ },
    { pattern: /rl-outline-none/, variants: ['focus', 'focus-visible'] }
  ]
};
