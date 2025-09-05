import { Pagination } from 'antd';
import { tv } from 'tailwind-variants';

const catalogPagination = tv(
   {
      base: 'font-bold',
      variants: {
         screen: {
            initial: 'justify-center !mt-4',
            medium: 'justify-start !mt-10',
         },
      },
   },
   {
      responsiveVariants: ['md'],
   },
);

export const CatalogPagination = ({
   currentPage,
   handleCurrentPageChange,
   total,
}: {
   currentPage: number;
   handleCurrentPageChange: (page: number) => void;
   total: number;
}) => {
   return (
      <Pagination
         current={currentPage}
         onChange={handleCurrentPageChange}
         pageSize={6}
         total={total}
         className={catalogPagination({
            screen: {
               initial: 'initial',
               md: 'medium',
            },
         })}
      />
   );
};
