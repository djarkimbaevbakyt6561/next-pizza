import { Button, ConfigProvider } from 'antd';
import React from 'react';

interface CounterProps {
   count: number;
   setCount: (num: number) => void;
}

export const Counter = ({ count, setCount }: CounterProps) => {
   const incrementCount = () => {
      setCount(count + 1);
   };

   const decrementCount = () => {
      if (count === 0) return;
      setCount(count - 1);
   };
   return (
      <div className="flex items-center gap-4">
         <ConfigProvider
            theme={{
               components: {
                  Button: {
                     controlHeight: 38,
                     fontSize: 22,
                  },
               },
            }}
         >
            <Button
               className="!w-10"
               color="primary"
               variant="outlined"
               onClick={decrementCount}
            >
               -
            </Button>
            <p className="text-xl font-bold">{count}</p>
            <Button
               className="!w-10"
               color="primary"
               variant="outlined"
               onClick={incrementCount}
            >
               +
            </Button>
         </ConfigProvider>
      </div>
   );
};
