import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { App } from '../core/app/App';
import '@ant-design/v5-patch-for-react-19';

const nunito = Nunito({
   subsets: ['latin'],
});

export const metadata: Metadata = {
   title: 'Next Pizza',
   description: 'Order a pizza into your house',
};

export default function RootLayout({
   header,
   modal,
   children,
}: Readonly<{
   header: React.ReactNode;
   modal: React.ReactNode;
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${nunito.className} antialiased`}>
            <App>
               <NextTopLoader showSpinner={false} color="#f97316 " height={2} />
               {header}
               {modal}
               <main>{children}</main>
            </App>
         </body>
      </html>
   );
}
