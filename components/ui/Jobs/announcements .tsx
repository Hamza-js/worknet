import React from "react";
import { Clock, BanknoteArrowDown, TrendingUp } from "lucide-react"; // Import Lucide icons
import Image from "next/image";

import Card from "../../../public/assets/images/card.svg";

const Announcements: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="  bg-white rounded-2xl p-2 md:p-4">
        {/* Header */}
        <p className="text-lg text-left font-semibold text-gray-900 mb-4">
          Այլ հայտարարություններ
        </p>

        {/* Announcement List */}
        <div className="space-y-4">
          {/* Announcement 1 - Active State */}
          <div className="flex flex-col items-start gap-3 justify-between bg-white p-4 rounded-xl border-2 border-[#02AAB0]">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-gray-900">Բարմեն/բարիստա</p>
              <TrendingUp size={20} color="#02AAB0" className="ml-1" />
            </div>

            <div className="flex gap-6">
              <div className="flex gap-2 item-center text-sm text-gray-900">
                <Clock size={18} color="#999BA7" />
                <p>Ամբողջ դրույք</p>
              </div>

              <div className="flex gap-2 item-center text-sm text-gray-900">
                <BanknoteArrowDown size={18} color="#999BA7" />
                <p>Պայմանագրային</p>
              </div>
            </div>
          </div>

          {/* Announcement 2 */}
          <div className="flex flex-col items-start gap-3 justify-between bg-white p-4 rounded-xl border-2 border-[#999BA7]">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-gray-900">Բարմեն</p>
              <TrendingUp size={20} color="#02AAB0" className="ml-1" />
            </div>

            <div className="flex gap-6">
              <div className="flex gap-2 item-center text-sm text-gray-900">
                <Clock size={18} color="#999BA7" />
                <p>Կես դրույք</p>
              </div>

              <div className="flex gap-2 item-center text-sm text-gray-900">
                <BanknoteArrowDown size={18} color="#999BA7" />
                <p>Պայմանագրային</p>
              </div>
            </div>
          </div>

          {/* Announcement 3 */}
          <div className="flex flex-col items-start gap-3 justify-between bg-white p-4 rounded-xl border-2 border-[#999BA7]">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-gray-900">Բարմեն/բարիստա</p>
              <TrendingUp size={20} color="#02AAB0" className="ml-1" />
            </div>

            <div className="flex gap-6">
              <div className="flex gap-2 item-center text-sm text-gray-900">
                <Clock size={18} color="#999BA7" />
                <p>Ամբողջ դրույք</p>
              </div>

              <div className="flex gap-2 item-center text-sm text-gray-900">
                <BanknoteArrowDown size={18} color="#999BA7" />
                <p>Պայմանագրային</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-2 md:mt-4 ">
        <Image src={Card} alt="card" className="w-full" />
      </div>
    </div>
  );
};

export default Announcements;
