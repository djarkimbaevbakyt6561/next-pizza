import { IngredientType } from 'entities/ingredient';
import { PizzaSize } from 'entities/pizza';

export type PizzaSizeType = {
   size: PizzaSize;
   imageUrl: string;
   weight: number;
   ingredients: IngredientType[];
   defaultPrice: number;
};

export type PizzaType = {
   id: number;
   title: string;
   sizes: PizzaSizeType[];
};
