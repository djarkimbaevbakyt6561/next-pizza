import { FC } from 'react';
import { tv } from 'tailwind-variants';
import { CheckmarkIcon } from 'shared/assets';

interface CheckboxProps {
   isChecked: boolean | undefined;
   onChange: () => void;
   name: string;
}

const checkbox = tv({
   slots: {
      label: 'flex gap-3 cursor-pointer select-none',
      input: 'hidden',
      checkmark: 'w-6 h-6 rounded-lg flex items-center justify-center',
   },
   variants: {
      state: {
         checked: {
            checkmark: 'bg-orange-500',
         },
         notChecked: {
            checkmark: 'bg-neutral-100',
         },
      },
   },
});

export const Checkbox: FC<CheckboxProps> = ({ isChecked, onChange, name }) => {
   const { label, input, checkmark } = checkbox({
      state: isChecked ? 'checked' : 'notChecked',
   });
   return (
      <label className={label()}>
         <input type="checkbox" className={input()} onChange={onChange} />
         <div className={checkmark()}>{isChecked && <CheckmarkIcon />}</div>
         {name}
      </label>
   );
};
