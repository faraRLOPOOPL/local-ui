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
        neutral: { 0:'var(--rl-color-neutral-00)', 5:'var(--rl-color-neutral-05)', 10:'var(--rl-color-neutral-10)', 15:'var(--rl-color-neutral-15)', 20:'var(--rl-color-neutral-20)', 40:'var(--rl-color-neutral-40)', 50:'var(--rl-color-neutral-50)', 90:'var(--rl-color-neutral-90)' },
        indigo:  { 10:'var(--rl-color-indigo-10)', 60:'var(--rl-color-indigo-60)', 70:'var(--rl-color-indigo-70)', 80:'var(--rl-color-indigo-80)' },
        success: { 60:'var(--rl-color-success-60)', 70:'var(--rl-color-success-70)', 80:'var(--rl-color-success-80)' },
        error:   { 60:'var(--rl-color-error-60)',   70:'var(--rl-color-error-70)',   80:'var(--rl-color-error-80)' },
        staticwhite: { 10:'var(--rl-color-staticwhite-10)' }
      },
      fontSize: {
        btn1: ['var(--rl-font-size-button1)', { lineHeight: 'var(--rl-line-button1)' }],
        btn2: ['var(--rl-font-size-button2)', { lineHeight: 'var(--rl-line-button2)' }]
      }
    }
  },
  safelist: [
    { pattern: /rl-text-(btn1|btn2)/ },
    { pattern: /rl-bg-(indigo|success|error|neutral)-(0|5|10|15|20|40|50|60|70|80|90)/, variants: ['hover','active','disabled'] },
    { pattern: /rl-text-(staticwhite|neutral)-(10|40|50|90)/, variants: ['hover','active','disabled'] },
    { pattern: /rl-border-(indigo|neutral)-(10|20|40|50|60)/, variants: ['hover','active','disabled'] }
  ]
};
