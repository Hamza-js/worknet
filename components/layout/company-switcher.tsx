// components/company-switcher.tsx
"use client";

import { useState } from "react";
import { Check, RefreshCcw } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const companies = [
  {
    name: "Meduzee Creative Agency",
    email: "hello@meduzee.com",
    logo: "/logo.svg",
  },
  { name: "PixelDrop Studio", email: "hello@pixeldrop.io", logo: "/logo.svg" },
  { name: "Visionary Works", email: "team@visionary.com", logo: "/logo.svg" },
];

export default function CompanySwitcher() {
  const [selected, setSelected] = useState(companies[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer flex items-center gap-4 rounded-[20px] h-[104px] border border-[#EAEAEA] px-4 py-3  bg-white w-full max-w-sm text-left">
          <div className="flex h-16 w-16 items-center justify-center rounded-[10px] shadow-sm bg-white">
            <img src={selected.logo} alt="Company Logo" className="h-6 w-6" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="font-sans font-semibold text-base leading-none tracking-normal text-gray-900 line-clamp-2">
              {selected.name}
            </div>
            <div className="font-sans font-normal text-sm leading-none tracking-normal text-gray-500 line-clamp-1">
              {selected.email}
            </div>
          </div>
          <RefreshCcw className="w-6 h-6 text-[#999BA7]" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px]">
        {companies.map((company) => (
          <DropdownMenuItem
            key={company.email}
            onSelect={() => setSelected(company)}
            className="flex items-center gap-3"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-100">
              <img src={company.logo} alt="logo" className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">{company.name}</div>
              <div className="text-xs text-gray-500">{company.email}</div>
            </div>
            {selected.email === company.email && (
              <Check className="w-4 h-4 text-green-600" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
