import { Carousel, CarouselProps } from 'antd';
import { tv } from 'tailwind-variants';
import { PizzaCard, PizzaCardSkeleton, PizzaType } from 'entities/pizza';

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
   pizzas: PizzaType[] | undefined;
}) => {
   const { carousel } = recommendationsCarousel();
   const loadingArray = Array.from({ length: 4 }, (_, i) => i);
   return (
      <section>
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
                  breakpoint: 1024,
                  settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2,
                  },
               },
               {
                  breakpoint: 666,
                  settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                  },
               },
            ]}
         >
            {pizzas
               ? pizzas.map(el => {
                    return (
                       <PizzaCard
                          className="block mx-auto h-[27.3125rem]"
                          key={el.id}
                          pizza={el}
                       />
                    );
                 })
               : loadingArray.map(el => <PizzaCardSkeleton key={el} />)}
         </Carousel>
      </section>
   );
};
