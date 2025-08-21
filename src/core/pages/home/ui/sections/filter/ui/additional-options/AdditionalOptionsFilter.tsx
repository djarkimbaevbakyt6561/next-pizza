'use client';
import { Checkbox } from 'antd';
import { tv } from 'tailwind-variants';
import { useAppDispatch, useAppSelector } from 'shared/store/redux';
import { getCollect, getNovelity } from '../../model/redux/selectors';
import { filterActions } from '../../model/redux/slice';

const additionalOptions = tv({
   base: 'flex flex-col gap-4',
});

export const AdditionalOptionsFilter = () => {
   const dispatch = useAppDispatch();
   const collect = useAppSelector(getCollect);
   const novelity = useAppSelector(getNovelity);

   return (
      <div className={additionalOptions()}>
         <Checkbox
            checked={collect}
            name="collect"
            onChange={() => dispatch(filterActions.setCollect(!collect))}
         >
            Collect
         </Checkbox>
         <Checkbox
            checked={novelity}
            onChange={() => dispatch(filterActions.setNovelity(!novelity))}
            name="novelity"
         >
            Novelty
         </Checkbox>
      </div>
   );
};
