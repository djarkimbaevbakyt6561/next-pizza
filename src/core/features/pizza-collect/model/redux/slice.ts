import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IngredientType } from 'entities/ingredient';
import { PizzaSizeType } from 'entities/pizza';
import { PizzaSize, PizzaVariant } from 'shared/enums';

export interface PizzaCollectState {
   pizzaSize: PizzaSizeType;
   pizzaVariant: PizzaVariant;
   ingredients: IngredientType[];
   selectedItemIndex: number;
   selectedIngredients: Record<string, number | undefined>;
}

const initialState: PizzaCollectState = {
   pizzaSize: {
      size: PizzaSize.Medium,
      imageUrl: '',
      weight: 0,
      price: 0,
   },
   ingredients: [],
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
         action: PayloadAction<{
            pizzaSize: PizzaSizeType;
            index: number;
         }>,
      ) => {
         state.pizzaSize = action.payload.pizzaSize;
         state.selectedItemIndex = action.payload.index;

         if (action.payload.pizzaSize.size === PizzaSize.Small) {
            state.pizzaVariant = PizzaVariant.Traditional;
         }
      },
      setIngredients: (state, action: PayloadAction<IngredientType[]>) => {
         state.ingredients = action.payload;
      },
      selectVariant: (state, action: PayloadAction<PizzaVariant>) => {
         state.pizzaVariant = action.payload;
      },
      toggleIngredient: (
         state,
         action: PayloadAction<{ name: string; price: number }>,
      ) => {
         const { name, price } = action.payload;
         state.selectedIngredients[name] = state.selectedIngredients[name]
            ? undefined
            : price;
      },
      resetSelection: () => initialState,
   },
});

export const {
   selectSize,
   setIngredients,
   selectVariant,
   toggleIngredient,
   resetSelection,
} = pizzaCollectSlice.actions;
export const pizzaCollectReducer = pizzaCollectSlice.reducer;
