import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
   base: 'flex items-center justify-center gap-1 font-semibold rounded-xl',
   variants: {
      theme: {
         primary:
            'border border-orange-500 text-orange-500  active:text-white active:bg-orange-500 active:border-orange-500',
         secondary: 'text-white bg-orange-500  active:bg-orange-600',
      },
   },
   defaultVariants: {
      theme: 'primary',
   },
});

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends ButtonVariants {
   children: ReactNode;
   className?: string;
}

export const Button: FC<ButtonProps> = ({ children, theme, className }) => {
   return (
      <button className={clsx(button({ theme }), className)}>{children}</button>
   );
};
