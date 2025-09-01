import Image from 'next/image';
import { tv } from 'tailwind-variants';
import { imageWidth } from 'widgets/pizza-details-modal/model/consts';
import { PizzaSizeType, PizzaType } from 'entities/pizza';
import BigCircle from '../../../assets/big-circle.svg';
import MediumCircle from '../../../assets/medium-circle.svg';

const pizzaDetailsLeftSide = tv(
   {
      slots: {
         imageContainer: 'flex-1',
         imageWrapper: ' relative h-full flex items-center justify-center',
         bigCircle: 'absolute h-auto',
         mediumCircle: 'absolute',
      },
      variants: {
         responsive: {
            initial: {
               bigCircle: 'hidden',
               mediumCircle: 'hidden',
               imageWrapper: 'pr-0',
               imageContainer: 'p-5 pr-2',
            },
            medium: {
               imageContainer: 'p-10 pr-4',
               imageWrapper: 'pr-6',
            },
            large: {
               bigCircle: 'block',
               mediumCircle: 'block',
            },
         },
      },
   },
   {
      responsiveVariants: ['lg', 'md'],
   },
);
export const PizzaDetailsLeftSide = ({
   pizzaSize,
   pizza,
}: {
   pizzaSize: PizzaSizeType;
   pizza: PizzaType;
}) => {
   const { imageContainer, imageWrapper, bigCircle, mediumCircle } =
      pizzaDetailsLeftSide({
         responsive: { initial: 'initial', md: 'medium', lg: 'large' },
      });

   return (
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
   );
};
