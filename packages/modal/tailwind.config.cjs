/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  prefix: 'rl-',
  corePlugins: { preflight: false },
  darkMode: ['class'],

  content: ['./src/**/*.{ts,tsx}'],

  theme: {
    extend: {
      borderRadius: { rl: '12px' },
      colors: {
        neutral: {
          0:  'var(--rl-color-neutral-00)',
          5:  'var(--rl-color-neutral-05)',
          20: 'var(--rl-color-neutral-20)',
          30: 'var(--rl-color-neutral-30)',
          60: 'var(--rl-color-neutral-60)',
          80: 'var(--rl-color-neutral-80)'
        },
        electric: { 50: 'var(--rl-color-electric-50)' }
      }
    }
  },

  safelist: [
    'rl-text-neutral-80', 'rl-text-center', 'rl-text-xl', 'rl-font-semibold',
    'rl-rounded-rl', 'rl-bg-neutral-5', 'rl-border', 'rl-border-solid', 'rl-border-neutral-20',
    'rl-shadow-none'
  ]
};
