import { Empty, Typography } from 'antd';
import Image from 'next/image';
import emptyPizzaImage from '../../assets/empty.png';

export const EmptyPizza = () => {
   return (
      <Empty
         image={
            <Image
               className="mx-auto"
               src={emptyPizzaImage}
               placeholder="blur"
               alt="Empty box"
               width={220}
               height={280}
            />
         }
         styles={{ image: { height: 280 } }}
         description={
            <Typography.Text className="!text-xl font-bold">
               No pizza found, Sry {' :('}
            </Typography.Text>
         }
      />
   );
};
