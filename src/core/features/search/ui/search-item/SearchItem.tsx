'use client';
import { Button } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { tv } from 'tailwind-variants';
import { addPizza, setCount } from 'entities/cart';
import { PizzaType } from 'entities/pizza';
import { CollectIcon } from 'shared/assets';
import { PizzaSize, PizzaVariant } from 'shared/enums';
import { useAppDispatch } from 'shared/store/redux';
import { Counter } from 'shared/ui';
import { highlightText } from '../model/consts';

const searchItem = tv({
   slots: {
      link: 'w-full rounded-md px-4 py-3 flex items-center justify-between hover:bg-orange-50',
      detailsContainer: 'flex items-center gap-4',
      buttonContainer: '',
      imageClass: 'w-[1.875rem] h-[1.875rem]',
      priceClass: 'text-neutral-400',
   },
});

interface SearchItemProps {
   pizza: PizzaType;
   query: string;
   count: number;
   onCollect: () => void;
}

export const SearchItem = ({
   pizza,
   count,
   query,
   onCollect,
}: SearchItemProps) => {
   const { link, detailsContainer, imageClass, priceClass } = searchItem();
   const router = useRouter();
   const dispatch = useAppDispatch();
   const handleOnCollect = () => {
      onCollect();
      router.push(`/pizza/${pizza.id}/details`);
   };

   const handleAddPizza = () => {
      dispatch(
         addPizza({
            id: pizza.id,
            imageUrl: pizza.defaultImageUrl,
            title: pizza.title,
            size: PizzaSize.Medium,
            variant: PizzaVariant.Traditional,
            price: pizza.defaultPrice,
            selectedIngredients: [],
            count: 1,
         }),
      );
   };
   const incrementCount = () => {
      dispatch(
         setCount({
            pizzaId: pizza.id,
            count: count + 1,
         }),
      );
   };
   const decrementCount = () =>
      dispatch(
         setCount({
            pizzaId: pizza.id,
            count: count - 1,
         }),
      );

   return (
      <div className={link()}>
         <div className={detailsContainer()}>
            <Image
               className={imageClass()}
               width={30}
               height={30}
               src={pizza.defaultImageUrl}
               alt={pizza.title}
            />
            <p>{highlightText(pizza.title, query)}</p>
            <p className={priceClass()}>{pizza.defaultPrice} $</p>
         </div>
         <div>
            {pizza.isCollectable ? (
               <Button
                  color="primary"
                  variant="filled"
                  icon={<CollectIcon />}
                  onClick={handleOnCollect}
               >
                  Collect
               </Button>
            ) : (
               <>
                  {count === 0 ? (
                     <Button
                        color="primary"
                        variant="filled"
                        onClick={handleAddPizza}
                        icon={<span className="text-xl">+</span>}
                     >
                        Add
                     </Button>
                  ) : (
                     <Counter
                        count={count}
                        incrementCount={incrementCount}
                        decrementCount={decrementCount}
                     />
                  )}
               </>
            )}
         </div>
      </div>
   );
};
