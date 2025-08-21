import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceTypes } from '../types';

const initialState: FilterSliceTypes = {
   collect: false,
   novelity: false,
};

export const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      setFilter: (state, action: PayloadAction<FilterSliceTypes>) => {
         state.collect = action.payload.collect;
         state.novelity = action.payload.novelity;
      },
      setCollect: (state, action: PayloadAction<boolean>) => {
         state.collect = action.payload;
      },
      setNovelity: (state, action: PayloadAction<boolean>) => {
         state.novelity = action.payload;
      },
   },
});

export const filterActions = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
