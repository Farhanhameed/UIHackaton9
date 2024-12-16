import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";

export default function Aboutus() {
    return(
        <div>
            <div>
                <Navbar />
                <Image src={"/aboutus.png"} alt="pic1" width={1920} height={410}/>
            </div>
            <div className="m-6 gap-3 grid lg:grid-cols-3">
            {/* <div className="m-6 gap-3 grid sm:grid-col-1 lg:grid-cols-2 grid-rows-3"> */}
            <div className="m-6 gap-3 grid lg:grid-cols-2">
            <Image src={"/about1.png"} alt="" width={220} height={400} className="w-[132px] h-[300px]"/> 
            <Image src={"/about2.png"} alt="" width={220} height={400} className="w-[132px] h-[129px]"/>
            <Image src={"/about3.png"} alt="" width={220} height={400} className="w-[132px] h-[129px]"/> 
            </div>          
            <div className="m-6 gap-3 grid lg:grid-cols-1">
            <h2>About us</h2><h1 className="text-5xl">Food is an important part Of a balanced Diet</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                </p>
                <button className="bg-yellow-600 text-white mt-2 px-4 py-2 rounded-sm ">Show more</button>    
                <Image src={"/Video.png"} alt="" width={220} height={400} className="w-[150px] h-[100px]"/>    
                </div>
            </div>

            <div className="lg:ml-40">
                <h1 className="text-4xl text-center">Why Choose us</h1>
                <p className="text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. </p>
                <Image src={"/aboutus5.png"} alt="" width={1950} height={350} className="w-[950px] h-[200px]"/>
            </div>

            <div className="m-6 gap-3 grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1">
            <div className="col-span-1"><Image src={"/ab1.png"} alt="" width={200} height={350} className="w-[30px] h-[30px]"/><h1>Best Chef</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p></div>
            <div className="col-span-1"><Image src={"/ab2.png"} alt="" width={200} height={350} className="w-[30px] h-[30px]"/><h1>120 Item food</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p></div>
            <div className="col-span-1"><Image src={"/ab3.png"} alt="" width={200} height={350} className="w-[30px] h-[30px]"/><h1>Clean Environment</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p></div>

            </div>                       


            <h1 className="text-yellow-600 text-3xl"> Testimonials</h1>
            <h2 className=" text-5xl">What our client are saying</h2>         

            <div className="m-6 gap-3 grid sm:grid-col-1 lg:grid-cols-2 grid-rows-1 mt-6">
            <div><Image src={"/face1.png"} alt="lgo" width={230} height={260} className="w-[220px] h-[250px]"/>
                <div className="bg-white"><h1 className="text-center text-lg text-[#0D0D0D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</h1>
                <Image src={"/star.png"} alt="" width={230} height={260} className="w-[150px] h-[40px]"/>
                <h2 className="text-3xl text-white">Alamin Hasan</h2>
                <h3 className="text-2xl text-white">Food Specialist</h3></div>
                <Image src={"/dot.png"} alt="lgo" width={230} height={260} className="w-[120px] h-[20px]"/>
                 </div>
            </div>


        </div>
)
}