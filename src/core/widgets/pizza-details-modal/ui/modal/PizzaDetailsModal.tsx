'use client';
import { Modal, Spin } from 'antd';
import { useRouter } from 'next/navigation';
import { tv } from 'tailwind-variants';
import { PizzaCollectState, resetSelection } from 'features/pizza-collect';
import { PizzaCartItemType } from 'entities/cart';
import { PizzaType } from 'entities/pizza';
import { useAppDispatch } from 'shared/store/redux';
import { PizzaDetailsLeftSide } from './left-side/PizzaDetailsLeftSide';
import { PizzaDetailsRightSide } from './right-side/PizzaDetailsRightSide';
import './PizzaDetailsModal.css';

const pizzaWidget = tv(
   {
      slots: {
         modal: '!w-auto',
         modalContent: 'flex bg-white shadow-2xl',
         spin: '!flex items-center !mx-auto',
      },
      variants: {
         responsive: {
            initial: {
               modal: '!top-0 !h-screen !p-0 !max-w-none !m-0',
               modalContent: 'flex-col h-screen',
               spin: 'h-full',
            },
            medium: {
               spin: 'h-[36.625rem]',
            },
            large: {
               modal: '!top-24 !h-auto !max-w-[61rem] !m-auto',
               modalContent: 'flex-row h-auto rounded-[1.875rem]',
            },
         },
      },
   },
   {
      responsiveVariants: ['lg', 'md'],
   },
);

export const PizzaDetailsModal = ({
   pizza,
   pizzaCollect: { pizzaSize, selectedIngredients, pizzaVariant },
   cartPizzas,
   totalSum,
}: {
   pizza?: PizzaType;
   pizzaCollect: PizzaCollectState;
   cartPizzas: PizzaCartItemType[];
   totalSum: number;
}) => {
   const { modal, modalContent, spin } = pizzaWidget({
      responsive: { initial: 'initial', md: 'medium', lg: 'large' },
   });
   const dispatch = useAppDispatch();
   const router = useRouter();

   const handleClose = () => {
      dispatch(resetSelection());
      router.back();
   };

   return (
      <Modal
         className={modal()}
         open={true}
         onCancel={handleClose}
         footer=""
         getContainer={false}
      >
         <div className={modalContent()}>
            {pizza ? (
               <>
                  {/* Left Side (Image) */}
                  <PizzaDetailsLeftSide pizzaSize={pizzaSize} pizza={pizza} />

                  <PizzaDetailsRightSide
                     pizza={pizza}
                     pizzaSize={pizzaSize}
                     pizzaVariant={pizzaVariant}
                     totalSum={totalSum}
                     cartPizzas={cartPizzas}
                     selectedIngredients={selectedIngredients}
                  />
               </>
            ) : (
               <Spin size="large" className={spin()} />
            )}
         </div>
      </Modal>
   );
};
