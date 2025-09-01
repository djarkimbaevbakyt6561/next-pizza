'use client';
import { useEffect } from 'react';
import { getCartPizzas, hydrateCart } from 'entities/cart';
import { useAppDispatch, useAppSelector } from 'shared/store/redux';

export const CartDrawerProvider = () => {
   const pizzas = useAppSelector(getCartPizzas);
   const dispatch = useAppDispatch();

   useEffect(() => {
      try {
         const pizzasFromLocalStorage = localStorage.getItem('cartPizzas');
         const pizzas = pizzasFromLocalStorage
            ? JSON.parse(pizzasFromLocalStorage)
            : [];

         dispatch(hydrateCart(pizzas));
      } catch {}
   }, [dispatch]);

   useEffect(() => {
      localStorage.setItem('cartPizzas', JSON.stringify(pizzas));
   }, [pizzas]);

   return null;
};
