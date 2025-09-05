'use client';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { NuqsAdapter } from 'nuqs/adapters/next';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { CartDrawerProvider } from './providers/CartDrawerProvider';
import store from './store';
import './styles/globals.css';

interface AppProps {
   children: ReactNode;
}

export const App = ({ children }: AppProps) => {
   return (
      <Provider store={store}>
         <AntdRegistry>
            <NuqsAdapter>
               <ConfigProvider
                  theme={{
                     cssVar: true,
                     token: {
                        colorPrimary: '#f97316',
                        fontFamily: "Nunito, 'Nunito Fallback'",
                     },
                     components: {
                        Checkbox: {
                           controlInteractiveSize: 22,
                           fontSize: 16,
                           borderRadiusSM: 6,
                           paddingXS: 12,
                        },
                        Input: {
                           fontSize: 16,
                           paddingBlock: 10,
                           borderRadius: 10,
                        },
                        Button: {
                           controlHeight: 48,
                           fontSize: 16,
                           fontWeight: 600,
                           borderRadius: 12,
                           colorBgContainerDisabled: 'none',
                        },
                        Radio: {
                           radioSize: 22,
                           fontSize: 16,
                           paddingXS: 12,
                           dotSize: 8,
                        },
                        Modal: {
                           contentBg: 'none',
                           boxShadow: 'none',
                        },
                        Carousel: {
                           colorLink: 'black',
                           colorLinkHover: 'black',
                           colorLinkActive: 'black',
                        },
                        Drawer: {
                           colorBgElevated: 'rgba(244, 241, 238, 1)',
                           paddingLG: 20,
                           padding: 20,
                           fontSizeLG: 18,
                           footerPaddingBlock: 0,
                           footerPaddingInline: 0,
                        },
                        Pagination: {
                           motionDurationSlow: '0s',
                           itemSize: 45,
                           borderRadius: 15,
                        },
                     },
                  }}
               >
                  {children}
               </ConfigProvider>
               <CartDrawerProvider />
            </NuqsAdapter>
         </AntdRegistry>
      </Provider>
   );
};
