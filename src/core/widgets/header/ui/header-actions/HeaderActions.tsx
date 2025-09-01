'use client';
import { Button } from 'antd';
import { tv } from 'tailwind-variants';
import {
   CartDrawer,
   getCartIsOpen,
   handleOnCloseDrawer,
   handleOnOpenDrawer,
} from 'features/cart-drawer';
import { Search } from 'features/search';
import {
   getCartPizzas,
   getCartPizzasCount,
   getCartTotalSum,
} from 'entities/cart';
import { BasketIcon } from 'shared/assets';
import { useAppDispatch, useAppSelector } from 'shared/store/redux';

const headerActions = tv(
   {
      slots: {
         searchWrapper: 'flex justify-start',
         search: 'z-30 max-w-[40.3125rem] flex-1',
         basketButton: 'justify-self-end',
         priceText: 'border-r pr-3 border-white/25',
         basketContent: 'flex items-center gap-1',
      },
      variants: {
         size: {
            initial: {
               searchWrapper: 'ml-0 row-start-2 col-start-1 col-end-4',
            },
            medium: {
               searchWrapper: 'ml-10 row-start-1 col-start-2 col-end-auto',
            },
         },
      },
   },
   { responsiveVariants: ['md'] },
);

export const HeaderActions = () => {
   const { searchWrapper, search, basketButton, priceText, basketContent } =
      headerActions({
         size: {
            initial: 'initial',
            md: 'medium',
         },
      });

   const dispatch = useAppDispatch();
   const open = useAppSelector(getCartIsOpen);
   const cartPizzas = useAppSelector(getCartPizzas);
   const cartPizzasCount = useAppSelector(getCartPizzasCount);
   const totalSum = useAppSelector(getCartTotalSum);

   const hasCartItems = cartPizzasCount !== 0;

   return (
      <>
         <div className={searchWrapper()}>
            <Search className={search()} cartPizzas={cartPizzas} />
         </div>

         <Button
            color="primary"
            variant={hasCartItems ? 'solid' : 'outlined'}
            onClick={() => dispatch(handleOnOpenDrawer())}
            className={basketButton()}
         >
            {hasCartItems ? (
               <div className="flex gap-3">
                  <span className={priceText()}>{totalSum} $</span>
                  <span className={basketContent()}>
                     <BasketIcon />
                     {cartPizzasCount}
                  </span>
               </div>
            ) : (
               <BasketIcon />
            )}
         </Button>

         <CartDrawer
            onClose={() => dispatch(handleOnCloseDrawer())}
            open={open}
         />
      </>
   );
};
