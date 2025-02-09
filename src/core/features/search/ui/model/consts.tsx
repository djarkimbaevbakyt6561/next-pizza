import { ReactNode } from 'react';

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
