'use client';
import { Card, Input, Form } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';
import { tv } from 'tailwind-variants';
import { OrderFormData } from 'pages/order/model/types';
import { getNestedError } from 'shared/utils/form';
import { inputFields } from '../model/consts';

const orderPersonalInfo = tv(
   {
      slots: {
         cardContent: 'px-9 py-[1.875rem]',
         fieldsList: 'grid justify-between ',
         fieldItem: 'w-full',
         formItem: 'mb-0',
         label: 'font-bold',
         input: 'w-full',
      },
      variants: {
         layout: {
            initial: {
               fieldsList: 'grid-cols-1',
            },
            medium: {
               fieldsList: 'grid-cols-2 grid-rows-2 gap-x-4',
            },
         },
      },
   },
   {
      responsiveVariants: ['md'],
   },
);

export const OrderPersonalInfoCard = () => {
   const {
      control,
      formState: { errors },
   } = useFormContext<OrderFormData>();

   const { cardContent, fieldsList, fieldItem, formItem, label, input } =
      orderPersonalInfo({ layout: { initial: 'initial', md: 'medium' } });

   return (
      <Card variant="borderless" title="2. Personal Information">
         <div className={cardContent()}>
            <ul className={fieldsList()}>
               {inputFields.map(field => (
                  <li key={field.id} className={fieldItem()}>
                     <Form.Item
                        layout="vertical"
                        label={<span className={label()}>{field.label}</span>}
                        validateStatus={
                           getNestedError(errors, field.name) ? 'error' : ''
                        }
                        help={getNestedError(errors, field.name)}
                        className={formItem()}
                     >
                        <Controller
                           name={field.name}
                           control={control}
                           render={({ field: controllerField }) => (
                              <Input
                                 {...controllerField}
                                 id={field.label}
                                 type={field.type}
                                 placeholder={`Enter your ${field.label.toLowerCase()}`}
                                 status={
                                    getNestedError(errors, field.name)
                                       ? 'error'
                                       : ''
                                 }
                                 className={input()}
                              />
                           )}
                        />
                     </Form.Item>
                  </li>
               ))}
            </ul>
         </div>
      </Card>
   );
};
