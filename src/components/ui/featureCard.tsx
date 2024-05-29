import { GoAlert } from "react-icons/go";

export default function FeatureCard({ className = "" , iconColor = "" , title = "" , description="" }: { className?: string , iconColor? : string , title : string , description : string}) {
    return (
        <div className={className + " rounded-xl px-10 py-5 gap-5 flex flex-col items-center justify-center hover:scale-110 transition ease-in-out h-[20em] w-[20em]"}>
            <div className="flex gap-2 items-center ">
                <div className={"p-2 flex items-center align-items rounded-[200px] " + iconColor }>
                    <GoAlert />
                </div>
                <p className="font-bold">{title}</p>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    );
}