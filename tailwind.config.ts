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
          DEFAULT: '#061A40',
          dark: '#030E24',
          light: '#0A2355',
          muted: '#12336E',
          surface: '#F4F7FC',
        },
        royal: {
          DEFAULT: '#0066CC',
          hover: '#0052A3',
          light: '#EBF3FC',
        },
        electric: {
          DEFAULT: '#00BFFF',
          hover: '#009ED6',
          light: '#EAF8FF',
        },
        brightRed: {
          DEFAULT: '#E50914',
          hover: '#BD060F',
          light: '#FDE8E9',
        },
        brightYellow: {
          DEFAULT: '#FFE500',
          hover: '#E5CE00',
          light: '#FFFDE0',
        },
        hvacGreen: {
          DEFAULT: '#25843D',
          hover: '#1D6B31',
          light: '#E9F5ED',
        },
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(6, 26, 64, 0.08)',
        'card-hover': '0 12px 30px -4px rgba(6, 26, 64, 0.16)',
        highlight: '0 0 25px rgba(0, 191, 255, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
