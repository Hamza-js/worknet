import Image from "next/image";
import { Bookmark, FileText } from "lucide-react";
import { useTranslations } from "next-intl";

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
    <div className="relative bg-white h-[228px] max-w-[173px] border-[#EAEAEA] rounded-[30px] pt-5 pr-2 pl-2 pb-2 text-center md:max-w-[352px] md:h-[352px] md:pt-[72px] md:pr-[32px] md:pl-[32px] gap-[16px]">
      {/* Top-right teal dot */}
      <div className="absolute top-4 md:top-9 right-4 md:right-8 w-6 h-6 rounded-full gap-2 p-1 flex items-center justify-center bg-[#FAFAFA]">
        <div className="w-[10px] h-[10px]  rounded-full bg-[#02B1AF]"></div>
      </div>

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
          className="font-montserrat font-medium text-sm leading-4 tracking-normal text-center text-[#1C1B1B] min-h-[28px] max-h-[28px] overflow-hidden text-ellipsis font-montserrat md:font-medium text-[20px] md:leading-[16px] md:text-center"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {name}
        </h3>
        <p
          className="font-montserrat font-normal text-xs leading-5 tracking-normal text-center text-[#999BA7] overflow-hidden text-ellipsis font-montserrat md:font-normal text-[16px] md:leading-[21px] md:text-center"
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
      <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-6 text-[#999BA7] text-sm mt-4 px-1">
        <div className="flex items-center justify-center gap-1 font-inter font-normal text-base leading-none tracking-normal">
          <FileText size={20} />
          <span className="mt-1 ml-1">{jobsCount}</span>
        </div>
        <span className="bg-[#999BA7] w-[1px] h-6"></span>
        <div className="flex items-center gap-1 text-[#00C896] font-medium">
          <Bookmark size={21} color="#999BA7" />
          <span className="hidden sm:inline">{t("companyCard.view")}</span>{" "}
        </div>
      </div>
    </div>
  );
}
