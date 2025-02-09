'use client';
import { ChangeEvent, FC, useRef, useState } from 'react';
import { tv } from 'tailwind-variants';
import { CrossIcon } from 'shared/assets';
import { Dropdown } from 'shared/ui';
import MagnifyingGlass from '../assets/magnifying-glass.svg';
import { SearchItem } from './search-item/SearchItem';

interface SearchProps {
   className: string;
}

const search = tv({
   slots: {
      dropdownContent: 'ring-1 ring-black/5',
      inputContainer: 'relative flex items-center',
      input: 'bg-neutral-50 pl-11 pr-9 py-3 rounded-xl w-full  placeholder:text-gray-400/75 focus:outline-none',
      magnifyingGlass: 'absolute left-4',
      removeButton: 'absolute right-0 top-0 bottom-0 pr-4 pl-2 text-gray-400',
      backdrop: 'fixed inset-0 bg-black bg-opacity-60 z-20',
   },
});

export const Search: FC<SearchProps> = ({ className }) => {
   const {
      dropdownContent,
      inputContainer,
      input,
      magnifyingGlass,
      removeButton,
      backdrop,
   } = search();
   const [inputValue, setInputValue] = useState('');
   const inputRef = useRef<HTMLInputElement>(null);

   const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
   };

   const clearInputValue = () => {
      setInputValue('');
      inputRef.current?.focus();
   };

   return (
      <>
         {inputValue.length !== 0 && <div className={backdrop()} />}
         <Dropdown
            className={className}
            contentClassName={dropdownContent()}
            isOpen={inputValue.length !== 0}
            labelElement={
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
            }
         >
            <ul>
               <SearchItem
                  title="Чизбургер-пицца"
                  id="1"
                  price={200}
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1200px-Pizza-3007395.jpg"
                  query={inputValue}
               />
            </ul>
         </Dropdown>
      </>
   );
};
