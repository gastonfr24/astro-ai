import { Contact, Home, LucideProps, MailIcon, User } from "lucide-react";
import { ForwardRefExoticComponent } from "react";

interface sidebarItem {
    name: string
    href: string
    icon: ForwardRefExoticComponent<LucideProps>
}

export const sidebarItems: sidebarItem[] = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "About",
      href: "/about",
      icon: User,
    },
    {
      name: "Mails",
      href: "/mails",
      icon: MailIcon,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: Contact,
    },
  ];