import { PizzaCartItemType } from 'entities/cart';
import { PizzaType } from 'entities/pizza';
import { CatalogItem } from './item/CatalogItem';

export const CatalogList = ({
   className,
   pizzas,
   cartPizzas,
}: {
   className?: string;
   pizzas: PizzaType[];
   cartPizzas: PizzaCartItemType[];
}) => {
   return (
      <section className={className}>
         <ul
            className={
               'grid grid-cols-[repeat(auto-fit,minmax(287px,1fr))] justify-between gap-10'
            }
         >
            {pizzas.map(pizza => {
               const foundCartPizza = cartPizzas.find(
                  cartPizza => cartPizza.id === pizza.id,
               );
               return (
                  <CatalogItem
                     key={pizza.id}
                     count={foundCartPizza?.count || 0}
                     pizza={pizza}
                  />
               );
            })}
         </ul>
      </section>
   );
};
