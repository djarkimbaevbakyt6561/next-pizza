import clsx from 'clsx';
import { FC, JSX } from 'react';
import { tv } from 'tailwind-variants';

interface DropdownProps {
   labelElement: JSX.Element;
   isOpen?: boolean;
   children?: JSX.Element | JSX.Element[];
   className?: string;
   contentClassName?: string;
}

const dropdown = tv({
   slots: {
      base: 'relative',
      open: 'block animate-fadeIn',
      close: 'hidden',
      label: '',
      content:
         'w-full absolute mt-2 py-3 bg-white rounded-md shadow-[0px_10px_20px_0px_#0000000D]',
   },
});

export const Dropdown: FC<DropdownProps> = ({
   labelElement,
   isOpen,
   children,
   className,
   contentClassName,
}) => {
   const { base, label, content, close, open } = dropdown();
   const openClass = isOpen ? open() : close();
   return (
      <div className={clsx(base(), className)}>
         <div className={label()}>{labelElement}</div>
         <div className={clsx(content(), openClass, contentClassName)}>
            {children}
         </div>
      </div>
   );
};
