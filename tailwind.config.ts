import scrollbar from 'tailwind-scrollbar';
import { withTV } from 'tailwind-variants/transformer';

export default withTV({
   content: [
      './src/core/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         animation: {
            zoomIn: 'zoomIn 0.16s ease-in-out',
            fadeIn: 'fadeIn 0.16s ease-in',
         },
         keyframes: {
            zoomIn: {
               '0%': { transform: 'scale(0.98)' },
               '100%': { transform: 'scale(1)' },
            },
            fadeIn: {
               '0%': { opacity: '0.5' },
               '100%': { opacity: '1' },
            },
         },
      },
   },
   plugins: [
      scrollbar({
         nocompatible: true,
         preferredStrategy: 'pseudoelements',
      }),
   ],
});
