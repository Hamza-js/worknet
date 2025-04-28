import Image from "next/image";
import { Bookmark } from "lucide-react";
import Link from "next/link";
import Bag from "../../public/assets/icons/bag.svg";
import Clock from "../../public/assets/icons/clock.svg";

interface JobCardProps {
  logo: string;
  position: string;
  company: string;
  link?: string;
}

export default function JobCardMobile({
  logo,
  position,
  company,
  link = `/jobs/123`,
}: JobCardProps) {
  return (
    <div className="bg-white h-[177px] top-[2061px] left-4 rounded-[30px] gap-[24px] p-4 flex items-center border border-[#EAEAEA] justify-between w-full flex-col">
      {/* Left: Logo & Info */}
      <div className="flex items-center  w-full  h-[73px] min-w-[320px] gap-[16px]">
        <div className="w-[48px] h-[48px] rounded-[220px]  bg-white border border-[#999BA7] flex items-center justify-center overflow-hidden">
          <Image
            src={logo}
            alt={company}
            width={35}
            height={35}
            className="object-contain"
          />
        </div>
        <div className=" flex  flex-col  items-start">
          <h3 className="font-montserrat font-semibold text-[16px] leading-none text-[#1C1B1B]">
            {position}
          </h3>
          <div className="flex flex-col gap-[5px] items-center justify-center mt-1">
            <div>
              <Image
                src={Bag}
                alt={company}
                width={14}
                height={14}
                className="object-contain"
              />
              <p className="text-[13px] text-[#1C1B1B] leading-none">
                {company}
              </p>
            </div>
            <div className="flex gap-1 items-center justify-center">
              <Image
                src={Clock}
                alt={company}
                width={14}
                height={14}
                className="object-contain ml-3"
              />
              <p className=" text-[#1C1B1B] font-montserrat font-normal text-[14px] leading-[16px]">
                {company}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Bookmark + Button */}
      <div className="flex items-center gap-2">
        <button className="border border-[#999BA7] rounded-md p-2 hover:bg-gray-100 transition">
          <Bookmark size={16} color="#1C1B1B" />
        </button>
        <Link
          href={link}
          className="border border-[#23BA97] text-[#1C1B1B] px-3 py-1.5 rounded-md text-sm hover:bg-gray-100 hover:border-[#999BA7] transition flex items-center gap-1"
        >
          Դիտել →
        </Link>
      </div>
    </div>
  );
}
