import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#161616',
        'bg-soft': '#1A1A1A',
        card: '#1F1F1F',
        'card-hover': '#262626',
        border: '#2E2E2E',
        'border-soft': '#262626',
        silver: '#C7C7C7',
        slate: '#94A3B8',
        accent: '#4ADE80',
        'accent-soft': 'rgba(74,222,128,0.10)',
        'accent-hover': '#6EE7B7',
        'accent-glow': 'rgba(74,222,128,0.22)',
        muted: '#8A8A8A',
        'muted-strong': '#B5B5B5',
        danger: '#EF4444',
        'danger-soft': 'rgba(239,68,68,0.08)',
        success: '#22C55E',
        'success-soft': 'rgba(34,197,94,0.1)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'scroll-x': 'scroll-x 40s linear infinite',
        'fade-in': 'fade-in 0.6s ease-out',
      },
      keyframes: {
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
