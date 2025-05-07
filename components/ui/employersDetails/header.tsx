"use client";

import { BookmarkMinus, ChevronLeft } from "lucide-react";
import bgImage from "../../../public/assets/images/digitain.png";
import { useRouter } from "next/navigation";
import { Hint } from "@/components/shared/hint";

export default function Header() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <header className="py-5 relative h-[221px] rounded-[22px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      ></div>

      <div className="flex justify-between items-center px-3 relative z-10">
        <Hint label="Back" side="top">
          <span
            onClick={handleGoBack}
            className="bg-white flex items-center justify-center cursor-pointer w-[56px] h-[56px] rounded-[12px]"
          >
            <ChevronLeft size={24} className="cursor-pointer" />
          </span>
        </Hint>

        {/* Save Button */}
        <span className="bg-white flex space-x-1 items-center p-2 cursor-pointer w-[140px] h-[57px] rounded-[12px] pt-[15px] pr-[24px] pb-[15px] pl-[24px] gap-[8px] font-[Montserrat] font-medium text-[16px] leading-[16px] tracking-normal text-center">
          <BookmarkMinus size={27} color="#999BA7" />
          <span>Պահել</span>
        </span>
      </div>
    </header>
  );
}
