"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LogoIcon from "../../../public/assets/icons/logoIcon.svg";

import Image from "next/image";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function RegistrationForm2({ onNext, onBack }: Props) {
  const t = useTranslations("Registration");

  return (
    <div className="flex pt-10 md:pt-16 pb-10 px-4 w-full bg-gray-50 min-h-screen justify-center items-start">
      <Card className=" mx-auto w-full md:max-w-[574px] rounded-[40px] md:p-6 py-8 border border-[#999BA7]">
        <div className="flex flex-col items-center space-y-4">
          <Image src={LogoIcon} alt="Logo" height={48} width={105} />
          <p className="font-montserrat font-bold text-[24px] leading-[16px] uppercase">
            {t("title")}
          </p>
        </div>

        <CardContent className="pt-3 space-y-4 p-4">
          <div className="space-y-2">
            <Label
              className="font-montserrat font-semibold text-[16px] leading-[16px] text-black"
              htmlFor="email"
            >
              {t("step2.name")}
            </Label>
            <Input
              className="h-[56px] rounded-[16px] pt-[20px] pr-[24px] pb-[20px] pl-[24px] gap-[10px] border border-[#1C1B1B]"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label className="font-montserrat font-semibold text-[16px] leading-[16px] text-black">
              {t("step2.number")}
            </Label>
            <Input className="h-[56px] rounded-[16px] pt-[20px] pr-[24px] pb-[20px] pl-[24px] gap-[10px] border border-[#1C1B1B]" />
          </div>

          <Button
            onClick={onNext}
            variant="primary"
            size="large"
            className="w-full h-[50px] rounded-[16px] pt-[16px] pr-[64px] pb-[16px] pl-[64px] gap-[10px]"
          >
            {t("step2.submit")}
          </Button>
          <Button
            onClick={onBack}
            variant="secondary"
            size="large"
            className="w-full font-montserrat font-medium text-[16px] leading-[16px] text-center"
          >
            <ChevronLeft size={18} color="black" className="mr-2" />
            {t("step2.back")}
          </Button>

          <div className="mt-4 text-center text-xs text-[#293B44]">
            <div className="space-x-[2px] flex items-center justify-center w-full">
              <p className="mb-2 font-montserrat font-normal text-[16px] leading-[16px] text-center">
                {t("noAccount")}
                <Link
                  href="/sign-in"
                  className="mb-2 text-[#23BA97] ml-1 hover:underline font-montserrat font-normal text-[16px] leading-[16px] text-center"
                >
                  {t("registerNow")}
                </Link>
              </p>
            </div>
            <div className="space-x-[2px] flex items-center justify-center w-full font-montserrat font-normal text-[16px] leading-[16px] text-center">
              <p className="">
                {t("forgotPassword")}{" "}
                <Link
                  href="/privacy"
                  className=" text-[#23BA97] hover:underline"
                >
                  {t("recover")}
                </Link>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
