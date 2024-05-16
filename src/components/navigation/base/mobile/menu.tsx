import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
  

function MenuMobile() {
  return (
 <Sheet>
  <SheetTrigger asChild>
  <Button size='icon' variant='ghost' className="sm:hidden">
    <Menu/>
  </Button>
  </SheetTrigger>
  <SheetContent className="mt-16 w-72 bg-new-black border-0">
    <SheetHeader>
      <SheetTitle className="justify-end flex">Pages</SheetTitle>
      <SheetDescription >
        <Button 
        variant='ghost'
        className="w-full justify-end">
          Dashboard
        </Button>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
  )
}

export default MenuMobile