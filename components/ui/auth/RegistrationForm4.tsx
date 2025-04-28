"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import LogoIcon from "../../../public/assets/icons/logoIcon.svg";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function RegistrationForm4() {
  const t = useTranslations("Registration");

  return (
    <div className="flex items-center justify-center mt-[-30px] md:mt-[-10px]  px-4 w-full bg-gray-50  min-h-screen">
      <Card className=" mx-auto w-full md:max-w-[574px] rounded-[40px] md:p-6 py-8 border border-[#999BA7]">
        <div className="flex flex-col items-center space-y-4">
          <Image src={LogoIcon} alt="Logo" height={48} width={105} />
          <p className="font-montserrat font-bold text-[24px] leading-[16px] uppercase">
            {t("step4.title")}
          </p>
          <ShieldCheck size={50} color="white" fill="black" className="my-2" />
          <p className="font-montserrat font-semibold text-[16px] leading-[24px] text-center">
            {t("step4.description")}
          </p>
        </div>

        <CardContent className="pt-3 space-y-4 p-4">
          <Link href="/sign-in" className="w-full">
            <Button
              variant="primary"
              size="large"
              className="w-full h-[50px] rounded-[16px] pt-[16px] pr-[64px] pb-[16px] pl-[64px] gap-[10px]"
            >
              {t("step4.submit")}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
