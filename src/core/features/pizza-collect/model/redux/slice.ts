import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PizzaSize, PizzaVariant } from 'entities/pizza';
import { PizzaSizeType } from '../types';

interface PizzaCollectState {
   pizzaSize: PizzaSizeType;
   pizzaVariant: PizzaVariant;
   selectedItemIndex: number;
   selectedIngredients: Record<number, number | undefined>;
}

const initialState: PizzaCollectState = {
   pizzaSize: {
      size: PizzaSize.Medium,
      imageUrl: '',
      weight: 0,
      ingredients: [],
      defaultPrice: 0,
   },
   pizzaVariant: PizzaVariant.Traditional,
   selectedItemIndex: 1,
   selectedIngredients: {},
};

const pizzaCollectSlice = createSlice({
   name: 'pizzaCollect',
   initialState,
   reducers: {
      selectSize: (
         state,
         action: PayloadAction<{ pizzaSize: PizzaSizeType; index: number }>,
      ) => {
         state.pizzaSize = action.payload.pizzaSize;
         state.selectedItemIndex = action.payload.index;

         if (action.payload.pizzaSize.size === PizzaSize.Small) {
            state.pizzaVariant = PizzaVariant.Traditional;
         }
      },
      selectVariant: (state, action: PayloadAction<PizzaVariant>) => {
         state.pizzaVariant = action.payload;
      },
      toggleIngredient: (
         state,
         action: PayloadAction<{ id: number; price: number }>,
      ) => {
         const { id, price } = action.payload;
         state.selectedIngredients[id] = state.selectedIngredients[id]
            ? undefined
            : price;
      },
      resetSelection: () => initialState,
   },
});

export const { selectSize, selectVariant, toggleIngredient, resetSelection } =
   pizzaCollectSlice.actions;
export const pizzaCollectReducer = pizzaCollectSlice.reducer;
