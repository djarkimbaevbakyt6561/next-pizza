'use client';
import clsx from 'clsx';
import { useState } from 'react';
import { tv } from 'tailwind-variants';
import { SortIcon } from 'shared/assets';
import { Dropdown } from 'shared/ui';

const sortList = [
   {
      id: 1,
      title: 'By rating',
      value: 'rating',
   },
   {
      id: 2,
      title: 'Cheapest first',
      value: 'cheapest',
   },
   {
      id: 3,
      title: 'Expensive first',
      value: 'expensive',
   },
   {
      id: 4,
      title: 'By popularity',
      value: 'popularity',
   },
];

const sortSelect = tv(
   {
      slots: {
         dropdown: 'font-bold',
         dropdownContent: 'right-0',
         dropdownItem:
            'w-full px-4 py-2 text-start font-semibold hover:bg-neutral-100/50',
         selectedDropdownItem:
            'border-l-2 pl-[0.875rem] border-orange-500 bg-orange-50 text-orange-500 hover:!bg-orange-50',
         button: 'flex items-center bg-neutral-50 px-5 py-4 rounded-xl',
         buttonSpan: 'text-orange-500 ml-1',
      },
      variants: {
         size: {
            initial: {
               button: 'px-3 py-3',
            },
            medium: {
               button: 'px-5 py-4',
            },
         },
      },
   },
   {
      responsiveVariants: ['md'],
   },
);

export const PizzaSortSelect = () => {
   const {
      dropdown,
      dropdownContent,
      dropdownItem,
      selectedDropdownItem,
      button,
      buttonSpan,
   } = sortSelect({
      size: {
         initial: 'initial',
         md: 'medium',
      },
   });
   const [isOpen, setIsOpen] = useState(false);
   const [selectedSort, setSelectedSort] = useState('rating');

   const toggleSortMenuHandler = () => {
      setIsOpen(prev => !prev);
   };

   const changeSelectedSortHandler = (sort: string) => {
      setSelectedSort(sort);
      setIsOpen(false);
   };

   return (
      <Dropdown
         className={dropdown()}
         contentClassName={dropdownContent()}
         isOpen={isOpen}
         labelElement={
            <button
               type="button"
               onClick={toggleSortMenuHandler}
               className={button()}
            >
               <SortIcon className="mr-3" />
               Sorting: <span className={buttonSpan()}>{selectedSort}</span>
            </button>
         }
      >
         <ul role="menu">
            {sortList.map(el => {
               const selectedClass =
                  el.value === selectedSort && selectedDropdownItem();
               return (
                  <li key={el.id} role="menuitem">
                     <button
                        className={clsx(dropdownItem(), selectedClass)}
                        type="button"
                        onClick={() => changeSelectedSortHandler(el.value)}
                     >
                        {el.title}
                     </button>
                  </li>
               );
            })}
         </ul>
      </Dropdown>
   );
};
