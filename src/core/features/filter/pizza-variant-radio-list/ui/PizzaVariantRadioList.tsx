'use clinet';
import { Radio } from 'antd';
import { tv } from 'tailwind-variants';
import { PizzaVariant } from 'entities/pizza';
import { useAppDispatch, useAppSelector } from 'shared/store/redux';
import { getFilterPizzaVariant } from '../model/redux/selectors';
import { setFilterPizzaVariant } from '../model/redux/slice';

type DoughType = {
   id: number;
   value: PizzaVariant;
   title: string;
};

const doughTypes: DoughType[] = [
   {
      id: 1,
      value: PizzaVariant.Traditional,
      title: 'Traditional',
   },
   {
      id: 2,
      value: PizzaVariant.Thin,
      title: 'Thin',
   },
];

const pizzaVariantFilter = tv({
   slots: {
      container: 'flex flex-col gap-4',
      title: 'font-bold',
   },
});

export const PizzaVariantFilter = () => {
   const { container, title } = pizzaVariantFilter();
   const dispatch = useAppDispatch();
   const doughType = useAppSelector(getFilterPizzaVariant);

   const onPizzaVariantChangeHandler = (selectedItem: PizzaVariant) => {
      dispatch(setFilterPizzaVariant(selectedItem));
   };

   return (
      <div className={container()}>
         <h1 className={title()}>Dough type</h1>
         {doughTypes.map(el => {
            const isChecked = el.value === doughType;
            return (
               <Radio
                  key={el.id}
                  checked={isChecked}
                  onChange={() => onPizzaVariantChangeHandler(el.value)}
                  name="dough-type"
               >
                  {el.title}
               </Radio>
            );
         })}
      </div>
   );
};
