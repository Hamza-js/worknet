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
  Phone,
  Mail,
  Goal,
  Send,
} from "lucide-react";
import JobCard from "@/components/shared/JobCard";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Button } from "../button";

export default function HelpForm() {
  const t = useTranslations("HelpPage");
  const pathname = usePathname();

  const isActive = (path: string): boolean => {
    const normalizedPath = pathname.replace(/^\/[a-z]{2}\/?/, "/");
    return normalizedPath === path;
  };

  return (
    <div className="flex  flex-col md:flex-row gap-6 py-20">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-1/3 space-y-2 max-w-[400px]">
        {/* Page selector */}
        <div className="bg-white rounded-3xl border">
          <details className="w-full">
            <summary className="flex w-full  items-center text-left justify-between cursor-pointer font-medium text-sm text-[#1C1B1B]">
              <div className=" w-full">
                <div className="w-full">
                  <a
                    href="/help"
                    className={`block  w-full px-4 py-4 text-sm font-semibold border border-t-0 border-l-0 border-r-0 border-b-[#B8BDD8]  ${
                      isActive("/help") ? "text-[#23BA97]" : "text-black"
                    }`}
                  >
                    {t("help")}
                  </a>
                </div>
                <div>
                  <a
                    href="/policy"
                    className={`block px-4 py-4 text-sm font-semibold border border-t-0 border-l-0 border-r-0 border-b-[#B8BDD8] ${
                      isActive("/policy") ? "text-[#23BA97]" : "text-black"
                    }`}
                  >
                    {t("policy")}
                  </a>
                </div>
                <div>
                  <a
                    href="/publicOffer"
                    className={`block px-4 py-4 text-sm font-semibold border border-t-0 border-l-0 border-r-0 border-b-[#B8BDD8] ${
                      isActive("/publicOffer") ? "text-[#23BA97]" : "text-black"
                    }`}
                  >
                    {t("publicOffer")}
                  </a>
                </div>
                <div>
                  <a
                    href="/aboutPlatform"
                    className={`block px-4 py-4 text-sm font-semibold  ${
                      isActive("/aboutPlatform")
                        ? "text-[#23BA97]"
                        : "text-black"
                    }`}
                  >
                    {t("aboutPlatform")}
                  </a>
                </div>
              </div>
            </summary>
          </details>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white rounded-3xl border py-20 px-12">
        <div className="flex w-full items-center justify-center space-x-20 xl:space-x-24 ">
          <div className="flex gap-4 items-center justify-between ">
            <Phone size={60} color="#999BA7" className="stroke-[1]" />

            <div className="flex text-left flex-col items-start justify-center w-full text-l gap-2">
              <p className="font-montserrat font-semibold text-sm leading-4 tracking-normal text-[#1C1B1B]">
                {t("phoneNumber")}
              </p>
              <p className="font-montserrat font-normal text-lg leading-4 tracking-normal text-[#1C1B1B]">
                +374 (41) 322-320
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-between ">
            <Mail size={60} color="#999BA7" className="stroke-[1]" />

            <div className="flex flex-col items-start justify-center w-full text-l gap-2">
              <p className="font-montserrat font-semibold text-sm leading-4 tracking-normal text-[#1C1B1B]">
                {t("email")}
              </p>
              <p className="font-montserrat font-normal text-lg leading-4 tracking-normal text-[#1C1B1B]">
                support@worknet.am
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-between ">
            <Goal size={60} color="#999BA7" className="stroke-[1]" />

            <div className="flex flex-col items-start justify-center w-full text-l gap-2">
              <p className="font-montserrat font-semibold text-sm leading-4 tracking-normal text-[#1C1B1B]">
                {t("department")}
              </p>
              <p className="font-montserrat font-normal text-lg leading-4 tracking-normal text-[#1C1B1B]">
                bussiness@worknet.am
              </p>
            </div>
          </div>
        </div>

        <form className="mt-10 w-full text-left space-y-6 border-2 border-t-black border-b-0 border-l-0 border-r-0 py-12 ">
          <p className="text-xl md:text-3xl font-bold text-[#1C1B1B] mb-3">
            {t("feedback")}
          </p>
          {/* Name Field */}
          <div className="flex flex-col space-y-2">
            <label className="text-[#1C1B1B] font-semibold text-sm">
              {t("email")}
            </label>
            <Input className="rounded-lg border border-black px-4 py-2" />
          </div>

          {/* Message Field */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="message"
              className="text-[#1C1B1B] font-semibold text-sm"
            >
              {t("message")}
            </label>
            <textarea
              id="message"
              placeholder={t("messagePlaceholder")}
              rows={5}
              className="rounded-lg border border-black px-4 py-2 resize-none"
            ></textarea>
          </div>

          {/* File Upload */}
          <div className="flex flex-col space-y-2">
            <label className="text-[#1C1B1B] font-semibold text-sm">
              {t("file")}
            </label>
            <input
              placeholder={t("filePlaceholder")}
              id="file"
              type="file"
              className="border border-dashed border-black rounded-lg px-4 py-3"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button type="submit" variant="primary" size="medium">
              <Send size={16} fill="white" className="mr-2" />
              {t("send")}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
