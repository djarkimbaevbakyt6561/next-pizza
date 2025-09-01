import { OrderFormProvider } from 'core/app/providers/OrderFormProvider';
import { Order } from 'pages/order';

const OrderPage = () => {
   return (
      <OrderFormProvider>
         <Order />
      </OrderFormProvider>
   );
};

export default OrderPage;
