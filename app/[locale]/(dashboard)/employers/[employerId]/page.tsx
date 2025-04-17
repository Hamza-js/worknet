import CompanyHeader from "@/components/ui/employersDetails/companyHeader";
import Header from "@/components/ui/employersDetails/header";
import EmployersListing from "@/components/ui/Jobs/employersListing";
import { ChevronRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import React from "react";

const EmployersDetails = async () => {
  const t = await getTranslations("EmployersPage");

  return (
    <section className="pb-22 pt-16 bg-gray-50 text-center px-12 flex gap-2 flex-col">
      <div className="bg-white text-center p-4 rounded-2xl flex gap-2 flex-col">
        <Header />
        <CompanyHeader />
      </div>
    </section>
  );
};

export default EmployersDetails;
