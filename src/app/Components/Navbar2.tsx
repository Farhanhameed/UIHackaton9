import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return(
        <div className="flex bg-[#0D0D0D]">
            
<div className="m-6 gap-3 grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-1">
            
            <div>
            <span className="text-white">Food </span>
                <span className="text-yellow-600">tuck</span>
                <ul className="gap-5 text-white inline-flex">
            
                    <li className="text-yellow-600"><Link href="/">Home</Link></li>
                        <li><Link href="/Components/Menu">Menu</Link></li>
                        <li><Link href="/Components/Bloglist">Blog</Link></li>
                        <li>Pages</li>
                        <li><Link href="/Components/Aboutus">About</Link></li>
                        <li><Link href="/Components/Ourshop">Shop</Link></li>
                        <li><Link href="/Components/Shop">Contact</Link></li>
                </ul></div></div>

                <div className="m-6 gap-3 grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1">
                        
                        <Image src={"/mg.png"} alt="pic1" width={30} height={30} />
                        <Image src={"/user.png"} alt="pic1" width={30} height={30} />
                        <Image src={"/Tote.png"} alt="pic1" width={30} height={30} /></div>
        

</div>
)
}