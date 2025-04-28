"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LogoIcon from "../../../public/assets/icons/logoIcon.svg";

import Image from "next/image";
import { Label } from "@/components/ui/label";

type Props = {
  onNext: () => void;
};

export default function RegistrationForm1({ onNext }: Props) {
  const t = useTranslations("Registration");

  return (
    <div className="flex items-center justify-center mt-[-30px] md:mt-[-10px] px-4 w-full bg-gray-50  min-h-screen">
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
              {t("email")}
            </Label>
            <Input
              className="h-[56px] rounded-[16px] pt-[20px] pr-[24px] pb-[20px] pl-[24px] gap-[10px] border border-[#1C1B1B]"
              id="email"
              type="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label
              className="font-montserrat font-semibold text-[16px] leading-[16px] text-black"
              htmlFor="password"
            >
              {t("password")}
            </Label>
            <Input
              className="h-[56px] rounded-[16px] pt-[20px] pr-[24px] pb-[20px] pl-[24px] gap-[10px] border border-[#1C1B1B]"
              id="password"
              type="password"
              placeholder="••••••••"
            />
          </div>
          <div className="space-y-2">
            <Label
              className="font-montserrat font-semibold text-[16px] leading-[16px] text-black"
              htmlFor="password"
            >
              {t("confirm")}
            </Label>
            <Input
              className="h-[56px] rounded-[16px] pt-[20px] pr-[24px] pb-[20px] pl-[24px] gap-[10px] border border-[#1C1B1B]"
              id="password"
              type="password"
              placeholder="••••••••"
            />
          </div>

          <Button
            onClick={onNext}
            variant="primary"
            size="large"
            className="w-full h-[50px] rounded-[16px] pt-[16px] pr-[64px] pb-[16px] pl-[64px] gap-[10px]"
          >
            {t("submit")}
          </Button>

          <div className="mt-4 text-center text-xs text-[#293B44]">
            <div className="space-x-[2px] flex items-center justify-center w-full">
              <p className="mb-2 font-montserrat font-normal text-[16px] leading-[16px] text-center">
                {t("noAccount")}
              </p>
              <Link
                href="/sign-in"
                className="mb-2 text-[#23BA97] hover:underline font-montserrat font-normal text-[16px] leading-[16px] text-center"
              >
                {t("registerNow")}
              </Link>
            </div>
            <div className="space-x-[2px] flex items-center justify-center w-full font-montserrat font-normal text-[16px] leading-[16px] text-center">
              <p className="">{t("forgotPassword")} </p>
              <Link href="/privacy" className=" text-[#23BA97] hover:underline">
                {t("recover")}
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
