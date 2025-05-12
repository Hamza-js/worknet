import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";
import { ReactNode } from "react";

interface ResumeCardProps {
  percentage: number;
  title: string;
  subtitle: string;
}

export function PercentageCard({
  percentage,
  title,
  subtitle,
}: ResumeCardProps) {
  const strokeDashoffset = 100 - percentage;

  return (
    <Card className="flex flex-row items-center gap-[9px] px-6 py-4 rounded-[20px] border border-[#999BA7] w-full">
      <div className="relative w-24 h-24">
        {" "}
        {/* Increased from w-16 h-16 */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 64 64">
          <circle
            cx="32"
            cy="32"
            r="26"
            stroke="#FACC15"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray="163.36"
            strokeDashoffset={(163.36 * (100 - percentage)) / 100}
            strokeLinecap="round"
          />
          <circle
            cx="32"
            cy="32"
            r="26"
            stroke="#E5E7EB"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray="163.36"
            strokeDashoffset="0"
            opacity={0.3}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-base font-medium">
          {percentage}%
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-[Montserrat arm] font-semibold text-[16px] leading-[16px] tracking-[0%]">
          {title}
        </span>
        <span className="font-[Montserrat arm] font-normal text-[14px] leading-[16px] tracking-[0%]">
          {subtitle}
        </span>
      </div>
    </Card>
  );
}
