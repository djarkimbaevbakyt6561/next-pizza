import { PizzaCardSkeleton } from 'entities/pizza';

export const CatalogSkeleton = () => {
   const loadingArray = Array.from({ length: 6 }, (_, i) => i);

   return (
      <ul
         className={
            'grid grid-cols-[repeat(auto-fit,minmax(287px,1fr))] justify-between gap-10'
         }
      >
         {loadingArray.map(el => {
            return (
               <li key={el} className="justify-self-center">
                  <PizzaCardSkeleton />
               </li>
            );
         })}
      </ul>
   );
};
