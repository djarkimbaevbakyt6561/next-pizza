import ContentLoader from 'react-content-loader';

export const IngredientCardSkeleton = ({
   backgroundColor = '#f3f3f3',
   className,
}: {
   backgroundColor?: string;
   className?: string;
}) => (
   <ContentLoader
      speed={3}
      width={130}
      height={193}
      viewBox="0 0 130 193"
      backgroundColor={backgroundColor}
      foregroundColor="#ecebeb"
      className={className}
   >
      <rect x="0" y="0" rx="16" ry="16" width="130" height="193" />
   </ContentLoader>
);
