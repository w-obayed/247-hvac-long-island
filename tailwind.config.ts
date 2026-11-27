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
        navy: {
          DEFAULT: '#003399',
          dark: '#002266',
          light: '#0055E7',
          muted: '#0055E7',
          surface: '#EAF4FF',
        },
        royal: {
          DEFAULT: '#006BFF',
          hover: '#0055E7',
          light: '#EAF4FF',
        },
        electric: {
          DEFAULT: '#00BFFF',
          hover: '#009ED6',
          light: '#EAF4FF',
        },
        brightRed: {
          DEFAULT: '#E60012',
          hover: '#BD000F',
          light: '#FDE8E9',
        },
        brightYellow: {
          DEFAULT: '#FFE000',
          hover: '#E5C900',
          light: '#FFFDE0',
        },
        hvacGreen: {
          DEFAULT: '#25843D',
          hover: '#1D6B31',
          light: '#E9F5ED',
        },
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(0, 51, 153, 0.08)',
        'card-hover': '0 12px 30px -4px rgba(0, 51, 153, 0.16)',
        highlight: '0 0 25px rgba(0, 191, 255, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
