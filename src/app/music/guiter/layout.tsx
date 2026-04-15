export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h2>Guiter layout</h2>
      {children}
    </>
  );
}
