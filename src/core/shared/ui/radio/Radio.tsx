import { FC } from 'react';
import { tv } from 'tailwind-variants';

interface RadioProps {
   isChecked: boolean | undefined;
   onChange: () => void;
   title: string;
   name: string;
}

const radio = tv({
   slots: {
      label: 'flex gap-3 cursor-pointer select-none',
      input: 'hidden',
      checkmark: 'w-6 h-6 rounded-full flex items-center justify-center',
      circle: 'w-[0.625rem] h-[0.625rem] rounded-full bg-white',
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

export const Radio: FC<RadioProps> = ({ isChecked, onChange, title, name }) => {
   const { label, input, checkmark, circle } = radio({
      state: isChecked ? 'checked' : 'notChecked',
   });
   return (
      <label className={label()}>
         <input
            name={name}
            type="radio"
            className={input()}
            onChange={onChange}
         />
         <div className={checkmark()}>
            {isChecked && <span className={circle()} />}
         </div>
         {title}
      </label>
   );
};
