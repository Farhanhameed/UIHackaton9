import Image from "next/image";
import Link from "next/link";

export default function Footer1() {
    return(

<div className="bg-[#0D0D0D]">
    <div className="m-6 gap-3 grid sm:grid-col-1 md:grid-cols-3 grid-rows-1">
        <div><h2><span className="text-yellow-600 mt-2 text-3xl">St</span>
        <span className="text-white text-3xl">ill You Need Our Support ?</span></h2>
        <h2 className="text-white mt-2 text-sm">Don’t wait make a smart & logical quote here. Its pretty easy.</h2>
        </div>
  
        <div>
        <input type="text" className="bg-yellow-600 text-white" placeholder="Enter Your Email" />
        <button className="bg-white text-yellow-600 mt-2 px-2 py-0 rounded-sm border-x-yellow-800">Subscribe Now</button>
        </div>  

        </div>
        <Image src={"/line.png"} alt="" width={450} height={350} className="w-[900px] h-[50px]"/>     
        </div>                           
    )
}        