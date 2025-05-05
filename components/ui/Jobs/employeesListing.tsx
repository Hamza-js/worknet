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

const employees = Array.from({ length: 50 }, (_, i) => {
  const names = [
    "Ani Harutyunyan",
    "Gor Petrosyan",
    "Sona Melkonyan",
    "Artur Sargsyan",
    "Lilit Karapetyan",
    "Hayk Grigoryan",
    "Narek Avetisyan",
    "Mariam Hakobyan",
    "Arman Mkrtchyan",
    "Tatev Vardanyan",
  ];

  const industries = [
    "Frontend Developer at WorkNet",
    "Backend Engineer at DataStorm",
    "UI/UX Designer at Creatix",
    "DevOps Engineer at CloudBridge",
    "Project Manager at SoftSpace",
    "Mobile Developer at Appify",
    "QA Engineer at BugSmash",
    "Data Analyst at InsightPro",
    "Marketing Specialist at Brandify",
    "Support Lead at HelpForce",
  ];

  return {
    logo: `https://randomuser.me/api/portraits/${
      i % 2 === 0 ? "women" : "men"
    }/${i % 100}.jpg`,
    name: names[i % names.length],
    industry: industries[i % industries.length],
  };
});

export default function EmployeesListing() {
  const t = useTranslations("JobsPage");
  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(employees.length / pageSize);

  const paginatedEmployees = employees.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

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

  return (
    <div className=" flex flex-col md:flex-row gap-4 py-10 md:py-20 w-full">
      {/* Sidebar Filters */}
      <aside className="hidden md:block w-full md:w-1/4 space-y-4">
        <h2 className="h-[72px] p-6 font-montserrat font-extrabold text-[20px] leading-none tracking-normal text-center uppercase bg-white rounded-[20px] border border-[#EAEAEA] flex items-center">
          {t("Filter")}
        </h2>

        {/* Location */}
        <div className="bg-white rounded-[20px] border p-5">
          <details open>
            <summary className="flex items-center justify-between cursor-pointer font-medium text-sm text-[#1C1B1B]">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#1C1B1B] font-[Montserrat arm] font-medium text-[16px] leading-[100%] tracking-[0%] capitalize" />
                {t("field")}
              </span>
              <ChevronDown color="#999BA7" className="w-4 h-4" />
            </summary>

            <div className="mt-4 space-y-2 overflow-y-auto pr-1 custom-scroll">
              {cities.map((city) => (
                <label
                  key={city}
                  className="flex items-center space-y-2 gap-2 text-sm"
                >
                  <Checkbox id={city} />
                  <span className="font-[Montserrat arm] font-normal text-[16px] leading-[100%] tracking-[0%]">
                    {city}
                  </span>
                </label>
              ))}
            </div>
          </details>
        </div>
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
      <main className="flex-1">
        {/* Search & Sort */}
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

        {/* Employee Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4">
          {paginatedEmployees.map((employee, idx) => (
            <EmployeeCard key={idx} {...employee} />
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
