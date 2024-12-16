import Image from "next/image";
import Link from "next/link";

export default function Mainpage6() {
    return(
        
<div className="bg-[#0D0D0D]">

                    <h1 className="text-yellow-500 text-3xl font-ffont"> Testimonials </h1>
                    <h2 className="text-white text-5xl">What our client are saying</h2>  
                    <div className="m-6 gap-3 grid sm:grid-col-1 lg:grid-cols-2 grid-rows-1 mt-6">
            <div><Image src={"/face1.png"} alt="lgo" width={230} height={260} className="w-[220px] h-[250px]"/>
                <div className="bg-white"><h1 className="text-center text-lg text-[#0D0D0D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</h1>
                <Image src={"/star.png"} alt="" width={230} height={260} className="w-[150px] h-[40px]"/>
                <h2 className="text-3xl text-white">Alamin Hasan</h2>
                <h3 className="text-2xl text-white">Food Specialist</h3></div>
             </div>
            
</div>
        </div>
    )
}