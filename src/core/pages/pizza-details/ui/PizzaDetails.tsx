'use client';
import { Breadcrumb, Spin } from 'antd';
import { tv } from 'tailwind-variants';
import { useGetPizzaByIdQuery, useGetPizzasQuery } from 'entities/pizza/api';
import { PizzaDetailsWidget } from './sections/pizza-details-widget/ui/PizzaDetailsWidget';
import { RecommendationsCarousel } from './sections/recommendations-carousel/ui/RecommendationsCarousel';

const pizzaDetails = tv(
   {
      slots: {
         container: '_container',
      },
      variants: {
         responsive: {
            initial: {
               container: 'py-4',
            },
            medium: {
               container: 'py-6',
            },
            large: {
               container: 'py-10',
            },
         },
      },
   },

   {
      responsiveVariants: ['md', 'lg'],
   },
);

export const PizzaDetailsPage = ({ id }: { id: number }) => {
   const { container } = pizzaDetails({
      responsive: { initial: 'initial', md: 'medium', lg: 'large' },
   });
   const { data: pizzas } = useGetPizzasQuery();
   const { data: pizza } = useGetPizzaByIdQuery({ id });

   return (
      <div className={container()}>
         {pizza ? (
            <>
               <Breadcrumb
                  items={[
                     {
                        title: 'Main',
                        href: '/home',
                     },
                     {
                        title: 'Pizzas',
                     },
                     {
                        title: ':title',
                     },
                  ]}
                  params={{ title: pizza?.title }}
               />
               <PizzaDetailsWidget pizza={pizza} />
               <RecommendationsCarousel pizzas={pizzas} />
            </>
         ) : (
            <Spin size="large" className="mx-auto w-full !py-4" />
         )}
      </div>
   );
};
