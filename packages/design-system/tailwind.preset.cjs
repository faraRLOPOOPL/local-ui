/**
 * Shared Tailwind preset для @local-ui/design-system
 * Single source of truth для всех дизайн-токенов
 */
module.exports = {
  important: true,
  prefix: 'rl-',
  corePlugins: { preflight: false },
  darkMode: ['class'],

  theme: {
    // Полностью переопределяем цвета (убираем дефолтные Tailwind)
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      // Neutral
      neutral: {
        0: 'var(--rl-color-neutral-00)',
        5: 'var(--rl-color-neutral-05)',
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

      // Indigo (brand)
      indigo: {
        10: 'var(--rl-color-indigo-10)',
        20: 'var(--rl-color-indigo-20)',
        30: 'var(--rl-color-indigo-30)',
        40: 'var(--rl-color-indigo-40)',
        50: 'var(--rl-color-indigo-50)',
        60: 'var(--rl-color-indigo-60)',
        70: 'var(--rl-color-indigo-70)',
        80: 'var(--rl-color-indigo-80)',
      },

      // Electric
      electric: {
        10: 'var(--rl-color-electric-10)',
        20: 'var(--rl-color-electric-20)',
        30: 'var(--rl-color-electric-30)',
        40: 'var(--rl-color-electric-40)',
        50: 'var(--rl-color-electric-50)',
        60: 'var(--rl-color-electric-60)',
        70: 'var(--rl-color-electric-70)',
        80: 'var(--rl-color-electric-80)',
      },

      // Cyan
      cyan: {
        10: 'var(--rl-color-cyan-10)',
        20: 'var(--rl-color-cyan-20)',
        30: 'var(--rl-color-cyan-30)',
        40: 'var(--rl-color-cyan-40)',
        50: 'var(--rl-color-cyan-50)',
        60: 'var(--rl-color-cyan-60)',
        70: 'var(--rl-color-cyan-70)',
        80: 'var(--rl-color-cyan-80)',
      },

      // Error
      error: {
        10: 'var(--rl-color-error-10)',
        20: 'var(--rl-color-error-20)',
        30: 'var(--rl-color-error-30)',
        40: 'var(--rl-color-error-40)',
        50: 'var(--rl-color-error-50)',
        60: 'var(--rl-color-error-60)',
        70: 'var(--rl-color-error-70)',
        80: 'var(--rl-color-error-80)',
      },

      // Success
      success: {
        10: 'var(--rl-color-success-10)',
        20: 'var(--rl-color-success-20)',
        30: 'var(--rl-color-success-30)',
        40: 'var(--rl-color-success-40)',
        50: 'var(--rl-color-success-50)',
        60: 'var(--rl-color-success-60)',
        70: 'var(--rl-color-success-70)',
        80: 'var(--rl-color-success-80)',
      },

      // Warning
      warning: {
        10: 'var(--rl-color-warning-10)',
        20: 'var(--rl-color-warning-20)',
        30: 'var(--rl-color-warning-30)',
        40: 'var(--rl-color-warning-40)',
        50: 'var(--rl-color-warning-50)',
        60: 'var(--rl-color-warning-60)',
        70: 'var(--rl-color-warning-70)',
        80: 'var(--rl-color-warning-80)',
      },

      // Attention
      attention: {
        10: 'var(--rl-color-attention-10)',
        20: 'var(--rl-color-attention-20)',
        30: 'var(--rl-color-attention-30)',
        40: 'var(--rl-color-attention-40)',
        50: 'var(--rl-color-attention-50)',
        60: 'var(--rl-color-attention-60)',
        70: 'var(--rl-color-attention-70)',
        80: 'var(--rl-color-attention-80)',
      },

      // Static
      staticwhite: {
        10: 'var(--rl-color-staticwhite-10)',
        20: 'var(--rl-color-staticwhite-20)',
      },

      // Modal backgrounds
      modalbkgw: {
        10: 'var(--rl-color-modalbkgw-10)',
      },

      modalbkge: {
        10: 'var(--rl-color-modalbkge-10)',
      },

      // Disable
      disable: {
        bkg: 'var(--rl-color-disable-bkg)',
        text: 'var(--rl-color-disable)',
      },

      // Opacity
      opacity: {
        '05': 'var(--rl-color-opacity-05)',
        10: 'var(--rl-color-opacity-10)',
        20: 'var(--rl-color-opacity-20)',
        30: 'var(--rl-color-opacity-30)',
        40: 'var(--rl-color-opacity-40)',
        50: 'var(--rl-color-opacity-50)',
        60: 'var(--rl-color-opacity-60)',
        70: 'var(--rl-color-opacity-70)',
        80: 'var(--rl-color-opacity-80)',
        90: 'var(--rl-color-opacity-90)',
      },

      // White
      white: 'rgb(255, 255, 255)',
    },

    extend: {
      fontFamily: {
        rubik: 'var(--rl-font)',
      },
      borderRadius: {
        rl: '12px',
        '4': 'var(--rl-radius-4)',
        '6': 'var(--rl-radius-6)',
        '8': 'var(--rl-radius-8)',
        '10': 'var(--rl-radius-10)',
        '12': 'var(--rl-radius-12)',
        '14': 'var(--rl-radius-14)',
        '24': 'var(--rl-radius-24)',
        '32': 'var(--rl-radius-32)',
      },
      fontSize: {
        // Headlines
        hl1: ['var(--rl-font-size-hl1)', { lineHeight: 'var(--rl-line-hl1)' }],
        hl2: ['var(--rl-font-size-hl2)', { lineHeight: 'var(--rl-line-hl2)' }],
        hl3: ['var(--rl-font-size-hl3)', { lineHeight: 'var(--rl-line-hl3)' }],

        // Headings
        h1: ['var(--rl-font-size-h1)', { lineHeight: 'var(--rl-line-h1)' }],
        h2: ['var(--rl-font-size-h2)', { lineHeight: 'var(--rl-line-h2)' }],
        h3: ['var(--rl-font-size-h3)', { lineHeight: 'var(--rl-line-h3)' }],
        h4: ['var(--rl-font-size-h4)', { lineHeight: 'var(--rl-line-h4)' }],
        h5: ['var(--rl-font-size-h5)', { lineHeight: 'var(--rl-line-h5)' }],
        h6: ['var(--rl-font-size-h6)', { lineHeight: 'var(--rl-line-h6)' }],

        // Body text
        'text1-l': ['var(--rl-font-size-text1-l)', { lineHeight: 'var(--rl-line-text1-l)' }],
        'text2-l': ['var(--rl-font-size-text2-l)', { lineHeight: 'var(--rl-line-text2-l)' }],
        'text1-s': ['var(--rl-font-size-text1-s)', { lineHeight: 'var(--rl-line-text1-s)' }],
        'text2-s': ['var(--rl-font-size-text2-s)', { lineHeight: 'var(--rl-line-text2-s)' }],

        // Subtitles
        sub1: ['var(--rl-font-size-sub1)', { lineHeight: 'var(--rl-line-sub1)' }],
        sub2: ['var(--rl-font-size-sub2)', { lineHeight: 'var(--rl-line-sub2)' }],
        sub3: ['var(--rl-font-size-sub3)', { lineHeight: 'var(--rl-line-sub3)' }],

        // Captions
        caption1: ['var(--rl-font-size-caption1)', { lineHeight: 'var(--rl-line-caption1)' }],
        caption2: ['var(--rl-font-size-caption2)', { lineHeight: 'var(--rl-line-caption2)' }],

        // Buttons
        btn1: ['var(--rl-font-size-button1)', { lineHeight: 'var(--rl-line-button1)' }],
        btn2: ['var(--rl-font-size-button2)', { lineHeight: 'var(--rl-line-button2)' }],
      },
    },
  },
};
