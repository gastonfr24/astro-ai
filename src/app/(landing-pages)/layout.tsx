import Navbar from "@/components/navigation/base/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
        <Navbar/>
        {children}
    </section>
  );
}
