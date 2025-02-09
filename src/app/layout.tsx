import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { NuqsAdapter } from 'nuqs/adapters/next';

const nunito = Nunito({
   subsets: ['latin'],
});

export const metadata: Metadata = {
   title: 'Next Pizza',
   description: 'Order a pizza into your house',
};

export default function RootLayout({
   header,
   children,
}: Readonly<{
   header: React.ReactNode;
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${nunito.className} antialiased`}>
            <NuqsAdapter>
               {header}
               {children}
            </NuqsAdapter>
         </body>
      </html>
   );
}
