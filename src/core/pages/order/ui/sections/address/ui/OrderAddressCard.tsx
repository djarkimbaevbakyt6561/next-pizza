// components/order-personal-info-card.tsx
'use client';
import { Card, Input, Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Controller, useFormContext } from 'react-hook-form';
import { OrderFormData } from 'pages/order/model/types';
import { getNestedError } from 'shared/utils/form';

export const OrderAddressCard = () => {
   const {
      control,
      formState: { errors },
   } = useFormContext<OrderFormData>();

   return (
      <Card variant="borderless" title="3. Delievry address">
         <div className="px-9 py-[1.875rem]">
            <Form.Item
               layout="vertical"
               label={<span className="font-bold">Enter address</span>}
               validateStatus={
                  getNestedError(errors, 'address.address') ? 'error' : ''
               }
               help={getNestedError(errors, 'address.address')}
               className="mb-0"
            >
               <Controller
                  name={'address.address'}
                  control={control}
                  render={({ field: controllerField }) => (
                     <Input
                        {...controllerField}
                        id="address"
                        type="text"
                        placeholder="Enter your address"
                        status={
                           getNestedError(errors, 'address.address')
                              ? 'error'
                              : ''
                        }
                        className="w-full"
                     />
                  )}
               />
            </Form.Item>
            <Form.Item
               layout="vertical"
               label={<span className="font-bold">Comment for order</span>}
               validateStatus={
                  getNestedError(errors, 'address.comment') ? 'error' : ''
               }
               help={getNestedError(errors, 'address.comment')}
               className="mb-0"
            >
               <Controller
                  name="address.comment"
                  control={control}
                  render={({ field: controllerField }) => (
                     <TextArea
                        {...controllerField}
                        id="address"
                        placeholder="Please provide additional information for the courier here."
                        status={
                           getNestedError(errors, 'address.comment')
                              ? 'error'
                              : ''
                        }
                        rows={4}
                        autoSize={{ minRows: 2, maxRows: 6 }}
                        className="w-full"
                     />
                  )}
               />
            </Form.Item>
         </div>
      </Card>
   );
};
