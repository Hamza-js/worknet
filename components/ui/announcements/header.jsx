import Image from "next/image";
import Icon1 from "../../../public/assets/icons/sidebar-icon-1.svg";
import { CirclePlus } from "lucide-react";

export const AnnouncementsHeader = () => {
  return (
    <div className="bg-white flex items-center justify-start h-[70px] gap-[10px] px-[20px] py-[7px] rounded-[20px] border border-[#EAEAEA]">
      <CirclePlus className="h-6 w-6" color="#999BA7" />
      <span className="font-montserrat text-base font-normal leading-4 tracking-normal mt-[5px]">
        Իմ հայտարարությունները
      </span>
    </div>
  );
};
