import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PizzaCartItemType } from '../types';

interface CartState {
   pizzas: PizzaCartItemType[];
   totalSum: number;
}

const calcTotalSum = (pizzas: PizzaCartItemType[]) =>
   pizzas.reduce((acc, curr) => acc + curr.price * curr.count, 0);

const initialState: CartState = {
   pizzas: [],
   totalSum: 0,
};

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      hydrateCart: (state, action: PayloadAction<PizzaCartItemType[]>) => {
         state.pizzas = action.payload;
         state.totalSum = calcTotalSum(state.pizzas);
      },
      addPizza: (state, action: PayloadAction<PizzaCartItemType>) => {
         state.pizzas.push({
            id: action.payload.id,
            title: action.payload.title,
            imageUrl: action.payload.imageUrl,
            selectedIngredients: action.payload.selectedIngredients,
            price: action.payload.price,
            size: action.payload.size,
            variant: action.payload.variant,
            count: action.payload.count,
         });
         state.totalSum = calcTotalSum(state.pizzas);
      },
      setCount: (
         state,
         action: PayloadAction<{ pizzaId: number; count: number }>,
      ) => {
         if (action.payload.count === 0) {
            state.pizzas = state.pizzas.filter(
               el => el.id !== action.payload.pizzaId,
            );
         } else {
            state.pizzas = state.pizzas.map(el => {
               if (el.id === action.payload.pizzaId) {
                  return { ...el, count: action.payload.count };
               }
               return el;
            });
         }
         state.totalSum = calcTotalSum(state.pizzas);
      },
   },
});

export const { hydrateCart, addPizza, setCount } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
