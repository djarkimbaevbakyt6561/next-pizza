'use client';
import { Breadcrumb, Spin } from 'antd';
import { tv } from 'tailwind-variants';
import { getCartPizzas } from 'entities/cart';
import { useGetPizzaByIdQuery, useGetPizzasQuery } from 'entities/pizza/api';
import { useAppSelector } from 'shared/store/redux';
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

export const PizzaDetailsPage = ({ id }: { id: string }) => {
   const { container } = pizzaDetails({
      responsive: { initial: 'initial', md: 'medium', lg: 'large' },
   });
   const cartPizzas = useAppSelector(getCartPizzas);

   const { data: pizzas } = useGetPizzasQuery();
   const { data: pizza } = useGetPizzaByIdQuery(id);

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
               <PizzaDetailsWidget pizza={pizza} cartPizzas={cartPizzas} />
               <RecommendationsCarousel
                  pizzas={pizzas}
                  cartPizzas={cartPizzas}
               />
            </>
         ) : (
            <Spin size="large" className="mx-auto w-full !py-4" />
         )}
      </div>
   );
};
