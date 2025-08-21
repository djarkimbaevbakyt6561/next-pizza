'use client';
import { Breadcrumb } from 'antd';
import { tv } from 'tailwind-variants';
import { pizza } from 'features/pizza-collect';
import { PizzaCardType } from 'entities/pizza';
import { PizzaDetailsWidget } from './sections/pizza-details-widget/ui/PizzaDetailsWidget';
import { RecommendationsCarousel } from './sections/recommendations-carousel/ui/RecommendationsCarousel';

const pizzaDetails = tv(
   {
      slots: {
         container: '_container',
         breadcrumbWrapper: '',
      },
      variants: {
         responsive: {
            initial: {
               breadcrumbWrapper: 'mt-4',
            },
            medium: {
               breadcrumbWrapper: 'mt-6',
            },
            large: {
               breadcrumbWrapper: 'mt-10',
            },
         },
      },
   },

   {
      responsiveVariants: ['md', 'lg'],
   },
);

const pizzas: PizzaCardType[] = [
   {
      id: 1,
      title: 'Cheese chicken',
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d6025e8bf7c96ffc8c8aa80fe57.avif',
      isCollectable: true,
      ingredients:
         'Chicken, mozzarella, cheddar and parmesan cheeses, cheese sauce, tomatoes, alfredo sauce, garlic',
      price: 5,
   },
   {
      id: 2,
      title: 'Cheese chicken',
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d6025e8bf7c96ffc8c8aa80fe57.avif',
      isCollectable: false,
      ingredients:
         'Chicken, mozzarella, cheddar and parmesan cheeses, cheese sauce, tomatoes, alfredo sauce, garlic',
      price: 5,
   },
];

export const PizzaDetailsPage = () => {
   const { container, breadcrumbWrapper } = pizzaDetails({
      responsive: { initial: 'initial', md: 'medium', lg: 'large' },
   });

   return (
      <div className={container()}>
         <div className={breadcrumbWrapper()}>
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
               params={{ title: pizza.title }}
            />
         </div>

         <PizzaDetailsWidget pizza={pizza} />
         <RecommendationsCarousel pizzas={pizzas} />
      </div>
   );
};
