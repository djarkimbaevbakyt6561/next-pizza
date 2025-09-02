import { useAppDispatch } from 'shared/store/redux';
import { addPizza, setCount } from '../model/redux/slice';
import { PizzaCartItemType } from '../model/types';

export const useCartPizzaManipulation = (
   count: number,
   pizza: PizzaCartItemType,
) => {
   const dispatch = useAppDispatch();

   const handleAddPizza = () => {
      dispatch(addPizza(pizza));
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

   return { handleAddPizza, incrementCount, decrementCount };
};
