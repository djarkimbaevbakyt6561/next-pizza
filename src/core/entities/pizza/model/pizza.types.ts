import { PizzaSize } from 'shared/enums';

export type PizzaKindType = {
   id: number;
   title: string;
   value: string;
};

export type PizzaType = {
   id: number;
   title: string;
   defaultImageUrl: string;
   sizes?: PizzaSizeType[];
   isCollectable: boolean;
   isNew: boolean;
   kinds: string[];
   ingredients: string[];
   defaultPrice: number;
};

export type PizzaSizeType = {
   size: PizzaSize;
   imageUrl: string;
   weight: number;
   price: number;
};

export const pizzaSizeSmText = {
   [PizzaSize.Small]: '25 sm',
   [PizzaSize.Medium]: '35 sm',
   [PizzaSize.Large]: '40 sm',
};
