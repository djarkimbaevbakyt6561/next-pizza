'use client';
import { ChangeEvent } from 'react';
import { tv } from 'tailwind-variants';
import { useAppDispatch, useAppSelector } from 'shared/store/redux';
import { getFilterPrice } from '../model/redux/selectors';
import { setFilterPrice } from '../model/redux/slice';

const priceRange = tv({
   slots: {
      container: 'flex flex-col gap-4',
      inputsGroupContainer: 'grid grid-cols-2 gap-4',
      inputContainer: 'relative flex items-center',
      input: 'border px-4 py-3 pr-6 w-full rounded-xl',
      label: 'absolute right-4 text-neutral-400',
      title: 'font-bold',
   },
});

export const PriceRange = () => {
   const {
      container,
      title,
      input,
      inputsGroupContainer,
      inputContainer,
      label,
   } = priceRange();
   const price = useAppSelector(getFilterPrice);
   const dispatch = useAppDispatch();

   const handlePriceFromOnChange = (e: ChangeEvent<HTMLInputElement>) =>
      dispatch(setFilterPrice({ ...price, from: e.target.value }));
   const handlePriceToOnChange = (e: ChangeEvent<HTMLInputElement>) =>
      dispatch(setFilterPrice({ ...price, to: e.target.value }));

   return (
      <div className={container()}>
         <h3 className={title()}>Price from and to:</h3>
         <div className={inputsGroupContainer()}>
            <div role="group" className={inputContainer()}>
               <input
                  value={price.from}
                  onChange={handlePriceFromOnChange}
                  type="number"
                  className={input()}
               />
               <label aria-label="Price from" className={label()}>
                  s
               </label>
            </div>
            <div role="group" className={inputContainer()}>
               <input
                  value={price.to}
                  type="number"
                  onChange={handlePriceToOnChange}
                  className={input()}
               />
               <label aria-label="Price to" className={label()}>
                  s
               </label>
            </div>
         </div>
      </div>
   );
};
