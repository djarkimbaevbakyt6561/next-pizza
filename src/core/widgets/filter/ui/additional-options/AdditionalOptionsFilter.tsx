'use client';
import { useState } from 'react';
import { tv } from 'tailwind-variants';
import { Checkbox } from 'shared/ui';

const additionalOptions = tv({
   base: 'flex flex-col gap-4',
});

export const AdditionalOptionsFilter = () => {
   const [collect, setCollect] = useState(false);
   const [novelity, setNovelity] = useState(false);

   return (
      <div className={additionalOptions()}>
         <Checkbox
            isChecked={collect}
            onChange={() => setCollect(prev => !prev)}
            name="Collect"
         />
         <Checkbox
            isChecked={novelity}
            onChange={() => setNovelity(prev => !prev)}
            name="Novelty"
         />
      </div>
   );
};
