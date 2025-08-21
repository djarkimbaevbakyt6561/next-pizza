export { PizzaCollect } from './ui/PizzaCollect';
export { pizza } from './model/consts';
export type { PizzaType } from './model/types';

export {
   getPizzaCollectState as selectPizzaCollectState,
   getTotalSum as selectTotalSum,
} from './model/redux/selectors';
export {
   selectSize,
   selectVariant,
   toggleIngredient,
   resetSelection,
} from './model/redux/slice';
export { pizzaCollectReducer } from './model/redux/slice';
