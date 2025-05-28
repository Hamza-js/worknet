import Image from "next/image";
import Icon1 from "../../../public/assets/icons/sidebar-icon-1.svg";

export const AnnouncementsHeader = () => {
  return (
    <div className="bg-white flex items-center justify-start h-[70px] gap-[10px] px-[20px] py-[7px] rounded-[20px] border border-[#EAEAEA]">
      <Image src={Icon1} alt="Իմ հայտարարությունները" className="h-6 w-6" />
      <span className="font-montserrat text-base font-normal leading-4 tracking-normal mt-[5px]">
        Իմ հայտարարությունները
      </span>
    </div>
  );
};
