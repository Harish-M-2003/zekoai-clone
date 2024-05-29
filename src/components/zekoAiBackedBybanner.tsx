
import Image from "next/image";

export default function ZekoBackedByBanner() {
    
    return (
        <div className="w-screen flex flex-col gap-10 pb-20">
            <div className="relative flex max-md:flex-col mb-10 max-md:text-center gap-5 justify-between items-center h-[12em] p-10">
                <div className="md:w-[35em] z-[5]">
                    <p className="text-white md:text-4xl text-xl max-md:font-bold">Start a new, effortless hiring adventure now.</p>
                </div>
                <div className="flex gap-5 z-[5]">
                    <button className="p-3 max-md:hidden px-10 bg-blue-700 text-white rounded-lg">Sign Up</button>
                    <button className="text-white md:border max-md:bg-[#5a59f6] max-md:p-5 p-3 px-10 rounded-lg">Book A Demo</button>
                </div>
                <Image src={"/Card.png"} alt="" height={100} width={1000} className="absolute top-0 left-0 right-0 bottom-0 w-full h-[12em] max-md:h-[15em]" />
            </div>
            <div className="flex justify-center">
                <p className="font-bold text-[#4f33cc] text-4xl">Backed by</p>
            </div>
            <div className="px-10" >
                <div className="flex justify-center items-center gap-10">
                    <div className="max-md:hidden flex gap-10">
                        <Image src={"/IIMA.png"} alt="" width={100} height={100} />
                        <Image src={"/Realtime.png"} alt="" width={100} height={100} />
                        <Image src={"/AumVentures.png"} alt="" width={100} height={100} />
                    </div>
                    {/*@ts-ignore*/}
                    <marquee className="md:hidden">
                        <div className="flex gap-5">
                            <Image src={"/IIMA.png"} alt="" width={50} height={50} />
                            <Image src={"/Realtime.png"} alt="" width={50} height={50} />
                            <Image src={"/IIMA.png"} alt="" width={50} height={50} />
                            <Image src={"/AumVentures.png"} alt="" width={50} height={50} />
                        </div>
                    {/*@ts-ignore*/}
                    </marquee>
                </div>
            </div>
        </div>
    );
}