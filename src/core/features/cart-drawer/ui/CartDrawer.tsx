'use client';
import { Drawer } from 'antd';
import { getCartPizzasCount } from 'entities/cart';
import { useAppSelector } from 'shared/store/redux';
import { EmptyCart } from './body/empty/EmptyCart';
import { PizzaCartList } from './body/pizza-list/PizzaCartList';
import { CartDrawerFooter } from './footer/CartDrawerFooter';
import './CartDrawer.css';

export const CartDrawer = ({
   open,
   onClose,
}: {
   open: boolean;
   onClose: () => void;
}) => {
   const countOfPizzas = useAppSelector(getCartPizzasCount);

   return (
      <Drawer
         closable={!!countOfPizzas}
         title={
            countOfPizzas && (
               <h2>
                  There are <strong>{countOfPizzas} items</strong> in your cart
               </h2>
            )
         }
         footer={countOfPizzas && <CartDrawerFooter onClose={onClose} />}
         open={open}
         onClose={onClose}
      >
         {countOfPizzas ? (
            <div className="max-h-[52rem] pr-0 overflow-y-auto scrollbar scrollbar-thumb-rounded-xl scrollbar-w-[0.625rem] hover:scrollbar-thumb-[rgba(57,57,57,0.3)] scrollbar-thumb-[rgba(57,57,57,0.2)]">
               <PizzaCartList />
            </div>
         ) : (
            <EmptyCart onClose={onClose} />
         )}
      </Drawer>
   );
};
