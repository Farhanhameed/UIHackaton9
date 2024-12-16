import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";

export default function Faq() {
    return(
        <div className="w-full">
            <Navbar />
            <Image src={"/faq.png"} alt="pic1" width={1920} height={410}/>
            
            <div className="flex items-center justify-center flex-col mt-6">
            <h1 className="mt-2 text-center text-5xl">  Questions Looks Here</h1>
            <p className="mt-2 text-center text-base">  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
            
            </div>
            <div className="m-6 gap-3 grid sm:grid-col-1 lg:grid-cols-2 grid-rows-1 mt-6">
                    <div className="col-span-1"><h2 className="text-2xl">How we serve food?</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p></div>
                    <div className="col-span-1"><h2  className="text-2xl">How can we get in touch with you?</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p></div>
                    
                    <div className="col-span-1"><h2 className="text-2xl">How is our food quality?</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p></div>
                    <div className="col-span-1"><h2 className="text-2xl">What will be delivered? And When?</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p></div>

                    <div className="col-span-1"><h2 className="text-2xl">How do we give home delivery?</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p></div>
                    <div className="col-span-1"><h2 className="text-2xl">Is this restaurant 24 hours open?</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p></div>
            </div>    

        </div>
    )
}