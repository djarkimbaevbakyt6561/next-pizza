'use client';
import { Button, ConfigProvider } from 'antd';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { PizzaCardType } from 'entities/pizza';
import { Counter } from 'shared/ui';
import CollectIcon from '../../assets/collect.svg';
import SettingsIcon from '../../assets/settings.svg';

interface PizzaCardProps {
   className?: string;
   pizza: PizzaCardType;
}

export const PizzaCard = ({ className, pizza }: PizzaCardProps) => {
   const pathname = usePathname();
   const isDetailsPage =
      pathname.includes('/pizza/') && pathname.includes('/details');
   const [count, setCount] = useState(0);

   const incrementCount = () => setCount(prev => prev + 1);

   return (
      <>
         <ConfigProvider
            theme={{
               components: {
                  Button: {
                     controlHeight: 42,
                  },
               },
            }}
         >
            <Link
               href={`/pizza/${pizza.id}/details`}
               replace={isDetailsPage}
               className={clsx('w-[17.8125rem]', className)}
            >
               <div className="relative box-content rounded-2xl bg-orange-50 py-6 px-9">
                  {pizza.isCollectable && (
                     <button className="absolute right-5 top-5">
                        <SettingsIcon />
                     </button>
                  )}
                  <Image
                     src={pizza.imageUrl}
                     alt={pizza.title}
                     width={211}
                     height={211}
                  />
               </div>
               <h2 className="text-2xl font-bold mt-4">{pizza.title}</h2>
               <p className="text-sm text-gray-400 mt-2">{pizza.ingredients}</p>
               <div className="flex items-center justify-between mt-5">
                  {pizza.isCollectable ? (
                     <>
                        <p className="text-xl">
                           starting at{' '}
                           <span className="font-bold">{pizza.price} $</span>
                        </p>
                        <Button
                           color="primary"
                           variant="filled"
                           icon={<CollectIcon />}
                        >
                           Collect
                        </Button>
                     </>
                  ) : (
                     <>
                        <p className="text-xl">
                           <span className="font-bold">{pizza.price} $</span>
                        </p>
                        <div className="h-12 flex">
                           {count === 0 ? (
                              <Button
                                 color="primary"
                                 variant="outlined"
                                 onClick={incrementCount}
                                 icon={<span className="text-xl">+</span>}
                              >
                                 Add
                              </Button>
                           ) : (
                              <Counter
                                 count={count}
                                 setCount={(num: number) => setCount(num)}
                              />
                           )}
                        </div>
                     </>
                  )}
               </div>
            </Link>
         </ConfigProvider>
      </>
   );
};
