import { Button } from 'antd';
import Image from 'next/image';
import { useEffect } from 'react';
import { tv } from 'tailwind-variants';
import { PizzaAlreadyInCart } from 'widgets/pizza-details-modal';
import {
   PizzaCollect,
   getPizzaCollectState,
   selectSize,
   getTotalSum,
} from 'features/pizza-collect';
import { addPizza, PizzaCartItemType } from 'entities/cart';
import { PizzaType } from 'entities/pizza';
import { useAppDispatch, useAppSelector } from 'shared/store/redux';

const pizzaDetailsWidget = tv(
   {
      slots: {
         content: 'flex flex-col',
         image: 'w-full h-full object-contain bg-orange-50 rounded-2xl',
         detailsContainer: 'flex flex-col justify-between',
         addButton: 'max-w-[18.75rem] w-full',
      },
      variants: {
         responsive: {
            initial: {
               content: 'my-4 flex-col gap-4 ',
               detailsContainer: 'gap-4',
               addButton: 'max-w-none',
               image: 'p-4 max-w-none max-h-[20rem]',
            },
            medium: {
               content: 'my-6 gap-6',
               addButton: 'mx-auto max-w-[25rem]',
               image: 'p-9 max-h-[25rem]',
            },
            large: {
               content: 'mt-10 gap-8 flex-row ',
               image: 'h-auto max-h-none max-w-[35.625rem]',
            },
            xLarge: {
               content: 'gap-11',
            },
         },
      },
   },

   {
      responsiveVariants: ['md', 'lg', 'xl'],
   },
);

export const PizzaDetailsWidget = ({
   pizza,
   cartPizzas,
}: {
   pizza: PizzaType;
   cartPizzas: PizzaCartItemType[];
}) => {
   const { content, image, detailsContainer, addButton } = pizzaDetailsWidget({
      responsive: {
         initial: 'initial',
         md: 'medium',
         lg: 'large',
         xl: 'xLarge',
      },
   });
   const totalSum = useAppSelector(getTotalSum);
   const { pizzaSize, selectedIngredients, pizzaVariant } =
      useAppSelector(getPizzaCollectState);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(
         selectSize({
            pizzaSize: pizza.sizes![1],
            index: 1,
         }),
      );
   }, [pizza, dispatch]);

   const inCart = cartPizzas.some(cartPizza => cartPizza.id === pizza.id);

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

   return (
      <section className={content()}>
         <>
            {pizzaSize.imageUrl && (
               <Image
                  className={image()}
                  src={pizzaSize.imageUrl}
                  alt={pizza.title}
                  width={500}
                  height={500}
               />
            )}
            {inCart ? (
               <PizzaAlreadyInCart className="flex-1 mx-auto max-w-[25rem] w-full" />
            ) : (
               <div className={detailsContainer()}>
                  <PizzaCollect pizza={pizza} variant="pizzaDetails" />
                  <Button
                     color="primary"
                     variant="solid"
                     className={addButton()}
                     onClick={handleAddPizza}
                  >
                     Add to cart for {totalSum} $
                  </Button>
               </div>
            )}
         </>
      </section>
   );
};
