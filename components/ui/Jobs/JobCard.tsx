import Image from "next/image";
import { Bookmark, Send } from "lucide-react";
import Link from "next/link";
import Bag from "../../../public/assets/icons/bag.svg";
import Clock from "../../../public/assets/icons/clock.svg";
import { Button } from "../button";

interface JobCardProps {
  logo: string;
  position: string;
  company: string;
  link?: string;
}

export default function JobCard({
  logo = "https://logo.clearbit.com/google.com",
  position = "Frontend Developer",
  company = "Google",
  link = `/jobs/123`,
}: JobCardProps) {
  return (
    <div className="bg-white lg:rounded-3xl p-3 md:p-5 lg:p-8 flex items-center border border-[#EAEAEA] justify-between w-full max-w-[1167px] h-[188px] rounded-[40px] pt-[32px] pr-[48px] pb-[32px] pl-[48px] gap-[64px]">
      {/* Left: Logo & Info */}
      <div className="flex items-center gap-4">
        <div className=" w-[80px] h-[80px] mr-6 rounded-full bg-white border border-[#999BA7] flex items-center justify-center overflow-hidden">
          <Image
            src={logo}
            alt={company}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <div className=" flex  flex-col  items-start gap-1 ">
          <h3 className="font-[Montserrat\ arm] font-semibold text-2xl leading-[100%] tracking-normal text-[#1C1B1B]">
            {position}
          </h3>
          <div className="flex row gap-2 items-center justify-center mt-1">
            <Image
              src={Bag}
              alt={company}
              width={24}
              height={24}
              className="object-contain"
            />
            <p className="font-[Montserrat\ arm] font-normal text-base leading-4 tracking-normal text-[#1C1B1B] leading-none">
              {company}
            </p>
            <Image
              src={Clock}
              alt={company}
              width={24}
              height={24}
              className="object-contain ml-3"
            />
            <p className="font-[Montserrat\ arm] font-normal text-base leading-4 tracking-normal text-[#1C1B1B] leading-none">
              {company}
            </p>
          </div>
        </div>
      </div>

      {/* Right: Bookmark + Button */}
      <div className="flex items-center gap-2">
        <button className="border border-[#999BA7] h-[56px] w-[56px] rounded-[16px] flex items-center justify-center hover:bg-gray-100 transition">
          <Bookmark size={27} color="#999BA7" />
        </button>
        <Link href={link}>
          <Button
            variant="primary"
            size="small"
            className="w-[178px] h-[56px] gap-[4px]"
          >
            <Send fill="white" size={20} className="mr-2" />
            <span className="font-[Montserrat\ arm] font-medium text-base leading-4 tracking-normal text-center">
              Դիմել
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
