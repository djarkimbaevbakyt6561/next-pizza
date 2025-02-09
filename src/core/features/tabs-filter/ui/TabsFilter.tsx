'use client';
import clsx from 'clsx';
import { useQueryState } from 'nuqs';
import { useEffect, useState } from 'react';
import { tv } from 'tailwind-variants';
import { Tabs } from 'shared/ui';
import { breakpoints, pizzaTypes } from '../model/tabs-filter.consts';
import { PizzaType } from '../model/tabs-filter.types';
import { MenuMoreSelect } from './more-select/MenuMoreSelect';
import { TabsFilterSkeleton } from './skeleton/TabsFilterSkeleton';

const tabsFilter = tv(
   {
      slots: {
         tabs: 'bg-neutral-50',
         tabsItem:
            'w-full py-2 font-bold transition-all duration-300 text-neutral-800',
         glider: 'shadow-[0px_10px_20px_0px_#0000000D] h-[calc(100%-16px)]',
      },
      variants: {
         size: {
            initial: {
               tabs: 'p-1 rounded-lg',
               tabsItem: 'px-4',
               glider: 'rounded-lg',
            },
            medium: {
               tabs: 'p-2 rounded-xl',
               tabsItem: 'px-6',
               glider: 'rounded-xl',
            },
         },
      },
   },
   {
      responsiveVariants: ['md'],
   },
);

export const PizzaTabsFilter = () => {
   const { tabs, tabsItem, glider } = tabsFilter({
      size: {
         initial: 'initial',
         md: 'medium',
      },
   });
   const [visibleTabs, setVisibleTabs] = useState<PizzaType[]>([]);
   const [hiddenTabs, setHiddenTabs] = useState<PizzaType[]>([]);
   const [isLoading, setIsLoading] = useState(true);

   const [selectedItemIndex, setSelectedItemIndex] = useState(0);
   const [selectedTab, setSelectedTab] = useQueryState('type', {
      defaultValue: 'all',
   });
   const minSelectedItemIndex = Math.min(selectedItemIndex, visibleTabs.length);

   const handleSelectItem = (index: number, tab: PizzaType) => {
      setSelectedItemIndex(index);
      setSelectedTab(tab.value);
   };

   const handleMoreMenuSelectItem = (index: number, tab: PizzaType) => {
      setSelectedItemIndex(visibleTabs.length + index);
      setSelectedTab(tab.value);
   };

   useEffect(() => {
      const updateVisibleCount = () => {
         const mathingBreakpoint = breakpoints.find(
            bp => window.innerWidth > bp.width,
         );
         setVisibleTabs(pizzaTypes.slice(0, mathingBreakpoint?.count));
         setHiddenTabs(pizzaTypes.slice(mathingBreakpoint?.count));
         setIsLoading(false);
      };
      updateVisibleCount();
      window.addEventListener('resize', updateVisibleCount);
      return () => window.removeEventListener('resize', updateVisibleCount);
   }, []);

   useEffect(() => {
      const index = pizzaTypes.findIndex(tab => tab.value === selectedTab);
      setSelectedItemIndex(index);
   }, [selectedTab]);

   if (isLoading) {
      return <TabsFilterSkeleton />;
   }

   return (
      <Tabs
         className={clsx(tabs())}
         selectedItemIndex={minSelectedItemIndex}
         gliderClassName={glider()}
      >
         {visibleTabs.map((el, i) => {
            return (
               <li key={el.id} className="z-10" role="tab">
                  <button
                     type="button"
                     className={clsx(
                        tabsItem(),
                        selectedItemIndex === i && 'text-orange-500',
                     )}
                     onClick={() => handleSelectItem(i, el)}
                  >
                     {el.title}
                  </button>
               </li>
            );
         })}
         <li className="z-10" role="tab">
            <MenuMoreSelect
               selectedItemIndex={selectedItemIndex - visibleTabs.length}
               className={clsx(
                  tabsItem(),
                  selectedItemIndex >= visibleTabs.length && 'text-orange-500',
               )}
               items={hiddenTabs}
               onSelect={handleMoreMenuSelectItem}
            />
         </li>
      </Tabs>
   );
};
