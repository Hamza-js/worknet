"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Ellipsis,
  MapPin,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import JobCard from "@/components/shared/JobCard";
import EmployeeCard from "@/components/shared/EmployeeCard";
import { useTranslations } from "next-intl";
import { useState } from "react";
import CompanyCard from "@/components/shared/CompanyCard";

const employers = Array.from({ length: 50 }, (_, i) => {
  const names = [
    "Google",
    "Apple",
    "Microsoft",
    "Amazon",
    "Meta",
    "Netflix",
    "Spotify",
    "Airbnb",
    "Uber",
    "LinkedIn",
  ];

  const industries = [
    "Information Technology",
    "E-Commerce",
    "Software Development",
    "Social Media",
    "Media & Entertainment",
    "Streaming",
    "Travel & Hospitality",
    "AI & Cloud Services",
    "Marketing & Ads",
    "Business Solutions",
  ];

  const domains = [
    "google.com",
    "apple.com",
    "microsoft.com",
    "amazon.com",
    "meta.com",
    "netflix.com",
    "spotify.com",
    "airbnb.com",
    "uber.com",
    "linkedin.com",
  ];

  return {
    logo: `https://logo.clearbit.com/${domains[i % domains.length]}`,
    name: names[i % names.length],
    industry: industries[i % industries.length],
  };
});

export default function EmployersListing() {
  const t = useTranslations("EmployersPage");
  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(employers.length / pageSize);

  const paginatedEmployers = employers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const fields = [
    "Մարքեթինգ",
    "Դիզայն",
    "Մարդկային ռեսուրսներ",
    "Վաճառքներ",
    "Ֆինանսներ",
    "Ինժեներություն",
    "Առողջապահություն",
    "Կրթություն",
    "Լոգիստիկա",
    "Շինարարություն",
    "Իրավաբանական ոլորտ",
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 py-10 md:py-20 w-full">
      {/* Sidebar Filters */}
      <aside className="hidden md:block w-full md:w-1/4 space-y-4">
        <h2 className="h-[72px] p-6 font-montserrat font-extrabold text-[20px] leading-none tracking-normal text-center uppercase bg-white rounded-[20px] border border-[#EAEAEA] flex items-center">
          {t("Filter")}
        </h2>

        {/* Fields */}
        <div className="bg-white rounded-[20px] border p-5">
          <div className="flex items-center justify-between cursor-pointer font-medium text-sm text-[#1C1B1B]">
            <span className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#1C1B1B] font-[Montserrat arm] font-medium text-[16px] leading-[100%] tracking-[0%] capitalize" />
              {t("field")}
            </span>
            <ChevronDown color="#999BA7" className="w-4 h-4" />
          </div>

          <div className="mt-4 space-y-2 overflow-y-auto pr-1 custom-scroll">
            {fields.map((field) => (
              <label
                key={field}
                className="flex items-center space-y-2 gap-2 text-sm"
              >
                <Checkbox id={field} />
                <span className="font-[Montserrat arm] font-normal text-[16px] leading-[100%] tracking-[0%]">
                  {field}
                </span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Search & Sort */}
        <div className="relative w-full">
          <Input
            placeholder={t("searchPlaceHolder")}
            className="w-full rounded-[16px] pl-5 pr-[100px] h-[72px] bg-white border border-[#EAEAEA] text-[16px]"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-sm font-medium text-[#1C1B1B] px-4 py-1.5 rounded-full bg-transparent hover:bg-gray-100 transition">
            <Search className="w-6 h-6" color="#1C1B1B" />
            {t("serach")}
          </button>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {paginatedEmployers.map((employer, idx) => (
            <CompanyCard key={idx} {...employer} />
          ))}
        </div>

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
