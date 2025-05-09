import React from "react";
import { Button } from "../button";
import {
  Clock,
  ArrowUpRight,
  Calendar,
  FileText,
  BanknoteArrowDown,
  TrendingUp,
  Backpack,
} from "lucide-react"; // Import Lucide icons
import Image from "next/image";

import Card from "../../../public/assets/images/card.svg";

const JobContacts: React.FC = () => {
  return (
    // <div className="flex flex-col">
    <div className="hidden md:flex flex-col w-full max-w-[573px] bg-white h-[244px] rounded-[30px] p-[32px]">
      <p className="font-[Montserrat\ arm] font-semibold text-lg leading-[100%] tracking-normal text-left text-gray-900 mb-4">
        Կոնտակտներ
      </p>

      <p className="font-[Montserrat\ arm] font-normal text-[18px] leading-[26px] tracking-normal text-left flex  items-center text-gray-900 mb-4">
        +374 94 ******* <Clock color="#999BA7" size={24} className="ml-2" />
      </p>

      <p className="font-[Montserrat\ arm] font-normal text-[18px] leading-[26px] tracking-normal text-left text-gray-900 mb-4">
        Yvn, Armenia, Tigran Mets 4/23
      </p>

      <p className="w-[432px] h-[56px] rounded-[12px] border gap-[10px] cursor-pointer text-left flex items-center justify-center text-gray-900 border-[#02AAB0] font-[Montserrat\ arm] font-medium text-base leading-4 tracking-normal text-center">
        <Backpack color="#999BA7" size={18} />
        <span>12 ակտիվ աշխատանքի հայտարարություն</span>
      </p>
    </div>
    // </div>
  );
};

export default JobContacts;
