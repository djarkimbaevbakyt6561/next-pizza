'use client';
import { Dropdown } from 'antd';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { tv } from 'tailwind-variants';
import { PizzaKindType } from 'entities/pizza';

interface MoreSelectProps {
   className?: string;
   selectedItemIndex: number;
   onSelect: (index: number, tab: PizzaKindType) => void;
   items: PizzaKindType[];
}

const moreSelect = tv({
   slots: {
      dropdownItem:
         'w-full px-4 py-2 text-start font-semibold hover:bg-neutral-100/50',
      selectedDropdownItem:
         'border-l-2 pl-[0.875rem] border-orange-500 bg-orange-50 text-orange-500 hover:!bg-orange-50',
   },
});

export const MoreSelect: FC<MoreSelectProps> = ({
   className,
   selectedItemIndex,
   onSelect,
   items,
}) => {
   const { dropdownItem, selectedDropdownItem } = moreSelect();
   const [isOpen, setIsOpen] = useState(false);

   const toggleMoreMenuHandler = () => {
      setIsOpen(prev => !prev);
   };
   const menuItems = items.map((el, i) => {
      const selectedClass = i === selectedItemIndex && selectedDropdownItem();
      return {
         key: el.id.toString(),
         label: (
            <button
               className={clsx(dropdownItem(), selectedClass)}
               type="button"
               onClick={() => onSelect(i, el)}
            >
               {el.title}
            </button>
         ),
      };
   });
   return (
      <Dropdown open={isOpen} menu={{ items: menuItems }}>
         <button
            type="button"
            className={className}
            onClick={toggleMoreMenuHandler}
         >
            More
         </button>
      </Dropdown>
   );
};
