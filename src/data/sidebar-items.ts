import { BookText, LucideProps, Bot, Wallet, Workflow } from "lucide-react";
import { ForwardRefExoticComponent } from "react";

interface sidebarSubitem {
    name: string
    href: string
}

interface sidebarItem {
    id?: number
    name: string
    href?: string
    icon: ForwardRefExoticComponent<LucideProps>
    submenus?: sidebarSubitem[]
}

export const sidebarItems: sidebarItem[] = [
    {
      id: 1,
      name: "Pipelines",
      icon: Workflow,
      submenus: [
        {
          name: "All Pipelines",
          href: "/dashboard/pipe",
        },
        {
          name: "New Pipeline",
          href: "/dashboard/pipe/add",
        },
      ]
    },
    {
      id: 2,
      name: "Expenses",
      href: "/dashboard/expenses",
      icon: Wallet,
    },
    {
      id: 3,
      name: "Providers",
      href: "/dashboard/providers",
      icon: Bot,
    },
    {
      id: 4,
      name: "Docs",
      href: "/dashboard/docs",
      icon: BookText,
    },
  ];