import { api as index } from 'shared/api';
import { PizzaType } from '../model/pizza.types';

const api = index.injectEndpoints({
   endpoints: build => ({
      getPizzas: build.query<PizzaType[], void>({
         query: () => {
            return {
               url: '/pizzas',
               method: 'GET',
            };
         },
         providesTags: ['pizza'],
         keepUnusedDataFor: 0,
      }),
      getSearchedPizzas: build.query<PizzaType[], string>({
         query: search => {
            let url = '/pizzas?_limit=6';
            if (search !== '') {
               url = url.concat(`&title_like=${search}`);
            }
            return {
               url,
               method: 'GET',
            };
         },
         providesTags: ['pizza'],
         keepUnusedDataFor: 0,
      }),
      getPizzaById: build.query<PizzaType, string>({
         query: id => ({
            url: `/pizzas/${id}`,
            method: 'GET',
         }),
         providesTags: ['pizza'],
      }),
   }),
});

export const {
   useGetSearchedPizzasQuery,
   useGetPizzasQuery,
   useGetPizzaByIdQuery,
} = api;
