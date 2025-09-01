'use client';
import { Card } from 'antd';
import { tv } from 'tailwind-variants';
import { PizzaCartItem } from 'features/cart-drawer';
import { getCartPizzas } from 'entities/cart';
import { useAppSelector } from 'shared/store/redux';

const orderCart = tv({
   slots: {
      emptyButton: 'flex items-center gap-2 text-base text-neutral-400',
      trashIcon: 'mb-1',
      scrollContainer:
         'max-h-[22.3125rem] p-9 pr-4 overflow-y-auto scrollbar scrollbar-thumb-rounded-xl scrollbar-w-[0.625rem] hover:scrollbar-thumb-[rgba(57,57,57,0.3)] scrollbar-thumb-[rgba(57,57,57,0.2)]',
      list: 'flex flex-col gap-5',
      listItem: '',
      spaceClass: 'pb-5 border-b border-neutral-200',
   },
});

export const OrderCartCard = () => {
   const { scrollContainer, list, listItem, spaceClass } = orderCart();
   const pizzas = useAppSelector(getCartPizzas);
   return (
      <Card title="1. Cart" variant="borderless">
         <div className={scrollContainer()}>
            <ul className={list()}>
               {pizzas.map((el, i) => {
                  const shouldAddSpace = i !== pizzas.length - 1;

                  return (
                     <li key={el.id} className={listItem()}>
                        <PizzaCartItem
                           pizza={el}
                           variant="order"
                           className={shouldAddSpace ? spaceClass() : ''}
                        />
                     </li>
                  );
               })}
            </ul>
         </div>
      </Card>
   );
};
