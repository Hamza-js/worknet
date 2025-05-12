import { Button } from "@/components/ui/button";
import { ArrowUpRight, FolderClosed, Pencil, TrendingUp } from "lucide-react";
import logo from "../../../public/assets/images/brandsLogos/1.svg";
import Image from "next/image";
import Bag from "../../../public/assets/icons/bag.svg";
import Clock from "../../../public/assets/icons/clock.svg";
import { Hint } from "@/components/shared/hint";

export const AnnouncementCard = () => {
  return (
    <div className="w-full h-[428px] md:h-[188px] gap-[10px]  flex flex-col md:flex-row items-center md:items-center justify-between  px-[48px] py-[32px] rounded-[40px] border border-[#EAEAEA]  bg-white font-montserrat text-gray-900">
      {/* Top-left: Logo + Info */}
      <div className="flex flex-col md:flex-row  items-start gap-6 w-full md:w-auto">
        <div className="w-[80px] h-[80px] rounded-[220px] border border-[#999BA7] object-cover overflow-hidden flex items-center justify-center">
          <Image alt="logo" src={logo} className=" object-contain" />
        </div>
        <div className="flex flex-col md:text-left gap-2 text-left">
          <span className="font-montserrat font-semibold text-[20px] md:text-[32px] leading-none tracking-normal line-clamp-1">
            Meduzee Creative Agency
          </span>
          <div className="flex flex-col md:flex-row  items-start gap-2 md:items-center mt-2">
            <div className="flex gap-2">
              <Hint label="Company" side="top">
                <Image
                  src={Bag}
                  alt="Ամբողջ դրույք"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </Hint>
              <p className="font-montserrat mt-1 font-normal text-[16px] leading-[16px] text-[#1C1B1B]">
                Ամբողջ դրույք
              </p>
            </div>
            <div className="flex gap-2">
              <Hint label="Tooltip" side="top">
                <Image
                  src={Clock}
                  alt="Պայմանագրային"
                  width={21}
                  height={21}
                  className="object-contain md:ml-3"
                />
              </Hint>
              <p className="font-montserrat mt-1 font-normal text-[16px] leading-[16px] text-[#1C1B1B]">
                Պայմանագրային
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle: Stats */}
      <div className="flex flex-col md:flex-row w-full md:w-auto items-start md:items-center gap-2 text-sm font-normal text-gray-700">
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
