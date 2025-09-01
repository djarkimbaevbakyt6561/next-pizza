import { Button, ConfigProvider, Empty, Typography } from 'antd';
import Image from 'next/image';
import { ArrowLeftIcon } from 'shared/assets';
import emptyBoxImage from '../../../assets/empty-box.png';

export const EmptyCart = ({ onClose }: { onClose: () => void }) => {
   return (
      <ConfigProvider
         theme={{
            cssVar: true,
            components: {
               Typography: {
                  colorText: 'rgba(0,0,0,0.4)',
                  fontSizeHeading1: 22,
                  lineHeightHeading1: 1,
               },
            },
         }}
      >
         <Empty
            className="h-full flex flex-col justify-center"
            image={
               <Image
                  className="mx-auto"
                  src={emptyBoxImage}
                  placeholder="blur"
                  alt="Empty box"
                  width={120}
                  height={120}
               />
            }
            styles={{ image: { height: 120 } }}
            description={
               <>
                  <Typography.Title>Cart is empty</Typography.Title>
                  <Typography.Text>
                     Add at least one pizza to complete your order
                  </Typography.Text>
               </>
            }
         >
            <Button onClick={onClose} variant="solid" color="primary">
               <ArrowLeftIcon className="w-4" /> Go back
            </Button>
         </Empty>
      </ConfigProvider>
   );
};
