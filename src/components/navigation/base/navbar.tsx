import React from 'react'
import MenuDesktop from './desktop/menu'
import { Button } from '../../ui/button'
import { appConfig } from '@/data/config'
import Link from 'next/link'

function navbar() {
  const isUser = true

  return (
    <nav className='fixed top-0 right-0 left-0 w-full bg-background/40 backdrop-blur-lg z-[100]
    flex items-center justify-between px-6 py-4
    '>
        <h1 className='text-lg text-semibold text-inherit w-full'>
        {appConfig.name}
        </h1>
        <MenuDesktop />
        <div className='w-full items-center justify-end flex gap-2'>
          {
            isUser ? 
            <Button variant="outline" asChild>
              <Link href="/dashboard">Dashboard</Link>
              </Button>
            :
            <>
            <Button variant="ghost">Sign In</Button>
            <Button>Sign Up</Button>
            </>
          }
        </div>
    </nav>
  )
}

export default navbar