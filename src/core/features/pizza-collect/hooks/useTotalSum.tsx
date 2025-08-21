import { useEffect, useState } from 'react';
import { PizzaSizeType } from '../model/types';

export const useTotalSum = (
   size: PizzaSizeType,
   selectedIngredients: Record<number, number | undefined>,
) => {
   const [totalSum, setTotalSum] = useState(size.defaultPrice);

   useEffect(() => {
      let totalSelectedIngredientsSum = 0;
      for (const value of Object.values(selectedIngredients)) {
         if (value) {
            totalSelectedIngredientsSum += value;
         }
      }
      setTotalSum(size.defaultPrice + totalSelectedIngredientsSum);
   }, [size, selectedIngredients]);

   return totalSum;
};
