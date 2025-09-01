'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { ConfigProvider } from 'antd';
import { FormProvider, useForm } from 'react-hook-form';
import { OrderFormData, orderFormSchema } from 'pages/order';

interface FormProviderProps {
   children: React.ReactNode;
}

export const OrderFormProvider = ({ children }: FormProviderProps) => {
   const methods = useForm<OrderFormData>({
      resolver: yupResolver(orderFormSchema),
      mode: 'onChange',
      defaultValues: {
         personalInfo: {
            name: '',
            surname: '',
            email: '',
            phone: '',
         },
      },
   });

   const onSubmit = (data: OrderFormData) => {
      console.log('All form data:', data);
      // Отправка всех данных
   };

   return (
      <FormProvider {...methods}>
         <ConfigProvider
            theme={{
               cssVar: true,
               components: {
                  Card: {
                     borderRadiusLG: 30,
                     headerHeight: 88,
                     headerPadding: 35,
                     bodyPadding: 0,
                     headerFontSize: 24,
                     fontWeightStrong: 700,
                  },
               },
            }}
         >
            <form
               onSubmit={methods.handleSubmit(onSubmit)}
               className="space-y-6"
            >
               {children}
            </form>
         </ConfigProvider>
      </FormProvider>
   );
};
