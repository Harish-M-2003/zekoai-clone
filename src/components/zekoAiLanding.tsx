"use client";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay"

export default function ZekoAiLanding() {
    return (
        <div className="h-full w-screen flex flex-col justify-center items-center pt-20">
            <div className="grid md:grid-cols-2 pt-20 px-10 md:px-20">
                <div className="flex flex-col gap-5 max-md:flex-reverse max-md:order-last max-md:items-center">
                    <div className="flex flex-col gap-5">
                        <h1 className="font-bold text-4xl md:text-5xl text-[#4b34c4] max-md:text-center">Intelligent Automation in Recruitment</h1>
                        <p className="md:text-2xl text-[#9257f0] font-[500] max-md:text-center">Experience the Future of Hiring with AI-<br />Powered Precision and Speed </p>
                    </div>
                    <div className="flex items-start flex-col gap-5">
                        <div className="flex border-2 gap-5 border-red-400 rounded-xl px-7 md:px-4 py-2">
                            <div className="flex justify-center items-center bg-red-500 text-white rounded-[10rem] px-2">
                                <p className="font-bold text-4xl p-1">P</p>
                            </div>
                            <div className="flex text-red-500 flex-col justify-start md:justify-center">
                                <p className="text-xs">#1 PRODUCT OF THE WEEK</p>
                                <p className="font-bold text-xs md:text-xl">Artificial Intelligence</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-5 md:w-[70%] w-full max-md:flex-col items-center">
                        <input className="border border-gray-200 p-2 rounded-lg w-full" placeholder="Enter your Work Email"></input>
                        <button className="bg-[#4337ec] text-white p-2 px-4 rounded-lg w-[50%]">Sign Up</button>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image src={"/grid-logo.png"} alt="" height={600} width={600} />
                </div>
            </div>
            <div className="mb-10 w-full max-md:pt-5 flex flex-col justify-center items-center">
                <h2 className=" text-xl text-center md:text-2xl font-bold text-[#4b34c4]">Chosen by the new generation of industry leaders.</h2>
                <Carousel
                    orientation="horizontal"
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                    className="mt-10 flex justify-center"
                >
                    <CarouselContent>
                        <CarouselItem>
                            <div className="flex gap-5">
                                <Image src={"/ebooks.png"} height={100} width={100} alt="" />
                                <Image src={"/hitech.png"} height={100} width={100} alt="" />
                                <Image src={"/ebooks.png"} height={100} width={100} alt="" />
                                <Image src={"/glossy.png"} height={100} width={100} alt="" />
                                <Image src={"/ebooks.png"} height={100} width={100} alt="" />
                                <Image src={"/glossy.png"} height={100} width={100} alt="" />
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="flex gap-5">
                                <Image src={"/ebooks.png"} height={100} width={100} alt="" />
                                <Image src={"/hitech.png"} height={100} width={100} alt="" />
                                <Image src={"/ebooks.png"} height={100} width={100} alt="" />
                                <Image src={"/glossy.png"} height={100} width={100} alt="" />
                                <Image src={"/ebooks.png"} height={100} width={100} alt="" />
                                <Image src={"/glossy.png"} height={100} width={100} alt="" />
                            </div>
                        </CarouselItem>

                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}