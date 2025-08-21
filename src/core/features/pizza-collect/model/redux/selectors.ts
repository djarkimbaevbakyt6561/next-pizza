export const getPizzaCollectState = (state: RootState) => state.pizzaCollect;

export const getTotalSum = (state: RootState) => {
   const totalSumSelectedIngredients =
      Object.values(state.pizzaCollect.selectedIngredients).reduce(
         (sum, price) => (sum || 0) + (price || 0),
         0,
      ) || 0;
   return (
      state.pizzaCollect.pizzaSize.defaultPrice + totalSumSelectedIngredients
   );
};
