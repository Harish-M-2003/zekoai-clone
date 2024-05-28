import FeatureCard from "./ui/featureCard";


export default function ZekoAiFeatures() {
    return (
        <div className="w-screen h-full grid grid-cols-1 md:grid-cols-2 md:px-40 py-20 px-10">
            <div className="flex flex-col max-md:pt-5 md:justify-center gap-5 text-[#372d7d]">
                <div className="flex flex-col gap-5">
                    <p className="font-bold text-2xl md:text-4xl text-[#4b34c4]">The Unmatched Advantage
                        with Zeko AI
                    </p>
                    <p className="max-md:text-sm">Experience the Acquistion Intelligence in action</p>
                </div>
                <div className="md:block hidden">
                    <button className="bg-[#6a60eb] transition ease-in-out hover:bg-[#4b34c4] text-white p-4 rounded-xl font-bold">Get Started 🔥</button>
                </div>
            </div>
            <div className="gap-5 grid md:grid-cols-2 my-10">
                {/* <div className="md:flex  gap-5 md:flex-col"> */}
                    <FeatureCard className="bg-[#eef0fe] " />
                    <FeatureCard className="bg-[#efe8fd] " />
                {/* </div> */}
                {/* <div className="md:flex gap-5 md:flex-col md:mt-8"> */}
                    <FeatureCard className="bg-[#f8f5fe]" />
                    <FeatureCard className="bg-[#dee4fd]" />
                {/* </div> */}
            </div>
        </div>
    );
}