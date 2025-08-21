import { IngredientsFilter } from './ui/IngredientCheckboxList';

export { ingredientCheckboxListReducer } from './model/redux/slice';
export { getFilterSelectedIngredients } from './model/redux/selectors';
export { setFilterSelectedIngredients } from './model/redux/slice';

export default IngredientsFilter;
