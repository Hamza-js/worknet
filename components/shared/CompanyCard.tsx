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
    <div className="relative bg-white p-5 rounded-2xl border border-[#EAEAEA] w-full max-w-[240px] text-center">
      {/* Top-right teal dot */}
      <div className="absolute top-4 right-4 w-5 h-5 flex items-center justify-center rounded-full bg-[#FAFAFA]">
        <div className="w-2 h-2  rounded-full bg-[#02B1AF]"></div>
      </div>

      {/* Logo in black circle */}
      <div className="flex justify-center mb-3 mt-6">
        <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center overflow-hidden">
          <Image
            src={logo}
            alt={name}
            width={55}
            height={55}
            className="object-contain"
          />
        </div>
      </div>

      {/* Text */}
      <div>
        <h3
          className="font-bold text-base text-[#1C1B1B] min-h-[48px] max-h-[48px] overflow-hidden text-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {name}
        </h3>
        <p
          className="text-sm text-[#999BA7] mt-1 min-h-[40px] max-h-[40px] overflow-hidden text-ellipsis"
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
          {jobsCount}
        </div>
        <span className="bg-[#999BA7] w-[1px] h-6"></span>
        <div className="flex items-center gap-1 text-[#00C896] font-medium">
          <Bookmark size={16} color="#999BA7" />
          {t("companyCard.view")}
        </div>
      </div>
    </div>
  );
}
