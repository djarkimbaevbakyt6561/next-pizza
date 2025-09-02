import {
   BaseQueryFn,
   createApi,
   fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
   baseUrl: 'https://json-server-next-pizza.onrender.com',
});
const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
   const result = await baseQuery(args, api, extraOptions);
   return result;
};

export const api = createApi({
   reducerPath: 'api',
   baseQuery: baseQueryExtended,
   refetchOnReconnect: true,
   refetchOnFocus: false,
   tagTypes: ['pizza', 'ingredient'],

   endpoints: () => ({}),
});
