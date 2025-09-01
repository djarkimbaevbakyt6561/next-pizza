import { Button } from 'antd';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect } from 'react';
import { tv } from 'tailwind-variants';
import { handleOnOpenDrawer } from 'features/cart-drawer';
import { PizzaCollect, selectSize } from 'features/pizza-collect';
import { addPizza, PizzaCartItemType } from 'entities/cart';
import { PizzaSizeType, PizzaType } from 'entities/pizza';
import { BasketIcon } from 'shared/assets';
import { PizzaVariant } from 'shared/enums';
import { useAppDispatch } from 'shared/store/redux';
import pizzaInCartImage from '../../../assets/pizza-in-cart.png';

const pizzaDetailsRightSide = tv(
   {
      slots: {
         detailsContainer: 'flex-1 bg-[rgba(244,241,238,1)] ',
         pizzaCollect:
            'max-h-[26.875rem] pr-4 overflow-y-auto scrollbar scrollbar-thumb-rounded-xl scrollbar-w-[0.625rem] hover:scrollbar-thumb-[rgba(57,57,57,0.3)] scrollbar-thumb-[rgba(57,57,57,0.2)]',
         buttonContainer: '',
         addToCartButton: 'w-full mt-7',
      },
      variants: {
         responsive: {
            initial: {
               imageWrapper: 'pr-0',
               imageContainer: 'p-5 pr-2',
               buttonContainer: 'pr-3',
               detailsContainer: 'rounded-none p-5 pr-2',
            },
            medium: {
               detailsContainer: 'p-10 pr-4',
               buttonContainer: 'pr-6',
            },
            large: {
               detailsContainer: 'rounded-r-[1.875rem]',
            },
         },
      },
   },
   {
      responsiveVariants: ['lg', 'md'],
   },
);

export const PizzaDetailsRightSide = ({
   pizza,
   cartPizzas,
   totalSum,
   selectedIngredients,
   pizzaSize,
   pizzaVariant,
}: {
   pizza: PizzaType;
   selectedIngredients: Record<string, number | undefined>;
   totalSum: number;
   pizzaSize: PizzaSizeType;
   pizzaVariant: PizzaVariant;
   cartPizzas: PizzaCartItemType[];
}) => {
   const { detailsContainer, pizzaCollect, buttonContainer, addToCartButton } =
      pizzaDetailsRightSide({
         responsive: { initial: 'initial', md: 'medium', lg: 'large' },
      });

   const dispatch = useAppDispatch();

   const handleAddPizza = () => {
      const selectedIngredientsArray: string[] = [];

      for (const key in selectedIngredients) {
         selectedIngredientsArray.push(key);
      }

      dispatch(
         addPizza({
            id: pizza.id,
            title: pizza.title,
            imageUrl: pizzaSize.imageUrl,
            size: pizzaSize.size,
            variant: pizzaVariant,
            selectedIngredients: selectedIngredientsArray,
            price: totalSum,
            count: 1,
         }),
      );
   };

   const handeGoToCart = () => {
      dispatch(handleOnOpenDrawer());
   };

   useEffect(() => {
      dispatch(
         selectSize({
            pizzaSize: pizza.sizes![1],
            index: 1,
         }),
      );
   }, [pizza, dispatch]);

   const inCart = cartPizzas.some(cartPizza => cartPizza.id === pizza?.id);
   return (
      <div className={detailsContainer()}>
         {inCart ? (
            <div className={clsx(buttonContainer(), 'flex flex-col h-full')}>
               <div className="flex-1 flex flex-col items-center justify-center">
                  <Image
                     src={pizzaInCartImage}
                     alt="Pizza In Cart"
                     className="mx-auto"
                     width={150}
                     height={150}
                  />
                  <h3 className="text-xl font-bold text-center">
                     Already in Cart
                  </h3>
               </div>
               <Button
                  color="green"
                  variant="solid"
                  className={addToCartButton()}
                  onClick={handeGoToCart}
                  icon={<BasketIcon />}
               >
                  Already in Cart
               </Button>
            </div>
         ) : (
            <>
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
                     onClick={handleAddPizza}
                  >
                     Add to cart for {totalSum} $
                  </Button>
               </div>
            </>
         )}
      </div>
   );
};
