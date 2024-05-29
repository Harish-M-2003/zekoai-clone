import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import Image from "next/image";

export default function TestimonialCard({ content, testimonialName, designation }: { content: string, testimonialName: string, designation: string }) {
  return (
    <Card className="shadow h-full border max-md:border-violet-500 rounded-lg max-md:w-[17em] max-md:py-10">
      <CardContent className="p-5 ">
        <p className="line-clamp-3">{content}</p><br />
        <p>{testimonialName}</p>
      </CardContent>
      <CardFooter className="flex">
        <p className="md:text-2xl text-xs font-bold">{designation}</p>
        <div className="max-md:hidden border rounded-lg p-5 py-8">
          <Image src={"/airmeet.svg"} alt="" height={200} width={200} />
        </div>
      </CardFooter>
    </Card>
  );
}