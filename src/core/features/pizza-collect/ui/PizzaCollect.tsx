'use client';
import clsx from 'clsx';
import { useEffect } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import { useAppDispatch, useAppSelector } from 'shared/store/redux';
import { getPizzaCollectState } from '../model/redux/selectors';
import { selectSize } from '../model/redux/slice';
import { PizzaType } from '../model/types';
import { CarouseIngredients } from './ingredient/CarouseIngredients';
import { IngredientsList } from './ingredient/IngredientsList';
import { TabsContainer } from './tabs/TabsContainer';

const pizzaCollectStyle = tv(
   {
      slots: {
         base: '',
         title: 'font-bold',
         description: 'text-neutral-500',
         ingredientsTitle: 'text-lg mt-7',
      },
      defaultVariants: {
         variant: 'modal',
      },
      variants: {
         variant: {
            modal: {
               title: 'text-2xl',
            },
            pizzaDetails: {
               title: 'text-3xl',
               description: 'mt-2',
            },
         },
      },
   },
   {
      responsiveVariants: ['lg'],
   },
);

type PizzaCollectVariants = VariantProps<typeof pizzaCollectStyle>;

interface Props extends PizzaCollectVariants {
   className?: string;
   pizza: PizzaType;
}

export const PizzaCollect = ({ className, pizza, variant }: Props) => {
   const { base, title, description, ingredientsTitle } = pizzaCollectStyle({
      className,
      variant,
   });

   const { pizzaSize, pizzaVariant, selectedIngredients } =
      useAppSelector(getPizzaCollectState);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(selectSize({ pizzaSize: pizza.sizes[1], index: 1 }));
   }, [pizza, dispatch]);

   return (
      <div className={clsx(base(), className)}>
         <h2 className={title()}>{pizza.title}</h2>
         <p className={description()}>
            {pizzaSize.size}, {pizzaVariant} dough, {pizzaSize.weight} gr
         </p>

         {/* Tabs */}
         <TabsContainer pizza={pizza} />

         {/* Ingredients */}
         <div>
            <h3 className={ingredientsTitle()}>Add to taste</h3>
            {variant === 'pizzaDetails' ? (
               <CarouseIngredients
                  selectedIngredients={selectedIngredients}
                  ingredients={pizzaSize.ingredients}
               />
            ) : (
               <IngredientsList
                  selectedIngredients={selectedIngredients}
                  ingredients={pizzaSize.ingredients}
               />
            )}
         </div>
      </div>
   );
};
