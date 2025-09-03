import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAX_RATE } from '../consts';
import { PizzaCartItemType } from '../types';

interface CartState {
   pizzas: PizzaCartItemType[];
   totalSum: number;
   taxAmount: number;
}

const calcTotalSum = (pizzas: PizzaCartItemType[]) =>
   pizzas.reduce((acc, curr) => acc + curr.price * curr.count, 0);

const initialState: CartState = {
   pizzas: [],
   totalSum: 0,
   taxAmount: 0,
};

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      hydrateCart: (state, action: PayloadAction<PizzaCartItemType[]>) => {
         state.pizzas = action.payload;
         state.totalSum = calcTotalSum(state.pizzas);
         state.taxAmount = Math.round(state.totalSum * TAX_RATE);
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
         state.taxAmount = Math.round(state.totalSum * TAX_RATE);
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
         state.taxAmount = Math.round(state.totalSum * TAX_RATE);
      },
   },
});

export const { hydrateCart, addPizza, setCount } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
