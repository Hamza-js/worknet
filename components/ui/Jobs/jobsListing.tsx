// app/jobs/page.tsx or components/JobListings.tsx

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ChevronDown,
  ChevronRight,
  MapPin,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import JobCard from "@/components/shared/JobCard";
import { getTranslations } from "next-intl/server";

export default async function JobListings() {
  const t = await getTranslations("JobsPage");

  const cities = [
    "Երևան",
    "Արագածոտն",
    "Արարատ",
    "Արմավիր",
    "Արտաշատ",
    "Գեղարքունիք",
    "Կոտայք",
    "Լոռի",
    "Շիրակ",
    "Սյունիք",
    "Տավուշ",
    "Վայոց Ձոր",
    "Արցախ",
  ];

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
  return (
    <div className="flex flex-col md:flex-row gap-6 py-20 ">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-1/4  space-y-2">
        <h2 className="text-md font-semibold bg-white rounded-md p-[11px] border border-[#EAEAEA]">
          {t("Filter")}
        </h2>

        {/* Location */}
        <div className="bg-white rounded-md border p-4">
          <details open>
            <summary className="flex items-center justify-between cursor-pointer font-medium text-sm text-[#1C1B1B]">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                {t("region")}
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </summary>

            <div className="mt-4 space-y-2 max-h-[250px] overflow-y-auto pr-1 custom-scroll">
              {cities.map((city) => (
                <label key={city} className="flex items-center gap-2 text-sm">
                  <Checkbox id={city} />
                  <span>{city}</span>
                </label>
              ))}
            </div>
          </details>
        </div>

        {/* Type Filter (Placeholder) */}
        <div className="bg-white rounded-xl border p-4">
          <details>
            <summary className="flex items-center justify-between cursor-pointer font-medium text-sm text-[#1C1B1B]">
              <span className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-gray-500" />
                {t("field")}
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </summary>

            <div className="mt-4 space-y-2">
              <label className="flex items-center gap-2 text-sm">
                <Checkbox id="full-time" />
                <span>Լրիվ դրույք</span>
              </label>
            </div>
          </details>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Search & Sort */}
        <div className="relative w-full">
          <Input
            placeholder={t("searchPlaceHolder")}
            className="w-full rounded-md pl-5 pr-[100px] h-12 bg-white border border-[#EAEAEA] text-sm"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-sm font-medium text-[#1C1B1B] px-4 py-1.5 rounded-full bg-transparent hover:bg-gray-100 transition">
            <Search className="w-4 h-4" color="#1C1B1B" />
            {t("serach")}
          </button>
        </div>

        {/* Job Cards */}
        <div className="space-y-2 mt-2">
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              logo={job.logo}
              position={job.position}
              company={job.company}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
