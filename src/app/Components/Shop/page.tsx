import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";

export default function shop() {
    return(
        <div>
            <div>
                <Navbar />
            <Image src={"/shop.png"} alt="pic1" width={1920} height={410}/>
            </div>
            
            <div className="m-2 gap-1 grid sm:grid-col-1 sm:grid-flow-row lg:grid-flow-col lg:grid-cols-3 grid-rows-4 mt-6">
            <div className="col-span-1"><Image src={"/shop1_1.png"} alt="" width={220} height={400} className="w-[132px] h-[129px]"/> </div>
            <div className="col-span-1"><Image src={"/shop1_2.png"} alt="" width={220} height={400} className="w-[132px] h-[129px]"/> </div>
            <div className="col-span-1"><Image src={"/shop1_3.png"} alt="" width={220} height={400} className="w-[132px] h-[129px]"/> </div>
            <div className="col-span-1"><Image src={"/shop1_4.png"} alt="" width={220} height={400} className="w-[132px] h-[129px]"/> </div>
            <div className="row-span-4"><Image src={"/shop1_5.png"} alt="" width={220} height={400} className="w-[491px] h-[596px]"/> </div>
                <div className="row-span-4"><h1>Yummy Chicken Chup</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <h2>54.00$  </h2>
            <Image src={"/Rating.png"} alt="" width={220} height={400} className="w-[333px] h-[24px]"/> 
            <h2>Dictum/cursus/Risus</h2>   

            <button className="bg-white text-black mt-2 px-4 py-1 rounded-sm border-solid border-2 border-indigo-600">+</button>
            <button className="bg-white text-black mt-2 px-4 py-1 rounded-sm border-solid border-2 border-indigo-600">1</button>
            <button className="bg-white text-black mt-2 px-4 py-1 rounded-sm border-solid border-2 border-indigo-600">-</button>
            <button className="bg-yellow-600 text-white m-2 mt-2 px-4 py-1 rounded-sm border-solid border-2 border-indigo-600">Add to cart</button>
                </div>           
            </div>        

                <div>
                    <button className="bg-yellow-600 text-white m-2 mt-2 px-4 py-1 rounded-sm border-solid border-2 border-indigo-600">Description</button>
                    <span>Reviews (24)</span>
                    <p>Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p><br />
                    <p>Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.</p><br />
                    <h2 className="text-lg">Key Benefits</h2><br />
                    <ul className="list-disc">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
                        <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
                        <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
                        <li>Mauris eget diam magna, in blandit turpis.</li>
                    </ul>
                </div>

                <div>
                    <div>
                        <h2 className="text-3xl m-2">Similar Products</h2>
                    </div>

                    <div className="m-6 gap-3 grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-1">
                    <div className="col-span-1"><Image src={"/simpl1.png"} alt="" width={220} height={400} className="w-[312px] h-[330px]"/> </div>
                    <div className="col-span-1"><Image src={"/simpl2.png"} alt="" width={220} height={400} className="w-[312px] h-[330px]"/> </div>
                    <div className="col-span-1"><Image src={"/simpl3.png"} alt="" width={220} height={400} className="w-[312px] h-[330px]"/> </div>
                    <div className="col-span-1"><Image src={"/simpl4.png"} alt="" width={220} height={400} className="w-[312px] h-[330px]"/> </div>
                    </div>

                </div>
                
                {/* <div className="m-6 gap-3 grid grid-col-4 grid-rows-3 h-10">
                <div className="row-span-3 bg-blue-300">1 </div>
                <div className="col-span-2 bg-orange-300">2 </div>
                <div className="bg-blue-300">3 </div>
                <div className="bg-green-300">4 </div>
                <div className="bg-blue-300">5 </div>
                <div className="row-span-2 bg-steal-300">6 </div>
                <div className="bg-orange-300">7 </div>
                <div className="bg-pink-300">8 </div></div> */} 
                
        </div>
)
}