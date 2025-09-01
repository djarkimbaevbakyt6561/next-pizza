import { Button, ConfigProvider } from 'antd';
import { tv, VariantProps } from 'tailwind-variants';

const counter = tv({
   slots: {
      container: 'flex items-center ',
      countText: 'font-bold',
      button: '',
   },
   defaultVariants: {
      size: 'normal',
   },
   variants: {
      size: {
         small: {
            container: 'gap-2',
            button: '!text-xl !w-[1.875rem] !h-[1.875rem]',
            countText: 'text-base',
         },
         normal: {
            container: 'gap-4',
            button: '!w-10 !h-10',
            countText: 'text-xl',
         },
      },
   },
});

type CounterVariants = VariantProps<typeof counter>;

interface CounterProps extends CounterVariants {
   count: number;
   disabled?: boolean;
   incrementCount: () => void;
   decrementCount: () => void;
}

export const Counter = ({
   count,
   disabled = false,
   incrementCount,
   decrementCount,
   size,
}: CounterProps) => {
   const { container, countText, button } = counter({ size });

   return (
      <div className={container()}>
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
               className={button()}
               disabled={disabled}
               color="primary"
               variant="outlined"
               onClick={decrementCount}
            >
               -
            </Button>
            <p className={countText()}>{count}</p>
            <Button
               className={button()}
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
