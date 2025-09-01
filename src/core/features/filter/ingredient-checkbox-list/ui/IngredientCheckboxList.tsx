'use client';
import { Checkbox } from 'antd';
import { useState } from 'react';
import { tv } from 'tailwind-variants';
import { useAppDispatch, useAppSelector } from 'shared/store/redux';
import { ingredients } from '../model/consts';
import { getFilterSelectedIngredients } from '../model/redux/selectors';
import { setFilterSelectedIngredients } from '../model/redux/slice';

const ingredientsFilter = tv({
   slots: {
      container: 'flex flex-col gap-4',
      limitButton: 'text-orange-500',
      title: 'font-bold',
   },
});

export const IngredientsFilter = () => {
   const { container, title, limitButton } = ingredientsFilter();
   const selectedIngredients = useAppSelector(getFilterSelectedIngredients);
   const dispatch = useAppDispatch();
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

   const visibleIngredients = isLimit ? ingredients?.slice(0, 6) : ingredients;

   return (
      <div className={container()}>
         <h1 className={title()}>Ingredients:</h1>
         {visibleIngredients?.map(el => {
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
