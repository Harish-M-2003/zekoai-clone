import { GoGear } from "react-icons/go";
import { FaDollarSign } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { PiPipeWrenchLight } from "react-icons/pi";

export default function ZekoTalentAcquistionBanner() {

    const talentAcquisitionDetails = [
        {
            id : 0,
            icon : <GoGear/>,
            style : "bg-gradient-to-tr from-red-500 from-40% to-white",
            title: "Technology and Product",
            description: "AI-powered analysis and skill matching, ensuring companies stay ahead with the best minds in technology.",
        },
        {
            id : 1,
            icon : <FaDollarSign />,
            style : "bg-gradient-to-tr from-[#9e6af1] from-40% to-white to-100%",
            title: "Finance, Accounts & HR",
            description: "Excel at sourcing & auto-interviewing candidates with the intricate blend of analytical and soft skills.",
        },
        {
            id : 2,
            icon : <FaTag/>,
            style : "bg-gradient-to-tr from-[#5cbc8f] from-40% to-white to-100%",
            title: "Sales and Support",
            description: "Rely on conversational AI interviews to evaluate interpersonal skills, and the strategic thinking at bulk, before talking to anyone.",
        },
        {
            id : 3,
            icon : <PiPipeWrenchLight/>,
            style : "bg-gradient-to-tr from-[#9e6af1] from-40% to-white to-100%",
            title: "Blue and Gray Collar",
            description: "Precise evaluation, of training effectiveness, in local language, to assess skill acquisition & alignment with operational standards.",
        },
    ];

    return (
        <div className="w-screen bg-[#501b88] p-5 px-10 py-10 md:p-16 flex flex-col gap-20 ">
            <div className="flex flex-col justify-center items-center gap-5">
                <p className="text-[#dfe4ff] font-bold text-4xl text-center">Talent Acqusition For Every Role</p>
                <p className="text-[#c6cbff] flex text-center text-xl">Discover Tailored Talent Acquisition Solutions for Every Role, Designed to Empower Businesses in Streamlining Talent Needs and Accelerating Growth</p>
            </div>
            <div className="grid md:grid-cols-4 flex gap-20">
                {
                    talentAcquisitionDetails.map((card) => (
                        <div className="flex flex-col text-[#dfe4ff] items-center gap-5" key={card.id}>
                            <div className={"p-4 rounded-[100px] "+card.style}>
                                <p className="text-4xl">{card.icon}</p>
                            </div>
                            <p>{card.title}</p>
                            <div className="w-[20rem] text-[#c6cbff]">
                                <p className="text-center text-lg">{card.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}