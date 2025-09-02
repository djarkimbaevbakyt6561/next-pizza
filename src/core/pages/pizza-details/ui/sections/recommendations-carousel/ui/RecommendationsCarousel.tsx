import { Carousel, CarouselProps } from 'antd';
import { tv } from 'tailwind-variants';
import { PizzaCartItemType } from 'entities/cart';
import { PizzaCardSkeleton, PizzaType } from 'entities/pizza';
import { CarouselItem } from './item/CarouselItem';

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
   cartPizzas,
}: {
   pizzas: PizzaType[] | undefined;
   cartPizzas: PizzaCartItemType[];
}) => {
   const loadingArray = Array.from({ length: 4 }, (_, i) => i);
   return (
      <section>
         <Carousel
            arrows
            nextArrow={<SampleArrow />}
            prevArrow={<SampleArrow />}
            infinite
            dots={false}
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
               ? pizzas.map(pizza => {
                    const foundCartPizza = cartPizzas.find(
                       cartPizza => cartPizza.id === pizza.id,
                    );
                    return (
                       <CarouselItem
                          count={foundCartPizza?.count || 0}
                          pizza={pizza}
                          key={pizza.id}
                       />
                    );
                 })
               : loadingArray.map(el => <PizzaCardSkeleton key={el} />)}
         </Carousel>
      </section>
   );
};
