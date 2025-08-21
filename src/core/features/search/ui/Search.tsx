'use client';
import { ConfigProvider, Dropdown } from 'antd';
import { ChangeEvent, FC, useRef, useState } from 'react';
import { tv } from 'tailwind-variants';
import { CrossIcon } from 'shared/assets';
import MagnifyingGlass from '../assets/magnifying-glass.svg';
import { SearchItem } from './search-item/SearchItem';

interface SearchProps {
   className: string;
}

const search = tv({
   slots: {
      inputContainer: 'relative flex items-center',
      input: 'bg-neutral-50 pl-11 pr-9 py-3 rounded-xl w-full  placeholder:text-gray-400/75 focus:outline-none',
      magnifyingGlass: 'absolute left-4',
      removeButton: 'absolute right-0 top-0 bottom-0 pr-4 pl-2 text-gray-400',
      backdrop: 'fixed inset-0 bg-black bg-opacity-60 z-20',
   },
});

export const Search: FC<SearchProps> = ({ className }) => {
   const { inputContainer, input, magnifyingGlass, removeButton, backdrop } =
      search();
   const [inputValue, setInputValue] = useState('');
   const inputRef = useRef<HTMLInputElement>(null);

   const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
   };

   const clearInputValue = () => {
      setInputValue('');
      inputRef.current?.focus();
   };
   const menu = [
      {
         key: '1',
         label: (
            <SearchItem
               title="Cheeseburger pizza"
               id="1"
               price={5}
               image="https://media.dodostatic.net/image/r:584x584/11ee7d6025e8bf7c96ffc8c8aa80fe57.avif"
               query={inputValue}
            />
         ),
      },
   ];

   return (
      <ConfigProvider
         theme={{
            components: {
               Dropdown: {
                  paddingBlock: 0,
                  controlPaddingHorizontal: 0,
               },
            },
         }}
      >
         {inputValue.length !== 0 && <div className={backdrop()} />}
         <Dropdown
            className={className}
            open={inputValue.length !== 0}
            menu={{ items: menu }}
         >
            <div className={inputContainer()}>
               <MagnifyingGlass className={magnifyingGlass()} />
               <input
                  ref={inputRef}
                  className={input()}
                  type="text"
                  placeholder="Pizza search..."
                  value={inputValue}
                  onChange={handleSearchInputChange}
               />
               {inputValue.length !== 0 && (
                  <button
                     className={removeButton()}
                     type="button"
                     onClick={clearInputValue}
                  >
                     <CrossIcon />
                  </button>
               )}
            </div>
         </Dropdown>
      </ConfigProvider>
   );
};
