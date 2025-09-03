import { ConfigProvider } from 'antd';
import { tv } from 'tailwind-variants';
import { PizzaCatalog } from 'pages/home/ui/sections/catalog';
import { PizzaKindTabs } from 'features/pizza-kind-tabs';
import { PizzaSortSelect } from 'features/sort-select';
import { PizzaFilterLayout } from './sections/filter';

const home = tv(
   {
      slots: {
         mainContainer: '_container',
         title: 'font-bold  col-start-1 col-end-4',
         container: 'grid',
         tabsFilter: '',
         sortSelect: '',
         pizzaFilter: '',
         catalog: '',
      },
      variants: {
         size: {
            initial: {
               mainContainer: 'py-4',
               title: 'mb-2 text-2xl',
               container: 'gap-4 grid-cols-[auto_auto]',
               tabsFilter: 'col-start-1 col-end-3',
               sortSelect: 'justify-self-start',
               catalog: 'col-start-1 col-end-3',
               pizzaFilter: 'justify-self-end',
            },
            medium: {
               mainContainer: 'py-6',
               container: 'grid-cols-[240px_auto_auto] gap-x-16 gap-y-8',
               title: 'mb-3 text-3xl ',
               sortSelect: 'justify-self-end',
               tabsFilter: 'justify-self-start col-start-1 col-end-3',
               catalog: 'col-start-2 col-end-4',
               pizzaFilter: '',
            },
            large: {
               mainContainer: 'py-10',
               title: 'mb-6 text-4xl',
            },
         },
      },
   },
   {
      responsiveVariants: ['md', 'lg'],
   },
);

export const Home = () => {
   const {
      mainContainer,
      title,
      container,
      pizzaFilter,
      tabsFilter,
      sortSelect,
      catalog,
   } = home({
      size: {
         initial: 'initial',
         md: 'medium',
         lg: 'large',
      },
   });

   return (
      <div className={mainContainer()}>
         <h1 className={title()}>All pizzas</h1>
         <div className={container()}>
            <ConfigProvider
               theme={{
                  components: {
                     Dropdown: {
                        paddingBlock: 0,
                        controlPaddingHorizontal: 0,
                        fontSize: 16,
                        zIndexPopup: 10,
                     },
                  },
               }}
            >
               <PizzaKindTabs className={tabsFilter()} />
               <PizzaSortSelect className={sortSelect()} />
            </ConfigProvider>
            <PizzaFilterLayout className={pizzaFilter()} />
            <PizzaCatalog className={catalog()} />
         </div>
      </div>
   );
};
