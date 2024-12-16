import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";

export default function Bloglist() {
    return(
        <div>
            <Navbar />
            <div className="m-6 gap-3 grid lg:grid-cols-2">
            <div className="col-span-1">
                <div className="ml-auto">
                <Image src={"/Blogcard1.png"} alt="pic1" width={400} height={410} className="w-[500px] h-[300px]"/>
                <div className="flex mt-3">
                <Image src={"/Calendar.png"} alt="pic1" width={400} height={410} className="w-[24px] h-[25px]"/>
                <Image src={"/Admin.png"} alt="pic1" width={400} height={410} className="w-[267px] h-[25px]"/></div>
                <h1 className="text-xl mt-3">10 Reasons To Do A Digital Detox Challenge</h1>
                <p className="mt-3">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                <div><button className="text-[#FF9F0D] border border-[#FF9F0D] mt-2 px-6 py-3 rounded-sm flex">Read more
                <Image src={"/ArrowUp.png"} alt="" width={220} height={400} className="w-[18px] h-[18px]"/> </button></div>
                </div>
            
            
            {/* Picture 2 */}
            <div className="ml-auto">
                <Image src={"/Blogcard2.png"} alt="pic1" width={400} height={410} className="w-[500px] h-[300px]"/>
                <div className="flex mt-3">
                <Image src={"/Calendar.png"} alt="pic1" width={400} height={410} className="w-[24px] h-[25px]"/>
                <Image src={"/Admin.png"} alt="pic1" width={400} height={410} className="w-[267px] h-[25px]"/></div>
                <h1 className="text-xl mt-3">Traditional Soft Pretzels with Sweet Beer Cheese</h1>
                <p className="mt-3">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                <div><button className="text-[#FF9F0D] border border-[#FF9F0D] mt-2 px-6 py-3 rounded-sm flex">Read more
                <Image src={"/ArrowUp.png"} alt="" width={220} height={400} className="w-[18px] h-[18px]"/> </button></div>
                </div>
            

            {/* Picture 3 */}
            <div className="ml-auto">
                <Image src={"/Blogcard3.png"} alt="pic1" width={400} height={410} className="w-[500px] h-[300px]"/>
                <div className="flex mt-3">
                <Image src={"/Calendar.png"} alt="pic1" width={400} height={410} className="w-[24px] h-[25px]"/>
                <Image src={"/Admin.png"} alt="pic1" width={400} height={410} className="w-[267px] h-[25px]"/></div>
                <h1 className="text-xl mt-3">The Ultimate Hangover Burger: Egg in a Hole Burger</h1>
                <p className="mt-3">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                <div><button className="text-[#FF9F0D] border border-[#FF9F0D] mt-2 px-6 py-3 rounded-sm flex">Read more
                <Image src={"/ArrowUp.png"} alt="" width={220} height={400} className="w-[18px] h-[18px]"/> </button></div>
                </div>

                {/* Picture 4 */}
            <div className="ml-auto">
                <Image src={"/Blogcard4.png"} alt="pic1" width={400} height={410} className="w-[500px] h-[300px]"/>
                <div className="flex mt-3">
                <Image src={"/Calendar.png"} alt="pic1" width={400} height={410} className="w-[24px] h-[25px]"/>
                <Image src={"/Admin.png"} alt="pic1" width={400} height={410} className="w-[267px] h-[25px]"/></div>
                <h1 className="text-xl mt-3">My Favorite Easy Black Pizza Toast Recipe</h1>
                <p className="mt-3">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                <div><button className="text-[#FF9F0D] border border-[#FF9F0D] mt-2 px-6 py-3 rounded-sm flex">Read more
                <Image src={"/ArrowUp.png"} alt="" width={220} height={400} className="w-[18px] h-[18px]"/> </button></div>
                </div>
            </div>    
                <div className="col-span-1">
                <Image src={"/Sidebar.png"} alt="lgo" width={250} height={160} className="w-[450px] h-[1430px]"/>
                </div>
            </div>
        </div>
    )
}