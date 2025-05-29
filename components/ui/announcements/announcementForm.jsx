"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RichTextEditor from "@/components/shared/RichTextEditor";
import SelectionCards from "./selectionCards";

export function AnnouncementForm() {
  const [editorContent, setEditorContent] = useState("");

  const handleSubmit = () => {
    console.log("Submitted Description:", editorContent);
    // Add more logic here like API submission, validation, etc.
  };

  return (
    <div className="w-full bg-white flex flex-col items-center justify-center gap-[20px] px-[24px] py-[16px] rounded-[30px] border border-[#999BA7]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className=" h-[94px] flex flex-col justify-between">
          <label className="block mb-2 font-montserratArm font-semibold text-[16px] leading-[16px] tracking-[0%]">
            Վերնագիր
          </label>
          <Input
            placeholder="օրինակ՝ Տեղեկատվական տեխնոլոգիաների մասնագետ"
            className="h-[64px] p-6 gap-[10px] rounded-[16px] border font-montserratArm font-normal text-[16px] leading-[16px] tracking-[0%]"
          />
        </div>
        <div className=" h-[94px] flex flex-col justify-between">
          <label className="block mb-2 font-montserratArm font-semibold text-[16px] leading-[16px] tracking-[0%]">
            Կատեգորիա
          </label>
          <Select>
            <SelectTrigger className="!h-[64px] !min-h-[64px] p-6 gap-[10px] rounded-[16px] border font-montserratArm font-normal text-[16px] leading-[16px] tracking-[0%]">
              <SelectValue placeholder="Ընտրել կատեգորիան" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="it">ՏՏ</SelectItem>
              <SelectItem value="design">Դիզայն</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className=" h-[94px] flex flex-col justify-between">
          <label className="block mb-2 font-montserratArm font-semibold text-[16px] leading-[16px] tracking-[0%]">
            Աշխատանքի տեսակը
          </label>
          <Select>
            <SelectTrigger className="!h-[64px] !min-h-[64px] p-6 gap-[10px] rounded-[16px] border font-montserratArm font-normal text-[16px] leading-[16px] tracking-[0%]">
              <SelectValue placeholder="Ընտրել աշխատանքի տեսակը" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="onsite">Առկա</SelectItem>
              <SelectItem value="remote">Հեռավար</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className=" h-[94px] flex flex-col justify-between">
          <label className="block mb-2 font-montserratArm font-semibold text-[16px] leading-[16px] tracking-[0%]">
            Մարզ
          </label>
          <Select>
            <SelectTrigger className="!h-[64px] !min-h-[64px] p-6 gap-[10px] rounded-[16px] border font-montserratArm font-normal text-[16px] leading-[16px] tracking-[0%]">
              <SelectValue placeholder="Ընտրել մարզը" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yerevan">Երևան</SelectItem>
              <SelectItem value="shirak">Շիրակ</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className=" h-[94px] flex flex-col justify-between">
          <label className="block mb-2 font-montserratArm font-semibold text-[16px] leading-[16px] tracking-[0%]">
            Տարիքային խումբ
          </label>
          <Input
            placeholder="Օրինակ՝ 18+"
            className="h-[64px] p-6 gap-[10px] rounded-[16px] border font-montserratArm font-normal text-[16px] leading-[16px] tracking-[0%]"
          />
        </div>
        <div className=" h-[94px] flex flex-col justify-between">
          <label className="block mb-2 font-montserratArm font-semibold text-[16px] leading-[16px] tracking-[0%]">
            Սեռ
          </label>
          <Select>
            <SelectTrigger className="!h-[64px] !min-h-[64px] p-6 gap-[10px] rounded-[16px] border font-montserratArm font-normal text-[16px] leading-[16px] tracking-[0%]">
              <SelectValue placeholder="Ընտրել սեռը" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Ցանկացած</SelectItem>
              <SelectItem value="male">Տղամարդ</SelectItem>
              <SelectItem value="female">Կին</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="w-full h-full">
        <label className="block mb-3 font-montserratArm font-semibold text-[16px] leading-[16px] tracking-[0%]">
          Նկարագրություն
        </label>
        <RichTextEditor value={editorContent} onChange={setEditorContent} />
      </div>
      <SelectionCards />

      <div className="flex justify-center w-full">
        <Button
          onClick={handleSubmit}
          variant="primary"
          size="large"
          className="w-[346px] h-[56px] font-montserratArm font-medium text-[16px] leading-[16px] tracking-[0%] text-center"
        >
          + Տեղադրել հայտարարություն
        </Button>
      </div>
    </div>
  );
}
