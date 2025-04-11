"use client";

import React from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Globe, Bell, MessageCircle, User } from "lucide-react";
import Image from "next/image";
import logo from "../../public/assets/images/worknet-logo.png";
import { getTranslations } from "next-intl/server";
import LocaleSwitcher from "../shared/LocaleSwitcher";
import Link from "next/link";

const Navbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const t = useTranslations("HomePage");
  const pathname = usePathname();
  const isActive = (path: string) => {
    const parts = pathname.split("/").filter(Boolean); // remove empty strings
    const currentPath = parts.slice(1).join("/") || ""; // skip locale
    const normalizedPath = "/" + currentPath;

    return normalizedPath === path;
  };

  return (
    <nav className="w-full bg-[#FAFDFF] border-b border-[#F1F1F1] px-10 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image src={logo} width={100} height={50} alt="logo" />
        </Link>

        <span className="ml-6 mr-10">
          <LocaleSwitcher />
        </span>
      </div>

      <div className="flex items-center space-x-4">
        {!isLoggedIn ? (
          <>
            <div className="hidden md:flex space-x-8 font-medium text-[14px] text-black leading-[16px] tracking-[0] text-center mr-20">
              <Link
                href="/"
                className={
                  isActive("/") ? "text-[#23BA97] font-semibold" : "text-black"
                }
              >
                {t("home")}
              </Link>
              <Link
                href="/jobs"
                className={
                  isActive("/jobs")
                    ? "text-[#23BA97] font-semibold"
                    : "text-black"
                }
              >
                {t("jobs")}
              </Link>
              <Link
                href="/employees"
                className={
                  isActive("/employees")
                    ? "text-[#23BA97] font-semibold"
                    : "text-black"
                }
              >
                {t("searchEmployees")}
              </Link>
              <Link
                href="/employers"
                className={
                  isActive("/employers")
                    ? "text-[#23BA97] font-semibold"
                    : "text-black"
                }
              >
                {t("employers")}
              </Link>
              <Link
                href="/packages"
                className={
                  isActive("/companies")
                    ? "text-[#23BA97] font-semibold"
                    : "text-black"
                }
              >
                {t("packages")}
              </Link>
            </div>

            <Link href="/sign-in">
              <Button variant="secondary" size="small">
                {t("login")}
              </Button>
            </Link>

            <Link href="/registration">
              <Button variant="primary" size="small">
                {t("register")}
              </Button>
            </Link>
          </>
        ) : (
          <>
            <div className="flex space-x-2">
              <MessageCircle className="w-5 h-5 text-gray-600 relative" />
              <Bell className="w-5 h-5 text-gray-600 relative" />
              <User className="w-5 h-5 text-gray-600" />
            </div>

            <div className="text-sm text-gray-700">CC Agency LLC ⌄</div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
