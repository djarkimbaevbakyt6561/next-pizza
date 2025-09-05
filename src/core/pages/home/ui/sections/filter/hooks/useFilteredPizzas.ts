'use client';
import { useEffect, useState } from 'react';
import { PizzaType } from 'entities/pizza';

export type PizzaFilterSearchParams = {
   collect: boolean;
   novelity: boolean;
   ingredients: string[];
   from: string;
   to: string;
   kind: string;
   sort: string;
};

export const useFilteredPizzas = ({
   pizzas,
   searchParams,
   page,
   pageSize,
}: {
   pizzas: PizzaType[] | undefined;
   searchParams: PizzaFilterSearchParams;
   page: number;
   pageSize: number;
}) => {
   const [filteredPizzas, setFilteredPizzas] = useState<PizzaType[]>(
      pizzas ?? [],
   );

   useEffect(() => {
      if (!pizzas) return;

      let result = [...pizzas];

      // ✅ collect
      if (searchParams.collect) {
         result = result.filter(pizza => pizza.isCollectable);
      }

      // ✅ novelty
      if (searchParams.novelity) {
         result = result.filter(pizza => pizza.isNew);
      }

      // ✅ ingredients
      if (searchParams.ingredients.length > 0) {
         result = result.filter(pizza =>
            searchParams.ingredients.every(ing =>
               pizza.ingredients.includes(ing),
            ),
         );
      }

      // ✅ price from/to
      if (searchParams.from) {
         const from = Number(searchParams.from);
         result = result.filter(pizza => pizza.defaultPrice >= from);
      }

      if (searchParams.to) {
         const to = Number(searchParams.to);
         result = result.filter(pizza => pizza.defaultPrice <= to);
      }

      // ✅ kind
      if (searchParams.kind) {
         result = result.filter(pizza =>
            pizza.kinds.some(el => searchParams.kind === el),
         );
      }

      if (searchParams.sort) {
         result = sortFilteredPizza(searchParams.sort, result);
      }

      if (page) {
         const startIndex = (page - 1) * pageSize;
         const endIndex = startIndex + pageSize;

         result = result.slice(startIndex, endIndex);
      }

      setFilteredPizzas(result);
   }, [pizzas, searchParams, page]);

   return { filteredPizzas };
};

const sortFilteredPizza = (sort: string, result: PizzaType[]) => {
   switch (sort) {
      case 'asc': {
         result.sort((a, b) => a.title.localeCompare(b.title));
         break;
      }
      case 'desc': {
         result.sort((a, b) => b.title.localeCompare(a.title));
         break;
      }
      case 'expensive': {
         result.sort((a, b) => b.defaultPrice - a.defaultPrice);
         break;
      }
      case 'cheapest': {
         result.sort((a, b) => a.defaultPrice - b.defaultPrice);
         break;
      }
   }
   return result;
};
