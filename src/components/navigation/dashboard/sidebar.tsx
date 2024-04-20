'use client'
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, LayoutDashboard} from "lucide-react";
import { useContext } from "react";
import styles from '@/styles/sidebar.module.css'
import { SidebarContext } from "@/providers/sidebar-context";
import { appConfig } from "@/data/config";
import { Button, buttonVariants } from "@/components/ui/button";
import { sidebarItems } from "@/data/sidebar-items";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);


  return (
    <div className="relative text-white">
      <Button size='icon' variant='outline' className='h-7 w-7 p-1 rounded-full absolute right-0 top-[4.7rem] flex justify-center items-center translate-x-[50%]' onClick={toggleSidebarcollapse}>
        {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
      </Button>
      <aside className={ `transition-all duration-[450ms] h-full bg-black p-1 ${isCollapsed ? 'w-[5rem]':'w-[14rem]'}`}>
        <div className='w-full flex items-center gap-4 pb-4 my-4 justify-center'>

          <p className={isCollapsed ? 'text-2xl': 'text-2xl'}>{isCollapsed? appConfig.initials:appConfig.name}</p>
        
        </div>
        <ul className='text-white flex gap-y-2 flex-col items-start px-3 mt-14'>
            <li className="border-b-2 border-secondary pb-4 w-full">
        <Link href={'/dashboard/'} className={cn(
            buttonVariants({ variant: "default" }),
            isCollapsed? 'justify-center' : 'justify-start',
            'w-full')}>
                  <span>
                    <LayoutDashboard />
                  </span>
                  <span className={isCollapsed ? 'hidden': 'ml-2'}>Dashboard</span>
                </Link>
            </li>
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li key={name} className="w-full">
                <Link href={href} className={cn(
                buttonVariants({ variant: "ghost" }),
                isCollapsed? 'justify-center' : 'justify-start',
                'w-full')}>
                  <span>
                    <Icon />
                  </span>
                  <span className={isCollapsed ? 'hidden': 'ml-2'}>{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;