import { Carousel, CarouselProps } from 'antd';
import { tv } from 'tailwind-variants';
import { PizzaCard, PizzaCardType } from 'entities/pizza';

const recommendationsCarousel = tv(
   {
      slots: {
         carousel: '',
      },
      variants: {
         responsive: {
            // initial: {
            //    carousel: 'mx-auto max-w-[25rem]',
            // },
            // xLarge: {
            //    carousel: 'mx-0 max-w-[35rem]',
            // },
         },
      },
   },
   { responsiveVariants: ['xl'] },
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

export const RecommendationsCarousel = ({
   pizzas,
}: {
   pizzas: PizzaCardType[];
}) => {
   const { carousel } = recommendationsCarousel();
   return (
      <Carousel
         arrows
         className={carousel()}
         nextArrow={<SampleArrow />}
         prevArrow={<SampleArrow />}
         infinite
         slidesToShow={4}
         slidesToScroll={4}
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
         {pizzas.map(el => {
            return (
               <PizzaCard className="block mx-auto" key={el.id} pizza={el} />
            );
         })}
      </Carousel>
   );
};
