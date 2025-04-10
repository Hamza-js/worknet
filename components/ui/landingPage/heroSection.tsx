// components/HeroSection.tsx
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

import Years from "../../../public/assets/icons/years.png";
import Users from "../../../public/assets/icons/users.png";
import Employees from "../../../public/assets/icons/employes.png";
import { Search } from "lucide-react";

const HeroSection = async () => {
  const t = await getTranslations("HomePage");

  return (
    <section className="w-full bg-[#FAFDFF] py-24 text-center">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl text-[#1C1B1B] font-extrabold text-[50px] text-center uppercase">
          {t("heroTitle")}
        </h1>
        <p className=" font-light text-[#1C1B1B] text-[30px] text-center uppercase">
          {" "}
          {t("heroSubtitle")}
        </p>
        <p className="text-sm text-[#808080]"> {t("heroDescription")}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-12">
          <div className=" relative flex flex-col text-left max-w-xs">
            <label className="text-sm font-medium text-[#999BA7] mb-2">
              {t("heroSearchPlaceholder")}
            </label>
            <Input
              placeholder={t("heroSearchPlaceholder")}
              className="w-[300px]"
            />
            <Search className="absolute right-4 top-13 -translate-y-1/2 h-4 w-4 text-black-foreground opacity-70" />{" "}
          </div>

          <div className="flex flex-col text-left">
            <label className="text-sm font-medium text-[#999BA7] mb-1">
              {t("heroCityPlaceholder")}
            </label>
            <Select>
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder={t("heroCityPlaceholder")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yerevan">{t("cities.yerevan")}</SelectItem>
                <SelectItem value="gyumri">{t("cities.gyumri")}</SelectItem>
                <SelectItem value="vanadzor">{t("cities.vanadzor")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="mt-6 w-[300px]" variant="primary" size="large">
            <Search size={18} className="mr-2" /> {t("heroSearchButton")}
          </Button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mt-20">
          {/* Experience */}
          <div className="flex items-center gap-3">
            <Image src={Years} width={30} height={30} alt="Experience Icon" />
            <div className="text-left">
              <div className="text-xl font-bold text-[#1C1B1B]">
                {t("heroExperience")}
              </div>
              <div className="text-sm font-light text-[#1C1B1B]">
                {t("heroExperienceDes")}
              </div>
            </div>
          </div>

          {/* Separator */}
          <span className="bg-[#999BA7] w-[1px] h-8" />
          {/* Users */}
          <div className="flex items-center gap-3">
            <Image src={Users} width={30} height={30} alt="Users Icon" />
            <div className="text-left">
              <div className="text-xl font-bold text-[#1C1B1B]">84000+</div>
              <div className="text-sm font-light text-[#1C1B1B]">
                {t("heroUsers")}
              </div>
            </div>
          </div>

          {/* Separator */}
          <span className="bg-[#999BA7] w-[1px] h-8" />

          {/* Employers */}
          <div className="flex items-center gap-3">
            <Image
              src={Employees}
              width={30}
              height={30}
              alt="Employers Icon"
            />
            <div className="text-left">
              <div className="text-xl font-bold  text-[#1C1B1B]">2500+</div>
              <div className="text-sm font-light text-[#1C1B1B]">
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
