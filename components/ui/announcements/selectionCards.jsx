"use client";

import { FileText, PhoneCall, MousePointerClick } from "lucide-react";
import { useState } from "react";

const options = [
  {
    icon: <FileText size={48} className="text-black stroke-[1]" />,
    title: "Ավելի շատ CV ստանալ",
    description:
      "Հայտարարության վրա փակցվում է “Ուղարկել CV” կոճակը, օգտվողը սեղմելով կարողանում է անմիջապես ուղարկել CV-ն:",
  },
  {
    icon: <PhoneCall size={48} className="text-black stroke-[1]" />,
    title: "Ավելի շատ զանգեր ստանալ",
    description:
      "Հայտարարության վրա փակցվում է “Զանգել” կոճակը, օգտվողը սեղմելով կարողանում է անմիջապես զանգահարել:",
  },
  {
    icon: <MousePointerClick size={48} className="text-black stroke-[1]" />,
    title: "Դիմել սեփական կայքի միջոցով",
    description:
      "Հայտարարության վրա փակցվում է “Դիմել” կոճակը, որը կտեղափոխի Ձեր տեղադրած հղումով:",
  },
];

export default function SelectionCards() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full ">
      {options.map((option, index) => (
        <div
          key={index}
          onClick={() => setSelected(index)}
          className={`relative cursor-pointer h-[176px] min-[320px] rounded-[16px] gap-[10px] p-4 transition-colors duration-200 hover:shadow-sm ${
            selected === index
              ? "border-[#23BA97] ring-2 ring-[#23BA97]/30"
              : "border border-gray-300"
          }`}
        >
          <div className="flex flex-col items-start gap-3">
            <div className="text-[#23BA97]">{option.icon}</div>
            <div>
              <h4 className="font-montserratArm font-medium text-[16px] leading-[16px] tracking-[0%] mb-1">
                {option.title}
              </h4>
              <p className=" text-[#999BA7] font-montserratArm font-normal text-[14px] leading-[20px] tracking-[0%]">
                {option.description}
              </p>
            </div>
          </div>
          <div
            className="absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            selected === index ? 'border-[#23BA97]' : 'border-[#999BA7]'
          }"
          >
            {selected === index && (
              <span className="w-[14px] h-[14px] rounded-full bg-[#23BA97] block"></span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
