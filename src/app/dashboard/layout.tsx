import Navbar from "@/components/navigation/dashboard/navbar";
import Sidebar from "@/components/navigation/dashboard/sidebar";
import { SidebarProvider } from "@/providers/sidebar-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar />
    <section className="h-screen flex relative">
          <SidebarProvider>
        <Navbar />
        <Sidebar/>
        <main className="mt-14 w-full">
             {children}
        </main>
          </SidebarProvider>
    </section>
   </> 
  );
}
