'use client';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { tv } from 'tailwind-variants';
import { PizzaType } from 'features/tabs-filter/model/tabs-filter.types';
import { Dropdown } from 'shared/ui';

interface MenuMoreSelectProps {
   className?: string;
   selectedItemIndex: number;
   onSelect: (index: number, tab: PizzaType) => void;
   items: PizzaType[];
}

const menuMoreSelect = tv(
   {
      slots: {
         dropdownContent: '!w-auto',
         dropdownItem:
            'w-full px-4 py-2 text-start font-semibold hover:bg-neutral-100/50',
         selectedDropdownItem:
            'border-l-2 pl-[0.875rem] border-orange-500 bg-orange-50 text-orange-500 hover:!bg-orange-50',
      },
      variants: {
         size: {
            initial: {
               dropdownContent: 'max-h-[10rem] overflow-y-scroll',
            },
            medium: {
               dropdownContent: 'max-h-none overflow-y-hidden',
            },
         },
      },
   },
   {
      responsiveVariants: ['md'],
   },
);

export const MenuMoreSelect: FC<MenuMoreSelectProps> = ({
   className,
   selectedItemIndex,
   onSelect,
   items,
}) => {
   const { dropdownContent, dropdownItem, selectedDropdownItem } =
      menuMoreSelect({
         size: {
            initial: 'initial',
            md: 'medium',
         },
      });
   const [isOpen, setIsOpen] = useState(false);

   const toggleMoreMenuHandler = () => {
      setIsOpen(prev => !prev);
   };

   return (
      <Dropdown
         isOpen={isOpen}
         contentClassName={dropdownContent()}
         labelElement={
            <button
               type="button"
               className={className}
               onClick={toggleMoreMenuHandler}
            >
               More
            </button>
         }
      >
         <ul role="menu">
            {items.map((el, i) => {
               const selectedClass =
                  i === selectedItemIndex && selectedDropdownItem();
               return (
                  <li key={el.id} role="menuitem">
                     <button
                        className={clsx(dropdownItem(), selectedClass)}
                        type="button"
                        onClick={() => onSelect(i, el)}
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
