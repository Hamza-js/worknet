import { Home } from "lucide-react";

export const CompanyHeader = () => {
  return (
    <div className="bg-white flex items-center justify-start h-[70px] gap-[10px] px-[20px] py-[7px] rounded-[20px] border border-[#EAEAEA]">
      <Home size={24} color="#999BA7" />
      <span className="font-montserrat text-base font-normal leading-4 tracking-normal">
        Իմ ընկերությունը
      </span>
    </div>
  );
};
