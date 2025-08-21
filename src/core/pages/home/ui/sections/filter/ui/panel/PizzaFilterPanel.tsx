// PizzaFilterPanel.tsx
import { FC } from 'react';
import { Button } from 'antd';
import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import { CrossIcon, FilterIcon } from 'shared/assets';
import { AdditionalOptionsFilter } from '../additional-options/AdditionalOptionsFilter';
import IngredientsFilter from 'features/filter/ingredient-checkbox-list';
import PriceFilter from 'features/filter/price-range';
import PizzaVariantFilter from 'features/filter/pizza-variant-radio-list';

interface Props {
   className: string;
   isOpen: boolean;
   onToggle: () => void;
   onApply: () => void;
}

const pizzaFilterClass = tv(
   {
      slots: {
         container: 'flex-col gap-7 max-w-60 h-full z-50',
         title: 'text-2xl font-bold',
         filterButton: '',
      },
      variants: {
         size: {
            initial: {
               container:
                  'animate-fadeIn hidden max-w-none fixed w-full px-4 py-5 top-0 left-0 bg-white',
               filterButton: '!block',
               title: 'flex justify-between items-start',
            },
            medium: {
               container: 'animate-none flex max-w-60 static p-0',
               filterButton: '!hidden',
               title: 'block',
            },
         },
      },
   },
   { responsiveVariants: ['md'] },
);

const sideBarClass = tv(
   {
      slots: {
         closeButton: 'pb-4 pl-4',
      },
      variants: {
         size: {
            initial: {
               closeButton: 'block',
            },
            medium: {
               closeButton: 'hidden',
            },
         },
      },
   },
   { responsiveVariants: ['md'] },
);

export const PizzaFilterPanel: FC<Props> = ({
   className,
   isOpen,
   onToggle,
   onApply,
}) => {
   const { container, title, filterButton } = pizzaFilterClass({
      size: { initial: 'initial', md: 'medium' },
   });
   const { closeButton } = sideBarClass({
      size: { initial: 'initial', md: 'medium' },
   });

   return (
      <div className={className}>
         <Button
            className={filterButton()}
            color="primary"
            variant="outlined"
            onClick={onToggle}
            icon={<FilterIcon />}
         >
            Filters
         </Button>
         <div className={clsx(container(), isOpen ? '!flex' : '')}>
            <h2 className={title()}>
               Filters
               <button className={closeButton()} onClick={onToggle}>
                  <CrossIcon />
               </button>
            </h2>
            <AdditionalOptionsFilter />
            <IngredientsFilter />
            <PriceFilter />
            <PizzaVariantFilter />
            <Button
               color="primary"
               variant="solid"
               className="py-3"
               onClick={onApply}
            >
               Apply
            </Button>
         </div>
      </div>
   );
};
