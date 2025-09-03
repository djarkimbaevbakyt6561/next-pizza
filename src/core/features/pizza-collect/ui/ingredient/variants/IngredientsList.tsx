import { tv } from 'tailwind-variants';
import { IngredientCard, IngredientType } from 'entities/ingredient';
import { useAppDispatch } from 'shared/store/redux';
import { toggleIngredient } from '../../../model/redux/slice';

const ingredientsList = tv(
   {
      base: 'flex justify-center gap-2 flex-wrap mt-[0.9375rem]',
      variants: {
         responsive: {
            initial: { base: 'mx-auto max-w-[25.5rem]' },
            large: { base: 'mx-0 max-w-none' },
         },
      },
   },
   {
      responsiveVariants: ['lg'],
   },
);

export const IngredientsList = ({
   selectedIngredients,
   ingredients,
}: {
   selectedIngredients: Record<string, number | undefined>;
   ingredients: IngredientType[];
}) => {
   const dispatch = useAppDispatch();

   return (
      <ul
         className={ingredientsList({
            responsive: { lg: 'large', initial: 'initial' },
         })}
      >
         {ingredients.map(el => (
            <IngredientCard
               key={el.id}
               isSelected={!!selectedIngredients[el.name]}
               onClick={() =>
                  dispatch(toggleIngredient({ name: el.name, price: el.price }))
               }
               ingredient={el}
            />
         ))}
      </ul>
   );
};
