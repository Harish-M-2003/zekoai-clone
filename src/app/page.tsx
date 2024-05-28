// import Image from "next/image";

import ZekoAiEffortlessAcquistion from "@/components/zekoAiEffortlessAcquistion";
import ZekoAiFeatures from "@/components/zekoAiFeatures";
import ZekoAiFooter from "@/components/zekoAiFooter";
import ZekoTalentAcquistionBanner from "@/components/zekoAiTalentAcquistion";
import ZekoBackedByBanner from "@/components/zekoAiBackedBybanner";
import ZekoAiBusiness from "@/components/zekoAiBusiness";
import ZekoAiLanding from "@/components/zekoAiLanding";


export default function Home() {
  return (
    <div>
      <ZekoAiLanding/>
      <ZekoAiBusiness/>
      <ZekoAiFeatures/>
      <ZekoTalentAcquistionBanner/>
      <ZekoAiEffortlessAcquistion/>
      <ZekoBackedByBanner/>
      <ZekoAiFooter/>
    </div>
  );
}
