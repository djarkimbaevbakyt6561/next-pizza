export type PizzaKindType = {
   id: number;
   title: string;
   value: string;
};

export type PizzaCardType = {
   id: number;
   title: string;
   isCollectable: boolean;
   ingredients: string;
   imageUrl: string;
   price: number;
};

export enum PizzaSize {
   Small = '25 см',
   Medium = '30 см',
   Big = '40 см',
}

export enum PizzaVariant {
   Traditional = 'traditional',
   Thin = 'thin',
}
