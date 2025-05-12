"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import CompanySwitcher from "@/components/layout/company-switcher";
import {
  Home,
  FolderKanban,
  UserSquare,
  FileText,
  Settings,
  Users,
  Bell,
  BarChart,
  ShieldCheck,
  LifeBuoy,
  Grid2x2,
  Mail,
  CircleUserRound,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: Home, href: "/dashboard" },
  {
    name: "Իմ ընկերությունը",
    icon: FolderKanban,
    href: "/dashboard/companies",
  },
  {
    name: "Իմ հայտարարությունները",
    icon: UserSquare,
    href: "/dashboard/announcements",
  },
  {
    name: "Ստացած ռեզյումեներ",
    icon: Mail,
    href: "/dashboard/resumes",
  },
  {
    name: "Անձնական տվյալներ",
    icon: CircleUserRound,
    href: "/dashboard/personal-information",
  },
];
const secondaryItems = [
  { name: "Գնահատման էջ", icon: Users, href: "/dashboard/evaluation" },
  { name: "Արժանապատիվ", icon: Bell, href: "/dashboard/notifications" },
  { name: "Ընթացակարգեր", icon: BarChart, href: "/dashboard/procedures" },
  { name: "Տվյալներ", icon: ShieldCheck, href: "/dashboard/data" },
  { name: "Օգնություն", icon: LifeBuoy, href: "/dashboard/help" },
  { name: "Այլ", icon: Grid2x2, href: "/dashboard/other" },
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
            <Icon className="h-6 w-6 text-[#999BA7]" />
            {name}
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
      <aside className="hidden md:flex md:flex-col w-[395px] h-full bg-white p-5 border border-r-[#EAEAEA] space-y-6">
        <CompanySwitcher />
        {renderNav(navItems)}
        <hr className="my-4" />
        {renderNav(secondaryItems)}
      </aside>
    </>
  );
}
