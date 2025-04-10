import CompanyCard from "@/components/shared/CompanyCard";
import { Button } from "../button";
import { getTranslations } from "next-intl/server";
import JobCard from "@/components/shared/JobCard";

const jobs = [
  {
    logo: "/assets/images/brandsLogos/1.png",
    position: "Գործակալ",
    company: "Beko",
  },
  {
    logo: "/assets/images/brandsLogos/2.png",
    position: "Խորհրդատու-վաճառող",
    company: "Foodbar",
  },
  {
    logo: "/assets/images/brandsLogos/3.png",
    position: "SMM մասնագետ",
    company: "ARMOS",
  },
  {
    logo: "/assets/images/brandsLogos/4.png",
    position: "Հաճախորդի սպասարկող",
    company: "Shen",
  },
  {
    logo: "/assets/images/brandsLogos/5.png",
    position: "Հաշվետար",
    company: "Gulf",
  },
];

export default async function JobGrid() {
  const t = await getTranslations("HomePage");

  return (
    <section className="py-22 bg-gray-50 text-center pb-54">
      <div className="container mx-auto px-4 max-w-[1050px] ">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1C1B1B] mb-3">
          {t("jobsGrid.title")}
        </h2>
        <p className="text-[#1C1B1B] mb-10 text-sm">
          {t("jobsGrid.description")}
        </p>

        <div className="space-y-2">
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
