import { PizzaSize, PizzaVariant } from 'shared/enums';

export type PizzaCartItemType = {
   id: number;
   imageUrl: string;
   title: string;
   size: PizzaSize;
   variant: PizzaVariant;
   selectedIngredients: string[];
   price: number;
   count: number;
};
