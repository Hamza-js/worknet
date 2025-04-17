"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Speaker1 from "./../../../../public/assets/icons/speaker1.svg";
import Speaker2 from "./../../../../public/assets/icons/speaker2.svg";
import Speaker3 from "./../../../../public/assets/icons/speaker3.svg";
import Speaker4 from "./../../../../public/assets/icons/speaker4.svg";
import Image from "next/image";

const Packages = () => {
  const t = useTranslations("PackagesPage");
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const togglePlan = () => setIsYearly(!isYearly);

  const plans = [
    {
      id: "basic",
      name: t("plans.basic.name"),
      price: isYearly
        ? t("plans.basic.yearlyPrice")
        : t("plans.basic.monthlyPrice"),
      features: [
        t("plans.basic.features.0"),
        t("plans.basic.features.1"),
        t("plans.basic.features.2"),
        t("plans.basic.features.3"),
      ],
      icon: Speaker1,
      cta: t("plans.basic.cta"),
    },
    {
      id: "standard",
      name: t("plans.standard.name"),
      price: isYearly
        ? t("plans.standard.yearlyPrice")
        : t("plans.standard.monthlyPrice"),
      features: [
        t("plans.standard.features.0"),
        t("plans.standard.features.1"),
        t("plans.standard.features.2"),
        t("plans.standard.features.3"),
        t("plans.standard.features.4"),
      ],
      icon: Speaker2,
      cta: t("plans.standard.cta"),
    },
    {
      id: "premium",
      name: t("plans.premium.name"),
      price: isYearly
        ? t("plans.premium.yearlyPrice")
        : t("plans.premium.monthlyPrice"),
      features: [
        t("plans.premium.features.0"),
        t("plans.premium.features.1"),
        t("plans.premium.features.2"),
        t("plans.premium.features.3"),
        t("plans.premium.features.4"),
        t("plans.premium.features.5"),
      ],
      icon: Speaker3,
      cta: t("plans.premium.cta"),
    },
    {
      id: "enterprise",
      name: t("plans.enterprise.name"),
      price: isYearly
        ? t("plans.enterprise.yearlyPrice")
        : t("plans.enterprise.monthlyPrice"),
      features: [
        t("plans.enterprise.features.0"),
        t("plans.enterprise.features.1"),
        t("plans.enterprise.features.2"),
        t("plans.enterprise.features.3"),
        t("plans.enterprise.features.4"),
        t("plans.enterprise.features.5"),
        t("plans.enterprise.features.6"),
      ],
      icon: Speaker4,
      cta: t("plans.enterprise.cta"),
    },
  ];

  return (
    <section className="py-22 bg-gray-50 text-center ">
      <div className=" mb-40 container mx-auto px-4 w-full md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1C1B1B] mb-3">
          {t("title")}
        </h2>
        <p className="text-[#1C1B1B] mb-3 text-sm">{t("description")}</p>
        <div className="flex w-full items-center text-center justify-center gap-3  p-0">
          <p className="text-[#999BA7]  text-sm">{t("HomePage")}</p>
          <ChevronRight size={18} color="#999BA7" />
          <p className="text-[#23BA97]  font-bold text-sm">{t("packages")}</p>
        </div>
        <div className="flex justify-center items-center gap-4 mt-8">
          <label
            onClick={() => setIsYearly(false)}
            className={`text-sm font-semibold cursor-pointer ${
              !isYearly ? "text-[#23BA97]" : "text-[#1C1B1B]"
            }`}
          >
            Monthly Packages
          </label>

          <label
            onClick={() => setIsYearly(true)}
            className={`text-sm font-semibold cursor-pointer ${
              isYearly ? "text-[#23BA97]" : "text-[#1C1B1B]"
            }`}
          >
            Yearly Packages
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`w-full p-6 bg-white rounded-lg transition-all flex flex-col h-full ${
                plan.id === "standard"
                  ? "border-2 border-[#23BA97]"
                  : "border-2 border-[#E9EDF5]"
              }`}
            >
              <div className="flex-grow">
                <div className="flex mb-4">
                  <Image
                    src={plan.icon}
                    alt={`${plan.name} icon`}
                    width={90}
                    height={90}
                  />
                </div>
                <div className="text-left space-y-1">
                  <p className="font-[Montserrat arm] font-normal text-md leading-4 tracking-normal text-[#B8BDD8]">
                    {plan.name}
                  </p>
                  <p className="font-[Montserrat arm] font-medium text-[22px] leading-[36px] tracking-normal text-[#293B44]">
                    {plan.price}
                  </p>
                </div>

                <ul className="list-none mt-4 text-left text-sm text-[#999BA7]">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-[#23BA97]">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <Button
                  onClick={() => setSelectedPlan(plan.id)}
                  variant={plan.id === "standard" ? "primary" : "secondary"}
                  size="small"
                  className={`w-full py-3 rounded-full text-white font-semibold  ${
                    plan.id !== "standard" && "bg-[#293B44] hover:bg-[#1f2e35]"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
