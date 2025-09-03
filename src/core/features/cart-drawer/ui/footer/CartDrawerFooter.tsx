'use client';
import { Button, ConfigProvider } from 'antd';
import { useRouter } from 'next/navigation';
import { tv } from 'tailwind-variants';
import { getCartTaxAmount, getCartTotalSum } from 'entities/cart';
import { ArrowRightIcon } from 'shared/assets';
import { useAppSelector } from 'shared/store/redux';

const cartDrawerFooter = tv({
   slots: {
      container: 'bg-white p-9 !pb-[1.875rem] h-full text-base',
      priceRow: 'flex justify-between',
      dashedLine: 'flex-1 border-b border-dashed mx-2 mb-2',
      orderButton: 'w-full mt-4',
   },
});

export const CartDrawerFooter = ({ onClose }: { onClose: () => void }) => {
   const { container, priceRow, dashedLine, orderButton } = cartDrawerFooter();

   const totalSum = useAppSelector(getCartTotalSum);
   const taxAmount = useAppSelector(getCartTaxAmount);
   const router = useRouter();

   const handleGoToOrderPage = () => {
      router.push('/order');
      onClose();
   };

   return (
      <div className={container()}>
         <p className={priceRow()}>
            Total:
            <span className={dashedLine()} />
            <strong>{totalSum} $</strong>
         </p>
         <p className={priceRow()}>
            Tax:
            <span className={dashedLine()} />
            <strong>{taxAmount} $</strong>
         </p>
         <ConfigProvider
            theme={{
               cssVar: true,
               components: {
                  Button: {
                     controlHeight: 55,
                  },
               },
            }}
         >
            <Button
               color="primary"
               variant="solid"
               className={orderButton()}
               onClick={handleGoToOrderPage}
            >
               Place an order <ArrowRightIcon className="w-4" />
            </Button>
         </ConfigProvider>
      </div>
   );
};
