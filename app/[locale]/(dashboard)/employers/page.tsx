import EmployersListing from "@/components/ui/Jobs/employersListing";
import { ChevronRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import React from "react";

const Employers = async () => {
  const t = await getTranslations("EmployersPage");

  return (
    <section className="py-22 bg-gray-50 text-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1C1B1B] mb-3">
          {t("title")}
        </h2>
        <p className="text-[#1C1B1B] mb-3 text-sm">{t("description")}</p>
        <div className="flex w-full items-center text-center justify-center gap-3  p-0">
          <p className="text-[#999BA7]  text-sm">{t("HomePage")}</p>
          <ChevronRight size={18} color="#999BA7" />
          <p className="text-[#23BA97]  font-bold text-sm">{t("employers")}</p>
        </div>

        <EmployersListing />
      </div>
    </section>
  );
};

export default Employers;
