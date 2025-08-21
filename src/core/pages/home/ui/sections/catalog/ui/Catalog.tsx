'use client';
import clsx from 'clsx';
import { PizzaCard, PizzaCardType } from 'entities/pizza';

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

export const PizzaCatalog = ({ className }: { className?: string }) => {
   return (
      <div className={clsx('flex flex-wrap justify-center gap-12', className)}>
         {pizzas.map(el => {
            return <PizzaCard key={el.id} pizza={el} />;
         })}
      </div>
   );
};
