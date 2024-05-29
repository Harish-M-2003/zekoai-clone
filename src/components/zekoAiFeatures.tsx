import FeatureCard from "./ui/featureCard";
import { VscGraph } from "react-icons/vsc";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiUserSearchLine } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";

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
            <div className="grid md:grid-cols-2 my-10 gap-5 md:gap-20">
                <div className="flex flex-col gap-5 mt-5">
                    <FeatureCard 
                        title="Broaden your Talent Pool" 
                        description="Uncover hidden talent pool instantly as AI pinpoints & reachout to qualified candidates beyond your usual networks." 
                        className="bg-[#eef0fe] " 
                        iconColor="bg-[#9cabfd]" 
                        icon={<VscGraph />}
                    />
                    <FeatureCard 
                        title="Faster Hiring with AI Avatars" 
                        description="AI Avatars automate key tasks, speeding up the hiring process by screening and interviewing candidates, allowing HR teams to focus on strategic decisions" 
                        className="bg-[#f8f5fe]" 
                        iconColor="bg-[#cba6fd]" 
                        icon={<FaPeopleGroup/>}
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <FeatureCard 
                        title="Stop Spending Hours on Irrelevant Profiles" 
                        description="Utilize advanced AI algorithms, from sourcing to interviews, ensuring that candidates who move forward are those best matched to the job & culture" 
                        className="bg-[#efe8fd] " 
                        iconColor="bg-[#cba6fd]" 
                        icon={<RiUserSearchLine/>}
                    />
                    <FeatureCard 
                        title="Data-Driven Insights for Key Decisions" 
                        description="Leverage powerful talent analytics for insightful hiring decisions, improving your time to hire and overall return on investment.." 
                        className="bg-[#dee4fd]" 
                        iconColor="bg-[#9cabfd]" 
                        icon={<FaUserPlus/>}
                    />
                </div>
            </div>
        </div>
    );
}