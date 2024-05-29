import { BusinessCardType } from "@/types/businessCardType";

export function BusinessCard({ icon, description }: BusinessCardType) {
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