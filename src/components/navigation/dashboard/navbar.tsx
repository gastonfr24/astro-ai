import { appConfig } from '@/data/config'
import React from 'react'
import UserDropdown from './UserDropdown'
import { Bell, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'

function Navbar() {
  return (
    <nav className='w-full h-14 bg-[#060606] z-[9] absolute flex justify-between items-center'>
        <div className='w-[4.5rem] flex justify-center items-center'>
        <p className='text-2xl'>{appConfig.initials}</p>
        </div>
        <div className='flex justify-center items-center gap-x-4 pr-[18px]'>
        <Button size='icon' className='rounded-full w-6 h-6 text-secondary' variant='ghost'>
        <Settings/>
        </Button>
        <Button size='icon' className='rounded-full w-6 h-6 text-secondary' variant='ghost'>
        <Bell/>
        </Button>
        <UserDropdown />
        </div>
    </nav>
  )
}

export default Navbar