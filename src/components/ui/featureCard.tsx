import { GoAlert } from "react-icons/go";

export default function FeatureCard({ className = "" }: { className?: string }) {
    return (
        <div className={className + " rounded-xl p-10 gap-5 flex flex-col hover:scale-110 transition ease-in-out"}>
            <div className="flex gap-2 items-center ">
                <div className="p-2 flex items-center align-items rounded-[200px]">
                    <GoAlert />
                </div>
                <p className="font-bold">Title</p>
            </div>
            <div>
                <p>Uncover hidden talent pool instantly as AI pinpoints & reachout to qualified candidates beyond your usual networks.</p>
            </div>
        </div>
    );
}