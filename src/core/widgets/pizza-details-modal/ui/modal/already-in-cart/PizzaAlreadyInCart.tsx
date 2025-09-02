import { Button } from 'antd';
import clsx from 'clsx';
import Image from 'next/image';
import { tv } from 'tailwind-variants';
import { handleOnOpenDrawer } from 'features/cart-drawer';
import { BasketIcon } from 'shared/assets';
import { useAppDispatch } from 'shared/store/redux';
import pizzaInCartImage from '../../../assets/pizza-in-cart.png';

const pizzaAlreadyInCart = tv({
   slots: {
      container: 'flex flex-col',
      content: 'flex-1 flex flex-col items-center justify-center',
      image: 'mx-auto',
      title: 'text-xl font-bold text-center',
      cartButton: 'w-full mt-7',
   },
});

export const PizzaAlreadyInCart = ({ className }: { className?: string }) => {
   const { container, content, image, title, cartButton } =
      pizzaAlreadyInCart();

   const dispatch = useAppDispatch();
   const handeGoToCart = () => {
      dispatch(handleOnOpenDrawer());
   };

   return (
      <div className={clsx(container(), className)}>
         <div className={content()}>
            <Image
               src={pizzaInCartImage}
               alt="Pizza In Cart"
               className={image()}
               width={150}
               height={150}
            />
            <h3 className={title()}>Already in Cart</h3>
         </div>
         <Button
            color="green"
            variant="solid"
            className={cartButton()}
            onClick={handeGoToCart}
            icon={<BasketIcon />}
         >
            Already in Cart
         </Button>
      </div>
   );
};
