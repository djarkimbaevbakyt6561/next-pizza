import { api as index } from 'shared/api';
import { IngredientType } from '../model/ingredient.types';

const api = index.injectEndpoints({
   endpoints: build => ({
      getIngredients: build.query<IngredientType[], void>({
         query: () => {
            return {
               url: '/ingredients',
               method: 'GET',
            };
         },
         providesTags: ['ingredient'],
         keepUnusedDataFor: 0,
      }),
   }),
});

export const { useGetIngredientsQuery } = api;
