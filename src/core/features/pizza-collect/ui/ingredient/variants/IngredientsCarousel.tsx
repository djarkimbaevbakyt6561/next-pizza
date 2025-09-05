import { Carousel, CarouselProps } from 'antd';
import { tv } from 'tailwind-variants';
import {
   IngredientCard,
   IngredientCardSkeleton,
   IngredientType,
} from 'entities/ingredient';
import { useAppDispatch } from 'shared/store/redux';
import { toggleIngredient } from '../../../model/redux/slice';

const ingredientsCarousel = tv(
   {
      slots: {
         carousel: 'mx-auto',
         ingredientWrapper: 'p-[0.3125rem]',
         ingredientCard: '',
      },
      variants: {
         responsive: {
            initial: {
               carousel: 'max-w-[26.125rem]',
            },
            xLarge: {
               carousel: 'max-w-[35rem]',
            },
         },
      },
   },
   { responsiveVariants: ['lg', 'xl'] },
);

const sampleArrow = tv({
   base: '!text-black',
});

type ArrowProps =
   NonNullable<CarouselProps['prevArrow']> extends React.ReactElement<infer P>
      ? P
      : never;

function SampleArrow({ className, style, onClick }: ArrowProps) {
   return (
      <button
         type="button"
         className={sampleArrow({ className })}
         style={style}
         onClick={onClick}
      />
   );
}

export const IngredientsCarousel = ({
   selectedIngredients,
   ingredients,
}: {
   selectedIngredients: Record<string, number | undefined>;
   ingredients: IngredientType[];
}) => {
   const dispatch = useAppDispatch();
   const { carousel, ingredientWrapper, ingredientCard } = ingredientsCarousel({
      responsive: { initial: 'initial', xl: 'xLarge' },
   });
   const loadingArray = Array.from({ length: 6 }, (_, i) => i);
   return (
      <Carousel
         arrows
         className={carousel()}
         nextArrow={<SampleArrow />}
         prevArrow={<SampleArrow />}
         slidesToShow={4}
         slidesToScroll={4}
         dots={false}
         responsive={[
            {
               breakpoint: 1280,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
               },
            },
            {
               breakpoint: 592,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
               },
            },
            {
               breakpoint: 410,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
               },
            },
         ]}
      >
         {ingredients.length
            ? ingredients.map(item => (
                 <div className={ingredientWrapper()} key={item.id}>
                    <IngredientCard
                       className={ingredientCard()}
                       isSelected={!!selectedIngredients[item.name]}
                       onClick={() =>
                          dispatch(
                             toggleIngredient({
                                name: item.name,
                                price: item.price,
                             }),
                          )
                       }
                       ingredient={item}
                    />
                 </div>
              ))
            : loadingArray.map(el => (
                 <div className={ingredientWrapper()} key={el}>
                    <IngredientCardSkeleton className={ingredientCard()} />
                 </div>
              ))}
      </Carousel>
   );
};
