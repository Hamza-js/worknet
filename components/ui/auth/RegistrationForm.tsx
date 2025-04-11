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

export default function RegistrationForm() {
  const t = useTranslations("Registration");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md rounded-xl p-6 py-8 border border-[#999BA7]">
        <div className="flex flex-col items-center space-y-4">
          <Image src={LogoIcon} alt="Logo" height={48} width={70} />
          <p className="text-lg font-semibold capitalize">{t("title")}</p>
        </div>

        <CardContent className="pt-3 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">{t("email")}</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">{t("password")}</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">{t("confirm")}</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>

          <Button variant="primary" size="large" className="w-full">
            {t("submit")}
          </Button>

          <div className="mt-4 text-center text-xs text-[#293B44]">
            <div className="space-x-[2px] flex items-center justify-center w-full">
              <p className="mb-2">{t("noAccount")}</p>
              <Link
                href="/sing-in"
                className="mb-2 text-[#23BA97] hover:underline"
              >
                {t("registerNow")}
              </Link>
            </div>
            <div className="space-x-[2px] flex items-center justify-center w-full">
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
