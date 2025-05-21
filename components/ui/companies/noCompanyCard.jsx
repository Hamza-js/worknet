import { CircleAlert, CirclePlus } from "lucide-react";
import { Button } from "../button";

export const NoCompanyCard = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center h-[423px] md:h-[455px] gap-[20px] rounded-[20px] border border-[#EAEAEA]">
      <CircleAlert size={124} color="#23BA97" />
      <span className="font-[Montserrat arm] font-semibold text-[20px] leading-[28px] tracking-[0%] text-center">
        Դուք չունեք ստեղծած ընկերություն
      </span>

      <span className="font-montserratArm font-normal text-[14px] leading-[21px] tracking-[0%] text-center">
        Ստեղծեք ընկերություն աշխատանքի հայտարարություններ տեղադրելու և
        ռեզյումեներ ստանալու համար:
      </span>

      <span className="flex items-center justify-center w-[256px] h-[56px] p-4 gap-2 rounded-[20px] border border-[#02AAB0]">
        <CirclePlus size={18} color="#EAEAEA" />
        <span className="font-montserratArm font-normal text-[16px] leading-[16px] tracking-[0%]">
          Ստեղծել ընկերություն
        </span>
      </span>
    </div>
  );
};
