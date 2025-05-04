import EmployersListing from "@/components/ui/Jobs/employersListing";
import { ChevronRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import React from "react";

const Employers = async () => {
  const t = await getTranslations("EmployersPage");

  return (
    <section className="py-10 md:py-22 bg-gray-50 text-center">
      <div className="container  mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1C1B1B] mb-3">
          {t("title")}
        </h2>
        <p className="text-[#1C1B1B] mb-3 font-montserrat md:text-base md:leading-4 tracking-normal font-montserrat font-light text-xs leading-5 text-center">
          {t("description")}
        </p>
        <div className="flex w-full items-center text-center justify-center gap-3  p-0">
          <p className="text-[#999BA7] font-montserrat font-normal text-base leading-none tracking-normal capitalize">
            {t("HomePage")}
          </p>
          <ChevronRight size={24} color="#999BA7" />
          <p className="text-[#23BA97]  font-montserrat font-semibold text-base leading-none tracking-normal capitalize">
            {t("employers")}
          </p>
        </div>

        <EmployersListing />
      </div>
    </section>
  );
};

export default Employers;
