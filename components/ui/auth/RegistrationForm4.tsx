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
    <div className="w-full bg-gray-50 px-4 pt-20 min-h-screen">
      <Card className=" mx-auto w-full max-w-md rounded-xl p-6 py-8 border border-[#999BA7]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Image src={LogoIcon} alt="Logo" height={48} width={70} />
          <p className="text-lg font-semibold capitalize">{t("step4.title")}</p>
          <ShieldCheck size={50} color="white" fill="black" className="my-2" />
          <p className="text-sm max-w-xs">{t("step4.description")}</p>
        </div>

        <CardContent className="pt-3 space-y-4">
          <Link href="/sign-in" className="w-full">
            <Button variant="primary" size="large" className="w-full">
              {t("step4.submit")}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
