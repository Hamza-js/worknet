import Image from "next/image";
import Icon2 from "../../../public/assets/icons/sidebar-icon-2.svg";

export const CompanyHeader = () => {
  return (
    <div className="bg-white flex items-center justify-start h-[70px] gap-[10px] px-[20px] py-[7px] rounded-[20px] border border-[#999BA7]">
      <Image src={Icon2} alt="Իմ ընկերությունը icon" className="h-6 w-6" />
      <span className="font-montserrat text-base font-normal leading-4 tracking-normal mt-[5px]">
        Իմ ընկերությունը
      </span>
    </div>
  );
};
