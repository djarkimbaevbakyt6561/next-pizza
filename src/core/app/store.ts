import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterReducer } from 'pages/home/ui/sections/filter';
import { cartDrawerReducer } from 'features/cart-drawer';
import { ingredientCheckboxListReducer } from 'features/filter/ingredient-checkbox-list';
import { priceRangeReducer } from 'features/filter/price-range';
import { pizzaCollectReducer } from 'features/pizza-collect';
import { cartReducer } from 'entities/cart';
import { api } from 'shared/api';
// import { api } from 'shared/api';

const rootReducer = combineReducers({
   [api.reducerPath]: api.reducer,
   ['cartDrawer']: cartDrawerReducer,
   ['cart']: cartReducer,
   ['filter']: filterReducer,
   ['pizzaCollect']: pizzaCollectReducer,
   ['ingredientCheckboxList']: ingredientCheckboxListReducer,
   ['priceRange']: priceRangeReducer,
});

const store = configureStore({
   reducer: rootReducer,
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(api.middleware),
   //    middleware: getDefaultMiddleware =>
   //       getDefaultMiddleware().concat(api.middleware),
});
export default store;
