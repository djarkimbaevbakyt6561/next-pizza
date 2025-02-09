'use client';
import { parseAsString, useQueryState } from 'nuqs';
import { ChangeEvent } from 'react';
import { tv } from 'tailwind-variants';

const priceFilter = tv({
   slots: {
      container: 'flex flex-col gap-4',
      inputsGroupContainer: 'grid grid-cols-2 gap-4',
      inputContainer: 'relative flex items-center',
      input: 'border px-4 py-3 pr-1 w-full rounded-xl',
      label: 'absolute right-4 text-neutral-400',
      title: 'font-bold',
   },
});

export const PriceFilter = () => {
   const {
      container,
      title,
      input,
      inputsGroupContainer,
      inputContainer,
      label,
   } = priceFilter();
   const [priceFrom, setPriceFrom] = useQueryState(
      'price-from',
      parseAsString.withDefault(''),
   );
   const [priceTo, setPriceTo] = useQueryState(
      'price-to',
      parseAsString.withDefault(''),
   );

   const handlePriceFromOnChange = (e: ChangeEvent<HTMLInputElement>) =>
      setPriceFrom(e.target.value);
   const handlePriceToOnChange = (e: ChangeEvent<HTMLInputElement>) =>
      setPriceTo(e.target.value);

   return (
      <div className={container()}>
         <h1 className={title()}>Price from and to:</h1>
         <div className={inputsGroupContainer()}>
            <div role="group" className={inputContainer()}>
               <input
                  value={priceFrom}
                  onChange={handlePriceFromOnChange}
                  type="number"
                  className={input()}
               />
               <label aria-label="Price from" className={label()}>
                  ₽
               </label>
            </div>
            <div role="group" className={inputContainer()}>
               <input
                  value={priceTo}
                  type="number"
                  onChange={handlePriceToOnChange}
                  className={input()}
               />
               <label aria-label="Price to" className={label()}>
                  ₽
               </label>
            </div>
         </div>
      </div>
   );
};
