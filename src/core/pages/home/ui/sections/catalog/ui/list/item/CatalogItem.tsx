import { useDispatch } from 'react-redux';
import { addPizza, setCount } from 'entities/cart';
import { PizzaCard, PizzaType } from 'entities/pizza';
import { PizzaSize, PizzaVariant } from 'shared/enums';

export const CatalogItem = ({
   count,
   pizza,
}: {
   count: number;
   pizza: PizzaType;
}) => {
   const dispatch = useDispatch();

   const handleAddPizza = () => {
      dispatch(
         addPizza({
            id: pizza.id,
            imageUrl: pizza.defaultImageUrl,
            title: pizza.title,
            size: PizzaSize.Medium,
            variant: PizzaVariant.Traditional,
            price: pizza.defaultPrice,
            selectedIngredients: [],
            count: 1,
         }),
      );
   };
   const incrementCount = () => {
      dispatch(
         setCount({
            pizzaId: pizza.id,
            count: count + 1,
         }),
      );
   };
   const decrementCount = () =>
      dispatch(
         setCount({
            pizzaId: pizza.id,
            count: count - 1,
         }),
      );

   return (
      <li className="justify-self-center">
         <PizzaCard
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
