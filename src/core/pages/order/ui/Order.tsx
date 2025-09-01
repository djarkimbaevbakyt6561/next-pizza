import { tv } from 'tailwind-variants';
import { OrderAddress } from './sections/address';
import { OrderCartCard } from './sections/cart';
import { OrderPersonalInfoCard } from './sections/personal-information';
import { OrderTotal } from './sections/total';

const order = tv(
   {
      slots: {
         container: 'bg-neutral-100',
         title: 'text-4xl font-bold mb-8',
         grid: 'grid grid-cols-1 gap-8 justify-center',
         leftColumn: 'space-y-6',
      },
      variants: {
         screen: {
            initial: {
               container: 'py-4',
               title: 'text-2xl',
               grid: 'gap-6',
            },
            medium: {
               container: 'py-6',
               title: 'text-3xl',
            },
            large: {
               container: 'py-10',
               title: 'text-4xl',
               grid: 'grid-cols-[minmax(0,752px)_minmax(0,450px)] gap-[45px]',
            },
         },
      },
   },
   {
      responsiveVariants: ['md', 'lg'],
   },
);

export const Order = () => {
   const { container, grid, title, leftColumn } = order({
      screen: {
         initial: 'initial',
         md: 'medium',
         lg: 'large',
      },
   });

   return (
      <div className={container()}>
         <div className="_container">
            <h1 className={title()}>Placing an order</h1>

            <div className={grid()}>
               <div className={leftColumn()}>
                  <OrderCartCard />
                  <OrderPersonalInfoCard />
                  <OrderAddress />
               </div>
               <div>
                  <OrderTotal />
               </div>
            </div>
         </div>
      </div>
   );
};
