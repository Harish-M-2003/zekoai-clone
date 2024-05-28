"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";


export default function ZekoBackedByBanner() {
    return (
        <div className="w-screen flex flex-col gap-10 pb-20">
            <div className="flex max-md:flex-col max-md:text-center gap-5 justify-between items-center w-full bg-[url('/card.png')] h-[12em] p-10">
                <div className="md:w-[35em] h-full">
                    <p className="text-white md:text-4xl text-xl max-md:font-bold">Start a new, effortless hiring adventure now.</p>
                </div>
                <div className="flex gap-5">
                    <button className="p-3 max-md:hidden px-10 bg-blue-700 text-white rounded-lg">Sign Up</button>
                    <button className="text-white md:border max-md:bg-[#5a59f6] max-md:p-5 p-3 px-10 rounded-lg">Book A Demo</button>    
                </div>
            </div>
            <div className="flex justify-center">
                <p className="font-bold text-[#4f33cc] text-4xl">Backed by</p>
            </div>
            <div >
                <div className="flex justify-center items-center gap-10">
                    <div className="max-md:hidden flex gap-10">
                        <Image src={"/IIMA.png"} alt="" width={100} height={100} />
                        <Image src={"/Realtime.png"} alt="" width={100} height={100} />
                        <Image src={"/AumVentures.png"} alt="" width={100} height={100} />
                    </div>
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 2000,
                            }),
                        ]}
                        className="md:hidden"
                    >
                        <CarouselContent>
                            <CarouselItem className="flex gap-5">
                                <Image src={"/IIMA.png"} alt="" width={100} height={100} />
                                <Image src={"/Realtime.png"} alt="" width={100} height={100} />
                            </CarouselItem>
                            <CarouselItem className="flex gap-5">
                                <Image src={"/IIMA.png"} alt="" width={100} height={100} />
                                <Image src={"/AumVentures.png"} alt="" width={100} height={100} />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}