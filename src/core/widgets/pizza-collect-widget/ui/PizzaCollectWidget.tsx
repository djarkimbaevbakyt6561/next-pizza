'use client';
import { Button, Modal } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { tv } from 'tailwind-variants';
import {
   PizzaCollect,
   selectPizzaCollectState,
   pizza,
   resetSelection,
   selectTotalSum,
} from 'features/pizza-collect';
import { useAppDispatch, useAppSelector } from 'shared/store/redux';
import BigCircle from '../assets/big-circle.svg';
import MediumCircle from '../assets/medium-circle.svg';
import { imageWidth } from '../model/consts';

const pizzaWidget = tv(
   {
      slots: {
         modal: '!w-auto',
         modalContent: 'flex bg-white shadow-2xl',
         imageContainer: 'flex-1',
         imageWrapper: ' relative h-full flex items-center justify-center',
         bigCircle: 'absolute h-auto',
         mediumCircle: 'absolute',
         detailsContainer: 'flex-1 bg-[rgba(244,241,238,1)] ',
         pizzaCollect:
            'max-h-[26.875rem] pr-4 overflow-y-auto scrollbar scrollbar-thumb-rounded-xl scrollbar-w-[0.625rem] hover:scrollbar-thumb-[rgba(57,57,57,0.3)] scrollbar-thumb-[rgba(57,57,57,0.2)]',
         buttonContainer: '',
         addToCartButton: 'w-full mt-7',
      },
      variants: {
         responsive: {
            initial: {
               modal: '!top-0 !h-screen !p-0 !max-w-none !m-0',
               modalContent: 'flex-col h-screen',
               bigCircle: 'hidden',
               mediumCircle: 'hidden',
               imageWrapper: 'pr-0',
               imageContainer: 'p-5 pr-2',
               buttonContainer: 'pr-3',
               detailsContainer: 'rounded-none p-5 pr-2',
            },
            medium: {
               imageContainer: 'p-10 pr-4',
               detailsContainer: 'p-10 pr-4',
               imageWrapper: 'pr-6',
               buttonContainer: 'pr-6',
            },
            large: {
               modal: '!top-24 !h-auto !max-w-[61rem] !m-auto',
               modalContent: 'flex-row h-auto rounded-[1.875rem]',
               bigCircle: 'block',
               mediumCircle: 'block',
               detailsContainer: 'rounded-r-[1.875rem]',
            },
         },
      },
   },
   {
      responsiveVariants: ['lg', 'md'],
   },
);

export const PizzaCollectWidget = ({}: { pizzaId: number }) => {
   const {
      modal,
      modalContent,
      imageContainer,
      imageWrapper,
      bigCircle,
      mediumCircle,
      detailsContainer,
      pizzaCollect,
      buttonContainer,
      addToCartButton,
   } = pizzaWidget({
      responsive: { initial: 'initial', md: 'medium', lg: 'large' },
   });
   const totalSum = useAppSelector(selectTotalSum);
   const { pizzaSize } = useAppSelector(selectPizzaCollectState);
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
            {/* Left Side (Image) */}
            <div className={imageContainer()}>
               <div className={imageWrapper()}>
                  <BigCircle className={bigCircle()} />
                  {pizzaSize.imageUrl && (
                     <Image
                        src={pizzaSize.imageUrl}
                        alt={pizza.title}
                        width={imageWidth[pizzaSize.size]}
                        height={imageWidth[pizzaSize.size]}
                        className="ml-3 mt-3"
                     />
                  )}
                  <MediumCircle className={mediumCircle()} />
               </div>
            </div>

            {/* Right Side (Details & Button) */}
            <div className={detailsContainer()}>
               <PizzaCollect
                  variant="modal"
                  className={pizzaCollect()}
                  pizza={pizza}
               />
               <div className={buttonContainer()}>
                  <Button
                     color="primary"
                     variant="solid"
                     className={addToCartButton()}
                  >
                     Add to cart for {totalSum} $
                  </Button>
               </div>
            </div>
         </div>
      </Modal>
   );
};
