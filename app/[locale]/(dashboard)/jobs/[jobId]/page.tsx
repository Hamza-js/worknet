import CompanyHeader from "@/components/ui/employersDetails/companyHeader";
import Header from "@/components/ui/employersDetails/header";
import Announcements from "@/components/ui/Jobs/announcements ";
import JobContacts from "@/components/ui/Jobs/jobContacts";
import JobDetailsComponent from "@/components/ui/Jobs/jobDetailsComponent";
import { getTranslations } from "next-intl/server";
import React from "react";

const JobDetailsPage = async () => {
  const t = await getTranslations("EmployersPage");

  return (
    <section className="mb-10 md:pb-22 mt-1 md:pt-16 bg-gray-50 text-center px-2 md:px-12 flex gap-2 md:gap-4 flex-col">
      <div className="w-full flex flex-col lg:flex-row lg:space-x-4">
        <div className=" text-center flex gap-3 flex-col w-full lg:w-9/12">
          <div className="bg-white flex gap-2 flex-col p-4 rounded-2xl">
            <Header />
            <CompanyHeader />
          </div>
          <div className="mt-4">
            <JobDetailsComponent />
          </div>
        </div>

        <div className="w-full mt-4 md:mt-0 space-y-4 lg:w-5/12">
          <JobContacts />
          <Announcements />
        </div>
      </div>
    </section>
  );
};

export default JobDetailsPage;
