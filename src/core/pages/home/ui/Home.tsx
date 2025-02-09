import React, { Suspense } from 'react';
import { tv } from 'tailwind-variants';
import { PizzaCatalog } from 'widgets/catalog';
import { PizzaCatalogControls } from 'widgets/catalog-controls';
import { PizzaFilter } from 'widgets/filter';

const home = tv(
   {
      slots: {
         title: 'text-4xl font-bold',
      },
      variants: {
         size: {
            initial: {
               title: 'mt-4 mb-2 text-2xl ',
            },
            medium: {
               title: 'mt-6 mb-3 text-3xl',
            },
            large: {
               title: 'mt-9 mb-6 text-4xl',
            },
         },
      },
   },
   {
      responsiveVariants: ['md', 'lg'],
   },
);

export const Home = () => {
   const { title } = home({
      size: {
         initial: 'initial',
         md: 'medium',
         lg: 'large',
      },
   });

   return (
      <div className="_container">
         <h1 className={title()}>All pizzas</h1>
         <PizzaCatalogControls />
         <PizzaFilter />
         <Suspense fallback={<div>Loading...</div>}>
            <PizzaCatalog />
         </Suspense>
      </div>
   );
};
