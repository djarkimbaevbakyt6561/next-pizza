import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
   selectedIngredients: string[];
} = {
   selectedIngredients: [],
};

export const ingredientCheckboxListSlice = createSlice({
   name: 'ingredientCheckboxList',
   initialState,
   reducers: {
      setFilterSelectedIngredients: (
         state,
         action: PayloadAction<string[]>,
      ) => {
         state.selectedIngredients = action.payload;
      },
   },
});

export const { setFilterSelectedIngredients } =
   ingredientCheckboxListSlice.actions;
export const ingredientCheckboxListReducer =
   ingredientCheckboxListSlice.reducer;
