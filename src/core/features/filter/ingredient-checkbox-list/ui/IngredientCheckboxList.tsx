'use client';
import { Checkbox } from 'antd';
import { useState } from 'react';
import { tv } from 'tailwind-variants';
import { IngredientSelectType } from 'entities/ingredient';
import { useAppDispatch, useAppSelector } from 'shared/store/redux';
import { getFilterSelectedIngredients } from '../model/redux/selectors';
import { setFilterSelectedIngredients } from '../model/redux/slice';

const ingredients: IngredientSelectType[] = [
   {
      id: 1,
      name: 'Cheese sauce',
      value: 'cheese-sauce',
   },
   {
      id: 2,
      name: 'Mozzarella',
      value: 'mozzarella',
   },
   {
      id: 3,
      name: 'Garlic',
      value: 'garlic',
   },

   {
      id: 4,
      name: 'Pickles',
      value: 'pickles',
   },
   {
      id: 5,
      name: 'Red onion',
      value: 'red-onion',
   },

   {
      id: 6,
      name: 'Red onion',
      value: 'red-onion',
   },

   {
      id: 7,
      name: 'Red onion',
      value: 'red-onion',
   },
   {
      id: 8,
      name: 'Red onion',
      value: 'red-onion',
   },
   {
      id: 9,
      name: 'Red onion',
      value: 'red-onion',
   },
   {
      id: 10,
      name: 'Red onion',
      value: 'red-onion',
   },
   {
      id: 11,
      name: 'Red onion',
      value: 'red-onion',
   },
   {
      id: 12,
      name: 'Red onion',
      value: 'red-onion',
   },

   {
      id: 13,
      name: 'Red onion',
      value: 'red-onion',
   },

   {
      id: 14,
      name: 'Red onion',
      value: 'red-onion',
   },
];

const ingredientsFilter = tv({
   slots: {
      container: 'flex flex-col gap-4',
      limitButton: 'text-orange-500',
      title: 'font-bold',
   },
});

export const IngredientsFilter = () => {
   const dispatch = useAppDispatch();
   const selectedIngredients = useAppSelector(getFilterSelectedIngredients);
   const { container, title, limitButton } = ingredientsFilter();
   const [isLimit, setIsLimit] = useState(true);


   const handleOnChange = (isSelected: boolean | undefined, value: string) => {
      const updatedSelectedIngredients = isSelected
         ? selectedIngredients.filter(el => el !== value)
         : [...selectedIngredients, value];

      dispatch(
         setFilterSelectedIngredients(
            updatedSelectedIngredients.length ? updatedSelectedIngredients : [],
         ),
      );
   };

   const toggleIsLimitHandler = () => setIsLimit(prev => !prev);

   const visibleIngredients = isLimit ? ingredients.slice(0, 6) : ingredients;

   return (
      <div className={container()}>
         <h1 className={title()}>Ingredients:</h1>
         {visibleIngredients.map(el => {
            const isSelected = selectedIngredients?.includes(el.value);
            return (
               <Checkbox
                  key={el.id}
                  checked={isSelected}
                  onChange={() => handleOnChange(isSelected, el.value)}
                  name={el.value}
               >
                  {el.name}
               </Checkbox>
            );
         })}
         {
            <button onClick={toggleIsLimitHandler} className={limitButton()}>
               + {isLimit ? 'Показать' : 'Скрыть'} все
            </button>
         }
      </div>
   );
};
