"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import {
  Globe,
  Bell,
  MessageCircle,
  User,
  Menu,
  X,
  AlignLeft,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import logo from "../../public/assets/images/worknet-logo.svg";
import logoSmall from "../../public/assets/images/logoSmall.svg";

import LocaleSwitcher from "../shared/LocaleSwitcher";
import Link from "next/link";
import clsx from "clsx";

const Navbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const t = useTranslations("HomePage");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => {
    const parts = pathname.split("/").filter(Boolean);
    const currentPath = parts.slice(1).join("/") || "";
    const normalizedPath = "/" + currentPath;
    return normalizedPath === path;
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full h-[64px] md:h-[96px] bg-[#FFFFFF] border-b border-[#F1F1F1] px-4 md:px-10 py-4 flex justify-between items-center relative">
      <div className="md:hidden ">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <X color="#1C1B1B" className="w-8 h-8 cursor-pointer" />
          ) : (
            <AlignLeft
              // size={20}
              color="#1C1B1B"
              className="w-8 h-8 cursor-pointer"
            />
          )}
        </button>
      </div>

      <div className="flex items-center md:space-x-4">
        {/* Small screen logo */}
        <Link href="/">
          <Image
            src={logoSmall}
            width={50}
            height={50}
            alt="logo-small"
            className="block md:hidden"
          />
        </Link>

        {/* Larger screen logo */}
        <Link href="/">
          <Image
            src={logo}
            width={161}
            height={34.13}
            alt="logo"
            className="hidden md:block"
          />
        </Link>

        <span className="hidden md:block ml-6 mr-10">
          <LocaleSwitcher />
        </span>
      </div>

      <div className="md:hidden cursor-pointer mr-0">
        <button onClick={toggleMenu}>
          <UserRound
            size={16}
            color="#1C1B1B"
            className="w-8 h-8 cursor-pointer"
          />
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        {!isLoggedIn ? (
          <>
            <div className="flex space-x-8 text-[14px] text-black leading-[16px] tracking-[0] text-center mr-24 font-montserrat font-medium text-base  md:tracking-normal">
              {[
                { path: "/", label: t("home") },
                { path: "/jobs", label: t("jobs") },
                { path: "/employees", label: t("searchEmployees") },
                { path: "/employers", label: t("employers") },
                { path: "/packages", label: t("packages") },
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  href={path}
                  className={clsx(
                    isActive(path)
                      ? "text-[#23BA97] font-semibold"
                      : "text-black"
                  )}
                >
                  {label}
                </Link>
              ))}
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
              <MessageCircle className="w-5 h-5 text-gray-600" />
              <Bell className="w-5 h-5 text-gray-600" />
              <User className="w-5 h-5 text-gray-600" />
            </div>
            <div className="text-sm text-gray-700">CC Agency LLC ⌄</div>
          </>
        )}
      </div>

      {/* MOBILE MENU */}
      {menuOpen && !isLoggedIn && (
        <div className="absolute top-full left-0 w-full  bg-[#FAFDFF] border-t border-[#F1F1F1] px-6 py-4 flex flex-col space-y-4 z-50 md:hidden h-screen">
          <span className=" ml-6 mr-10">
            <LocaleSwitcher />
          </span>

          {[
            { path: "/", label: t("home") },
            { path: "/jobs", label: t("jobs") },
            { path: "/employees", label: t("searchEmployees") },
            { path: "/employers", label: t("employers") },
            { path: "/packages", label: t("packages") },
          ].map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={clsx(
                isActive(path)
                  ? "text-[#23BA97] font-semibold mt-2"
                  : "text-black mt-2"
              )}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <div className="flex w-full gap-2 mt-20">
            <Link
              className="w-full"
              href="/sign-in"
              onClick={() => setMenuOpen(false)}
            >
              <Button variant="secondary" size="small" className="w-full">
                {t("login")}
              </Button>
            </Link>

            <Link
              className="w-full"
              href="/registration"
              onClick={() => setMenuOpen(false)}
            >
              <Button variant="primary" size="small" className="w-full">
                {t("register")}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
