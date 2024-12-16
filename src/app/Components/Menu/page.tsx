import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";

export default function Nav() {
    return(
        <div>
            <div>
                <Navbar />
            <Image src={"/mainpic.jpg"} alt="pic1" width={1920} height={410}/>
            </div>

            
            <div className="m-6 gap-3 grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1">
            <div className="col-span-1"><Image src={"/starter1.jpg"} alt="" width={220} height={400} className="w-[348px] h-[426px]"/> </div>
            <div className="col-span-1"><ul>
                            
                        <li><Image src={"/Coffee.png"} alt="" width={50} height={50} className="w-[20px] h-[20px]"/></li>
                        <li className="text-5xl">Starter Menu</li>
                        <li className="text-2xl mt-4">Alder Grilled Chinool Salmon</li> 
                        <li className="text-base">Toasted French bread topped with romano, cheddar</li>
                        <li className="text-base">560 CAL</li>
                        <li className="text-yellow-600 sm:mt-4 lg:mt-16 md:hidden items-end justify-end">32$</li>

                        <li className="text-2xl mt-4 text-yellow-600">Berries and creme tart</li>
                        <li className="text-base">Gorgonzola, ricotta, mozzarella, taleggio</li>
                        <li className="text-base">700 CAL</li>
                        <li className="text-yellow-600 sm:mt-4 lg:mt-16 sm:block md:hidden items-end justify-end">43$</li>

                        <li className="text-2xl mt-4">Tormentoso Bush Pizza Pintoage</li> 
                        <li className="text-base">Ground cumin, avocados, peeled and cubed</li>
                        <li className="text-base">1000 CAL</li>
                        <li className="text-yellow-600 sm:mt-4 lg:mt-16 md:hidden items-end justify-end">14$</li>

                        <li className="text-2xl mt-4">Spicy Vegan Potato Curry</li> 
                        <li className="text-base">Spreadable cream cheese, crumbled blue cheese</li>
                        <li className="text-base">560 CAL</li>
                        <li className="text-yellow-600 sm:mt-4 lg:mt-16 md:hidden items-end justify-end">35$</li>

                    </ul></div>
            
            <div className="col-span-1"><h5 className="text-yellow-600 hidden md:block sm:mt-4 lg:mt-16 items-end justify-end">32$</h5>
            <h5 className="text-yellow-600 sm:mt-4 lg:mt-16 hidden md:block items-end justify-end">43$</h5>
            <h5 className="text-yellow-600 sm:mt-4 lg:mt-16 hidden md:block items-end justify-end">14$</h5>
            <h5 className="text-yellow-600 sm:mt-4 lg:mt-16 hidden md:block items-end justify-end">35$</h5>
            </div>            
            </div>                        


            <div className="m-6 gap-3 grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1">
            <div className="col-span-1"><ul>
                            
                        <li><Image src={"/Coffee.png"} alt="" width={50} height={50} className="w-[20px] h-[20px]"/></li>
                        <li className="text-5xl">Main Course</li>
                        <li className="text-2xl mt-4">Optic Big Breakfast Combo Menu</li> 
                        <li className="text-base">Toasted French bread topped with romano, cheddar</li>
                        <li className="text-base">560 CAL</li>
                        <li className="text-yellow-600 sm:mt-4 lg:mt-16 md:hidden items-end justify-end">32$</li>

                        <li className="text-2xl mt-4">Cashew Chicken With Stir-Fry</li>
                        <li className="text-base">Gorgonzola, ricotta, mozzarella, taleggio</li>
                        <li className="text-base">700 CAL</li>
                        <li className="text-yellow-600 sm:mt-4 lg:mt-16 sm:block md:hidden items-end justify-end">43$</li>

                        <li className="text-2xl mt-4"> Vegetables & Green Salad</li> 
                        <li className="text-base">Ground cumin, avocados, peeled and cubed</li>
                        <li className="text-base">1000 CAL</li>
                        <li className="text-yellow-600 sm:mt-4 lg:mt-16 md:hidden items-end justify-end">14$</li>

                        <li className="text-2xl mt-4">Spicy Vegan Potato Curry</li> 
                        <li className="text-base">Spreadable cream cheese, crumbled blue cheese</li>
                        <li className="text-base">560 CAL</li>
                        <li className="text-yellow-600 sm:mt-4 lg:mt-16 md:hidden items-end justify-end">35$</li>

                    </ul></div>
            
            <div className="col-span-1"><h5 className="text-yellow-600 hidden md:block sm:mt-4 lg:mt-16 items-end justify-end">32$</h5>
            <h5 className="text-yellow-600 sm:mt-4 lg:mt-16 hidden md:block items-end justify-end">43$</h5>
            <h5 className="text-yellow-600 sm:mt-4 lg:mt-16 hidden md:block items-end justify-end">14$</h5>
            <h5 className="text-yellow-600 sm:mt-4 lg:mt-16 hidden md:block items-end justify-end">35$</h5>
            </div>            
            <div className="col-span-1"><Image src={"/starter2.png"} alt="" width={220} height={400} className="w-[348px] h-[426px]"/> </div>
            </div>

            <Image src={"/pic5.png"} alt="" width={1950} height={350} className="w-[450] h-[450]"/>     



            <div className="m-6 gap-3 grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1">
            <div className="col-span-1"><Image src={"/starter3.png"} alt="" width={220} height={400} className="w-[348px] h-[426px]"/> </div>
            <div className="col-span-1"><ul>
                            
                        <li><Image src={"/Coffee.png"} alt="" width={50} height={50} className="w-[20px] h-[20px]"/></li>
                        <li className="text-5xl">Dessert</li>
                        <li className="text-2xl mt-4">Fig and lemon cake</li> 
                        <li className="text-base">Toasted French bread topped with romano, cheddar</li>
                        <li className="text-base">560 CAL</li>
                        <li className="text-yellow-600 sm:mt-4 lg:mt-16 md:hidden items-end justify-end">32$</li>

                        <li className="text-2xl mt-4">Creamy mascarpone cake</li>
                        <li className="text-base">Gorgonzola, ricotta, mozzarella, taleggio</li>
                        <li className="text-base">700 CAL</li>
                        <li className="text-yellow-600 sm:mt-4 lg:mt-16 sm:block md:hidden items-end justify-end">43$</li>

                        <li className="text-2xl mt-4">Pastry, blueberries, lemon juice</li> 
                        <li className="text-base">Ground cumin, avocados, peeled and cubed</li>
                        <li className="text-base">1000 CAL</li>
                        <li className="text-yellow-600 sm:mt-4 lg:mt-16 md:hidden items-end justify-end">14$</li>

                        <li className="text-2xl mt-4">Pain au chocolat</li> 
                        <li className="text-base">Spreadable cream cheese, crumbled blue cheese</li>
                        <li className="text-base">560 CAL</li>
                        <li className="text-yellow-600 sm:mt-4 lg:mt-16 md:hidden items-end justify-end">35$</li>

                    </ul></div>
            
            <div className="col-span-1"><h5 className="text-yellow-600 hidden md:block sm:mt-4 lg:mt-16 items-end justify-end">32$</h5>
            <h5 className="text-yellow-600 sm:mt-4 lg:mt-16 hidden md:block items-end justify-end">43$</h5>
            <h5 className="text-yellow-600 sm:mt-4 lg:mt-16 hidden md:block items-end justify-end">14$</h5>
            <h5 className="text-yellow-600 sm:mt-4 lg:mt-16 hidden md:block items-end justify-end">35$</h5>
            </div>            
            </div>                        


            <div className="m-6 gap-3 grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1">
            <div className="col-span-1"><ul>
                            
            <li><Image src={"/Coffee.png"} alt="" width={50} height={50} className="w-[20px] h-[20px]"/></li>
                        <li className="text-5xl">Drinks</li>
                        <li className="text-2xl mt-4">Caffè macchiato</li> 
                        <li className="text-base">Toasted French bread topped with romano, cheddar</li>
                        <li className="text-base">560 CAL</li>
                        <li className="text-yellow-600 sm:mt-4 lg:mt-16 md:hidden items-end justify-end">32$</li>

                        <li className="text-2xl mt-4">Aperol Spritz Capacianno</li>
                        <li className="text-base">Gorgonzola, ricotta, mozzarella, taleggio</li>
                        <li className="text-base">700 CAL</li>
                        <li className="text-yellow-600 sm:mt-4 lg:mt-16 sm:block md:hidden items-end justify-end">43$</li>

                        <li className="text-2xl mt-4">Caffe Latte Campuri</li> 
                        <li className="text-base">Ground cumin, avocados, peeled and cubed</li>
                        <li className="text-base">1000 CAL</li>
                        <li className="text-yellow-600 sm:mt-4 lg:mt-16 md:hidden items-end justify-end">14$</li>

                        <li className="text-2xl mt-4">Tormentoso BushTea Pintoage</li> 
                        <li className="text-base">Spreadable cream cheese, crumbled blue cheese</li>
                        <li className="text-base">560 CAL</li>
                        <li className="text-yellow-600 sm:mt-4 lg:mt-16 md:hidden items-end justify-end">35$</li>
                    </ul></div>
            
            <div className="col-span-1"><h5 className="text-yellow-600 hidden md:block sm:mt-4 lg:mt-16 items-end justify-end">32$</h5>
            <h5 className="text-yellow-600 sm:mt-4 lg:mt-16 hidden md:block items-end justify-end">43$</h5>
            <h5 className="text-yellow-600 sm:mt-4 lg:mt-16 hidden md:block items-end justify-end">14$</h5>
            <h5 className="text-yellow-600 sm:mt-4 lg:mt-16 hidden md:block items-end justify-end">35$</h5>
            </div>            
            <div className="col-span-1"><Image src={"/starter4.png"} alt="" width={220} height={400} className="w-[348px] h-[426px]"/> </div>
            </div>

        <div>
            <h2 className="text-2xl text-center">Partners & Clients</h2>
            <h1 className="text-5xl text-center">We work with the best pepole</h1>
            <Image src={"/logo2.png"} alt="" width={1950} height={350} className="w-[350] h-[450]"/>     
        </div>
        </div>
    )
}
