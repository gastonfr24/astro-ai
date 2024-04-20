import Navbar from "@/components/navigation/dashboard/navbar";
import Sidebar from "@/components/navigation/dashboard/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar />
    <section className="h-screen flex relative">
        <Navbar />
        <Sidebar/>
        <main className="mt-14 w-full">
        {children}
        </main>
    </section>
   </> 
  );
}
