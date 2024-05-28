import Image from "next/image";

export default function ZekoAiFooter() {
    return (
        <div className="bg-[#efe8fd] w-screen footer-font-color px-8 md:px-32 pt-10 flex flex-col md:gap-7">
            <div className="w-full md:flex justify-between gap-5">
                <div className="flex flex-col gap-5">
                    <Image src={"/logo.webp"} alt="" width={190} height={190}/>
                    <p className="text-xl font-bold">Revolutionising Recruitment</p>
                    <div className="flex flex-col gap-2 text-lg">
                        <p>Metro station, H-294, Building 2, Krastay Cowork</p>
                        <p>Lane 2, First Floor, Westend Marg, near Saket, Saidulajab</p>
                        <p>New Delhi, Delhi 110030, India</p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-4 grid-cols-2 gap-3 max-md:py-10">
                    <div className="flex flex-1">
                        <ul className="flex flex-col gap-5">
                            <li className="font-bold">Solutions</li>
                            <li className="text-lg">Source Analytics</li>
                            <li className="text-lg">Dynamic Interviews</li>
                            <li className="text-lg">Automated Headhunting</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-5">
                            <li className="text-xl font-bold">Use Cases</li>
                            <li className="text-lg">case 1</li>
                            <li className="text-lg">case 2</li>
                            <li className="text-lg">case 3</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-5">
                            <li className="text-xl font-bold">Legal</li>
                            <li className="text-lg">Terms</li>
                            <li className="text-lg">Security</li>
                            <li className="text-lg">Privacy</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-5">
                            <li className="text-xl font-bold">Company</li>
                            <li className="text-lg">About Us</li>
                            <li className="text-lg">Why Us&#63;</li>
                            <li className="text-lg">Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between p-10  items-center border-t-2  border-[#6926c8]">
                    <div>
                        <p className="max-md:text-sm">&copy; 2024 Zeko.Ai All rights reserved.</p>
                    </div>
                    <div className="sm:block hidden">
                        <p className="max-md:text-xs">Made with ❤️ in india.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}