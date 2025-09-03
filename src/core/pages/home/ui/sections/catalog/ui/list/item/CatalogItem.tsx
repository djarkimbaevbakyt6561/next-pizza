import { useCartPizzaManipulation } from 'entities/cart';
import { PizzaCard, PizzaType } from 'entities/pizza';
import { PizzaSize, PizzaVariant } from 'shared/enums';

export const CatalogItem = ({
   priority,
   count,
   pizza,
}: {
   priority: boolean;
   count: number;
   pizza: PizzaType;
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
      <li className="justify-self-center">
         <PizzaCard
            priority={priority}
            count={count}
            addPizza={handleAddPizza}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            pizza={pizza}
            className="h-full"
         />
      </li>
   );
};
