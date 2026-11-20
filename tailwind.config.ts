import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-roboto-condensed)', 'sans-serif'],
      },
      colors: {
        // Official Brand Color Palette
        primary: {
          DEFAULT: '#F44816',
          hover: '#D83B0E',
          dark: '#BD3208',
          light: '#FFF1EB',
        },
        secondary: {
          DEFAULT: '#0B82C3',
          hover: '#096BA2',
          dark: '#085783',
          light: '#E6F4FA',
        },
        heading: {
          DEFAULT: '#10243E',
          dark: '#0B192C',
          light: '#1B3557',
        },
        altBg: {
          DEFAULT: '#F5F7FA',
        },
        softOrange: {
          DEFAULT: '#FFF1EB',
        },
        footerBg: {
          DEFAULT: '#252525',
          dark: '#1C1C1C',
        },
        mainBg: {
          DEFAULT: '#FFFFFF',
        },

        // Semantic mapping for existing utility classes
        navy: {
          DEFAULT: '#10243E',
          dark: '#0B192C',
          light: '#1B3557',
          muted: '#2A4365',
          surface: '#F5F7FA',
        },
        royal: {
          DEFAULT: '#0B82C3',
          hover: '#096BA2',
          light: '#E6F4FA',
        },
        electric: {
          DEFAULT: '#0B82C3',
          hover: '#096BA2',
          light: '#E6F4FA',
        },
        brightRed: {
          DEFAULT: '#F44816',
          hover: '#D83B0E',
          light: '#FFF1EB',
        },
        brightYellow: {
          DEFAULT: '#F44816',
          hover: '#D83B0E',
          light: '#FFF1EB',
        },
        hvacGreen: {
          DEFAULT: '#F44816',
          hover: '#D83B0E',
          light: '#FFF1EB',
        },
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(16, 36, 62, 0.08)',
        'card-hover': '0 12px 30px -4px rgba(16, 36, 62, 0.16)',
        highlight: '0 0 25px rgba(11, 130, 195, 0.25)',
      },
      animation: {
        'marquee-continuous': 'continuousMarquee 38s linear infinite',
        marquee: 'continuousMarquee 38s linear infinite',
      },
      keyframes: {
        continuousMarquee: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
