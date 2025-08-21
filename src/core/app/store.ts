import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterReducer } from 'pages/home/ui/sections/filter';
import { ingredientCheckboxListReducer } from 'features/filter/ingredient-checkbox-list';
import { pizzaVariantRadioListReducer } from 'features/filter/pizza-variant-radio-list';
import { priceRangeReducer } from 'features/filter/price-range';
import { pizzaCollectReducer } from 'features/pizza-collect';
// import { api } from 'shared/api';

const rootReducer = combineReducers({
   ['filter']: filterReducer,
   ['pizzaCollect']: pizzaCollectReducer,
   ['ingredientCheckboxList']: ingredientCheckboxListReducer,
   ['pizzaVariantRadioList']: pizzaVariantRadioListReducer,
   ['priceRange']: priceRangeReducer,
});

const store = configureStore({
   reducer: rootReducer,
   //    middleware: getDefaultMiddleware =>
   //       getDefaultMiddleware().concat(api.middleware),
});
export default store;
