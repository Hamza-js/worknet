import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowUpRight,
  Clock,
  Eye,
  File,
  FolderClosed,
  Pencil,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

export const ResumesCard = ({ avatar }) => {
  return (
    <div className="w-full h-[88px] gap-[10px] flex flex-col md:flex-row items-center md:items-center justify-between  px-[24px] py-[16px] rounded-[30px] border border-[#EAEAEA]  bg-white font-montserrat text-gray-900">
      {/* Top-left: Logo + Info */}
      <div className="flex items-center gap-3 w-full md:w-auto">
        <Image
          alt="logo"
          src={avatar}
          className="w-14 h-14 rounded-[220px] object-contain"
        />

        <span className="font-sans font-semibold text-[20px] leading-none tracking-normal line-clamp-1">
          Karina Gevorgyan
        </span>
      </div>

      <div className="hidden md:flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
        <div className="flex items-center gap-1 px-2 py-1 ">
          <Clock size={24} color="#999BA7" />
          <span className="font-montserrat text-base font-normal leading-none tracking-normal text-[#1C1B1B]">
            1 օր առաջ
          </span>
        </div>
        <div className="flex items-center  gap-1 px-2 py-1 mr-16">
          <File size={24} color="#999BA7" />
          <span className="font-montserrat text-base font-normal leading-none tracking-normal text-[#1C1B1B]">
            Interior Designer
          </span>
        </div>
        <Button
          variant="outline"
          className="w-[195px] h-[56px] font-montserrat text-base font-normal leading-4 tracking-normal gap-2 p-4 rounded-[20px] border border-[#00CDAC]"
        >
          <ArrowDown size={24} color="#999BA7" />
          Դիտել կայքում
        </Button>
        <Button
          variant="ghost"
          className="w-[170px] h-[56px] gap-2 p-4 rounded-[20px] border border-[#00CDAC] font-montserrat text-base font-normal leading-4 tracking-normal"
        >
          <Eye size={24} color="#999BA7" />
          Խմբագրել
        </Button>
      </div>
    </div>
  );
};
