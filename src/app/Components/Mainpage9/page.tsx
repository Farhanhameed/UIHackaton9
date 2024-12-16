import Image from "next/image";
import Link from "next/link";

export default function Mainpage9() {
    return(
        <div className="bg-[#0D0D0D] items-center justify-center w-full h-[142px] flex mt-0">  
                    <div className="w-2/12 items-center justify-start">
                    
                    </div>          
                    
                    <div className="w-4/12 items-center justify-center flex flex-col">
                      <h2><span className="text-yellow-600 mt-2 text-3xl">St</span><span className="text-white text-3xl">ill You Need Our Support ?</span></h2>
                      <h2 className="text-white mt-2 text-sm">Don’t wait make a smart & logical quote here. Its pretty easy.</h2>
                    </div>

                    <div className="flex w-4-/12 h-[356px] m-6 items-center justify-end">
                    <input type="text" className="bg-yellow-600 text-white" placeholder="Enter Your Email" />
                    <button className="bg-white text-yellow-600 mt-2 px-2 py-0 rounded-sm border-x-yellow-800">Subscribe Now</button>
                    </div>

                    <div className="w-2/12 items-center justify-end">
                    </div>          

                </div>        

                            
    )
}        