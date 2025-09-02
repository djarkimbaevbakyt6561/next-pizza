import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import { PizzaType } from 'entities/pizza';
import { PizzaSize, PizzaVariant } from 'shared/enums';
import { useAppDispatch, useAppSelector } from 'shared/store/redux';
import { Tabs } from 'shared/ui';
import { pizzaSizeTabs, pizzaVariantTabs } from '../../model/consts';
import { getPizzaCollectState } from '../../model/redux/selectors';
import { selectSize, selectVariant } from '../../model/redux/slice';

const tabButton = tv({
   base: 'w-full py-2 text-sm transition-all duration-300',
   defaultVariants: {
      disabled: false,
   },
   variants: {
      disabled: {
         true: 'cursor-not-allowed text-neutral-500/50',
         false: 'text-neutral-800',
      },
   },
});

const tabsStyle = tv(
   {
      slots: {
         tabs: 'mt-5 grid bg-[rgb(236,236,236)] rounded-full p-[0.125rem]',
         glider: 'h-[calc(100%-2px)] rounded-full',
      },
      variants: {
         responsive: {
            initial: {
               tabs: 'mx-0 max-w-none',
            },
            medium: {
               tabs: 'mx-auto max-w-[26.25rem]',
            },
            large: {
               tabs: 'mx-0 max-w-none',
            },
         },
         countOfGridCols: {
            two: {
               tabs: 'grid-cols-2',
            },
            three: {
               tabs: 'grid-cols-3',
            },
         },
      },
   },
   {
      responsiveVariants: ['lg', 'md'],
   },
);

export const TabsContainer = ({ pizza }: { pizza: PizzaType }) => {
   const { tabs, glider } = tabsStyle({
      responsive: { initial: 'initial', md: 'medium', lg: 'large' },
   });
   const { pizzaSize, pizzaVariant, selectedItemIndex } =
      useAppSelector(getPizzaCollectState);
   const dispatch = useAppDispatch();
   return (
      <>
         {/* Size Tabs */}
         <Tabs
            className={tabs({ countOfGridCols: 'three' })}
            selectedItemIndex={selectedItemIndex}
            gliderClassName={glider()}
         >
            {pizzaSizeTabs.map((el, i) => (
               <li key={el.id} role="tab" className="z-10">
                  <button
                     type="button"
                     className={tabButton()}
                     onClick={() => {
                        const updatedSize = pizza.sizes!.find(
                           size => size.size === el.value,
                        );

                        if (updatedSize) {
                           dispatch(
                              selectSize({ pizzaSize: updatedSize, index: i }),
                           );
                        }
                     }}
                  >
                     {el.title}
                  </button>
               </li>
            ))}
         </Tabs>

         {/* Variant Tabs */}
         <Tabs
            className={tabs({ countOfGridCols: 'two' })}
            selectedItemIndex={
               pizzaVariant === PizzaVariant.Traditional ? 0 : 1
            }
            gliderClassName={glider()}
         >
            {pizzaVariantTabs.map(el => {
               const isSmall =
                  pizzaSize.size === PizzaSize.Small &&
                  el.value === PizzaVariant.Thin;
               return (
                  <li key={el.id} role="tab" className="z-10">
                     <button
                        type="button"
                        className={clsx(tabButton({ disabled: isSmall }))}
                        onClick={() => dispatch(selectVariant(el.value))}
                        disabled={isSmall}
                     >
                        {el.title}
                     </button>
                  </li>
               );
            })}
         </Tabs>
      </>
   );
};
