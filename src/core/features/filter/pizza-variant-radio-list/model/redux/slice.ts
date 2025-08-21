import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PizzaVariant } from 'entities/pizza';

const initialState: {
   pizzaVariant: PizzaVariant | null;
} = {
   pizzaVariant: null,
};

export const pizzaVariantRadioListSlice = createSlice({
   name: 'pizzaVariantRadioList',
   initialState,
   reducers: {
      setFilterPizzaVariant: (state, action: PayloadAction<PizzaVariant>) => {
         state.pizzaVariant = action.payload;
      },
   },
});

export const { setFilterPizzaVariant } = pizzaVariantRadioListSlice.actions;
export const pizzaVariantRadioListReducer = pizzaVariantRadioListSlice.reducer;
