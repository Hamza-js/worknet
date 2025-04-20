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
    <div className="flex flex-col">
      <div className="w-full  bg-white rounded-2xl p-2 md:p-4">
        <p className="text-lg text-left font-semibold text-gray-900 mb-4">
          Կոնտակտներ
        </p>

        <p className="text-sm text-left flex  items-center text-gray-900 mb-4">
          +374 94 ******* <Clock color="#999BA7" size={16} className="ml-2" />
        </p>

        <p className="text-sm text-left text-gray-900 mb-4">
          Yvn, Armenia, Tigran Mets 4/23
        </p>

        <p className="text-sm text-left flex text-gray-900 border rounded-lg p-3 border-[#02AAB0]">
          <Backpack color="#999BA7" size={16} className="mr-2" />
          12 ակտիվ աշխատանքի հայտարարություն
        </p>
      </div>
    </div>
  );
};

export default JobContacts;
