'use client';
import { useCartPizzaManipulation } from 'entities/cart';
import { PizzaCard, PizzaType } from 'entities/pizza';
import { PizzaSize, PizzaVariant } from 'shared/enums';

export const CarouselItem = ({
   pizza,
   count,
}: {
   pizza: PizzaType;
   count: number;
}) => {
   const { handleAddPizza, incrementCount, decrementCount } =
      useCartPizzaManipulation(count, {
         id: pizza.id,
         imageUrl: pizza.defaultImageUrl,
         title: pizza.title,
         size: PizzaSize.Medium,
         variant: PizzaVariant.Traditional,
         price: pizza.defaultPrice,
         selectedIngredients: [],
         count: 1,
      });

   return (
      <PizzaCard
         count={count}
         addPizza={handleAddPizza}
         incrementCount={incrementCount}
         decrementCount={decrementCount}
         className="block mx-auto"
         pizza={pizza}
      />
   );
};
