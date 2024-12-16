import Image from "next/image";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import Navbar2 from "./Navbar2";

export default function Navbar() {
    return(
        <div className="flex bg-[#0D0D0D]">
            
           <div className="bg-[#0D0D0D]">
            <div className="hidden lg:block">
                <Navbar2 />
            </div>
        <div className="lg:hidden">
            <MobileNavbar />
        </div>    </div>          
           
            <div className="m-6 gap-3 grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-1">
            
            </div>       

</div>
             
    )
}