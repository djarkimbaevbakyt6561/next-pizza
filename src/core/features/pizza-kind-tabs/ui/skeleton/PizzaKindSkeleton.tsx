import clsx from 'clsx';
import { FC } from 'react';
import ContentLoader from 'react-content-loader';
import { tv } from 'tailwind-variants';

const tabsFilterSkeleton = tv(
   {
      base: 'h-[3.5rem]',
      variants: {
         size: {
            initial: 'w-full',
            large: 'w-auto',
         },
      },
   },
   { responsiveVariants: ['lg'] },
);

interface TabsFilterSkeletonProps {
   className?: string;
}

export const TabsFilterSkeleton: FC<TabsFilterSkeletonProps> = ({
   className,
}) => {
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
         className={clsx(
            tabsFilterSkeleton({
               size: {
                  initial: 'initial',
                  lg: 'large',
               },
            }),
            className,
         )}
      >
         <rect x="0" y="0" rx="12" ry="12" width="100%" height="56" />
      </ContentLoader>
   );
};
