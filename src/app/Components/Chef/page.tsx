import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";

export default function Chef() {
    return(
        <div className="w-full">
            <Navbar />
            <Image src={"/chef.png"} alt="pic1" width={1920} height={410}/>
            
            <div className="m-6 gap-3 grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-1">
                    <div className="col-span-1"><Image src={"/chef1.png"} alt="" width={220} height={400} className="w-[312px] h-[446px]"/> </div>
                    <div className="col-span-1"><Image src={"/chef2.png"} alt="" width={220} height={400} className="w-[312px] h-[446px]"/> </div>
                    <div className="col-span-1"><Image src={"/chef3.png"} alt="" width={220} height={400} className="w-[312px] h-[446px]"/> </div>
                    <div className="col-span-1"><Image src={"/chef4.png"} alt="" width={220} height={400} className="w-[312px] h-[446px]"/> </div>
                    <div className="col-span-1"><Image src={"/chef5.png"} alt="" width={220} height={400} className="w-[312px] h-[446px]"/> </div>
                    <div className="col-span-1"><Image src={"/chef6.png"} alt="" width={220} height={400} className="w-[312px] h-[446px]"/> </div>
                    <div className="col-span-1"><Image src={"/chef7.png"} alt="" width={220} height={400} className="w-[312px] h-[446px]"/> </div>
                    <div className="col-span-1"><Image src={"/chef8.png"} alt="" width={220} height={400} className="w-[312px] h-[446px]"/> </div>
                    <div className="col-span-1"><Image src={"/chef9.png"} alt="" width={220} height={400} className="w-[312px] h-[446px]"/> </div>
                    <div className="col-span-1"><Image src={"/chef10.png"} alt="" width={220} height={400} className="w-[312px] h-[446px]"/> </div>
                    <div className="col-span-1"><Image src={"/chef11.png"} alt="" width={220} height={400} className="w-[312px] h-[446px]"/> </div>
                    <div className="col-span-1"><Image src={"/chef12.png"} alt="" width={220} height={400} className="w-[312px] h-[446px]"/> </div>
            </div>    

        </div>
    )
}