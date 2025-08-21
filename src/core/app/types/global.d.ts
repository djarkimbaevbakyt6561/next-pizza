import store from '../store';

declare module '*.svg' {
   import React, { FC } from 'react';

   const SVG: FC<React.SVGProps<SVGSVGElement>>;
   export default SVG;
}

declare global {
   type RootState = ReturnType<typeof store.getState>;
   type AppDispatch = typeof store.dispatch;
}
