import Image from "next/image";
import Icon5 from "../../../public/assets/icons/sidebar-icon-5.svg";

export const InforHeaderHeader = () => {
  return (
    <div className="bg-white flex items-center justify-start h-[70px] gap-[10px] px-[20px] py-[7px] rounded-[20px] border border-[#EAEAEA]">
      <Image src={Icon5} alt="Անձնական տվյալներ" className="h-6 w-6" />
      <span className="font-montserrat text-base font-normal leading-4 tracking-normal mt-[5px]">
        Անձնական տվյալներ
      </span>
    </div>
  );
};
