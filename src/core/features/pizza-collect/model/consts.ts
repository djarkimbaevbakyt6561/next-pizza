import { PizzaSize, PizzaVariant } from 'entities/pizza';
import { PizzaType } from './types';

export const pizzaSizeTabs = [
   { id: 1, title: 'Small', value: PizzaSize.Small },
   { id: 2, title: 'Medium', value: PizzaSize.Medium },
   { id: 3, title: 'Big', value: PizzaSize.Big },
];

export const pizzaVariantTabs = [
   { id: 1, title: 'Traditional', value: PizzaVariant.Traditional },
   { id: 2, title: 'Thin', value: PizzaVariant.Thin },
];

export const pizza: PizzaType = {
   id: 1,
   title: 'Pepperoni Fresh',
   sizes: [
      {
         size: PizzaSize.Small,
         imageUrl:
            'https://media.dodostatic.net/image/r:584x584/11eec6df3420a5cc8a2134da61b347c0.avif',
         weight: 340,
         ingredients: [
            {
               id: 1,
               imageUrl:
                  'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A219740A95611EA0840AA627496',
               name: 'Mocarella',
               price: 2,
            },
            {
               id: 2,
               imageUrl:
                  'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A262427A95111E9DBAE1EE37BBE',
               name: 'Red onion',
               price: 0.5,
            },
            {
               id: 3,
               imageUrl:
                  'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A262427A95111E9EA8A00525C73',
               name: 'Piccles',
               price: 0.5,
            },
            {
               id: 4,
               imageUrl:
                  'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A219740A95611E9DBAE08756607',
               name: 'Spicy jalapeno',
               price: 2,
            },
         ],
         defaultPrice: 5,
      },
      {
         size: PizzaSize.Medium,
         imageUrl:
            'https://media.dodostatic.net/image/r:584x584/11eec6df3632160db519830eefd2c87c.avif',
         weight: 500,

         ingredients: [
            {
               id: 1,
               imageUrl:
                  'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A219740A95611EA0840AA627496',
               name: 'Mocarella',
               price: 2,
            },
            {
               id: 2,
               imageUrl:
                  'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A262427A95111E9DBAE1EE37BBE',
               name: 'Red onion',
               price: 0.5,
            },
            {
               id: 3,
               imageUrl:
                  'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A262427A95111E9DBAE1EE37BBE',
               name: 'Red onion',
               price: 0.5,
            },
            {
               id: 4,
               imageUrl:
                  'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A262427A95111E9DBAE1EE37BBE',
               name: 'Red onion',
               price: 0.5,
            },
            {
               id: 5,
               imageUrl:
                  'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A262427A95111E9DBAE1EE37BBE',
               name: 'Red onion',
               price: 0.5,
            },
            {
               id: 6,
               imageUrl:
                  'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A262427A95111E9DBAE1EE37BBE',
               name: 'Red onion',
               price: 0.5,
            },
            {
               id: 7,
               imageUrl:
                  'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A262427A95111E9DBAE1EE37BBE',
               name: 'Red onion',
               price: 0.5,
            },
            {
               id: 8,
               imageUrl:
                  'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A262427A95111E9EA8A00525C73',
               name: 'Piccles',
               price: 0.5,
            },
            {
               id: 9,
               imageUrl:
                  'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A219740A95611E9DBAE08756607',
               name: 'Spicy jalapeno',
               price: 2,
            },
         ],
         defaultPrice: 6,
      },
      {
         size: PizzaSize.Big,
         imageUrl:
            'https://media.dodostatic.net/image/r:584x584/11eec6df3a309063b845cc070b22fe3d.avif',
         weight: 700,
         ingredients: [
            {
               id: 1,
               imageUrl:
                  'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A219740A95611EA0840AA627496',
               name: 'Mocarella',
               price: 2,
            },
            {
               id: 2,
               imageUrl:
                  'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A262427A95111E9DBAE1EE37BBE',
               name: 'Red onion',
               price: 0.5,
            },
            {
               id: 3,
               imageUrl:
                  'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A262427A95111E9EA8A00525C73',
               name: 'Piccles',
               price: 0.5,
            },
            {
               id: 4,
               imageUrl:
                  'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A219740A95611E9DBAE08756607',
               name: 'Spicy jalapeno',
               price: 2,
            },
         ],
         defaultPrice: 8,
      },
   ],
};
