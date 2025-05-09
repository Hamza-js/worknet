import React from "react";
import { Clock, BanknoteArrowDown, TrendingUp } from "lucide-react"; // Import Lucide icons
import Image from "next/image";

import Card from "../../../public/assets/images/card.svg";

const Announcements: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="  bg-white rounded-2xl p-8 md:p-4">
        {/* Header */}
        <p className="font-[Montserrat\ arm] font-semibold text-lg leading-[100%] tracking-normal text-left text-gray-900 mb-4">
          Այլ հայտարարություններ
        </p>

        {/* Announcement List */}
        <div className="space-y-4">
          {/* Announcement 1 - Active State */}
          <div className="flex flex-col items-start justify-between bg-white border-[#02AAB0] w-full max-w-[509px] h-[136px] md:h-[104px] rounded-[20px] border-2 p-[24px]">
            <div className="flex items-center gap-2">
              <p className="font-[Montserrat\ arm] font-semibold text[16px] md:text-lg leading-[100%] tracking-normal text-gray-900">
                Բարմեն/բարիստա
              </p>
              <TrendingUp
                color="#02AAB0"
                className="ml-1 h-[20px] w-[20px] md:h-[24px] md:w-[24px]"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-6">
              <div className="flex items-center gap-2  font-[Montserrat\ arm] font-normal text-base leading-4 tracking-normal text-gray-900">
                <Clock size={24} color="#999BA7" />
                <p>Ամբողջ դրույք</p>
              </div>

              <div className="flex items-center gap-2  font-[Montserrat\ arm] font-normal text-base leading-4 tracking-normal text-gray-900">
                <BanknoteArrowDown size={24} color="#999BA7" />
                <p>Պայմանագրային</p>
              </div>
            </div>
          </div>

          {/* Announcement 2 */}
          <div className="flex flex-col items-start justify-between bg-white border-[#02AAB0] w-full max-w-[509px] h-[136px] md:h-[104px] rounded-[20px] border-2 p-[24px]">
            <div className="flex items-center gap-2">
              <p className="font-[Montserrat\ arm] font-semibold text[16px] md:text-lg leading-[100%] tracking-normal text-gray-900">
                Բարմեն/բարիստա
              </p>
              <TrendingUp
                color="#02AAB0"
                className="ml-1 h-[20px] w-[20px] md:h-[24px] md:w-[24px]"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-6">
              <div className="flex items-center gap-2  font-[Montserrat\ arm] font-normal text-base leading-4 tracking-normal text-gray-900">
                <Clock size={24} color="#999BA7" />
                <p>Ամբողջ դրույք</p>
              </div>

              <div className="flex items-center gap-2  font-[Montserrat\ arm] font-normal text-base leading-4 tracking-normal text-gray-900">
                <BanknoteArrowDown size={24} color="#999BA7" />
                <p>Պայմանագրային</p>
              </div>
            </div>
          </div>

          {/* Announcement 3 */}
          <div className="flex flex-col items-start justify-between bg-white border-[#02AAB0] w-full max-w-[509px] h-[136px] md:h-[104px] rounded-[20px] border-2 p-[24px]">
            <div className="flex items-center gap-2">
              <p className="font-[Montserrat\ arm] font-semibold text[16px] md:text-lg leading-[100%] tracking-normal text-gray-900">
                Բարմեն/բարիստա
              </p>
              <TrendingUp
                color="#02AAB0"
                className="ml-1 h-[20px] w-[20px] md:h-[24px] md:w-[24px]"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-6">
              <div className="flex items-center gap-2  font-[Montserrat\ arm] font-normal text-base leading-4 tracking-normal text-gray-900">
                <Clock size={24} color="#999BA7" />
                <p>Ամբողջ դրույք</p>
              </div>

              <div className="flex items-center gap-2  font-[Montserrat\ arm] font-normal text-base leading-4 tracking-normal text-gray-900">
                <BanknoteArrowDown size={24} color="#999BA7" />
                <p>Պայմանագրային</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[573px] mt-8 md:mt-8 ">
        <Image src={Card} alt="card" className="w-full" />
      </div>
    </div>
  );
};

export default Announcements;
