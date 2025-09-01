import React from 'react';
import ContentLoader from 'react-content-loader';

export const PizzaCardSkeleton = () => (
   <ContentLoader
      speed={3}
      width={287}
      height={430}
      viewBox="0 0 287 430"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      uniqueKey="pizza-card-skeleton"
   >
      <rect x="4" y="2" rx="16" ry="16" width="281" height="242" />
      <rect x="7" y="266" rx="0" ry="0" width="302" height="20" />
      <rect x="7" y="306" rx="0" ry="0" width="297" height="66" />
      <rect x="7" y="384" rx="0" ry="0" width="280" height="39" />
      <rect x="236" y="408" rx="0" ry="0" width="2" height="14" />
   </ContentLoader>
);
