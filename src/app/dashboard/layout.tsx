import Sidebar from "@/components/navigation/dashboard/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="h-screen flex relative">
        <Sidebar/>
        {children}
    </section>
  );
}
