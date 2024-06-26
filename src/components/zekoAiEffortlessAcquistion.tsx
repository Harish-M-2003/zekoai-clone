
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import TestimonialCard from "./ui/testimonialCard";
import { testimonial } from "@/data/testimonial";

export default function ZekoAiEffortlessAcquistion() {

    return (
        <div className="h-full w-screen md:grid md:grid-cols-2 px-12 gap-10 pb-20">
            <div className="flex flex-col md:justify-center items-center gap-5">
                <p className="font-bold md:text-4xl text-2xl text-[#4b34c4] pt-10">Effortless Acquistion</p>
                <div className="flex gap-3 max-md:hidden">
                    <div className="p-1 px-5 items-center flex gap-5 rounded shadow">
                        <span className="bg-gradient-to-r from-[#cca6ff]  text-lg font-bold to-[#989eff] inline-block text-transparent bg-clip-text">{"86%"}</span>
                        <sub className="text-xs">FASTER</sub>
                    </div>
                    <div className="p-1 px-5 items-center flex gap-5 rounded shadow">
                        <span className="bg-gradient-to-r from-[#cca6ff]  text-lg font-bold to-[#989eff] inline-block text-transparent bg-clip-text">{"86%"}</span>
                        <sub className="text-xs">RESPONSE RATE</sub>
                    </div>
                    <div className="p-4 px-5 items-center flex gap-5 rounded shadow">
                        <span className="bg-gradient-to-r from-[#cca6ff]  text-lg font-bold to-[#989eff] inline-block text-transparent bg-clip-text">{"86%"}</span>
                        <sub className="text-xs">BETTER THAN HR INTERN</sub>
                    </div>
                </div>
            </div>
            <div className=" md:hidden">
                <ScrollArea>
                    <div className="flex w-max space-x-4 p-4 py-10">
                        {
                            testimonial.map((item) => (
                                <TestimonialCard
                                    key={item.id}
                                    content={item.content}
                                    testimonialName={item.name}
                                    designation={item.designation}
                                />

                            ))}
                        <ScrollBar orientation="horizontal" />
                    </div>
                </ScrollArea>
            </div>
            <div className="relative max-md:hidden">

                <div className="absolute left-0 top-0 z-[6] right-0 bg-gradient-to-b from-white via-white to-transparent h-[200px]" />
                <div className="grid grid-cols-2 gap-5 max-md:hidden">
                    {/*@ts-ignore*/}
                    <marquee direction="up">
                        <div className="flex flex-col gap-5 mt-5">
                            {
                                testimonial.map((testimonial) => (
                                    <TestimonialCard
                                        key={testimonial.id}
                                        content={testimonial.content}
                                        testimonialName={testimonial.name}
                                        designation={testimonial.designation}
                                    />
                                ))
                            }

                        </div>
                        {/*@ts-ignore*/}
                    </marquee>
                    {/*@ts-ignore*/}
                    <marquee direction="up" className="max-md:hidden">
                        <div className="flex flex-col gap-5">
                            {
                                testimonial.map((testimonial) => (
                                    <TestimonialCard
                                        key={testimonial.id}
                                        content={testimonial.content}
                                        testimonialName={testimonial.name}
                                        designation={testimonial.designation}
                                    />
                                ))
                            }

                        </div>
                        {/*@ts-ignore*/}
                    </marquee>

                    <div className="absolute bottom-0 left-0  right-0 bg-gradient-to-t from-white via-white to-transparent h-[200px]" />
                </div>
            </div>
        </div>
    );
}