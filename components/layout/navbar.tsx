import React from "react";
import { Button } from "@/components/ui/button";
import { Globe, Bell, MessageCircle, User } from "lucide-react";
import Image from "next/image";
import logo from "../../public/assets/images/worknet-logo.png";
import { getTranslations } from "next-intl/server";
import LocaleSwitcher from "../shared/LocaleSwitcher";

const Navbar = async ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const t = await getTranslations("HomePage");

  return (
    <nav className="w-full bg-[#FAFDFF] border-b border-[#F1F1F1] shadow-sm px-10 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Image src={logo} width={100} height={50} alt="logo" />

        <span className="ml-6 mr-10">
          <LocaleSwitcher />
        </span>

        {!isLoggedIn && (
          <div className="hidden md:flex space-x-6 font-medium text-[16px] leading-[16px] tracking-[0] text-center">
            <a href="#">{t("home")}</a>
            <a href="#">{t("jobs")}</a>
            <a href="#">{t("searchEmployees")}</a>
            <a href="#">{t("employers")}</a>
            <a href="#">{t("companies")}</a>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-4">
        {!isLoggedIn ? (
          <>
            <Button variant="secondary" size="small">
              {t("login")}
            </Button>

            <Button variant="primary" size="small">
              {t("register")}
            </Button>
          </>
        ) : (
          <>
            {/* Logged-in Icons */}
            <div className="flex space-x-2">
              <MessageCircle className="w-5 h-5 text-gray-600 relative" />
              <Bell className="w-5 h-5 text-gray-600 relative" />
              <User className="w-5 h-5 text-gray-600" />
            </div>

            {/* Dropdown with company name */}
            <div className="text-sm text-gray-700">CC Agency LLC ⌄</div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
