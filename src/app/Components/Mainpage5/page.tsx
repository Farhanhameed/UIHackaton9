import Image from "next/image";
import Link from "next/link";

export default function Mainpage5() {
    return(

        <div className="bg-[#0D0D0D]">
            <h1 className="text-yellow-600 mt-2 italic text-center font-ffont"> Chefs</h1>
            <h2 className="text-center"><span className="text-yellow-600 mt-2 text-4xl text-center">Me</span><span className="text-white text-4xl">
            et Our Chef</span></h2>


                        <div className="m-6 gap-3 grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-1">
                        <div className="col-span-1"><Image src={"/pic5_1.png"} alt="lgo" width={230} height={260} className="w-[220px] h-[250px]"/> </div>
                        <div className="col-span-1"><Image src={"/pic5_2.png"} alt="lgo" width={230} height={260} className="w-[220px] h-[250px]"/> </div>
                        <div className="col-span-1"><Image src={"/pic5_3.png"} alt="lgo" width={230} height={260} className="w-[220px] h-[250px]"/> </div>
                        <div className="col-span-1"><Image src={"/pic5_4.png"} alt="lgo" width={230} height={260} className="w-[220px] h-[250px]"/> </div>
                        </div>
                        <div className="items-center justify-center"><button className="bg-black text-white mt-2 px-6 py-3 rounded-2xl border-x-yellow-800">
                            <Link href="/Components/Chef">See More</Link></button></div>

            </div>
    )
}