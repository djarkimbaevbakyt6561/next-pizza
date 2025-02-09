import { PizzaType } from './tabs-filter.types';

export const pizzaTypes: PizzaType[] = [
   { id: 1, title: 'All', value: 'all' },
   { id: 2, title: 'Meat', value: 'meat' },
   { id: 3, title: 'Spicy', value: 'spicy' },
   { id: 4, title: 'Sweet', value: 'sweet' },
   { id: 5, title: 'Vegeterian', value: 'vegeterian' },
   { id: 6, title: 'Chicken', value: 'chicken' },
   { id: 7, title: 'Vegetable', value: 'vegetable' },
   { id: 8, title: 'Cheese', value: 'cheese' },
   { id: 9, title: 'Kebab', value: 'kebab' },
   { id: 10, title: 'Sushi', value: 'sushi' },
];

export const breakpoints = [
   { width: 897, count: 6 },
   { width: 791, count: 5 },
   { width: 662, count: 4 },
   { width: 567, count: 3 },
   { width: 479, count: 2 },
   { width: 0, count: 1 },
];
