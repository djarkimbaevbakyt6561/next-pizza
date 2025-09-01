import { PizzaKindType } from 'entities/pizza';

export const pizzaKindTypes: PizzaKindType[] = [
   { id: 1, title: 'All', value: 'all' },
   { id: 2, title: 'Meat', value: 'meat' },
   { id: 3, title: 'Spicy', value: 'spicy' },
   { id: 4, title: 'Sweet', value: 'sweet' },
   { id: 5, title: 'Vegeterian', value: 'vegeterian' },
   { id: 6, title: 'Chicken', value: 'chicken' },
   { id: 7, title: 'Vegetable', value: 'vegetable' },
   { id: 8, title: 'Cheese', value: 'cheese' },
];

export const breakpoints = [
   { width: 990, count: 6 },
   { width: 883, count: 5 },
   { width: 767, count: 4 },
   { width: 703, count: 7 },
   { width: 595, count: 5 },
   { width: 0, count: 4 },
];
