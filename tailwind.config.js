import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    maxWidth: {
      container: '996px',
    },
    colors: {
      ...colors,

      green: {
        100: '#50B2C0',
        200: '#255D6A',
        300: '#0A313C',
      },

      purple: {
        100: '#8381D9',
        200: '#2A2879',
      },

      gray: {
        100: '#F8F9FC',
        200: '#E6E8F2',
        300: '#D1D6E4',
        400: '#8D95AF',
        500: '#303F73',
        600: '#252D4A',
        700: '#181C2A',
        800: '#0E1116',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-vertical': `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)`,
        'gradient-horizontal': `linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)`,
      },
    },
    keyframes: {
      overlayShow: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      contentShow: {
        from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
        to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
      },
      openDrawer: {
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(0%)' },
      },
    },
    animation: {
      overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      openDrawer: 'openDrawer 450ms cubic-bezier(0.16, 1, 0.3, 1)',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
