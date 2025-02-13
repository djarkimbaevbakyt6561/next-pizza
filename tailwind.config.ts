import { withTV } from 'tailwind-variants/transformer';
import type { Config } from 'tailwindcss';

export default withTV({
   content: [
      './src/core/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         colors: {
            textColor: '#373737',
            bgColorButton: '#FE5F00',
         },
         animation: {
            fadeIn: 'fadeIn 0.16s ease-in-out',
         },
         keyframes: {
            fadeIn: {
               '0%': { transform: 'scale(0.98)' },
               '100%': { transform: 'scale(1)' },
            },
         },
      },
   },
   plugins: [],
}) satisfies Config;
