"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
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
                {t("field")}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {paginatedEmployees.map((employee, idx) => (
            <EmployeeCard key={idx} {...employee} />
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-10">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-3 cursor-pointer py-1 text-sm rounded-md border border-[#D3D3D3] bg-transparent hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeft size={18} />
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 text-sm rounded-md border cursor-pointer ${
                currentPage === i + 1
                  ? "bg-[linear-gradient(90deg,#02AAB0_0%,#00CDAC_100%)] text-white"
                  : "border-[#D3D3D3] bg-transparent text-[#1C1B1B] hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-3 cursor-pointer py-1 text-sm rounded-md border border-[#D3D3D3] bg-transparent hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </main>
    </div>
  );
}
