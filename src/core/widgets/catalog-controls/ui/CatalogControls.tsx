import { Suspense } from 'react';
import { tv } from 'tailwind-variants';
import { PizzaSortSelect } from 'features/sort-select';
import { PizzaTabsFilter } from 'features/tabs-filter';

const catalogControls = tv({
   slots: {
      container: 'flex gap-3 items-center justify-between',
   },
});

export const PizzaCatalogControls = () => {
   const { container } = catalogControls();

   return (
      <div className={container()}>
         <Suspense fallback={<div>Hiii</div>}>
            <PizzaTabsFilter />
         </Suspense>
         <Suspense fallback={<div>Hiii</div>}>
            <PizzaSortSelect />
         </Suspense>
      </div>
   );
};
