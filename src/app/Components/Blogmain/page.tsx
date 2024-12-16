import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";

export default function Blogmain() {
    return(
        <div className="bg-[#0D0D0D]">
            <h2 className="text-[#FF9F0D] text-center font-ffont">Blog Post</h2>
            <h2 className="text-center"><span className="text-[#FF9F0D] mt-2 text-4xl text-center">La</span><span className="text-white text-4xl">
             test News & Blog</span></h2>

        <div className="m-6 gap-3 grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1">            
                <div className="col-span-1">
                    <Image src={"/blog1.png"} alt="lgo" width={250} height={160} className="w-[423px] h-[349px]"/>
                    <h2 className="text-[#FF9F0D] mt-4">10 February 2022 </h2>
                    <h2 className="text-white">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</h2>
                    <div className="flex justify-between"><button className="text-white"><Link href="/Components/Bloglist">Learn More</Link></button>
                    <Image src={"/iconblog.png"} alt="" width={250} height={160} className="w-[76px] h-[20px]"/></div>
                </div>
                

                <div className="col-span-1">
                    <Image src={"/blog2.png"} alt="lgo" width={250} height={160} className="w-[423px] h-[349px]"/>
                    <h2 className="text-[#FF9F0D] mt-4">10 February 2022 </h2>
                    <h2 className="text-white">Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A</h2>
                    <div className="flex justify-between"><button className="text-white"><Link href="/Components/Bloglist">Learn More</Link></button>
                    <Image src={"/iconblog.png"} alt="" width={250} height={160} className="w-[76px] h-[20px]"/></div>
                </div>

                <div className="col-span-1">
                    <Image src={"/blog3.png"} alt="lgo" width={250} height={160} className="w-[423px] h-[349px]"/>
                    <h2 className="text-[#FF9F0D] mt-4">10 February 2022 </h2>
                    <h2 className="text-white">Curabitur rutrum velit ac congue malesuada</h2>
                    <div className="flex justify-between"><button className="text-white"><Link href="/Components/Bloglist">Learn More</Link></button>
                    <Image src={"/iconblog.png"} alt="" width={250} height={160} className="w-[76px] h-[20px]"/></div>
                </div>
        </div>
    </div>    
    )
}