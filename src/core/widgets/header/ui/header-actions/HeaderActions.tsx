'use client';
import { Button } from 'antd';
import { tv } from 'tailwind-variants';
import { Search } from 'features/search';
import { AvatarIcon, BasketIcon } from 'shared/assets';

const actions = tv(
   {
      slots: {
         searchWrapper: ' flex justify-end',
         search: 'z-30 max-w-[47.75rem] flex-1',
         signInButton: 'justify-self-end ',
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
   const { searchWrapper, search, signInButton } = actions({
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
         <Button
            color="primary"
            className={signInButton()}
            variant="outlined"
            onClick={() => {}}
            icon={<AvatarIcon />}
         >
            Sign In
         </Button>
         <Button color="primary" variant="outlined" onClick={() => {}}>
            <BasketIcon />
         </Button>
      </>
   );
};
