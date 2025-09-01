import { Button } from 'antd';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { tv } from 'tailwind-variants';
import { PizzaType } from 'entities/pizza';
import { CollectIcon } from 'shared/assets';
import { Counter } from 'shared/ui';
import SettingsIcon from '../../assets/settings.svg';

const pizzaCard = tv({
   slots: {
      base: 'flex flex-col max-w-[17.9375rem]',
      imageContainer: 'relative box-content rounded-2xl bg-orange-50 py-6 px-9',
      settingsLink: 'absolute right-5 top-5',
      title: 'text-2xl font-bold mt-4',
      description: 'first-letter:uppercase text-sm text-gray-400 flex-1 mt-2',
      footer: 'flex items-center justify-between mt-5',
      price: 'text-xl',
      boldPrice: 'font-bold',
      counterContainer: 'flex',
   },
});

interface PizzaCardProps {
   className?: string;
   pizza: PizzaType;
   count: number;
   addPizza: () => void;
   incrementCount: () => void;
   decrementCount: () => void;
}

export const PizzaCard = ({
   className,
   pizza,
   count,
   addPizza,
   incrementCount,
   decrementCount,
}: PizzaCardProps) => {
   const {
      base,
      imageContainer,
      settingsLink,
      title,
      description,
      footer,
      price,
      boldPrice,
      counterContainer,
   } = pizzaCard();

   return (
      <div className={clsx(base(), className)}>
         <div className={imageContainer()}>
            {pizza.isCollectable && (
               <Link
                  href={`/pizza/${pizza.id}/details`}
                  className={settingsLink()}
               >
                  <SettingsIcon />
               </Link>
            )}
            <Image
               src={pizza.defaultImageUrl}
               alt={pizza.title}
               width={211}
               height={211}
            />
         </div>
         <h2 className={title()}>{pizza.title}</h2>
         <p className={description()}>{pizza.ingredients.join(', ')}</p>
         <div className={footer()}>
            {pizza.isCollectable ? (
               <>
                  <p className={price()}>
                     starting at{' '}
                     <span className={boldPrice()}>{pizza.defaultPrice} $</span>
                  </p>
                  <Link href={`/pizza/${pizza.id}/details`}>
                     <Button
                        color="primary"
                        variant="filled"
                        icon={<CollectIcon />}
                     >
                        Collect
                     </Button>
                  </Link>
               </>
            ) : (
               <>
                  <p className={price()}>
                     <span className={boldPrice()}>{pizza.defaultPrice} $</span>
                  </p>
                  <div className={counterContainer()}>
                     {count === 0 ? (
                        <Button
                           color="primary"
                           variant="filled"
                           onClick={addPizza}
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
                  </div>
               </>
            )}
         </div>
      </div>
   );
};
