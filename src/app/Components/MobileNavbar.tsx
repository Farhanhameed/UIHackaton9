import Link from "next/link"
import { Menu } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  const MobileNavbar = () => {
    return(
        <div>
            <Sheet>
  <SheetTrigger><Menu className="text-white"/></SheetTrigger>
  <SheetContent side={"left"}>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
      
      <ul className="gap-2 text-yellow-600">
      
            <li className="text-yellow-600"><Link href="/">Home</Link></li>
                <li><Link href="/Components/Menu">Menu</Link></li>
                <li><Link href="/Components/Bloglist">Blog</Link></li>
                <li>Pages</li>
                <li><Link href="/Components/Aboutus">About</Link></li>
                <li><Link href="/Components/Ourshop">Shop</Link></li>
                <li><Link href="/Components/Shop">Contact</Link></li>
        </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
        </div>
    )
  }
  export default MobileNavbar