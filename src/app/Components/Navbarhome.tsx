import Image from "next/image";
import Link from "next/link";

export default function Navbarhome() {
    return(
        <div className="bg-[#0D0D0D]">
               
                <div>
                    <h2 className="text-2xl text-center"><span className="text-yellow-600">Food</span>
                    <span className="text-white">tuck</span></h2>
                </div>

                <div className="m-6 gap-3 grid sm:grid-col-1 md:grid-cols-2 grid-rows-1">
                        <div><ul className="gap-5 text-white inline-flex">
                                <li className="text-yellow-600">Home</li>
                                <li><Link href="/Components/Menu">Menu</Link></li>
                                <li><Link href="/Components/Bloglist">Blog</Link></li>
                                <li>Pages</li>
                                <li><Link href="/Components/Aboutus">About</Link></li>
                                <li><Link href="/Components/Ourshop">Shop</Link></li>
                                <li><Link href="/Components/Shop">Contact</Link></li>
                        </ul></div>
                <div><Image src={"/search.png"} alt="lgo" width={250} height={160} className="w-[160px] h-[50px]"/></div>
                            
            </div>
    </div>             
    )
}