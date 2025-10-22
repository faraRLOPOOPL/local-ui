/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  prefix: 'rl-',
  corePlugins: { preflight: false },
  darkMode: ['class'],
  content: [
    './src/**/*.{ts,tsx}',
    './packages/**/*.{ts,tsx}',
    './stories/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: { rl: '12px' },

      // Цвета мапятся на tokens.css
      colors: {
        neutral: {
          0:  'var(--rl-color-neutral-00)',
          5:  'var(--rl-color-neutral-05)',
          10: 'var(--rl-color-neutral-10)',
          15: 'var(--rl-color-neutral-15)',
          20: 'var(--rl-color-neutral-20)',
          30: 'var(--rl-color-neutral-30)',
          40: 'var(--rl-color-neutral-40)',
          50: 'var(--rl-color-neutral-50)',
          60: 'var(--rl-color-neutral-60)',
          70: 'var(--rl-color-neutral-70)',
          80: 'var(--rl-color-neutral-80)',
          90: 'var(--rl-color-neutral-90)',
        },
        indigo:  { 10:'var(--rl-color-indigo-10)', 20:'var(--rl-color-indigo-20)', 30:'var(--rl-color-indigo-30)', 40:'var(--rl-color-indigo-40)', 50:'var(--rl-color-indigo-50)', 60:'var(--rl-color-indigo-60)', 70:'var(--rl-color-indigo-70)', 80:'var(--rl-color-indigo-80)' },
        success: { 10:'var(--rl-color-success-10)', 20:'var(--rl-color-success-20)', 30:'var(--rl-color-success-30)', 40:'var(--rl-color-success-40)', 50:'var(--rl-color-success-50)', 60:'var(--rl-color-success-60)', 70:'var(--rl-color-success-70)', 80:'var(--rl-color-success-80)' },
        error:   { 10:'var(--rl-color-error-10)',   20:'var(--rl-color-error-20)',   30:'var(--rl-color-error-30)',   40:'var(--rl-color-error-40)',   50:'var(--rl-color-error-50)',   60:'var(--rl-color-error-60)',   70:'var(--rl-color-error-70)',   80:'var(--rl-color-error-80)' },
        electric:{ 10:'var(--rl-color-electric-10)',20:'var(--rl-color-electric-20)',30:'var(--rl-color-electric-30)',40:'var(--rl-color-electric-40)',50:'var(--rl-color-electric-50)',60:'var(--rl-color-electric-60)',70:'var(--rl-color-electric-70)',80:'var(--rl-color-electric-80)' },
        cyan:    { 10:'var(--rl-color-cyan-10)',    20:'var(--rl-color-cyan-20)',    30:'var(--rl-color-cyan-30)',    40:'var(--rl-color-cyan-40)',    50:'var(--rl-color-cyan-50)',    60:'var(--rl-color-cyan-60)',    70:'var(--rl-color-cyan-70)',    80:'var(--rl-color-cyan-80)' },
        staticwhite: { 10:'var(--rl-color-staticwhite-10)', 20:'var(--rl-color-staticwhite-20)' },
      },

      // Типографика из tokens.css: классы rl-text-...
      fontSize: {
        // Hero
        'hl1': ['var(--rl-font-size-hl1)', { lineHeight: 'var(--rl-line-hl1)' }],
        'hl2': ['var(--rl-font-size-hl2)', { lineHeight: 'var(--rl-line-hl2)' }],
        'hl3': ['var(--rl-font-size-hl3)', { lineHeight: 'var(--rl-line-hl3)' }],
        // Headings
        'h1':  ['var(--rl-font-size-h1)',  { lineHeight: 'var(--rl-line-h1)'  }],
        'h2':  ['var(--rl-font-size-h2)',  { lineHeight: 'var(--rl-line-h2)'  }],
        'h3':  ['var(--rl-font-size-h3)',  { lineHeight: 'var(--rl-line-h3)'  }],
        'h4':  ['var(--rl-font-size-h4)',  { lineHeight: 'var(--rl-line-h4)'  }],
        'h5':  ['var(--rl-font-size-h5)',  { lineHeight: 'var(--rl-line-h5)'  }],
        'h6':  ['var(--rl-font-size-h6)',  { lineHeight: 'var(--rl-line-h6)'  }],
        // Body
        'text1-l': ['var(--rl-font-size-text1-l)', { lineHeight: 'var(--rl-line-text1-l)' }],
        'text2-l': ['var(--rl-font-size-text2-l)', { lineHeight: 'var(--rl-line-text2-l)' }],
        'text1-s': ['var(--rl-font-size-text1-s)', { lineHeight: 'var(--rl-line-text1-s)' }],
        'text2-s': ['var(--rl-font-size-text2-s)', { lineHeight: 'var(--rl-line-text2-s)' }],
        // Subtitles
        'sub1': ['var(--rl-font-size-sub1)', { lineHeight: 'var(--rl-line-sub1)' }],
        'sub2': ['var(--rl-font-size-sub2)', { lineHeight: 'var(--rl-line-sub2)' }],
        'sub3': ['var(--rl-font-size-sub3)', { lineHeight: 'var(--rl-line-sub3)' }],
        // Captions
        'caption1': ['var(--rl-font-size-caption1)', { lineHeight: 'var(--rl-line-caption1)' }],
        'caption2': ['var(--rl-font-size-caption2)', { lineHeight: 'var(--rl-line-caption2)' }],
        // Buttons
        'btn1': ['var(--rl-font-size-button1)', { lineHeight: 'var(--rl-line-button1)' }],
        'btn2': ['var(--rl-font-size-button2)', { lineHeight: 'var(--rl-line-button2)' }],
      },
    },
  },

  safelist: [
    // цвета/состояния
    { pattern: /rl-bg-(indigo|success|error|neutral)-(0|5|10|15|20|30|40|50|60|70|80|90)/, variants: ['hover','active','disabled'] },
    { pattern: /rl-text-(staticwhite|neutral)-(10|20|30|40|50|60|70|80|90)/, variants: ['hover','active','disabled'] },
    { pattern: /rl-border-(indigo|neutral)-(0|5|10|15|20|30|40|50|60|70|80)/, variants: ['hover','active','disabled'] },

    // размеры кнопок
    { pattern: /rl-h-(8|10|12|14)/ },
    { pattern: /rl-px-(3|4|6|8)/ },
    { pattern: /rl-w-(8|10|12|14)/ },

    // шрифты из токенов (заголовки/тексты/кнопки)
    { pattern: /rl-text-(hl[1-3]|h[1-6]|text(1|2)-(l|s)|sub[1-3]|caption[12]|btn[12])/ },
  ],
};
