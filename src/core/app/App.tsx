'use client';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { NuqsAdapter } from 'nuqs/adapters/next';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './styles/globals.css';

interface AppProps {
   children: ReactNode;
}

export const App: FC<AppProps> = ({ children }) => {
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
                        Button: {
                           controlHeight: 48,
                           fontSize: 16,
                           fontWeight: 600,
                           borderRadius: 12,
                        },
                        Radio: {
                           radioSize: 22,
                           fontSize: 16,
                           paddingXS: 12,
                           dotSize: 8,
                        },
                        Modal: {
                           contentPadding: 0,
                           contentBg: 'none',
                           boxShadow: 'none',
                        },
                        Carousel: {
                           colorLink: 'black',
                           colorLinkHover: 'black',
                           colorLinkActive: 'black',
                        },
                     },
                  }}
               >
                  {children}
               </ConfigProvider>
            </NuqsAdapter>
         </AntdRegistry>
      </Provider>
   );
};
