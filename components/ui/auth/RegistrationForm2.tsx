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
    <div className="w-full bg-gray-50 px-4 pt-20 min-h-screen">
      <Card className=" mx-auto w-full max-w-md rounded-xl p-6 py-8 border border-[#999BA7]">
        <div className="flex flex-col items-center space-y-4">
          <Image src={LogoIcon} alt="Logo" height={48} width={70} />
          <p className="text-lg font-semibold capitalize">{t("step2.title")}</p>
        </div>

        <CardContent className="pt-3 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">{t("step2.name")}</Label>
            <Input id="email" placeholder="name@example.com" />
          </div>
          <div className="space-y-2">
            <Label>{t("step2.number")}</Label>
            <Input />
          </div>

          <Button
            onClick={onNext}
            variant="primary"
            size="large"
            className="w-full"
          >
            {t("step2.submit")}
          </Button>
          <Button
            onClick={onBack}
            variant="secondary"
            size="large"
            className="w-full"
          >
            <ChevronLeft size={18} color="black" className="mr-2" />
            {t("step2.back")}
          </Button>

          <div className="mt-4 text-center text-xs text-[#293B44]">
            <div className="space-x-[2px] flex items-center justify-center w-full">
              <p className="mb-2">{t("step2.noAccount")}</p>
              <Link
                href="/sign-in"
                className="mb-2 text-[#23BA97] hover:underline"
              >
                {t("step2.registerNow")}
              </Link>
            </div>
            <div className="space-x-[2px] flex items-center justify-center w-full">
              <p className="">{t("step2.forgotPassword")} </p>
              <Link href="/privacy" className=" text-[#23BA97] hover:underline">
                {t("step2.recover")}
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
