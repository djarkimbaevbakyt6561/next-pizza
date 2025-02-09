'use client';
import {
   parseAsArrayOf,
   parseAsBoolean,
   parseAsString,
   useQueryState,
} from 'nuqs';
import { tv } from 'tailwind-variants';
import { AdditionalOptionsFilter } from './additional-options/AdditionalOptionsFilter';
import { DoughTypeFilter } from './dough-type/DoughTypeFilter';
import { IngredientsFilter } from './ingredients/IngredientsFilter';
import { PriceFilter } from './price/PriceFilter';

const pizzaFilter = tv({
   slots: {
      container: 'flex flex-col gap-7',
      title: 'text-2xl font-bold',
   },
});

export const PizzaFilter = () => {
   const { container, title } = pizzaFilter();

   const [selectedIngredients, setSelectedIngredients] = useQueryState(
      'ingredients',
      parseAsArrayOf(parseAsString).withDefault([]),
   );

   const [collect, setCollect] = useQueryState(
      'collect',
      parseAsBoolean.withDefault(false),
   );
   const [novelity, setNovelity] = useQueryState(
      'new',
      parseAsBoolean.withDefault(false),
   );
   const [doughType, setDoughType] = useQueryState('doughType', {
      defaultValue: '',
   });

   return (
      <div className={container()}>
         <h2 className={title()}>Filter</h2>
         <AdditionalOptionsFilter />
         <IngredientsFilter />
         <PriceFilter />
         <DoughTypeFilter />
      </div>
   );
};
