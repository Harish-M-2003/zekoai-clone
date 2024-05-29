import Image from "next/image";

export default function ZekoAiNavBar() {
    
    return (
        <div className="w-screen md:px-16 px-5 py-2 max-md:py-4 border-b-2 z-[10] fixed bg-white flex justify-between items-center">
            <div>
                <Image src={"/logo.webp"} alt="" height={100} width={100} />
            </div>
            <div className="flex gap-5 max-md:hidden">
                
                <p className="">About</p><span className="">{"."}</span>
                <p className="">Products</p><span className="">{"."}</span>
                <p className="">Pricing</p>
                
            </div>
            <div className="flex gap-5 px-5 button-color max-md:hidden">
                <button className="bg-[#6a60eb] hover:bg-[#4b34c4] transition ease-in-out text-white p-3 rounded-xl font-bold">Sign Up</button>
                <button className=" hover:bg-[#4b34c4] border hover:text-white transition ease-in-out p-3 rounded-xl font-bold">Login in</button>
            </div>
        </div>
    );
}