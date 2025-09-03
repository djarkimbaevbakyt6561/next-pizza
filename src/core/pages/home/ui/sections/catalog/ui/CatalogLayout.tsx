'use client';
import { ConfigProvider } from 'antd';
import {
   parseAsArrayOf,
   parseAsBoolean,
   parseAsString,
   parseAsStringEnum,
   useQueryStates,
} from 'nuqs';
import { EmptyPizza } from 'widgets/pizza-details-modal';
import { getCartPizzas } from 'entities/cart';
import { useGetPizzasQuery } from 'entities/pizza/api';
import { PizzaVariant } from 'shared/enums';
import { useAppSelector } from 'shared/store/redux';
import { useFilteredPizzas } from '../../filter';
import { CatalogList } from './list/CatalogList';
import { CatalogSkeleton } from './skeleton/CatalogSkeleton';

export const PizzaCatalogLayout = ({ className }: { className?: string }) => {
   const { data: pizzas, isLoading } = useGetPizzasQuery();

   const cartPizzas = useAppSelector(getCartPizzas);

   const [pizzaFilterSearchParams] = useQueryStates({
      collect: parseAsBoolean.withDefault(false),
      novelity: parseAsBoolean.withDefault(false),
      ingredients: parseAsArrayOf(parseAsString).withDefault([]),
      from: parseAsString.withDefault(''),
      to: parseAsString.withDefault(''),
      doughType: parseAsStringEnum<PizzaVariant>(Object.values(PizzaVariant)),
      kind: parseAsString.withDefault(''),
      sort: parseAsString.withDefault(''),
   });
   const { filteredPizzas } = useFilteredPizzas({
      pizzas,
      searchParams: pizzaFilterSearchParams,
   });

   let content;
   if (isLoading) {
      content = <CatalogSkeleton />;
   } else {
      content = (
         <CatalogList
            cartPizzas={cartPizzas}
            pizzas={filteredPizzas}
            className={className}
         />
      );
   }
   return (
      <ConfigProvider
         theme={{
            components: {
               Button: {
                  controlHeight: 42,
               },
            },
         }}
      >
         <section className={className}>
            {!isLoading && !filteredPizzas.length ? (
               <EmptyPizza />
            ) : (
               <ul
                  className={
                     'grid grid-cols-[repeat(auto-fit,minmax(287px,1fr))] justify-between gap-10'
                  }
               >
                  {content}
               </ul>
            )}
         </section>
      </ConfigProvider>
   );
};
