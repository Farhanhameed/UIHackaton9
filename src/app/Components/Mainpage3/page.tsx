import Image from "next/image";
import Link from "next/link";

export default function Mainpage3() {
    return(
<div className="bg-[#0D0D0D]">
    <div className="m-6 gap-3 grid sm:grid-col-1 md:grid-cols-2 grid-rows-1">
        <div>
        <Image src={"/pic3.png"} alt="" width={250} height={160} className="w-[450px] h-[350px]"/> 
        </div>

               <div>
                <h1 className="text-yellow-600 mt-2 italic font-ffont">Why Choose us</h1>
                <h2><span className="text-yellow-600 mt-2 text-4xl">Ex</span>
                <span className="text-white text-4xl">tra ordinary taste And Experienced </span></h2>
                <h2 className="text-white mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</h2>
                <h2 className="text-white mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</h2>
                <Image src={"/pic4.png"} alt="" width={250} height={160} className="w-[250px] h-[150px]"/>     
               </div>
                    
    </div>
</div>

        // <div className="lg:w-full h-[550px] flex bg-[#0D0D0D] sm:w-6/12">
        //     <div className="w-6/12">
        //             <div className="m-6 gap-3 grid grid-col-2 grid-rows-4">
        //             <Image src={"/pic3.png"} alt="" width={250} height={160} className="w-[450px] h-[350px]"/> 
        //             </div>
        //     </div>

        //     <div className="w-5/12 h-[356px] items-center justify-between mt-12"> 
        //         <h1 className="text-yellow-600 mt-2 italic">Why Choose us</h1>
        //             <h2><span className="text-yellow-600 mt-2 text-4xl">Ex</span><span className="text-white text-4xl">
        //             tra ordinary taste And Experienced </span></h2>
        //            <h2 className="text-white mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</h2>
        //         <h2 className="text-white mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</h2>
        //         <Image src={"/pic4.png"} alt="" width={250} height={160} className="w-[250px] h-[150px]"/>     
        //     </div>
        //     <div>
            
        //     </div> */}

    )
}