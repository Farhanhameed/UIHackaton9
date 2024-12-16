import Image from "next/image";
import Link from "next/link";

export default function Mainpage2() {
    return(
        <div className="bg-[#0D0D0D]">
        {/* <div className="bg-[#0D0D0D] w-full items-center justify-center h-[489px]">
            <h1 className="text-yellow-600 mt-2 italic text-center">  Food Category</h1>
            <h2 className="text-center"><span className="text-yellow-600 mt-2 text-4xl text-center">Ch</span><span className="text-white text-4xl">
            oose Food Items</span></h2> */}

                        
<div className="col-span-1"><h1 className="text-yellow-600 mt-2 italic text-center font-ffont">  Food Category</h1>
            <h2 className="text-center"><span className="text-yellow-600 mt-2 text-4xl text-center">Ch</span><span className="text-white text-4xl">
            oose Food Items</span></h2></div>

                <div className="m-6 gap-3 grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-1">
                        
                        <div className="col-span-1"><Image src={"/pic2_1.png"} alt="lgo" width={250} height={160} className="w-[250px] h-[180px]"/></div>
                        <div className="col-span-1"><Image src={"/pic2_2.png"} alt="lgo" width={250} height={160} className="w-[250px] h-[180px]"/></div>
                        <div className="col-span-1"><Image src={"/pic2_3.png"} alt="lgo" width={250} height={160} className="w-[250px] h-[180px]"/></div>
                        <div className="col-span-1"><Image src={"/pic2_4.png"} alt="lgo" width={250} height={160} className="w-[250px] h-[180px]"/></div>
                        </div>

                        
            </div>
    )
}