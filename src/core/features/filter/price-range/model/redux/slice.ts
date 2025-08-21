import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PriceRange } from '../types';

const initialState: {
   price: PriceRange;
} = {
   price: {
      to: '',
      from: '',
   },
};

export const priceRangeSlice = createSlice({
   name: 'priceRange',
   initialState,
   reducers: {
      setFilterPrice: (state, action: PayloadAction<PriceRange>) => {
         state.price = action.payload;
      },
   },
});

export const { setFilterPrice } = priceRangeSlice.actions;
export const priceRangeReducer = priceRangeSlice.reducer;
