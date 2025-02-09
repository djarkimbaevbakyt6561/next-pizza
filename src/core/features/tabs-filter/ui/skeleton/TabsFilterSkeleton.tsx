import ContentLoader from 'react-content-loader';
import { tv } from 'tailwind-variants';

const tabsFilterSkeleton = tv(
   {
      variants: {
         size: {
            initial: 'h-[3rem]',
            medium: 'h-[3.5rem]',
         },
      },
   },
   { responsiveVariants: ['md'] },
);

export const TabsFilterSkeleton = () => {
   return (
      <ContentLoader
         speed={3}
         width={675}
         height={56}
         viewBox="0 0 675 56"
         preserveAspectRatio="none"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
         uniqueKey="tabs-filter-skeleton"
         className={tabsFilterSkeleton({
            size: { initial: 'initial', md: 'medium' },
         })}
      >
         <rect x="0" y="0" rx="12" ry="12" width="100%" height="56" />
      </ContentLoader>
   );
};
