'use client';
import { Button, Card, ConfigProvider } from 'antd';
import { tv } from 'tailwind-variants';
import { getCartTaxAmount, getCartTotalSum } from 'entities/cart';
import { useAppSelector } from 'shared/store/redux';
import BoxIcon from '../assets/box.svg';
import DeliveryIcon from '../assets/delivery.svg';
import PersentIcon from '../assets/persent.svg';

const orderTotal = tv({
   slots: {
      cardTitle: '',
      mainTitle: 'font-normal text-2xl',
      totalAmount: 'font-bold text-4xl',
      cardContent: 'px-[2.1875rem] py-9',
      list: 'flex flex-col gap-3',
      listItem: 'flex gap-2 items-center',
      priceRow: 'flex-1 flex justify-between',
      dashedLine: 'flex-1 border-b border-dashed mx-2 mb-2',
      buttonContainer: 'px-[2.1875rem] py-9 border-t',
      paymentButton: 'w-full',
   },
});

export const OrderTotal = () => {
   const {
      mainTitle,
      totalAmount,
      cardContent,
      list,
      listItem,
      priceRow,
      dashedLine,
      buttonContainer,
      paymentButton,
   } = orderTotal();

   const totalSum = useAppSelector(getCartTotalSum);
   const taxAmount = useAppSelector(getCartTaxAmount);

   return (
      <ConfigProvider
         theme={{
            components: {
               Card: {
                  headerHeight: 146,
               },
               Button: {
                  controlHeight: 60,
               },
            },
         }}
      >
         <Card
            variant="borderless"
            title={
               <>
                  <h2 className={mainTitle()}>Total:</h2>
                  <h1 className={totalAmount()}>{totalSum + taxAmount} $</h1>
               </>
            }
         >
            <div className={cardContent()}>
               <ul className={list()}>
                  <li className={listItem()}>
                     <BoxIcon />
                     <p className={priceRow()}>
                        Cost:
                        <span className={dashedLine()} />
                        <strong>{totalSum} $</strong>
                     </p>
                  </li>
                  <li className={listItem()}>
                     <PersentIcon />
                     <p className={priceRow()}>
                        Tax:
                        <span className={dashedLine()} />
                        <strong>{taxAmount} $</strong>
                     </p>
                  </li>
                  <li className={listItem()}>
                     <DeliveryIcon />
                     <p className={priceRow()}>
                        Delivery:
                        <span className={dashedLine()} />
                        <strong>Free</strong>
                     </p>
                  </li>
               </ul>
            </div>
            <div className={buttonContainer()}>
               <Button
                  variant="solid"
                  color="primary"
                  className={paymentButton()}
                  htmlType="submit"
               >
                  Proceed to payment
               </Button>
            </div>
         </Card>
      </ConfigProvider>
   );
};
