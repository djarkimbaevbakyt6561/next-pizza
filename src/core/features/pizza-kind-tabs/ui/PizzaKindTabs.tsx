'use client';
import clsx from 'clsx';
import { useQueryState } from 'nuqs';
import { useEffect, useState } from 'react';
import { tv } from 'tailwind-variants';
import { PizzaKindType } from 'entities/pizza';
import { Tabs } from 'shared/ui';
import { breakpoints, pizzaKindTypes } from '../model/consts';
import { MoreSelect } from './more-select/MoreSelect';
import { TabsFilterSkeleton } from './skeleton/PizzaKindSkeleton';

const tabsFilter = tv(
   {
      slots: {
         tabs: 'bg-neutral-50 px-2',
         tabsItem: 'z-10',
         tabsItemButton:
            'w-full py-4 font-bold transition-all duration-300 text-neutral-800',
         glider: 'shadow-[0px_10px_20px_0px_#0000000D] h-[calc(100%-16px)]',
      },
      variants: {
         size: {
            initial: {
               tabs: 'rounded-lg w-100 justify-around',
               tabsItem: 'flex-1',
               tabsItemButton: 'px-2',
               glider: 'rounded-lg',
            },
            medium: {
               tabs: 'rounded-xl',
               tabsItemButton: 'px-6',
               glider: 'rounded-xl',
            },
         },
      },
   },
   {
      responsiveVariants: ['md'],
   },
);

export const PizzaKindTabs = ({ className }: { className: string }) => {
   const { tabs, tabsItemButton, tabsItem, glider } = tabsFilter({
      size: {
         initial: 'initial',
         md: 'medium',
      },
   });
   const [visibleTabs, setVisibleTabs] = useState<PizzaKindType[]>([]);
   const [hiddenTabs, setHiddenTabs] = useState<PizzaKindType[]>([]);
   const [isLoading, setIsLoading] = useState(true);

   const [selectedItemIndex, setSelectedItemIndex] = useState(0);
   const [selectedTab, setSelectedTab] = useQueryState('type', {
      defaultValue: 'all',
   });
   const minSelectedItemIndex = Math.min(selectedItemIndex, visibleTabs.length);

   const handleSelectItem = (index: number, tab: PizzaKindType) => {
      setSelectedItemIndex(index);
      setSelectedTab(tab.value);
   };

   const handleMoreMenuSelectItem = (index: number, tab: PizzaKindType) => {
      setSelectedItemIndex(visibleTabs.length + index);
      setSelectedTab(tab.value);
   };

   useEffect(() => {
      const updateVisibleCount = () => {
         const mathingBreakpoint = breakpoints.find(
            bp => window.innerWidth > bp.width,
         );
         setVisibleTabs(pizzaKindTypes.slice(0, mathingBreakpoint?.count));
         setHiddenTabs(pizzaKindTypes.slice(mathingBreakpoint?.count));
         setIsLoading(false);
      };
      updateVisibleCount();
      window.addEventListener('resize', updateVisibleCount);
      return () => window.removeEventListener('resize', updateVisibleCount);
   }, []);

   useEffect(() => {
      const index = pizzaKindTypes.findIndex(tab => tab.value === selectedTab);
      setSelectedItemIndex(index);
   }, [selectedTab]);

   if (isLoading) {
      return <TabsFilterSkeleton className={className} />;
   }

   return (
      <Tabs
         className={clsx(tabs(), className)}
         selectedItemIndex={minSelectedItemIndex}
         gliderClassName={glider()}
      >
         {visibleTabs.map((el, i) => {
            return (
               <li key={el.id} className={tabsItem()} role="tab">
                  <button
                     type="button"
                     className={clsx(
                        tabsItemButton(),
                        selectedItemIndex === i && 'text-orange-500',
                     )}
                     onClick={() => handleSelectItem(i, el)}
                  >
                     {el.title}
                  </button>
               </li>
            );
         })}
         <li className={tabsItem()} role="tab">
            <MoreSelect
               selectedItemIndex={selectedItemIndex - visibleTabs.length}
               className={clsx(
                  tabsItemButton(),
                  selectedItemIndex >= visibleTabs.length && 'text-orange-500',
               )}
               items={hiddenTabs}
               onSelect={handleMoreMenuSelectItem}
            />
         </li>
      </Tabs>
   );
};
