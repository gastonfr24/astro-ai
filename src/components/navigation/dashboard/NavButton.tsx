import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
interface ButtonNav { 
    href: string
    pathname: string
    name: string
    Icon?: any
    isCollapsed: boolean
    isPrimary?: boolean
    }

function NavButton({href, pathname, name, Icon, isCollapsed}: ButtonNav) {
  return (
            <Link href={href} className={cn(
                buttonVariants({ variant: pathname === href ? "secondary": 'ghost', size: 'sm' }),
                isCollapsed? 'justify-center' : 'justify-start',
                'w-full')}>
                  <span>
                    {
                        Icon &&
                    <Icon className="w-5 h-5"/>
                    }
                  </span>
                  <span className={isCollapsed ? 'hidden': 'ml-2'}>{name}</span>
                </Link>
  )
}

export default NavButton