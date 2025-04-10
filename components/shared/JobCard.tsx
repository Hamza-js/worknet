import Image from "next/image";
import { Bookmark } from "lucide-react";
import Link from "next/link";
import Bag from "../../public/assets/icons/bag.png";
import Clock from "../../public/assets/icons/clock.png";

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
  link = "#",
}: JobCardProps) {
  return (
    <div className="bg-white rounded-md  p-5 flex items-center border border-[#EAEAEA] justify-between w-full">
      {/* Left: Logo & Info */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 mr-6 rounded-full bg-white border border-[#999BA7] flex items-center justify-center overflow-hidden">
          <Image
            src={logo}
            alt={company}
            width={30}
            height={30}
            className="object-contain"
          />
        </div>
        <div className=" flex  flex-col  items-start ">
          <h3 className="text-md font-bold text-[#1C1B1B]">{position}</h3>
          <div className="flex row gap-2 items-center justify-center mt-1">
            <Image
              src={Bag}
              alt={company}
              width={14}
              height={14}
              className="object-contain"
            />
            <p className="text-[13px] text-[#1C1B1B] leading-none">{company}</p>
            <Image
              src={Clock}
              alt={company}
              width={14}
              height={14}
              className="object-contain ml-3"
            />
            <p className="text-[13px] text-[#1C1B1B] leading-none">{company}</p>
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
