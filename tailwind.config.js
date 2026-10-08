/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0a0f',
          950: '#050507',
          900: '#0a0a0f',
          800: '#121218',
          700: '#1a1a22',
          600: '#26262f',
        },
        brand: {
          50: '#eef4fd',
          100: '#d9e8fb',
          200: '#b3d1f7',
          300: '#80b2f0',
          400: '#4a8de8',
          500: '#1261e1',
          600: '#0e4db8',
          700: '#0b3c92',
          800: '#092f74',
          900: '#07245a',
          950: '#04162e',
        },
      },
      fontFamily: {
        sans: ['Centra', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Alfa Slab One"', 'ui-serif', 'serif'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(10,10,15,0) 0%, rgba(10,10,15,0.6) 70%, rgba(10,10,15,1) 100%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
