'use client';
import clsx from 'clsx';
import { useEffect } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import { useGetIngredientsQuery } from 'entities/ingredient/api';
import { pizzaSizeSmText, PizzaType } from 'entities/pizza';
import { useAppDispatch, useAppSelector } from 'shared/store/redux';
import { getPizzaCollectState } from '../model/redux/selectors';
import { setIngredients } from '../model/redux/slice';
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
         <div>
            <h3 className={ingredientsTitle()}>Add to taste</h3>
            {ingredients.length ? (
               variant === 'pizzaDetails' ? (
                  <CarouseIngredients
                     selectedIngredients={selectedIngredients}
                     ingredients={ingredients}
                  />
               ) : (
                  <IngredientsList
                     selectedIngredients={selectedIngredients}
                     ingredients={ingredients}
                  />
               )
            ) : (
               <h1>Loading</h1>
            )}
         </div>
      </div>
   );
};
