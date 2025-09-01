'use client';
import { Dropdown } from 'antd';
import clsx from 'clsx';
import { useQueryState } from 'nuqs';
import { useState } from 'react';
import { tv } from 'tailwind-variants';
import { SortIcon } from 'shared/assets';
import { sortList } from '../model/types';

const sortSelect = tv(
   {
      slots: {
         dropdown: 'font-bold',
         dropdownItem:
            'w-full px-4 py-2 text-start font-semibold hover:bg-neutral-100/50',
         selectedDropdownItem:
            'border-l-2 pl-[0.875rem] rounded-tr-md rounded-br-md border-orange-500 bg-orange-50 text-orange-500 hover:!bg-orange-50',
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

interface PizzaSortSelectProps {
   className?: string;
}

export const PizzaSortSelect = ({ className }: PizzaSortSelectProps) => {
   const { dropdown, dropdownItem, selectedDropdownItem, button, buttonSpan } =
      sortSelect({
         size: {
            initial: 'initial',
            md: 'medium',
         },
      });
   const [isOpen, setIsOpen] = useState(false);
   const [selectedSort, setSelectedSort] = useQueryState('sort', {
      defaultValue: 'none',
   });

   const toggleSortMenuHandler = () => {
      setIsOpen(prev => !prev);
   };

   const menuItems = sortList.map(el => ({
      key: el.id.toString(),
      label: (
         <button
            type="button"
            className={clsx(
               dropdownItem(),
               el.value === selectedSort && selectedDropdownItem(),
            )}
            onClick={() => setSelectedSort(el.value)}
         >
            {el.title}
         </button>
      ),
   }));

   return (
      <Dropdown
         open={isOpen}
         menu={{ items: menuItems }}
         className={clsx(dropdown())}
      >
         <button
            type="button"
            onClick={toggleSortMenuHandler}
            className={clsx(button(), className)}
         >
            <SortIcon className="mr-3" />
            Sorting:
            <span className={buttonSpan()}>{selectedSort}</span>
         </button>
      </Dropdown>
   );
};
