import { AnnouncementsHeader } from "@/components/ui/announcements/header";
import { AnnouncementForm } from "@/components/ui/announcements/announcementForm";

import { AnnouncementCard } from "@/components/ui/announcements/announcementCard";
import { CircleAlert } from "lucide-react";

export default function AnnouncementsPage() {
  return (
    <div className="p-5 flex flex-col gap-4">
      <AnnouncementsHeader />

      {/* Info Banner */}
      <div className="w-full flex gap-3 items-center justify-start text-left bg-[#FF7B1C]/30 border text-[#5C2C00] rounded-[16px] px-6 py-6 ">
        <CircleAlert size={24} color="#FF7B1C" />
        <span className="font-montserratArm font-normal text-[16px] leading-[26px] tracking-[0%]">
          <span className="font-montserratArm font-semibold text-[16px] leading-[26px] tracking-[0%]">
            Ուշադրություն։{" "}
          </span>
          Եթե աշխատանքային հայտարարությունը նախատեսված է աշխատողների հավաքագրման
          նպատակով՝ նշեք առկա, սեզոնային, կամ այլ։ Բացատրության դաշտում նշեք
          աշխատանքի անցկացման վայրի հասցեն և այլ մանրամասներ։
        </span>{" "}
      </div>

      <AnnouncementForm />

      <AnnouncementCard />
      <AnnouncementCard />
    </div>
  );
}
