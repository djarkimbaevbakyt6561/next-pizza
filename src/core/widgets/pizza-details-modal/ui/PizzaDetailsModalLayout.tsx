'use client';
import {
   selectPizzaCollectState,
   selectTotalSum,
} from 'features/pizza-collect';
import { getCartPizzas } from 'entities/cart';
import { useGetPizzaByIdQuery } from 'entities/pizza/api';
import { useAppSelector } from 'shared/store/redux';
import { PizzaDetailsModal } from './modal/PizzaDetailsModal';

export const PizzaDetailsModalLayout = ({ pizzaId }: { pizzaId: number }) => {
   const totalSum = useAppSelector(selectTotalSum);
   const pizzaCollect = useAppSelector(selectPizzaCollectState);
   const cartPizzas = useAppSelector(getCartPizzas);
   const { data: pizza } = useGetPizzaByIdQuery({ id: pizzaId });

   return (
      <PizzaDetailsModal
         pizza={pizza}
         totalSum={totalSum}
         pizzaCollect={pizzaCollect}
         cartPizzas={cartPizzas}
      />
   );
};
