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
    <div className="relative bg-white h-[228px] min-w-[173px] border border-[#EAEAEA] rounded-[30px] pt-5 pr-2 pl-2 pb-2 max-w-[240px] text-center">
      {/* Top-right teal dot */}
      <div className="absolute top-4 right-4 w-5 h-5 flex items-center justify-center rounded-full bg-[#FAFAFA]">
        <div className="w-2 h-2  rounded-full bg-[#02B1AF]"></div>
      </div>

      {/* Logo in black circle */}
      <div className="flex justify-center mb-2">
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
          className="font-montserrat font-medium text-sm leading-4 tracking-normal text-center text-[#1C1B1B] min-h-[28px] max-h-[28px] overflow-hidden text-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {name}
        </h3>
        <p
          className="font-montserrat font-normal text-xs leading-5 tracking-normal text-center text-[#999BA7] mt-1 overflow-hidden text-ellipsis"
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
      <div className="flex items-center justify-between text-[#999BA7] text-sm mt-4 px-1">
        <div className="flex items-center gap-1">
          <FileText size={16} />
          <span className="hidden md:inline">{jobsCount}</span>{" "}
        </div>
        <span className="bg-[#999BA7] w-[1px] h-6"></span>
        <div className="flex items-center gap-1 text-[#00C896] font-medium">
          <Bookmark size={16} color="#999BA7" />
          <span className="hidden md:inline">{t("companyCard.view")}</span>{" "}
        </div>
      </div>
    </div>
  );
}
