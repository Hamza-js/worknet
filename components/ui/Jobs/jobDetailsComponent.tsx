import React from "react";
import { Button } from "../button";
import { Briefcase, Calendar, Clock, MapPin, Send, User } from "lucide-react"; // Import Lucide icons

// Define the component with proper return type
const JobDetailsComponent: React.FC = () => {
  return (
    <div className=" mx-auto bg-white  rounded-2xl p-4">
      {/* Header */}
      <div className="flex justify-between items-center p-2 ">
        <div className="flex flex-col items-start">
          <p className="text-lg mb-2 md:text-xl font-semibold text-gray-800">
            Բարմենի օգնական
          </p>
          <div className=" gap-3 mt-2 flex flex-col md:flex-row">
            <span className="text-sm text-gray-900 flex items-center">
              <User size={16} className="mr-1" color="#999BA7" />
              Բարմեն
            </span>
            <span className="text-sm text-gray-900 flex items-center">
              <MapPin size={16} className="mr-1" color="#999BA7" />
              Երևան
            </span>
            <span className="text-sm text-gray-900 flex items-center">
              <Briefcase size={16} className="mr-1" color="#999BA7" />
              Պայմանագրային
            </span>
            <span className="text-sm text-gray-900 flex items-center">
              <Clock size={16} className="mr-1" color="#999BA7" />
              Ամբողջ դրույք
            </span>
          </div>
        </div>
        <Button variant="primary" size="small">
          <Send className="mr-2" color="white" size={18} fill="white" />
          Դիմել
        </Button>
      </div>

      {/* Separator */}
      <span className="block border-t border-[#999BA7] mb-6 mt-4 p-2 "></span>

      {/* Content */}
      <div className="flex flex-col text-gray-900 gap-6 md:gap-10 items-start">
        <p className="text-sm leading-relaxed">
          Foodpark by Downtown սրճարան/ռեստորան hiring for Barista assistant
        </p>

        {/* Requirements Section */}
        <div className="flex flex-col text-gray-900 items-start text-left">
          <p className="text-sm md:text-[16px] font-semibold">Պայմաններ</p>
          <span className="text-sm md:text-[16px]">
            • Աշխատանքը ութժամյա է՝ 5օրյա, 9:00-18:00
          </span>
        </div>

        {/* Responsibilities Section */}
        <div className="flex flex-col text-gray-900 items-start text-left">
          <p className="text-sm md:text-[16px] font-semibold">
            Պարտականություններ
          </p>
          <span className="text-sm md:text-[16px] ">
            • Օգնել բարմենին պատրաստել և մատուցել ալկոհոլային և ոչ ալկոհոլային
            խմիչքներ, սուրճ և թեյ <br />
            • Կատարել բարի սպասարկման աշխատանքները <br />
            • Սպասարկել հաճախորդներին՝ ներկայացնելով խմիչքների ցանկը <br />•
            Կատարել բարմենի կողմից ներկայացվող այլ հանձնարարությունները
          </span>
        </div>

        {/* Benefits Section */}
        <div className="flex flex-col text-gray-900 items-start text-left">
          <p className="text-sm md:text-[16px] font-semibold">
            Մենք ապահովում ենք
          </p>
          <span className="text-sm md:text-[16px]">
            • Երեկոյան հերթափոխին տուն ճանապարհում <br />
            • Համեղ սուրճ և ընդմիջում <br />
            • Հաճելի միջավայր <br />• Հյուրընկալ աշխատակազմ
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col mt-26 w-full gap-10 p-2 ">
        <div className="flex items-center justify-between gap-2">
          <p className="text-lg md:text-3xl text-gray-900">Դիմի’ր և աշխատիր</p>
          <Button variant="primary" size="small">
            <Send className="mr-2" color="white" size={18} fill="white" />
            Դիմել
          </Button>
        </div>
        <span className="text-sm text- flex items-center gap-1">
          <Calendar size={16} color="#999BA7" /> 3 օր առաջ
        </span>
      </div>
    </div>
  );
};

// Export the component
export default JobDetailsComponent;
