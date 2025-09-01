'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { tv, VariantProps } from 'tailwind-variants';
import { PizzaCartItemType, setCount } from 'entities/cart';
import { pizzaSizeSmText } from 'entities/pizza';
import { useAppDispatch } from 'shared/store/redux';
import { Counter } from 'shared/ui';

const pizzaCartItem = tv({
   slots: {
      container: 'bg-white',
      content: 'flex gap-6',
      textContainer: '',
      counterContainer: 'flex gap-4',
      image: 'h-[4.0625rem]',
      details: 'flex-1',
      title: 'text-base font-bold',
      description: 'first-letter:uppercase text-sm text-neutral-400',
      footer: 'flex justify-between items-center',
   },
   defaultVariants: {
      variant: 'cart',
   },
   variants: {
      variant: {
         order: {
            content: 'items-center',
            textContainer: 'flex-1',
            footer: 'flex-1 flex-row-reverse',
            details: 'flex justify-between items-center',
         },
         cart: {
            container: 'bg-white',
            content: 'p-5',
            description: 'border-b border-neutral-200 pb-3',
            footer: 'mt-3',
         },
      },
   },
});

type PizzaCartItemVariants = VariantProps<typeof pizzaCartItem>;

interface Props extends PizzaCartItemVariants {
   pizza: PizzaCartItemType;
   className?: string;
}

export const PizzaCartItem = ({ pizza, variant, className }: Props) => {
   const dispatch = useAppDispatch();
   const {
      container,
      content,
      textContainer,
      counterContainer,
      image,
      details,
      title,
      description,
      footer,
   } = pizzaCartItem({ variant });

   const pizzaDescription =
      pizza.size +
      ' ' +
      pizzaSizeSmText[pizza.size] +
      ', ' +
      `${pizza.variant} dough`;

   const selectedIngredientsText = pizza.selectedIngredients.length
      ? '+ ' + pizza.selectedIngredients.join(', ')
      : '';

   return (
      <div className={clsx(container(), className)}>
         <div className={content()}>
            <Image
               className={image()}
               src={pizza.imageUrl}
               alt={pizza.title}
               width={65}
               height={65}
            />
            <div className={details()}>
               <div className={textContainer()}>
                  <h5 className={title()}>{pizza.title}</h5>
                  <p className={description()}>
                     {pizzaDescription} <br />
                     {selectedIngredientsText}
                  </p>
               </div>
               <div className={footer()}>
                  <div className={counterContainer()}>
                     <Counter
                        count={pizza.count}
                        size="small"
                        disabled={variant === 'order' && pizza.count === 1}
                        incrementCount={() =>
                           dispatch(
                              setCount({
                                 pizzaId: pizza.id,
                                 count: pizza.count + 1,
                              }),
                           )
                        }
                        decrementCount={() =>
                           dispatch(
                              setCount({
                                 pizzaId: pizza.id,
                                 count: pizza.count - 1,
                              }),
                           )
                        }
                     />
                  </div>
                  <strong>{pizza.price * pizza.count} $</strong>
               </div>
            </div>
         </div>
      </div>
   );
};
