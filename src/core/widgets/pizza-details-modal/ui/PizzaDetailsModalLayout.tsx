'use client';
import { getPizzaCollectState, getTotalSum } from 'features/pizza-collect';
import { getCartPizzas } from 'entities/cart';
import { useGetPizzaByIdQuery } from 'entities/pizza/api';
import { useAppSelector } from 'shared/store/redux';
import { PizzaDetailsModal } from './modal/PizzaDetailsModal';

export const PizzaDetailsModalLayout = ({
   pizzaId,
}: {
   pizzaId: string | null;
}) => {
   const totalSum = useAppSelector(getTotalSum);
   const pizzaCollect = useAppSelector(getPizzaCollectState);
   const cartPizzas = useAppSelector(getCartPizzas);
   const { data: pizza } = useGetPizzaByIdQuery(pizzaId ?? '');

   return (
      <PizzaDetailsModal
         pizza={pizza}
         totalSum={totalSum}
         pizzaCollect={pizzaCollect}
         cartPizzas={cartPizzas}
      />
   );
};
