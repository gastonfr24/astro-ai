import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function UserDropdown() {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger className='outline-none'>
        <Avatar>
            <AvatarImage src="/avatar/avatar_50.png" className='bg-gradient-to-br from-violet-500 to-violet-200 transform scale-[1.15]'/>
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent className='mt-2'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuContent>
</DropdownMenu>
  )
}

export default UserDropdown