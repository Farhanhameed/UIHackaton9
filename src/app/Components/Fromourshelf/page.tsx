import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";

export default function Fromourshelf () {
    return(
        <div className="bg-[#0D0D0D]">
            <h2 className="text-[#FF9F0D] text-center">Choose & pick</h2>
            <h2 className="text-center"><span className="text-[#FF9F0D] mt-2 text-4xl text-center">Fr</span><span className="text-white text-4xl">
            om Our Menu</span></h2>
<ul className="gap-8 flex text-white ml-10">
    <li className="text-[#FF9F0D]">Breakfast</li>
    <li>Lunch</li>
    <li>Dinner</li>
    <li>Dessert</li>
    <li>Drink</li>
    <li>Snack</li>
    <li>Soups</li>
</ul>
        <div className="m-6 gap-3 grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-5 grid-rows-1">
                        
                <div className="col-span-1">
                    <Image src={"/menu1.png"} alt="lgo" width={250} height={160} className="w-[250px] h-[180px]"/>
                </div>
                <div className="col-span-1"></div>
                <div className="gap-1 grid sm:grid-col-1 lg:grid-cols-2 grid-rows-3">
                <div className="text-white">
                <Image src={"/pic1.png"} alt="lgo" width={250} height={160} className="w-[80px] h-[79px]"/></div>
                <div className="text-white"><h2>Lettuce Leaf</h2>
                <h3>Lacus nisi, et ac.</h3>
                <h3 className="text-[#FF9F0D]">12.5$</h3></div>

                <div className="text-white">
                <Image src={"/pic2.png"} alt="lgo" width={250} height={160} className="w-[80px] h-[79px]"/></div>
                <div className="text-white"><h2>Fresh Breakfast</h2>
                <h3>Lacus nisi, et ac.</h3>
                <h3 className="text-[#FF9F0D]">14.55$</h3></div>
                </div>


                <div className="gap-1 grid sm:grid-col-1 lg:grid-cols-2 grid-rows-3">
                <div className="text-white">
                <Image src={"/pic33.png"} alt="lgo" width={250} height={160} className="w-[80px] h-[79px]"/></div>
                <div className="text-white"><h2>Glow Cheese</h2>
                <h3>Lacus nisi, et ac.</h3>
                <h3 className="text-[#FF9F0D]">12.5$</h3></div>

                <div className="text-white">
                <Image src={"/pic44.png"} alt="lgo" width={250} height={160} className="w-[80px] h-[79px]"/></div>
                <div className="text-white"><h2>Italian Pizza</h2>
                <h3>Lacus nisi, et ac.</h3>
                <h3 className="text-[#FF9F0D]">14.55$</h3></div>
                
                </div>
        </div>
            
    </div>    
    )
}