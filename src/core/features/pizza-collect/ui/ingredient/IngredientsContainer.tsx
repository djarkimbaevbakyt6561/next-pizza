import { tv } from 'tailwind-variants';
import { IngredientType } from 'entities/ingredient';
import { IngredientsCarousel } from './variants/IngredientsCarousel';
import { IngredientsList } from './variants/IngredientsList';

const ingredientsContainerStyle = tv({
   slots: {
      ingredientsTitle: 'text-lg mt-7',
   },
});
export const IngredientsContainer = ({
   ingredients,
   variant,
   selectedIngredients,
}: {
   ingredients: IngredientType[];
   variant: 'pizzaDetails' | 'modal';
   selectedIngredients: Record<string, number | undefined>;
}) => {
   const { ingredientsTitle } = ingredientsContainerStyle();
   return (
      <div>
         <h3 className={ingredientsTitle()}>Add to taste</h3>
         {variant === 'pizzaDetails' ? (
            <IngredientsCarousel
               selectedIngredients={selectedIngredients}
               ingredients={ingredients}
            />
         ) : (
            <IngredientsList
               selectedIngredients={selectedIngredients}
               ingredients={ingredients}
            />
         )}
      </div>
   );
};
