"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LogoIcon from "../../../public/assets/icons/logoIcon.svg";
import Apple from "../../../public/assets/icons/apple.svg";
import Google from "../../../public/assets/icons/google.svg";

import Image from "next/image";
import { Label } from "@/components/ui/label";

export default function SigninForm() {
  const t = useTranslations("Login");

  return (
    <div className="flex pt-10 md:pt-16 pb-10 px-4 w-full bg-gray-50 min-h-screen justify-center items-start">
      <Card className="mx-auto w-full md:max-w-[574px] rounded-[40px] md:p-6 py-8 border border-[#999BA7]">
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

          <Button
            variant="primary"
            size="large"
            className="w-full h-[50px] rounded-[16px] pt-[16px] pr-[64px] pb-[16px] pl-[64px] gap-[10px]"
          >
            {t("submit")}
          </Button>

          <p className="text-center text-sm text-[#293B44]">
            {t("orContinueWith")}
          </p>

          <Button
            variant="secondary"
            className="w-full bg-black h-[50px] text-white rounded-[16px] hover:bg-gray-800"
            size="small"
          >
            <Image
              className="mr-2 mb-[3px]"
              src={Apple}
              alt="Logo"
              height={15}
              width={15}
            />
            {t("signInWithApple")}
          </Button>

          <Button
            variant="secondary"
            size="small"
            className="w-full h-[50px] rounded-[16px] hover:bg-gray-200"
          >
            <Image
              className="mr-1 mb-[2px]"
              src={Google}
              alt="Logo"
              height={20}
              width={20}
            />
            {t("signInWithGoogle")}
          </Button>

          <div className="mt-4 text-center text-xs text-[#293B44]">
            <div className="space-x-[2px] flex items-center justify-center w-full">
              <p className="mb-2 font-montserrat font-normal text-[16px] leading-[16px] text-center">
                {t("noAccount")}
                <Link
                  href="/registration"
                  className="mb-2 text-[#23BA97] hover:underline ml-1 font-montserrat font-normal text-[16px] leading-[16px] text-center"
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
                  className=" text-[#23BA97] hover:underline ml-1"
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
