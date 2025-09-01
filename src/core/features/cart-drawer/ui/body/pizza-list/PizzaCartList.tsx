'use client';
import { getCartPizzas } from 'entities/cart';
import { useAppSelector } from 'shared/store/redux';
import { PizzaCartItem } from './pizza-cart-item/PizzaCartItem';

export const PizzaCartList = () => {
   const pizzas = useAppSelector(getCartPizzas);
   return (
      <ul className="flex flex-col gap-[0.625rem]">
         {pizzas.map(el => (
            <li key={el.id}>
               <PizzaCartItem pizza={el} />
            </li>
         ))}
      </ul>
   );
};
