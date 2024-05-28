import Image from "next/image";

export default function ZekoAiLanding() {
    return (
        <div className="h-full w-screen flex justify-center items-center pt-10">
            <div className="grid md:grid-cols-2 p-20">
                <div className="flex flex-col gap-5 max-md:flex-reverse max-md:order-last max-md:items-center">
                    <div className="flex flex-col gap-5">
                        <h1 className="font-bold text-5xl text-[#4b34c4] max-md:text-center">Intelligent Automation in Recruitment</h1>
                        <p className="md:text-2xl text-[#9257f0] font-[500] max-md:text-center">Experience the Future of Hiring with AI-<br />Powered Precision and Speed </p>
                    </div>
                    <div className="flex items-start flex-col gap-5">
                        <div className="flex border-2 gap-5 border-red-400 rounded-xl px-7 md:px-4 py-2">
                            <div className="flex justify-center items-center bg-red-500 text-white rounded-[10rem] px-2">
                                <p className="font-bold text-4xl p-1">P</p>
                            </div>
                            <div className="flex text-red-500 flex-col :justify-center">
                                <p className="text-xs">#1 PRODUCT OF THE WEEK</p>
                                <p className="font-bold md:text-xl">Artificial Intelligence</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-5 md:w-[70%] w-full max-md:flex-col items-center">
                        <input className="border border-gray-200 p-2 rounded-lg w-full" placeholder="Enter your Work Email"></input>
                        <button className="bg-[#4337ec] text-white p-2 px-4 rounded-lg w-[50%]">Sign Up</button>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image src={"/grid-logo.png"} alt="" height={700} width={700} />
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}