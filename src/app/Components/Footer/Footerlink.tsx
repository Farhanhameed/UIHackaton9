import Image from "next/image";
import Link from "next/link";

export default function Footerlink() {
    return(

<div className="bg-[#0D0D0D]">
    <div className="m-6 gap-3 grid sm:grid-col-1 md:grid-cols-4 grid-rows-1">
            <div className="text-white">
                <h2>About Us.</h2>
                <p>orporate clients and leisure travelers has been relying on Groundlink for dependab safe,
                    and professional chauffeured car service in major cities across World.</p>
                    <div className="gap-1 grid sm:grid-col-1 lg:grid-cols-2 grid-rows-3"><div className="row-span-3">
                    <Image src={"/Watch.png"} alt="" width={250} height={350} className="w-[50px] h-[50px]"/></div>         
                    <h2>Opening Houres</h2>
                    <h2>Mon - Sat(8.00 - 6.00)</h2>
                    <h2>Sunday - Closed</h2></div>
            </div>
            <div className="text-white">
                <h1 className="text-2xl">Useful Links</h1>
                <ul>
                    <li><Link href="/Components/Aboutus">About</Link></li>
                    <li>News</li>
                    <li>Partners</li>
                    <li><Link href="/Components/Menu">Menu</Link></li>
                    <li><Link href="/Components/Shop">Contacts</Link></li>
                </ul>
            </div>

            <div className="text-white">
                <h1 className="text-2xl">Help</h1>
                <ul>
                    <li><Link href="/Components/Faq">FAQ</Link></li>
                    <li>Term & conditions</li>
                    <li>Reporting</li>
                    <li>Documentation</li>
                    <li>Support Policy</li>
                    <li>Privacy</li>
                </ul>
            </div>

            <div className="text-white">
                <h1 className="text-2xl">Recent Post</h1>
                <ul>
                    <li><Image src={"/rpost1.png"} alt="" width={250} height={350} className="w-[160px] h-[50px]"/></li>
                    <li><Image src={"/rpost2.png"} alt="" width={250} height={350} className="w-[160px] h-[50px]"/></li>
                    <li><Image src={"/rpost3.png"} alt="" width={250} height={350} className="w-[160px] h-[50px]"/></li>
                </ul>
            </div>    
        </div>
    
        <div className="bg-gray-600">
            <div className="m-6 gap-3 grid sm:grid-col-1 md:grid-cols-2 grid-rows-1">  
    
                <div><h1 className="text-white">Copyright © 2022 by Farhan Abdul Hameed. All Rights Reserved.</h1></div>
            
                <div><Image src={"/sicon.png"} alt="" width={250} height={350} className="w-[250px] h-[40px]"/></div>
            </div>
            </div>                           
    </div>   
    )
}        