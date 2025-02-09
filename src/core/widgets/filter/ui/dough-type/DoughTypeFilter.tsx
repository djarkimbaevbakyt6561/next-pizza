'use clinet';
import { useState } from 'react';
import { tv } from 'tailwind-variants';
import { DoughType } from 'entities/doughType';
import { Radio } from 'shared/ui';

const doughTypes: DoughType[] = [
   {
      id: 1,
      value: 'traditional',
      title: 'Traditional',
   },
   {
      id: 2,
      value: 'thin',
      title: 'Thin',
   },
];

const doughTypeFilter = tv({
   slots: {
      container: 'flex flex-col gap-4',
      title: 'font-bold',
   },
});

export const DoughTypeFilter = () => {
   const { container, title } = doughTypeFilter();
   const [doughType, setDoughType] = useState('');

   const onDoughTypeChangeHandler = (selectedItem: string) => {
      setDoughType(selectedItem);
   };

   return (
      <div className={container()}>
         <h1 className={title()}>Dough type</h1>
         {doughTypes.map(el => {
            const isChecked = el.value === doughType;
            return (
               <Radio
                  key={el.id}
                  isChecked={isChecked}
                  title={el.title}
                  onChange={() => onDoughTypeChangeHandler(el.value)}
                  name="dough-type"
               />
            );
         })}
      </div>
   );
};
