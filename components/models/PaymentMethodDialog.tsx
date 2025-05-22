"use client";

import * as Dialog from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import card from "../../public/assets/icons/card.svg";
import idram from "../../public/assets/icons/idram.svg";
import bank from "../../public/assets/icons/bank.svg";
import invoice from "../../public/assets/icons/invoice.svg";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const paymentMethods = [
  {
    id: "card",
    label: "Բանկային",
    labe2: "քարտով",
    icon: card,
  },
  {
    id: "idram",
    label: "Իդրամ",
    labe2: "դրամապանակով",

    icon: idram,
  },
  {
    id: "bank",
    label: "Բանկային",
    labe2: "փոխանցումով",

    icon: bank,
  },
  {
    id: "invoice",
    label: "Հաշիվ-",
    labe2: "ապրանքագիր",

    icon: invoice,
  },
];

export default function PaymentMethodDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (value: boolean) => void;
}) {
  const [selectedMethod, setSelectedMethod] = useState("invoice");

  const renderContent = () => {
    switch (selectedMethod) {
      case "card":
        return (
          <div className="space-y-2">
            <div className="font-montserratArm text-[16px] leading-[20px] text-center">
              <p>
                Հաշվին առկա է <strong>0 դրամ</strong>
              </p>
            </div>
            <Label
              className="font-montserrat font-semibold text-[16px] leading-[16px] text-black"
              htmlFor="Գումար"
            >
              Գումար
            </Label>
            <Input
              className="h-[56px] rounded-[16px] pt-[20px] pr-[24px] pb-[20px] pl-[24px] gap-[10px] border border-[#1C1B1B]"
              id="Գումար"
              placeholder="Մուտքագրեք գումարը"
            />
          </div>
        );
      case "idram":
        return (
          <div className="space-y-2">
            <div className="font-montserratArm text-[16px] leading-[20px] text-center">
              <p>
                Հաշվին առկա է <strong>0 դրամ</strong>
              </p>
            </div>
            <Label
              className="font-montserrat font-semibold text-[16px] leading-[16px] text-black"
              htmlFor="Գումար"
            >
              Գումար
            </Label>
            <Input
              className="h-[56px] rounded-[16px] pt-[20px] pr-[24px] pb-[20px] pl-[24px] gap-[10px] border border-[#1C1B1B]"
              id="Գումար"
              placeholder="Մուտքագրեք գումարը"
            />
          </div>
        );
      case "bank":
        return (
          <div className="space-y-2">
            <div className="font-montserratArm text-[16px] leading-[20px] text-center space-y-3">
              <div>
                <p className="font-montserratArm text-[#999BA7] font-normal text-[16px] leading-[25px] tracking-[0%] text-center">
                  Կատարեք փոխանցում նշված տվյալներով և կցեք անդորագիրը:
                </p>
                <p className="font-montserratArm text-[#999BA7] font-normal text-[16px] leading-[25px] tracking-[0%] text-center">
                  Ակտիվացվում է մի քանի ժամվա ընթացքում:
                </p>
              </div>

              <p>
                Ստացող՝ <strong>ՍԻ ՍԻ ԷՋՆՍԻ ՍՊԸ</strong>
              </p>

              <p>
                ՀՎՀՀ՝ <strong>02847442</strong>
              </p>

              <p>
                Բանկ՝ <strong>ԱԿԲԱ ԲԱՆԿ ԲԲԸ</strong>
              </p>

              <p>
                Հ/Հ՝ <strong>220593335650000</strong>
              </p>
            </div>
            <Label
              className="font-montserrat font-semibold text-[16px] leading-[16px] text-black"
              htmlFor="Գումար"
            >
              Գումար
            </Label>
            <Input
              className="h-[56px] rounded-[16px] pt-[20px] pr-[24px] pb-[20px] pl-[24px] gap-[10px] border border-[#1C1B1B]"
              id="Գումար"
              placeholder="Մուտքագրեք գումարը"
            />
          </div>
        );
      case "invoice":
        return (
          <div className="space-y-4">
            <div className="font-montserratArm text-[16px] leading-[20px] text-center space-y-3">
              <div>
                <p className="font-montserratArm text-[#999BA7] font-normal text-[16px] leading-[25px] tracking-[0%] text-center">
                  Դուրս կգրվի հաշիվ-ապրանքագիր Ձեր կազմակերպության տվյալներով և
                  կակտիվացվի համապատասխան փաթեթը:
                </p>
                <p className="font-montserratArm text-[#999BA7] font-normal text-[16px] leading-[25px] tracking-[0%] text-center">
                  Ակտիվացվում է մի քանի ժամվա ընթացքում:
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <Label
                className="font-montserrat font-semibold text-[16px] leading-[16px] text-black"
                htmlFor="ՀՎՀՀ"
              >
                ՀՎՀՀ
              </Label>
              <Input
                className="h-[56px] rounded-[16px] pt-[20px] pr-[24px] pb-[20px] pl-[24px] gap-[10px] border border-[#1C1B1B]"
                id="ՀՎՀՀ"
                placeholder="Մուտքագրեք հարկային կոդը"
              />
            </div>

            <div className="space-y-2">
              <Label
                className="font-montserratArm font-semibold text-[16px] leading-[16px] text-black"
                htmlFor="address"
              >
                Ընտրեք հասցեն
              </Label>
              <Select>
                <SelectTrigger
                  id="address"
                  className="h-[56px] rounded-[16px] p-[20px] gap-[10px] border border-[#1C1B1B] font-montserratArm text-[16px] leading-[16px]"
                >
                  <SelectValue placeholder="Ընտրել կազմակերպության հասցեն" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="addr1">Հասցե 1</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
    }
  };

  return (
    <Dialog.Dialog open={open} onOpenChange={onOpenChange}>
      <Dialog.DialogContent className="max-w-[961px] w-full md:min-w-[961px] rounded-[40px] p-8 gap-4 border border-[#EAEAEA]">
        <Dialog.DialogHeader>
          <Dialog.DialogTitle className="text-center font-montserratArm font-normal text-[24px] leading-[28px]">
            Վճարման տարբերակ
          </Dialog.DialogTitle>
          <Dialog.DialogDescription className="text-center font-montserratArm font-normal text-[16px] leading-[20px] text-[#999BA7]">
            Ընտրք Ձեզ հարմար վճարման տարբերակ
          </Dialog.DialogDescription>
        </Dialog.DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-4">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`flex flex-col items-center justify-center p-4 rounded-[20px] text-center space-y-2 transition ${
                selectedMethod === method.id
                  ? "border border-[#23BA97]"
                  : "border-[#EAEAEA] border "
              }`}
            >
              <Image src={method.icon} alt={method.icon} />
              <span className="text-[14px] font-montserratArm font-medium leading-[16px]">
                {method.label}
              </span>
              <span className="text-[14px] font-montserratArm font-medium leading-[16px]">
                {method.labe2}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-6">{renderContent()}</div>

        <div className="flex justify-center mt-6">
          <Button variant="primary" size="medium">
            Վճարել
          </Button>
        </div>
      </Dialog.DialogContent>
    </Dialog.Dialog>
  );
}
