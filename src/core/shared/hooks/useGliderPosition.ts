import { ReactNode, RefObject, useEffect, useState } from 'react';

export const useGliderPosition = (
   tabsRef: RefObject<HTMLUListElement | null>,
   selectedItemIndex: number,
   tabs: ReactNode,
) => {
   const [state, setState] = useState({ width: 0, left: 0 });

   useEffect(() => {
      const timer = setTimeout(() => {
         const selectedElement = tabsRef.current?.children[
            selectedItemIndex
         ] as HTMLElement;
         if (selectedElement) {
            setState({
               width: selectedElement.offsetWidth,
               left: selectedElement.offsetLeft,
            });
         }
      }, 0);

      return () => clearTimeout(timer);
   }, [selectedItemIndex, tabsRef, tabs]);

   return state;
};
