// PizzaFilterContainer.tsx
'use client';
import {
   useQueryStates,
   parseAsBoolean,
   parseAsString,
   parseAsArrayOf,
   parseAsStringEnum,
} from 'nuqs';
import { useEffect, useState } from 'react';
import {
   setFilterSelectedIngredients,
   getFilterSelectedIngredients,
} from 'features/filter/ingredient-checkbox-list';
import {
   setFilterPizzaVariant,
   getFilterPizzaVariant,
} from 'features/filter/pizza-variant-radio-list';
import { setFilterPrice, getFilterPrice } from 'features/filter/price-range';
import { PizzaVariant } from 'entities/pizza';
import { useAppDispatch, useAppSelector } from 'shared/store/redux';
import { getPizzaFilterState } from '../model/redux/selectors';
import { filterActions } from '../model/redux/slice';
import { PizzaFilterPanel } from './panel/PizzaFilterPanel';

export const PizzaFilterLayout = ({ className }: { className: string }) => {
   const dispatch = useAppDispatch();
   const pizzaFilter = useAppSelector(getPizzaFilterState);
   const selectedIngredients = useAppSelector(getFilterSelectedIngredients);
   const pizzaVariant = useAppSelector(getFilterPizzaVariant);
   const price = useAppSelector(getFilterPrice);

   const [isOpen, setIsOpen] = useState(false);
   const [pizzaFilterSearchParams, setPizzaFilterSearchParams] = useQueryStates(
      {
         collect: parseAsBoolean.withDefault(false),
         novelity: parseAsBoolean.withDefault(false),
         ingredients: parseAsArrayOf(parseAsString).withDefault([]),
         from: parseAsString.withDefault(''),
         to: parseAsString.withDefault(''),
         doughType: parseAsStringEnum<PizzaVariant>(
            Object.values(PizzaVariant),
         ),
      },
   );

   const handleApply = () => {
      setPizzaFilterSearchParams({
         collect: pizzaFilter.collect,
         novelity: pizzaFilter.novelity,
         ingredients: selectedIngredients,
         from: price.from,
         to: price.to,
         doughType: pizzaVariant,
      });
      setIsOpen(false);
   };

   useEffect(() => {
      dispatch(
         filterActions.setFilter({
            collect: pizzaFilterSearchParams.collect,
            novelity: pizzaFilterSearchParams.novelity,
         }),
      );
      dispatch(
         setFilterPizzaVariant(
            pizzaFilterSearchParams.doughType || PizzaVariant.Thin,
         ),
      );
      dispatch(
         setFilterPrice({
            from: pizzaFilterSearchParams.from,
            to: pizzaFilterSearchParams.to,
         }),
      );
      dispatch(
         setFilterSelectedIngredients(
            pizzaFilterSearchParams.ingredients || [],
         ),
      );
   }, [dispatch, pizzaFilterSearchParams]);

   return (
      <PizzaFilterPanel
         className={className}
         isOpen={isOpen}
         onToggle={() => setIsOpen(prev => !prev)}
         onApply={handleApply}
      />
   );
};
