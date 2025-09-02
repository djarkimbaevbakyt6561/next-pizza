'use client';
import clsx from 'clsx';
import { useEffect } from 'react';
import { tv } from 'tailwind-variants';
import { useGetIngredientsQuery } from 'entities/ingredient/api';
import { pizzaSizeSmText, PizzaType } from 'entities/pizza';
import { useAppDispatch, useAppSelector } from 'shared/store/redux';
import { getPizzaCollectState } from '../model/redux/selectors';
import { setIngredients } from '../model/redux/slice';
import { IngredientsContainer } from './ingredient/IngredientsContainer';
import { TabsContainer } from './tabs/TabsContainer';

const pizzaCollectStyle = tv(
   {
      slots: {
         base: '',
         title: 'font-bold',
         description: 'text-neutral-500',
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

interface Props {
   className?: string;
   pizza: PizzaType;
   variant?: 'modal' | 'pizzaDetails';
}

export const PizzaCollect = ({
   className,
   pizza,
   variant = 'modal',
}: Props) => {
   const { base, title, description } = pizzaCollectStyle({
      className,
      variant,
   });

   const { ingredients, pizzaSize, pizzaVariant, selectedIngredients } =
      useAppSelector(getPizzaCollectState);
   const dispatch = useAppDispatch();
   const { data: ingredientsFromDB } = useGetIngredientsQuery();

   useEffect(() => {
      dispatch(setIngredients(ingredientsFromDB ?? []));
   }, [ingredientsFromDB]);

   return (
      <div className={clsx(base(), className)}>
         <h2 className={title()}>{pizza.title}</h2>
         <p className={description()}>
            {pizzaSizeSmText[pizzaSize.size]}, {pizzaVariant} dough,{' '}
            {pizzaSize.weight} gr
         </p>

         {/* Tabs */}
         <TabsContainer pizza={pizza} />

         {/* Ingredients */}
         <IngredientsContainer
            ingredients={ingredients}
            selectedIngredients={selectedIngredients}
            variant={variant}
         />
      </div>
   );
};
