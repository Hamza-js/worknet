import CompanyCard from "@/components/shared/CompanyCard";
import { Button } from "../button";
import { getTranslations } from "next-intl/server";
import JobCard from "@/components/shared/JobCard";
import JobCardMobile from "@/components/shared/JobCardMobile";

const jobs = [
  {
    logo: "https://logo.clearbit.com/apple.com",
    position: "Գործակալ",
    company: "Beko",
  },
  {
    logo: "https://logo.clearbit.com/apple.com",
    position: "Խորհրդատու-վաճառող",
    company: "Foodbar",
  },
  {
    logo: "https://logo.clearbit.com/apple.com",
    position: "SMM մասնագետ",
    company: "ARMOS",
  },
  {
    logo: "https://logo.clearbit.com/apple.com",
    position: "Հաճախորդի սպասարկող",
    company: "Shen",
  },
  {
    logo: "https://logo.clearbit.com/apple.com",
    position: "Հաշվետար",
    company: "Gulf",
  },
];

export default async function JobGrid() {
  const t = await getTranslations("HomePage");

  return (
    <section className="py-10 md:py-22 px-1 md:px-10 w-full bg-gray-50 text-center">
      <div className=" mx-auto px-4 max-w-[1464px]">
        <h2 className=" font-montserrat font-extrabold text-[24px] leading-none text-center uppercase font-montserrat md:font-extrabold md:text-[32px] md:leading-none md:text-center text-[#1C1B1B] mb-3 ">
          {t("jobsGrid.title")}
        </h2>
        <p className="text-[#1C1B1B] mb-10 font-montserrat font-light text-sm leading-5 tracking-normal text-center font-montserrat md:font-light text-[16px] md:leading-[16px]">
          {t("jobsGrid.description")}
        </p>

        <div className="space-y-2 md:hidden">
          {jobs.map((job, index) => (
            <JobCardMobile
              key={index}
              logo={job.logo}
              position={job.position}
              company={job.company}
            />
          ))}
        </div>

        <div className="space-y-2 hidden md:block">
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              logo={job.logo}
              position={job.position}
              company={job.company}
            />
          ))}
        </div>

        <Button variant="primary" size="medium" className="mt-18">
          {t("jobsGrid.viewMore")}
        </Button>
      </div>
    </section>
  );
}
