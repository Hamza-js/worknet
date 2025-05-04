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
    <div className="relative bg-white h-[352px] max-w-[361px] border border-[#EAEAEA] rounded-[30px] pt-18 pr-8 pl-8 pb-2 text-center">
      {/* Top-right teal dot */}
      {/* <div className="absolute top-4 md:top-9 right-4 md:right-8 w-6 h-6 rounded-full gap-2 p-1 flex items-center justify-center bg-[#FAFAFA]">
        <div className="w-[10px] h-[10px]  rounded-full bg-[#02B1AF]"></div>
      </div> */}

      {/* Logo in black circle */}
      <div className="flex justify-center mb-2 md:mb-4">
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
      <div>
        <h3
          className="font-montserrat font-medium text-lg leading-4 tracking-normal text-center pt-2 text-[#1C1B1B] min-h-[28px] max-h-[28px] overflow-hidden text-ellipsis font-montserrat md:font-medium text-[20px] md:leading-[16px] md:text-center"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {name}
        </h3>
        <p
          className="font-montserrat font-normal text-base leading-5 tracking-normal text-center pt-2 text-[#999BA7] overflow-hidden text-ellipsis font-montserrat md:font-normal text-[16px] md:leading-[21px] md:text-center"
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
      <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center text-[#999BA7] h-[64px] pt-[17px] pr-[10px] pb-[17px] pl-[10px] gap-[60px] md:gap-[30px]">
        <div className="flex items-center flex-1 justify-center gap-1 font-inter font-normal text-base leading-none tracking-normal">
          <Hint label="Jobs" side="top">
            <FileText size={24} />
          </Hint>
          <span className="mt-1 ml-1 font-montserrat font-normal text-base leading-none tracking-normal">
            {jobsCount}
          </span>
        </div>
        <span className="bg-[#999BA7] w-[1px] h-6"></span>
        <div className="flex flex-1 items-center gap-1 text-[#00C896] font-medium">
          <Bookmark size={24} color="#999BA7" />
          <span className="hidden sm:inline font-montserrat font-normal text-base leading-none tracking-normal">
            {t("companyCard.view")}
          </span>{" "}
        </div>
      </div>
    </div>
  );
}
