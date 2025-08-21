'use client';
import clsx from 'clsx';
import { FC, ReactNode, useRef } from 'react';
import { tv } from 'tailwind-variants';
import { useGliderPosition } from 'shared/hooks';

interface TabsProps {
   className?: string;
   selectedItemIndex: number;
   gliderClassName?: string;
   children: ReactNode;
}

const tabs = tv({
   slots: {
      base: 'flex relative items-center',
      glider: 'bg-white absolute transition-all duration-300',
   },
});

export const Tabs: FC<TabsProps> = ({
   className,
   selectedItemIndex,
   gliderClassName,
   children,
}) => {
   const { base, glider } = tabs();
   const tabsRef = useRef<HTMLUListElement>(null);

   const gliderState = useGliderPosition(tabsRef, selectedItemIndex, children);

   return (
      <ul ref={tabsRef} className={clsx(base(), className)} role="tablist">
         {children}
         <div
            className={clsx(glider(), gliderClassName)}
            style={{
               width: gliderState.width,
               left: gliderState.left,
            }}
         />
      </ul>
   );
};
