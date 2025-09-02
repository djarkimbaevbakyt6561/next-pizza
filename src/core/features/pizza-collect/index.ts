export { PizzaCollect } from './ui/PizzaCollect';

export { getPizzaCollectState, getTotalSum } from './model/redux/selectors';
export {
   selectSize,
   selectVariant,
   toggleIngredient,
   resetSelection,
   type PizzaCollectState,
} from './model/redux/slice';
export { pizzaCollectReducer } from './model/redux/slice';
