import { ReactNode, RefObject, useLayoutEffect, useState } from 'react';

export const useGliderPosition = (
   tabsRef: RefObject<HTMLUListElement | null>,
   selectedItemIndex: number,
   tabs: ReactNode,
) => {
   const [state, setState] = useState({ width: 0, left: 0 });

   useLayoutEffect(() => {
      const selectedElement = tabsRef.current?.children[
         selectedItemIndex
      ] as HTMLElement;
      if (selectedElement) {
         setState({
            width: selectedElement.offsetWidth,
            left: selectedElement.offsetLeft,
         });
      }
   }, [tabsRef, selectedItemIndex, tabs]);

   return state;
};
