import { Button } from "@/components/ui/button";
import { ArrowUpRight, FolderClosed, Pencil, TrendingUp } from "lucide-react";
import logo from "../../../public/assets/images/brandsLogos/1.svg";
import Image from "next/image";

export const CompanyCard = () => {
  return (
    <div className="w-full h-[342px] md:h-[104px] gap-[10px] p-[20px] flex flex-col md:flex-row items-center md:items-center justify-between  px-[20px] py-[14px] rounded-[20px] border border-[#EAEAEA] shadow-sm bg-white font-montserrat text-gray-900">
      {/* Top-left: Logo + Info */}
      <div className="flex items-center gap-3 w-full md:w-auto">
        <Image
          alt="logo"
          src={logo}
          className="w-16 h-16 rounded-[10px] shadow-sm object-contain"
        />
        <div className="flex flex-col md:text-left gap-2 text-left">
          <span className="font-sans font-semibold text-base leading-none tracking-normal line-clamp-2">
            Meduzee Creative Agency
          </span>
          <span className="font-sans font-normal text-xs leading-none tracking-normal text-gray-500 truncate">
            hello@meduzee.com
          </span>
        </div>
      </div>

      {/* Middle: Stats */}
      <div className="flex flex-col md:flex-row items-center gap-2 text-sm font-normal text-gray-700">
        <div className="flex items-center gap-1 px-2 py-1 ">
          <FolderClosed size={24} color="#999BA7" />{" "}
          <span className="font-montserrat text-base font-normal leading-none tracking-normal">
            Հայտարարություններ
          </span>
          <span className="ml-1 bg-[#B8B8B833] px-[16px] py-[4px] rounded-[50px]">
            3
          </span>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 l">
          <TrendingUp size={24} color="#999BA7" />{" "}
          <span className="font-montserrat text-base font-normal leading-none tracking-normal">
            Դիտումներ
          </span>
          <span className="ml-1 bg-[#B8B8B833] px-[16px] py-[4px] rounded-[50px]">
            1310
          </span>
        </div>
      </div>

      {/* Bottom: Buttons */}
      <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
        <Button
          variant="outline"
          className="w-[195px] h-[56px] font-montserrat text-base font-normal leading-4 tracking-normal gap-2 p-4 rounded-[20px] border border-[#999BA7]"
        >
          <ArrowUpRight size={24} color="#999BA7" />
          Դիտել կայքում
        </Button>
        <Button
          variant="ghost"
          className="w-[170px] h-[56px] gap-2 p-4 rounded-[20px] border border-[#00CDAC] font-montserrat text-base font-normal leading-4 tracking-normal"
        >
          <Pencil size={24} color="#999BA7" />
          Խմբագրել
        </Button>
      </div>
    </div>
  );
};
