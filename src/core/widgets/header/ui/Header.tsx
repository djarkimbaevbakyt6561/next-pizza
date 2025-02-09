import Image from 'next/image';
import React from 'react';
import { tv } from 'tailwind-variants';
import { pizzaLogo } from 'shared/assets';
import { HeaderActions } from './header-actions/HeaderActions';

const header = tv(
   {
      slots: {
         container: '_container grid items-center gap-3',
         logoWrapper: 'flex gap-3 items-center',
         title: 'uppercase font-black',
         subtitle: 'text-gray-500 leading-5',
         logoImage: 'w-9 h-9',
      },
      variants: {
         size: {
            initial: {
               container: 'grid-cols-[auto_1fr_auto] py-5',
               title: 'text-xl',
               subtitle: 'text-sm',
            },
            medium: {
               container: 'grid-cols-[auto_1fr_auto_auto] py-10',
               title: 'text-2xl',
               subtitle: 'text-base',
            },
         },
      },
   },
   {
      responsiveVariants: ['md'],
   },
);

export const Header = () => {
   const { container, logoImage, logoWrapper, title, subtitle } = header({
      size: {
         initial: 'initial',
         md: 'medium',
      },
   });
   return (
      <div className={container()}>
         <div className={logoWrapper()}>
            <Image
               className={logoImage()}
               src={pizzaLogo}
               alt="Pizza Logo Icon"
            />
            <div>
               <h3 className={title()}>Next Pizza</h3>
               <p className={subtitle()}>Next level pizza taste.</p>
            </div>
         </div>
         <HeaderActions />
      </div>
   );
};
