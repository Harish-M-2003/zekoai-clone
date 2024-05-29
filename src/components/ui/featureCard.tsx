import { FeatureCardType } from "@/types/featureCardType";

export default function FeatureCard({ className , iconColor , title , description , icon } : FeatureCardType) {
    return (
        <div className={className + " transition ease-in-out rounded-xl px-10 gap-5 flex flex-col items-center justify-center hover:scale-110 transition ease-in-out h-[15em] w-[20em]"}>
            <div className="flex gap-2 items-center ">
                <div className={"p-2 text-white flex items-center align-items rounded-[200px] " + iconColor }>
                    {icon}
                </div>
                <p className="font-bold">{title}</p>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    );
}