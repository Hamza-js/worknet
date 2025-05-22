"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Search,
  SlidersHorizontal,
  Ellipsis,
  ListFilter,
} from "lucide-react";
import JobCard from "@/components/shared/JobCard";
import { useTranslations } from "next-intl";
import JobCardMobile from "@/components/shared/JobCardMobile";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export default function JobListings() {
  const t = useTranslations("JobsPage");

  const pageSize = 14;
  const [currentPage, setCurrentPage] = useState(1);

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

  const jobs = Array.from({ length: 50 }, (_, i) => ({
    logo: `https://logo.clearbit.com/${
      [
        "google.com",
        "facebook.com",
        "netflix.com",
        "microsoft.com",
        "apple.com",
        "airbnb.com",
        "spotify.com",
        "uber.com",
        "linkedin.com",
        "adobe.com",
      ][i % 10]
    }`,
    position: [
      "Frontend Developer",
      "Backend Engineer",
      "UI/UX Designer",
      "DevOps Specialist",
      "QA Tester",
      "Product Manager",
      "Support Agent",
      "Marketing Manager",
      "Sales Executive",
      "Mobile Developer",
    ][i % 10],
    company: [
      "Google",
      "Facebook",
      "Netflix",
      "Microsoft",
      "Apple",
      "Airbnb",
      "Spotify",
      "Uber",
      "LinkedIn",
      "Adobe",
    ][i % 10],
  }));

  const totalPages = Math.ceil(jobs.length / pageSize);
  const paginatedJobs = jobs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className=" flex flex-col md:flex-row gap-4 py-10 md:py-20 w-full">
      {/* Mobile Filter Button */}
      <div className="fixed bottom-36 right-4 z-50 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="bg-[linear-gradient(90deg,#02AAB0_0%,#00CDAC_100%)]  rounded-[16px] w-14 h-14 flex items-center justify-center">
              <ListFilter className="w-6 h-6 text-white" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-4/5 max-w-sm">
            <SheetHeader>
              <SheetTitle>{t("Filter")}</SheetTitle>
            </SheetHeader>

            {/* Filter content (copied from your <aside>) */}
            <div className="mt-4 space-y-6">
              <div className="bg-white border rounded-xl p-4">
                <details open>
                  <summary className="flex items-center justify-between cursor-pointer font-medium text-sm text-[#1C1B1B]">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#1C1B1B]" />
                      {t("region")}
                    </span>
                    <ChevronDown color="#999BA7" className="w-4 h-4" />
                  </summary>
                  <div className="mt-4 space-y-2 overflow-y-auto pr-1 custom-scroll">
                    {cities.map((city) => (
                      <label
                        key={city}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Checkbox
                          className="border border-[#999BA7] data-[state=checked]:border-[#999BA7] text-[#999BA7] data-[state=checked]:text-[#999BA7] data-[state=checked]:bg-white h-5 w-5"
                          id={city}
                        />
                        <span className="font-[Montserrat arm] font-normal text-[16px]">
                          {city}
                        </span>
                      </label>
                    ))}
                  </div>
                </details>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Sidebar Filters */}
      <aside className="hidden md:block w-full md:w-1/4 space-y-4">
        <h2 className="h-[72px] p-6 font-montserrat font-extrabold text-[20px] leading-none tracking-normal text-center uppercase bg-white rounded-[20px] border border-[#EAEAEA] flex items-center">
          {t("Filter")}
        </h2>

        {/* Location Filter */}
        <div className="bg-white rounded-[20px] border p-5">
          <details open>
            <summary className="flex items-center justify-between cursor-pointer font-medium text-sm text-[#1C1B1B]">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#1C1B1B] font-[Montserrat arm] font-medium text-[16px] leading-[100%] tracking-[0%] capitalize" />
                {t("region")}
              </span>
              <ChevronDown color="#999BA7" className="w-4 h-4" />
            </summary>
            <div className="mt-4 space-y-2 overflow-y-auto pr-1 custom-scroll">
              {cities.map((city) => (
                <label
                  key={city}
                  className="flex items-center space-y-2 gap-2 text-sm"
                >
                  <Checkbox
                    className="border border-[#999BA7] data-[state=checked]:border-[#999BA7]text-[#999BA7] data-[state=checked]:text-[#999BA7] data-[state=checked]:bg-white h-5 w-5"
                    id={city}
                  />
                  <span className="font-[Montserrat arm] font-normal text-[16px] leading-[100%] tracking-[0%]">
                    {city}
                  </span>
                </label>
              ))}
            </div>
          </details>
        </div>

        {/* Field Filter */}
        {/* <div className="bg-white rounded-xl border p-4">
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
        </div> */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 ">
        {/* Search Input */}
        <div className="relative w-full">
          <Input
            placeholder={t("searchPlaceHolder")}
            className="w-full rounded-[16px] pl-5 pr-[100px] h-[72px] bg-white border border-[#EAEAEA] text-[16px]"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-sm font-medium text-[#1C1B1B] px-4 py-1.5 rounded-full bg-transparent hover:bg-gray-100 transition">
            <Search className="w-4 h-4" color="#1C1B1B" />
            {t("serach")}
          </button>
        </div>

        {/* Job Cards */}
        <div className="space-y-2 mt-5 hidden md:block ">
          {paginatedJobs.map((job, index) => (
            <JobCard
              key={index}
              logo={job.logo}
              position={job.position}
              company={job.company}
            />
          ))}
        </div>

        <div className="space-y-2 md:hidden mt-4 md:mt-0">
          {jobs.map((job, index) => (
            <JobCardMobile
              key={index}
              logo={job.logo}
              position={job.position}
              company={job.company}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {/* Mobile Pagination */}
          <div className="flex gap-2 md:hidden items-center">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="w-[48px] h-[48px] cursor-pointer rounded-[10px] font-[Montserrat arm] font-light text-[20px] leading-[16px] tracking-[0%] border border-[#D3D3D3] hover:bg-gray-100 disabled:opacity-50 "
            >
              <ChevronLeft className="mx-auto" size={18} />
            </button>

            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-[48px] h-[48px] rounded-[10px] font-[Montserrat arm] font-light text-[20px] leading-[16px] tracking-[0%] border ${
                  currentPage === page
                    ? "bg-[linear-gradient(90deg,#02AAB0_0%,#00CDAC_100%)] text-white"
                    : "border-[#D3D3D3] bg-transparent text-[#1C1B1B] hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            <span className="px-2 text-sm text-gray-500">
              {" "}
              <Ellipsis />
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="w-[48px] h-[48px] cursor-pointer rounded-[10px] font-[Montserrat arm] font-light text-[20px] leading-[16px] tracking-[0%] border border-[#D3D3D3] hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronRight className="mx-auto" size={18} />
            </button>
          </div>

          {/* Desktop Pagination */}
          <div className="hidden md:flex gap-2 items-center ">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="w-[48px] h-[48px] cursor-pointer rounded-[10px] font-[Montserrat arm] font-light text-[20px] leading-[16px] tracking-[0%] border border-[#D3D3D3] hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronLeft className="mx-auto" size={18} />
            </button>

            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-[48px] h-[48px] cursor-pointer rounded-[10px] font-[Montserrat arm] font-light text-[20px] leading-[16px] tracking-[0%] border ${
                  currentPage === page
                    ? "bg-[linear-gradient(90deg,#02AAB0_0%,#00CDAC_100%)] text-white"
                    : "border-[#D3D3D3] bg-transparent text-[#1C1B1B] hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            <span className="px-2 text-sm text-gray-500">
              <Ellipsis />
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="w-[48px] h-[48px] rounded-[10px] font-[Montserrat arm] font-light text-[20px] leading-[16px] tracking-[0%] border border-[#D3D3D3] hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronRight className="mx-auto" size={18} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
