import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";

export default function Ourshop() {
    return(
        <div className="w-full">
            <Navbar />
            <Image src={"/shoplist.png"} alt="pic1" width={1920} height={410}/>
            <div className="m-4">
            <span>Sort By :</span>
            <select><option>Newest</option></select>
            <span>Show :</span>
            <select><option>Default</option></select>
            </div>
            
            <div className="m-6 gap-3 grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-1">
                    <div className="col-span-1"><Image src={"/img1.png"} alt="" width={312} height={330} className="w-[312px] h-[330px]"/> </div>
                    <div className="col-span-1"><Image src={"/img2.png"} alt="" width={312} height={330} className="w-[312px] h-[330px]"/> </div>
                    <div className="col-span-1"><Image src={"/img3.png"} alt="" width={312} height={330} className="w-[312px] h-[330px]"/> </div>
                    <div className="row-span-4"><Image src={"/sideber.png"} alt="" width={312} height={330} className="w-[312px] h-[1230px]"/> </div>
                    <div className="col-span-1"><Image src={"/img4.png"} alt="" width={312} height={330} className="w-[312px] h-[330px]"/> </div>
                    <div className="col-span-1"><Image src={"/img5.png"} alt="" width={312} height={330} className="w-[312px] h-[330px]"/> </div>
                    <div className="col-span-1"><Image src={"/img6.png"} alt="" width={312} height={330} className="w-[312px] h-[330px]"/> </div>
                    <div className="col-span-1"><Image src={"/img7.png"} alt="" width={312} height={330} className="w-[312px] h-[330px]"/> </div>
                    <div className="col-span-1"><Image src={"/img8.png"} alt="" width={312} height={330} className="w-[312px] h-[330px]"/> </div>
                    <div className="col-span-1"><Image src={"/img9.png"} alt="" width={312} height={330} className="w-[312px] h-[330px]"/> </div>
                    <div className="col-span-1"><Image src={"/img10.png"} alt="" width={312} height={330} className="w-[312px] h-[330px]"/> </div>
                    <div className="col-span-1"><Image src={"/img11.png"} alt="" width={312} height={330} className="w-[312px] h-[330px]"/> </div>
                    <div className="col-span-1"><Image src={"/img12.png"} alt="" width={312} height={330} className="w-[312px] h-[330px]"/> </div>
                    <div className="col-span-1"><Image src={"/img13.png"} alt="" width={312} height={330} className="w-[312px] h-[330px]"/> </div>
                    <div className="col-span-1"><Image src={"/img14.png"} alt="" width={312} height={330} className="w-[312px] h-[330px]"/> </div>
                    <div className="col-span-1"><Image src={"/img15.png"} alt="" width={312} height={330} className="w-[312px] h-[330px]"/> </div>
            </div>    

            <div className="flex justify-center items-center">
            <button className="bg-white text-yellow-600 mt-2 px-4 py-1 rounded-sm border-solid border-2 border-indigo-600 ">&lt; &lt;</button>
            <button className="bg-white text-yellow-600 mt-2 px-4 py-1 rounded-sm border-solid border-2 border-indigo-600">1</button>
            <button className="bg-yellow-600 text-white mt-2 px-4 py-1 rounded-sm border-solid border-2 border-indigo-600">2</button>
            <button className="bg-white text-yellow-600 mt-2 px-4 py-1 rounded-sm border-solid border-2 border-indigo-600">3</button>
            <button className="bg-white text-yellow-600 mt-2 px-4 py-1 rounded-sm border-solid border-2 border-indigo-600">&gt; &gt; </button>
            </div>{/* closing  of button div*/}
        </div>
    )
}