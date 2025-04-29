"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LogoIcon from "../../../public/assets/icons/logoIcon.svg";

import Image from "next/image";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import { useRef, useState } from "react";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function RegistrationForm3({ onNext, onBack }: Props) {
  const t = useTranslations("Registration");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const paste = e.clipboardData.getData("text");
    if (/^\d{6}$/.test(paste)) {
      const newOtp = paste.split("").slice(0, 6);
      setOtp(newOtp);
      newOtp.forEach((digit, idx) => {
        if (inputsRef.current[idx]) {
          inputsRef.current[idx]!.value = digit;
        }
      });
      // Move focus to last
      inputsRef.current[5]?.focus();
    }
  };

  return (
    <div className="flex pt-10 md:pt-16 pb-10 px-4 w-full bg-gray-50 min-h-screen justify-center items-start">
      <Card className=" mx-auto w-full md:max-w-[574px] rounded-[40px] md:p-6 py-8 border border-[#999BA7]">
        <div className="flex flex-col items-center space-y-4">
          <Image src={LogoIcon} alt="Logo" height={48} width={105} />
          <p className="font-montserrat font-bold text-[24px] leading-[16px] uppercase">
            {t("step3.title")}
          </p>
          <p className="font-montserrat font-normal text-[16px] leading-[24px] text-center">
            {t("step3.description")}
          </p>
        </div>

        <CardContent className="pt-3 space-y-4 p-4">
          <div className="space-y-2">
            <Label
              className="font-montserrat font-semibold text-[16px] leading-[16px] text-black"
              htmlFor="otp"
            >
              {t("step3.code")}
            </Label>
            <div
              onPaste={handlePaste}
              className="flex justify-between h-[56px] rounded-[16px] border border-[#1C1B1B] px-4 py-3 bg-white"
            >
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  defaultValue={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  ref={(el) => {
                    inputsRef.current[index] = el;
                  }}
                  className="w-6 text-center text-xl text-gray-800 placeholder:text-gray-400 bg-transparent border-none outline-none"
                  placeholder="-"
                />
              ))}
            </div>
          </div>

          <Button
            onClick={onNext}
            variant="primary"
            size="large"
            className="w-full h-[50px] rounded-[16px] pt-[16px] pr-[64px] pb-[16px] pl-[64px] gap-[10px]"
          >
            {t("step3.submit")}
          </Button>
          <Button
            onClick={onBack}
            variant="secondary"
            size="large"
            className="w-full font-montserrat font-medium text-[16px] leading-[16px] text-center"
          >
            <ChevronLeft size={18} color="black" className="mr-2" />
            {t("step3.back")}
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
