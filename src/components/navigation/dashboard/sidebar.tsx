'use client'
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronLeft, ChevronRight, LayoutDashboard} from "lucide-react";
import { useContext, useState } from "react";
import { SidebarContext } from "@/providers/sidebar-context";
import { Button, buttonVariants } from "@/components/ui/button";
import { sidebarItems } from "@/data/sidebar-items";
import Link from "next/link";
import { cn } from "@/lib/utils";
import NavButton from "./NavButton";
import AnimateHeight from 'react-animate-height'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const Sidebar = () => {
  const pathname = usePathname();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  const [navOpen, setNavOpen] = useState(false) // Mobile
  const [opened, setOpened] = useState<any>(null)


  return (
    <div className="relative text-white">
      <Button size='icon' variant='outline' className='hidden sm:flex absolute h-7 w-7 p-1 rounded-full right-0 top-[4.4rem] justify-center items-center translate-x-[50%]' onClick={toggleSidebarcollapse}>
        {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
      </Button>
      <aside className={ `absolute sm:static transition-all duration-[450ms] h-full bg-[#060606] p-1 ${isCollapsed ? 'w-0 sm:w-[4.5rem]':'w-[14rem]'}`}>
        <ul className={cn('text-white flex gap-y-2 flex-col items-start px-3 mt-28',
          isCollapsed && 'hidden sm:flex'
        )}>
            <li className="border-b-2 border-secondary pb-4 w-full">
        <Link href={'/dashboard'} className={cn(
            buttonVariants({ variant: pathname === '/dashboard' ? "default": 'ghost', size: 'sm' }),
            isCollapsed? 'justify-center' : 'justify-start',
            'w-full')}>
                  <span>
                    <LayoutDashboard className="w-5 h-5"/>
                  </span>
                  <span className={isCollapsed ? 'hidden': 'ml-2'}>Dashboard</span>
                </Link>
            </li>
          {sidebarItems.map(({ id, name, href, icon: Icon, submenus }) => {
            return (
              <li key={id} className="w-full">
                {
                  href ?
                  <NavButton 
                  href={href}
                  pathname={pathname}
                  name={name}
                  Icon={Icon}
                  isCollapsed={isCollapsed}
                  />
                  :
                  <>
             <Button
            variant={'ghost'}
            onClick={() => { setOpened((prev: null | number) => (prev === id ? null : id)) }}
            className={cn(isCollapsed? 'hidden' : 'justify-between','w-full')}>
                 <h3 className="flex">
                  <span>
                    <Icon className="w-5 h-5"/>
                  </span>
                  <span className={isCollapsed ? 'hidden': 'ml-2'}>{name}</span>
                 </h3>
                  <span>
                    <ChevronDown className={cn(
                    "w-5 h-5 transition duration-500",
                    opened === id && 'rotate-180',
                    isCollapsed && 'hidden'
                    )}/>
                  </span>
                </Button>
                <Popover>
                <PopoverTrigger asChild
                >
                  <Button
                      variant='ghost'
                      className={cn('justify-center w-full', !isCollapsed && 'hidden')}>
                      <h3 className="flex">
                        <span>
                          <Icon className="w-5 h-5"/>
                        </span>
                      </h3>
                </Button>
                </PopoverTrigger>
                <PopoverContent className='ml-[4.5rem] -mt-10 w-min'>
                {submenus?.map((item) => (
                          <li key={item.name} className="list-none">
                            <NavButton 
                            href={item.href}
                            pathname={pathname}
                            name={item.name}
                            isCollapsed={false}
                            />
                          </li>
                        ))}
                </PopoverContent>
              </Popover>

                {
                  submenus &&
                  <>
                <AnimateHeight
                      duration={300}
                      height={opened === id && !isCollapsed ? 'auto' : 0}>
                      <ul className={'px-3 mt-1 flex flex-col gap-1'}>
                        {submenus.map((item) => (
                          <li key={item.name}>
                            <NavButton 
                            href={item.href}
                            pathname={pathname}
                            name={item.name}
                            Icon={Icon}
                            isCollapsed={isCollapsed}
                            />
                          </li>
                        ))}
                      </ul>
                    </AnimateHeight>
                    </>
                }
            </>
                }
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;