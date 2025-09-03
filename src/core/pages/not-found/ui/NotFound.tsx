import { Button } from 'antd';
import Image from 'next/image';
import { tv } from 'tailwind-variants';
import { ArrowLeftIcon } from 'shared/assets';
import notFoundImage from '../assets/404.png';

const notFound = tv(
   {
      slots: {
         container: '_container flex items-center justify-center',
         content: 'flex flex-col',
         title: 'font-bold',
         description: 'mt-2.5 text-neutral-400',
         buttonsContainer: ' flex gap-4',
         image: '',
      },
      variants: {
         screen: {
            mobile: {
               container: '!mt-4 gap-6 flex-col-reverse',
               title: 'text-2xl text-center',
               description: 'max-w-full text-center',
               buttonsContainer: 'mt-4 justify-center',
               image: 'w-[14.375rem] h-[14.75rem]',
            },
            desktop: {
               container: '!mt-0 h-[calc(100vh-137px)] gap-12 flex-row',
               title: 'text-4xl',
               description: 'max-w-[17.5rem]',
               buttonsContainer: 'mt-11',
               image: 'w-[21.25rem] h-[21.625rem]',
            },
         },
      },
   },
   {
      responsiveVariants: ['sm', 'md'],
   },
);

export const NotFound = () => {
   const { container, content, buttonsContainer, title, description, image } =
      notFound({
         screen: {
            initial: 'mobile',
            md: 'desktop',
         },
      });

   return (
      <div className={container()}>
         <div className={content()}>
            <h1 className={title()}>Page not found</h1>
            <p className={description()}>
               Please check the address you entered is correct or try again
               later.
            </p>
            <div className={buttonsContainer()}>
               <Button
                  color="primary"
                  variant="outlined"
                  icon={<ArrowLeftIcon className="w-4" />}
               >
                  Home
               </Button>
               <Button>Reload</Button>
            </div>
         </div>
         <Image
            src={notFoundImage}
            alt="Not-Found"
            width={340}
            height={346}
            className={image()}
         />
      </div>
   );
};
