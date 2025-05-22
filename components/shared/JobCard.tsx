import Image from "next/image";
import { ArrowRight, Bookmark } from "lucide-react";
import Link from "next/link";
import Bag from "../../public/assets/icons/bag.svg";
import Clock from "../../public/assets/icons/clock.svg";
import { Hint } from "./hint";

interface JobCardProps {
  logo: string;
  position: string;
  company: string;
  link?: string;
}

export default function JobCard({
  logo,
  position,
  company,
  link = `/jobs/123`,
}: JobCardProps) {
  return (
    <div className="bg-white rounded-md  p-5 flex items-center border border-[#EAEAEA] justify-between w-full          md:h-[188px] md:rounded-[30px]  md:pt-[32px] md:pr-[48px] md:pb-[32px] md:pl-[48px] gap-[64px]">
      {/* Left: Logo & Info */}
      <div className="flex items-center gap-4">
        <div className="w-[80px] h-[80px] rounded-[220px] mr-6 bg-white border border-[#999BA7] flex items-center justify-center overflow-hidden">
          <Image
            src={logo}
            alt={company}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="flex  flex-col items-start ">
          <h3 className="font-montserrat font-semibold text-[32px] leading-none text-[#1C1B1B]">
            {position}
          </h3>
          <div className="flex row gap-2 items-center justify-center mt-4">
            <Hint label="Company" side="top">
              <Image
                src={Bag}
                alt={company}
                width={20}
                height={20}
                className="object-contain"
              />
            </Hint>
            <p className="font-montserrat mt-1 font-normal text-[16px] leading-[16px] text-[#1C1B1B]">
              {company}
            </p>
            <Hint label="Tooltip" side="top">
              <Image
                src={Clock}
                alt={company}
                width={21}
                height={21}
                className="object-contain ml-3"
              />
            </Hint>
            <p className="font-montserrat mt-1 font-normal text-[16px] leading-[16px] text-[#1C1B1B]">
              {company}
            </p>
          </div>
        </div>
      </div>

      {/* Right: Bookmark + Button */}
      <div className="flex items-center gap-2">
        <Hint label="Tooltip" side="top">
          <button className="border cursor-pointer border-[#999BA7] w-[56px] h-[56px] rounded-[16px]  flex items-center justify-center gap-[10px] hover:bg-gray-100 transition">
            <Bookmark size={20} color="#999BA7" />
          </button>
        </Hint>
        <Link
          href={link}
          className="border border-[#23BA97] text-[#1C1B1B] px-3 py-1.5 text-[16px] hover:bg-gray-100 hover:border-[#999BA7] transition flex items-center w-[138px] h-[56px] rounded-[16px] pt-[19px] pr-[24px] pb-[19px] pl-[24px] gap-[10px]"
        >
          Դիտել <ArrowRight color="#1C1B1B" size={24} />
        </Link>
      </div>
    </div>
  );
}
