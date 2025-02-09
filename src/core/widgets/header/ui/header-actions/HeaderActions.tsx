import { tv } from 'tailwind-variants';
import { Search } from 'features/search';
import { AvatarIcon, BasketIcon } from 'shared/assets';
import { Button } from 'shared/ui';

const actions = tv(
   {
      slots: {
         searchWrapper: ' flex justify-end',
         search: 'z-30 max-w-[47.75rem] flex-1',
         signInButton: 'justify-self-end px-4 h-[3rem]',
         basketButton: 'px-[0.875rem] h-[3rem]',
      },
      variants: {
         size: {
            initial: {
               searchWrapper: 'ml-0 row-start-2 col-start-1 col-end-4',
            },
            medium: {
               searchWrapper: 'ml-10 row-start-1 col-start-2 col-end-auto',
            },
         },
      },
   },
   { responsiveVariants: ['md'] },
);

export const HeaderActions = () => {
   const { searchWrapper, search, signInButton, basketButton } = actions({
      size: {
         initial: 'initial',
         md: 'medium',
      },
   });
   return (
      <>
         <div className={searchWrapper()}>
            <Search className={search()} />
         </div>
         <Button className={signInButton()}>
            <AvatarIcon className="mb-1" />
            Sign In
         </Button>
         <Button className={basketButton()}>
            <BasketIcon />
         </Button>
      </>
   );
};
