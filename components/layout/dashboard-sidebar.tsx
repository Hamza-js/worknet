"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon1 from "../../public/assets/icons/sidebar-icon-1.svg";
import Icon2 from "../../public/assets/icons/sidebar-icon-2.svg";
import Icon3 from "../../public/assets/icons/sidebar-icon-3.svg";
import Icon4 from "../../public/assets/icons/sidebar-icon-4.svg";
import Icon5 from "../../public/assets/icons/sidebar-icon-5.svg";
import Icon6 from "../../public/assets/icons/sidebar-icon-6.svg";
import Icon7 from "../../public/assets/icons/sidebar-icon-7.svg";
import Icon8 from "../../public/assets/icons/sidebar-icon-8.svg";
import Icon9 from "../../public/assets/icons/sidebar-icon-9.svg";
import Icon10 from "../../public/assets/icons/sidebar-icon-10.svg";
import Icon11 from "../../public/assets/icons/sidebar-icon-11.svg";

import CompanySwitcher from "@/components/layout/company-switcher";

const navItems = [
  { name: "Dashboard", icon: Icon3, href: "/dashboard" },
  { name: "Իմ ընկերությունը", icon: Icon2, href: "/dashboard/companies" },
  {
    name: "Իմ հայտարարությունները",
    icon: Icon1,
    href: "/dashboard/announcements",
  },
  { name: "Ստացած ռեզյումեներ", icon: Icon4, href: "/dashboard/resumes" },
  {
    name: "Անձնական տվյալներ",
    icon: Icon5,
    href: "/dashboard/personal-information",
  },
];

const secondaryItems = [
  { name: "Գլխավոր էջ", icon: Icon6, href: "/dashboard/evaluation" },
  { name: "Աշխատանք", icon: Icon7, href: "/dashboard/notifications" },
  { name: "Գործատուներ", icon: Icon8, href: "/dashboard/procedures" },
  { name: "Փաթեթներ", icon: Icon9, href: "/dashboard/data" },
  { name: "Օգնություն", icon: Icon10, href: "/dashboard/help" },
  { name: "Այլ", icon: Icon11, href: "/dashboard/other" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const normalizePath = (path: string) => {
    const parts = path.split("/");
    if (parts[1]?.length === 2) {
      parts.splice(1, 1);
    }
    return parts.join("/").replace(/\/$/, "");
  };

  const renderNav = (items: { name: string; icon: any; href: string }[]) => (
    <div className="space-y-1">
      {items.map(({ name, icon: Icon, href }) => {
        const isActive = (() => {
          const current = normalizePath(pathname);
          const target = normalizePath(href);

          if (current === target) return true;
          if (target !== "/dashboard" && current.startsWith(target + "/"))
            return true;
          return false;
        })();

        console.log("isActive", isActive);

        return (
          <Link
            key={name}
            href={href}
            className={`flex items-center gap-3 rounded-[10px] px-3 py-2 h-[56px] w-full font-montserrat text-base font-normal leading-4 tracking-normal 
              ${isActive ? "bg-[#C5D1DB33]" : "hover:bg-[#C5D1DB33]"}`}
          >
            <img src={Icon.src} alt={`${name} icon`} className="h-6 w-6" />

            <span className="mt-[6px]">{name}</span>
          </Link>
        );
      })}
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white w-64 p-4 overflow-y-auto border-r space-y-6">
          <CompanySwitcher />
          {renderNav(navItems)}
          <hr className="my-4" />
          {renderNav(secondaryItems)}
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:flex-col w-[395px] min-h-screen bg-white p-5 border border-r-[#EAEAEA] space-y-6">
        <CompanySwitcher />
        {renderNav(navItems)}
        <hr className="my-4" />
        {renderNav(secondaryItems)}
      </aside>
    </>
  );
}
