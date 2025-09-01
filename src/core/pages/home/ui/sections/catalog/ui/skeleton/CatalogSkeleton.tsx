import { PizzaCardSkeleton } from 'entities/pizza';

export const CatalogSkeleton = () => {
   const loadingArray = Array.from({ length: 6 }, (_, i) => i);

   return loadingArray.map(el => {
      return (
         <li key={el} className="justify-self-center">
            <PizzaCardSkeleton />
         </li>
      );
   });
};
