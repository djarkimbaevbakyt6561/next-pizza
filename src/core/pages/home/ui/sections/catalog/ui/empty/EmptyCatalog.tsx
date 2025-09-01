import { Empty, Typography } from 'antd';
import Image from 'next/image';
import emptyPizzaImage from '../../../../../assets/empty.png';

export const EmptyCatalog = () => {
   return (
      <Empty
         image={
            <Image
               className="mx-auto"
               src={emptyPizzaImage}
               placeholder="blur"
               alt="Empty box"
               width={160}
               height={160}
            />
         }
         styles={{ image: { height: 160 } }}
         description={
            <Typography.Text className="!text-lg">
               No pizza found, Sry {' :('}
            </Typography.Text>
         }
      />
   );
};
