
export default function ZekoTalentAcquistionBanner() {

    const talentAcquisitionDetails = [
        {
            title: "Technology and Product",
            description: "AI-powered analysis and skill matching, ensuring companies stay ahead with the best minds in technology.",
        },
        {
            title: "Technology and Product",
            description: "AI-powered analysis and skill matching, ensuring companies stay ahead with the best minds in technology.",
        },
        {
            title: "Technology and Product",
            description: "AI-powered analysis and skill matching, ensuring companies stay ahead with the best minds in technology.",
        },
        {
            title: "Technology and Product",
            description: "AI-powered analysis and skill matching, ensuring companies stay ahead with the best minds in technology.",
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
                        <div className="flex flex-col text-[#dfe4ff] items-center gap-5">
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