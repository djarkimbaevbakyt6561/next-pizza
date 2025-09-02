import { Spin } from 'antd';
import { ReactNode } from 'react';
import { PizzaCartItemType } from 'entities/cart';
import { PizzaType } from 'entities/pizza';
import { SearchItem } from '../search-item/SearchItem';

export function highlightText(text: string, query: string): ReactNode {
   if (!query) return text;
   const regex = new RegExp(`(${query.trim()})`, 'gi');
   const parts = text.trim().split(regex);

   return parts.map((part, index) => {
      return part.toLowerCase() === query.trim().toLowerCase() ? (
         <strong key={index}>{part}</strong>
      ) : (
         part
      );
   });
}

export const menuItems = ({
   isLoading,
   cartPizzas,
   searchedPizzas,
   inputValue,
   clearInputValue,
}: {
   isLoading: boolean;
   cartPizzas: PizzaCartItemType[];
   searchedPizzas?: PizzaType[];
   inputValue: string;
   clearInputValue: () => void;
}) => {
   if (isLoading) {
      return [
         {
            key: 'loading',
            label: (
               <div className="p-4 text-center text-gray-500">
                  <Spin size="small" />
               </div>
            ),
         },
      ];
   }

   if (!searchedPizzas || searchedPizzas.length === 0) {
      return [
         {
            key: 'empty',
            label: (
               <div className="p-4 text-center text-gray-500">
                  No results found
               </div>
            ),
         },
      ];
   }

   return searchedPizzas.map(pizza => {
      const foundCartPizza = cartPizzas.find(
         cartPizza => cartPizza.id === pizza.id,
      );
      return {
         key: pizza.id,
         label: (
            <SearchItem
               count={foundCartPizza?.count || 0}
               pizza={pizza}
               query={inputValue}
               onCollect={clearInputValue}
            />
         ),
      };
   });
};
