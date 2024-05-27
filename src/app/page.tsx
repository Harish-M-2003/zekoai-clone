// import Image from "next/image";

import ZekoAiEffortlessAcquistion from "@/components/zekoAiEffortlessAcquistion";
import ZekoAiFeatures from "@/components/zekoAiFeatures";
import ZekoAiFooter from "@/components/zekoAiFooter";
import ZekoTalentAcquistionBanner from "@/components/zekoAiTalentAcquistion";
import ZekoBackedByBanner from "@/components/zekoBackedBybanner";

export default function Home() {
  return (
    <div>
      <ZekoAiFeatures/>
      <ZekoTalentAcquistionBanner/>
      <ZekoAiEffortlessAcquistion/>
      <ZekoBackedByBanner/>
      <ZekoAiFooter/>
    </div>
  );
}
