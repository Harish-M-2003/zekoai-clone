
import Image from "next/image";
import { FaFolder } from "react-icons/fa";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { BsGraphUp } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { LuSearch } from "react-icons/lu";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsPersonCheckFill } from "react-icons/bs";
import { MdSpatialAudioOff } from "react-icons/md";
import { ImFileText2 } from "react-icons/im";

function BusinessCard({ className, icon, description }: { className?: string, icon: JSX.Element, description: string }) {
    return (
        <div className="p-5 flex flex-col items-center gap-5">
            <div className="flex justify-center items-center text-white h-[3.5em] w-[3.5em] rounded-[300px] bg-gradient-to-tr from-[#392d82] to-[#9799f4]">
                {icon}
            </div>
            <div className="text-xs text-white">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function ZekoAiBusiness() {

    const businessCards = [
        {
            id: 0,
            icon: <FaFolder />,
            description: "Invite",
        },
        {
            id: 1,
            icon: <FaFolder />,
            description: "Application",
        },
        {
            id: 2,
            icon: <BsGraphUp />,
            description: "Data Analysis",
        },
        {
            id: 3,
            icon:<CiSettings />,
            description: "Integration",
        },
        {
            id: 4,
            icon: <LuSearch />,
            description: "Head Hunt",
        },
        {
            id: 5,
            icon: <IoBagHandleOutline />,
            description: "Job Posting",
        },
        {
            id: 6,
            icon: <BsPersonCheckFill />,
            description: "HR Screening",
        },
        {
            id: 7,
            icon: <FaFolder />,
            description: "Auto Screening",
        },
        {
            id: 8,
            icon: <MdSpatialAudioOff />,
            description: "Auto Interviews",
        },
        
        {
            id: 9,
            icon: <ImFileText2 />,
            description: "Interview Reports",
        },
        
    ];

    return (
        <div className="h-full w-screen bg-[#392d82] py-10 px-5 ">
            <div className="flex justify-center flex-col items-center gap-5">

                <h1 className="text-white font-bold text-4xl text-center">Driving Impactful Business Growth with a</h1>
                <p className="font-bold text-lg text-[#392d82] bg-[#c6cbff] rounded-lg p-2">Powerful Suite Of Products</p>
            </div>
            <div className="h-full w-full">
                <ScrollArea >
                    <div className="flex w-max space-x-4 p-4">
                        {
                            businessCards.map((card) => (
                                <BusinessCard icon={card.icon} description={card.description} key={card.id}/>
                            ))
                        }
                    </div>
                    <ScrollBar/>
                </ScrollArea>
            </div>
            <div className="flex justify-center pt-5">
                <Image src={"/dashboard.svg"} height={1100} width={1100} alt="" />
            </div>
        </div>
    );
}