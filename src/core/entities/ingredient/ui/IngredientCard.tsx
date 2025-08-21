import clsx from 'clsx';
import Image from 'next/image';
import { tv } from 'tailwind-variants';
import SelectedIcon from '../assets/selected.svg';
import { IngredientType } from '../model/ingredient.types';

const ingredientCard = tv({
   base: 'relative flex flex-col justify-between items-center px-2 py-2 h-[12.0625rem] cursor-pointer bg-white rounded-2xl border-2 border-white transition-colors duration-150',
   variants: {
      selected: {
         true: 'border-orange-500',
      },
      focused: {
         true: 'focus:outline-1 focus:outline-orange-300',
      },
   },
});

const selectedIcon = tv({
   base: 'absolute right-3 opacity-0 select-none duration-150 transition-opacity text-orange-500',
   variants: {
      visible: {
         true: 'opacity-100',
      },
   },
});

export const IngredientCard = ({
   className,
   isSelected,
   onClick,
   ingredient,
}: {
   className?: string;
   isSelected: boolean;
   onClick: (ingredientId: number) => void;
   ingredient: IngredientType;
}) => {
   const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
         e.preventDefault();
         onClick(ingredient.id);
      }
   };

   return (
      <div
         role="checkbox"
         aria-checked={isSelected}
         tabIndex={0}
         onClick={() => onClick(ingredient.id)}
         onKeyDown={handleKeyDown}
         className={clsx(
            ingredientCard({
               selected: isSelected,
               focused: !isSelected,
            }),
            className,
         )}
      >
         <div>
            <SelectedIcon className={selectedIcon({ visible: isSelected })} />
            <Image
               src={ingredient.imageUrl}
               alt={ingredient.name}
               width={110}
               height={110}
            />
            <h5 className="text-xs mt-1">{ingredient.name}</h5>
         </div>
         <p className="text-sm">{ingredient.price} $</p>
      </div>
   );
};
