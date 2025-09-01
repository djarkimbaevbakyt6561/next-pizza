export const getCartPizzas = (state: RootState) => state.cart.pizzas;
export const getCartPizzasCount = (state: RootState) =>
   state.cart.pizzas.length;
export const getCartTotalSum = (state: RootState) => state.cart.totalSum;
