export default function HomeLayout({
   modal,
   children,
}: Readonly<{
   modal: React.ReactNode;
   children: React.ReactNode;
}>) {
   return (
      <>
         {modal}
         {children}
      </>
   );
}
