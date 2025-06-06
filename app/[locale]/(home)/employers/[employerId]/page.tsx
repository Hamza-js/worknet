import CompanyHeader from "@/components/ui/employersDetails/companyHeader";
import Header from "@/components/ui/employersDetails/header";
import Announcements from "@/components/ui/Jobs/announcements ";
import EmployersListing from "@/components/ui/Jobs/employersListing";
import JobCard from "@/components/ui/Jobs/JobCard";
import JobCardMobile from "@/components/ui/Jobs/JobCardMobile";
import JobContacts from "@/components/ui/Jobs/jobContacts";
import JobDetailsComponent from "@/components/ui/Jobs/jobDetailsComponent";
import { ChevronRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import React from "react";

const EmployersDetails = async () => {
  const t = await getTranslations("EmployersPage");

  return (
    <section className="py-10 md:py-22 w-full bg-gray-50 px-2 md:px-12 flex gap-2 md:gap-4 flex-col items-center justify-center">
      <div className="w-full max-w-[1759px] flex flex-col lg:flex-row lg:space-x-4">
        <div className=" text-center flex gap-3 flex-col w-full lg:w-9/12">
          <div className="bg-white flex flex-col h-[363px] rounded-[30px] pt-[16px] pr-[16px] pb-[24px] pl-[16px] gap-[20px] md:h-[373px] md:rounded-[30px] md:pt-[16px] md:pr-[16px] md:pb-[24px] md:pl-[16px] md:gap-[26px]">
            <Header />
            <CompanyHeader />
          </div>
          <div className="mt-2 md:mt-4 space-y-4 ">
            <JobDetailsComponent />

            {[1, 2, 3].map((_, index) => {
              return (
                <>
                  <div className="hidden space-y-2 md:flex">
                    <JobCard
                      key={index}
                      logo="https://logo.clearbit.com/google.com"
                      position="Frontend Developer"
                      company="Google"
                      link={`/jobs/123`}
                    />
                  </div>

                  <div className="space-y-2 md:hidden">
                    <JobCardMobile
                      key={index}
                      logo="https://logo.clearbit.com/google.com"
                      position="Frontend Developer"
                      company="Google"
                      link={`/jobs/123`}
                    />
                  </div>
                </>
              );
            })}
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

export default EmployersDetails;
