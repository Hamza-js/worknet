import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

import Years from "../../../public/assets/icons/years.svg";
import Users from "../../../public/assets/icons/users.svg";
import heroBgLeft from "../../../public/assets/images/hero-bg-left.svg";
import heroBgRight from "../../../public/assets/images/hero-bg-right.svg";

import Employees from "../../../public/assets/icons/employes.svg";
import { Search } from "lucide-react";

const HeroSection = async () => {
  const t = await getTranslations("HomePage");

  return (
    <section className="w-full bg-[#FFFFFF] py-10 md:py-40 text-center relative">
      {/* Background images */}
      <div className="absolute left-20 top-34 z-0">
        <Image
          src={heroBgLeft}
          alt="Left Background"
          layout="intrinsic"
          className="hidden lg:block  max-w-[200px] max-h-[200px]"
        />
      </div>
      <div className="absolute right-20 top-34 z-0">
        <Image
          src={heroBgRight}
          alt="Right Background"
          layout="intrinsic"
          className="hidden lg:block  max-w-[200px] max-h-[200px] xl:w-[300px] xl:h-[300px]"
        />
      </div>

      <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[90%] mx-auto px-4 relative z-10">
        <h1 className="font-montserrat text-2xl leading-10 tracking-normal md:text-center md:text-6xl text-[#1C1B1B] font-extrabold  text-center uppercase">
          {t("heroTitle")}
        </h1>
        <p className="md:mt-5 font-montserrat text-2xl leading-10 tracking-normal text-[#1C1B1B] md:text-6xl md:font-[400] xl:text-6xl md:leading-[80px] text-center uppercase">
          {t("heroSubtitle")}
        </p>
        <p className="font-montserrat md:mt-4 text-base leading-7 text-center  font-light md:text-xl md:leading-4 tracking-normal text-[#808080]">
          {t("heroDescription")}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12 md:mt-20">
          <div className=" relative flex flex-col text-left w-full md:w-[334px]">
            <label className="font-montserrat font-light text-[16px] leading-4 tracking-normal text-[#999BA7] mb-2">
              {t("heroSearchPlaceholder")}
            </label>
            <Input
              placeholder={t("heroSearchPlaceholder")}
              className=" w-full md:w-[334px] h-[56px] gap-2 border border-[#1C1B1B] rounded-[16px] pt-4 pr-6 pb-4 pl-6"
            />
            <Search
              color="#1C1B1B"
              className="absolute right-4 top-13 -translate-y-1/2 h-6 w-6 text-black-foreground opacity-70 "
            />
          </div>

          <div className="flex flex-col text-left w-full md:w-[334px]">
            <label className="font-montserrat font-light text-[16px] leading-4 tracking-normal text-[#999BA7] mb-2">
              {t("heroCityPlaceholder")}
            </label>
            <Select>
              <SelectTrigger className="w-full md:w-[334px] min-h-[56px] gap-2 border border-[#1C1B1B] rounded-[16px]">
                <SelectValue placeholder={t("heroCityPlaceholder")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yerevan">{t("cities.yerevan")}</SelectItem>
                <SelectItem value="gyumri">{t("cities.gyumri")}</SelectItem>
                <SelectItem value="vanadzor">{t("cities.vanadzor")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            className="w-full text-[16px] h-[56px] md:mt-6 md:w-[334px]"
            variant="primary"
            size="large"
          >
            <Search size={18} className="mr-2" /> {t("heroSearchButton")}
          </Button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-10 mt-10 md:mt-34">
          {/* Experience */}
          <div className="flex items-center gap-3">
            <Image
              src={Years}
              className="w-[19px] h-[19px] md:w-[40px] md:h-[40px]"
              alt="Experience Icon"
            />
            <div className="text-left space-y-2 md:space-y-3">
              <div className="font-montserrat font-bold text-[15.96px] leading-[7.98px] tracking-normal text-[#1C1B1B] font-montserrat md:font-bold md:text-2xl md:leading-4 ">
                {t("heroExperience")}
              </div>
              <div className="font-montserrat font-light text-[9.97px] leading-[7.98px] tracking-normal text-[#1C1B1B] font-montserrat md:text-xl md:leading-4 ">
                {t("heroExperienceDes")}
              </div>
            </div>
          </div>

          {/* Separator */}
          <span className="bg-[#999BA7] w-[1px] h-4 md:h-10" />
          {/* Users */}
          <div className="flex items-center gap-3">
            <Image
              src={Users}
              className="w-[19px] h-[19px] md:w-[40px] md:h-[40px]"
              alt="Users Icon"
            />
            <div className="text-left space-y-2 md:space-y-3">
              <div className="font-montserrat font-bold text-[15.96px] leading-[7.98px] tracking-normal text-[#1C1B1B] font-montserrat md:font-bold md:text-2xl md:leading-4 ">
                84000+
              </div>
              <div className="font-montserrat font-light text-[9.97px] leading-[7.98px] tracking-normal text-[#1C1B1B] font-montserrat md:text-xl md:leading-4 ">
                {t("heroUsers")}
              </div>
            </div>
          </div>

          {/* Separator */}
          <span className="bg-[#999BA7] w-[1px] h-4 md:h-10" />

          {/* Employers */}
          <div className="flex items-center gap-2">
            <Image
              src={Employees}
              className="w-[19px] h-[19px] md:w-[40px] md:h-[40px]"
              alt="Employers Icon"
            />
            <div className="text-left space-y-2 md:space-y-3">
              <div className="font-montserrat font-bold text-[15.96px] leading-[7.98px] tracking-normal text-[#1C1B1B] font-montserrat md:font-bold md:text-2xl md:leading-4 ">
                2500+
              </div>
              <div className="font-montserrat font-light text-[9.97px] leading-[7.98px] tracking-normal text-[#1C1B1B] font-montserrat md:text-xl md:leading-4 ">
                {t("heroEmployers")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
