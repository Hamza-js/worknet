import Image from "next/image";
import { Bookmark, FileText } from "lucide-react";
import { useTranslations } from "next-intl";
import { Hint } from "./hint";

interface CompanyCardProps {
  logo: string;
  name: string;
  industry: string;
  jobsCount?: number;
}

export default function CompanyCard({
  logo,
  name,
  industry,
  jobsCount = 3,
}: CompanyCardProps) {
  const t = useTranslations("HomePage");

  return (
    <div className="relative bg-white h-[228px] md:h-[352px] gap-2 md:gap-4 max-w-[361px] border border-[#EAEAEA] rounded-[30px] pt-[20px] md:pt-20 pr-2 pl-2 pb-2 text-center">
      {/* Top-right teal dot */}

      <div className="absolute top-4 md:top-9 right-4 md:right-8 w-6 h-6 rounded-full gap-2 p-1 flex items-center justify-ceter bg-[#FAFAFA]">
        <Hint label="Online" side="top">
          <div className=" cursor-pointer w-[10px] h-[10px]  rounded-full bg-[#02B1AF]"></div>
        </Hint>
      </div>

      {/* Logo in black circle */}
      <div className="flex justify-center md:mb-4">
        <div className="w-18 h-18 rounded-full bg-black flex items-center justify-center overflow-hidden">
          <Image
            src={logo}
            alt={name}
            width={72}
            height={72}
            className="object-contain"
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col items-center justify-center">
        <h3
          className="font-montserrat font-medium text-[14px] leading-4 tracking-normal text-center pt-2 text-[#1C1B1B] min-h-[28px] max-h-[28px] overflow-hidden text-ellipsis font-montserrat md:font-medium md:text-[20px] md:leading-[16px] md:text-center"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {name}
        </h3>
        <p
          className="font-montserrat  text-[12px] md:max-w-[250px] font-mono text-base leading-5 tracking-normal text-center pt-1 md:pt-2 text-[#999BA7] overflow-hidden text-ellipsis font-montserrat md:font-normal md:text-[16px] md:leading-[21px] md:text-center"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {industry}
        </p>
      </div>

      {/* Bottom row */}
      <div className="absolute bottom-1 left-0 right-0 flex items-center justify-center text-[#999BA7] h-[64px] px-[10px] gap-4">
        <div className="flex flex-1 items-center justify-center gap-1 font-inter text-base">
          <Hint label="Jobs" side="top">
            <FileText className="cursor-pointer" size={24} />
          </Hint>
          <span className="pt-1 ml-1 font-montserrat">{jobsCount}</span>
        </div>

        <span className="w-px h-6 bg-[#999BA7] mx-4" />

        <div className="flex flex-1 items-center justify-center gap-1 text-[#00C896] font-medium text-base">
          <Bookmark size={24} color="#999BA7" />
          <span className="hidden sm:inline mt-1 font-montserrat">
            {t("companyCard.view")}
          </span>
        </div>
      </div>
    </div>
  );
}
