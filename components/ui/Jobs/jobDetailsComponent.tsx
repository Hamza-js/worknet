import React from "react";
import { Button } from "../button";
import { Briefcase, Calendar, Clock, MapPin, Send, User } from "lucide-react"; // Import Lucide icons

// Define the component with proper return type
const JobDetailsComponent: React.FC = () => {
  return (
    <div className=" bg-white w-full h-auto rounded-[30px] pt-[32px] pr-[16px] md:pr-[40px] pb-[32px] pl-[16px] md:pl-[40px] gap-[10px]">
      {/* Header */}
      <div className="flex justify-between items-center h-[152px] md:h-[103px] border-b border-[#999BA7]">
        <div className="flex flex-col items-start gap-4">
          <p className="font-[Montserrat] font-semibold text-[20px] md:text-[32px] leading-[100%] tracking-normal text-center text-gray-800">
            Բարմենի օգնական
          </p>
          <div className="gap-3  flex flex-col md:flex-row">
            <span className="flex space-x-3">
              <span className="font-[Montserrat] font-normal text-[16px] leading-[16px] tracking-normal text-gray-900 flex items-center">
                <User size={24} className="mr-2" color="#999BA7" />
                Բարմեն
              </span>
              <span className="font-[Montserrat] font-normal text-[16px] leading-[16px] tracking-normal text-gray-900 flex items-center">
                <MapPin size={24} className="mr-2" color="#999BA7" />
                Երևան
              </span>
            </span>
            <span className="font-[Montserrat] font-normal text-[16px] leading-[16px] tracking-normal text-gray-900 flex items-center">
              <Briefcase size={24} className="mr-2" color="#999BA7" />
              Պայմանագրային
            </span>
            <span className="font-[Montserrat] font-normal text-[16px] leading-[16px] tracking-normal text-gray-900 flex items-center">
              <Clock size={24} className="mr-2" color="#999BA7" />
              Ամբողջ դրույք
            </span>
          </div>
        </div>
        <Button
          className=" hidden md:flex w-[178px] h-[56px] font-[Montserrat] font-medium text-[16px] leading-[16px] tracking-normal text-center"
          variant="primary"
          size="small"
        >
          <Send className="mr-2" color="white" size={20} fill="white" />
          Դիմել
        </Button>
      </div>

      {/* Content */}
      <div className="flex flex-col text-gray-900 gap-6 md:gap-10 items-start mt-8">
        <p className="font-[Montserrat\ arm] font-normal text-base leading-6 tracking-normal">
          Foodpark by Downtown սրճարան/ռեստորան hiring for Barista assistant
        </p>

        {/* Requirements Section */}
        <div className="flex flex-col text-gray-900 items-start text-left">
          <p className="font-[Montserrat\ arm] font-semibold text-base leading-6 tracking-normal">
            Պայմաններ
          </p>
          <span className="font-[Montserrat\ arm] font-normal text-base leading-6 tracking-normal">
            • Աշխատանքը ութժամյա է՝ 5օրյա, 9:00-18:00
          </span>
        </div>

        {/* Responsibilities Section */}
        <div className="flex flex-col text-gray-900 items-start text-left">
          <p className="font-[Montserrat\ arm] font-semibold text-base leading-6 tracking-normal">
            Պարտականություններ
          </p>
          <span className="font-[Montserrat\ arm] font-normal text-base leading-6 tracking-normal ">
            • Օգնել բարմենին պատրաստել և մատուցել ալկոհոլային և ոչ ալկոհոլային
            խմիչքներ, սուրճ և թեյ <br />
            • Կատարել բարի սպասարկման աշխատանքները <br />
            • Սպասարկել հաճախորդներին՝ ներկայացնելով խմիչքների ցանկը <br />•
            Կատարել բարմենի կողմից ներկայացվող այլ հանձնարարությունները
          </span>
        </div>

        {/* Benefits Section */}
        <div className="flex flex-col text-gray-900 items-start text-left">
          <p className="font-[Montserrat\ arm] font-semibold text-base leading-6 tracking-normal">
            Մենք ապահովում ենք
          </p>
          <span className="font-[Montserrat\ arm] font-normal text-base leading-6 tracking-normal">
            • Երեկոյան հերթափոխին տուն ճանապարհում <br />
            • Համեղ սուրճ և ընդմիջում <br />
            • Հաճելի միջավայր <br />• Հյուրընկալ աշխատակազմ
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col mt-26 w-full gap-10 p-2 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-[Montserrat\ arm] font-semibold text-2xl leading-[100%] tracking-normal text-center text-gray-900">
            Դիմի’ր և աշխատիր
          </p>
          <Button
            variant="primary"
            size="small"
            className="w-full md:w-[178px] h-[56px] font-[Montserrat\ arm] font-medium text-base leading-4 tracking-normal text-center"
          >
            <Send className="mr-2" color="white" size={20} fill="white" />
            Դիմել
          </Button>
        </div>
        <span className="flex items-center gap-2">
          <Calendar size={24} color="#999BA7" />{" "}
          <span className="font-[Montserrat\ arm] font-normal text-base leading-4 tracking-normal">
            3 օր առաջ
          </span>
        </span>
      </div>
    </div>
  );
};

// Export the component
export default JobDetailsComponent;
