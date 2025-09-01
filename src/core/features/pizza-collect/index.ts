export { PizzaCollect } from './ui/PizzaCollect';

export {
   getPizzaCollectState as selectPizzaCollectState,
   getTotalSum as selectTotalSum,
} from './model/redux/selectors';
export {
   selectSize,
   selectVariant,
   toggleIngredient,
   resetSelection,
   type PizzaCollectState,
} from './model/redux/slice';
export { pizzaCollectReducer } from './model/redux/slice';
