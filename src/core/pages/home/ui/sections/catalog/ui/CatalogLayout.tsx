'use client';
import { ConfigProvider } from 'antd';
import {
   parseAsArrayOf,
   parseAsBoolean,
   parseAsString,
   parseAsStringEnum,
   useQueryStates,
} from 'nuqs';
import { useState } from 'react';
import { EmptyPizza } from 'widgets/pizza-details-modal';
import { getCartPizzas } from 'entities/cart';
import { useGetPizzasQuery } from 'entities/pizza/api';
import { PizzaVariant } from 'shared/enums';
import { useAppSelector } from 'shared/store/redux';
import { useFilteredPizzas } from '../../filter';
import { CatalogList } from './list/CatalogList';
import { CatalogPagination } from './pagination/CatalogPagination';
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
   const [currentPage, setCurrentPage] = useState(1);
   const { filteredPizzas } = useFilteredPizzas({
      pizzas,
      searchParams: pizzaFilterSearchParams,
      page: currentPage,
      pageSize: 6,
   });

   const handleCurrentPageChange = (page: number) => {
      setCurrentPage(page);
   };

   let content;
   if (isLoading) {
      content = <CatalogSkeleton />;
   } else {
      content = (
         <>
            <CatalogList cartPizzas={cartPizzas} pizzas={filteredPizzas} />
            <CatalogPagination
               currentPage={currentPage}
               total={pizzas?.length || 0}
               handleCurrentPageChange={handleCurrentPageChange}
            />
         </>
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
            {!isLoading && !filteredPizzas.length ? <EmptyPizza /> : content}
         </section>
      </ConfigProvider>
   );
};
