import { CirclePlus, Home } from "lucide-react";

export const InforHeaderHeader = () => {
  return (
    <div className="bg-white flex items-center justify-start h-[70px] gap-[10px] px-[20px] py-[7px] rounded-[20px] border border-[#EAEAEA]">
      <CirclePlus size={24} color="#999BA7" />
      <span className="font-montserrat text-base font-normal tracking-normal">
        Ավելացնել հայտարարություն
      </span>
    </div>
  );
};
