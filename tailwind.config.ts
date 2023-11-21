import { type Config } from 'tailwindcss';
import { COLORS } from './src/constants';

const spacing = (base: number, limit: number, unit: string = 'px') => {
  const output = {};
  let n = 1;
  let value: number;

  do {
    value = base * n;
    output[value] = `${value}${unit}`;
    n++;
  } while (value <= limit);

  return output;
};

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      phone: '480px',
      tablet: '768px',
      desktop: '1024px',
    },
    fontFamily: {
      sans: ['Rubik','Arial','Roboto','sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      ...COLORS,
    },
    extend: {},
  },
  plugins: [],
};

export default config;
