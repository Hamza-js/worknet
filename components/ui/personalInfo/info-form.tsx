"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CloudUpload, X } from "lucide-react";

const schema = z.object({
  fullName: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  position: z.string().optional(),
  phone: z.string().optional(),
  newPassword: z.string().optional(),
  confirmPassword: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export const PersonalInfoForm = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // Handle file upload here if needed
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setFile(null);
    setImagePreview(null);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[20px] "
    >
      {/* Image Upload Section */}
      <div className="flex flex-col gap-2 h-[170px]">
        <Label className="font-montserrat font-semibold text-base leading-4 tracking-normal">
          Անձնական լուսանկար
        </Label>
        <div className="flex gap-3 items-start">
          <label className="w-[140px] h-[140px] flex-col border border-dashed border-[#EAEAEA] rounded-[16px] cursor-pointer flex items-center justify-center text-xs text-center text-gray-900 relative">
            <Input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <CloudUpload color="#23BA97" width={30} height={24} />
            <span className="whitespace-pre-line">Վերբեռնել ֆայլ</span>
          </label>
          {imagePreview && (
            <div className="relative w-[140px] h-[140px] rounded-[16px] overflow-hidden">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-full object-cover rounded-[10px]"
              />
              <button
                type="button"
                onClick={clearImage}
                className="absolute cursor-pointer top-1 right-1 bg-white rounded-full p-1 shadow"
              >
                <X size={14} />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="h-[94px] flex flex-col gap-[14px]">
          <Label className="font-montserrat font-semibold text-[16px] leading-[16px] tracking-normal">
            Անուն Ազգանուն
          </Label>
          <Input
            className="h-[64px] rounded-[16px] border border-[#1C1B1B]"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-sm text-red-500">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="h-[94px] flex flex-col gap-[14px]">
          <Label className="font-montserrat font-semibold text-[16px] leading-[16px] tracking-normal">
            Էլ. փոստ
          </Label>
          <Input
            className="h-[64px] rounded-[16px] border border-[#1C1B1B]"
            type="email"
            placeholder="օրինակ՝ name@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Position */}
        <div className="h-[94px] flex flex-col gap-[14px]">
          <Label className="font-montserrat font-semibold text-[16px] leading-[16px] tracking-normal">
            Հեռախոսահամար
          </Label>
          <Input
            className="h-[64px] rounded-[16px] border border-[#1C1B1B]"
            placeholder="օրինակ՝ ծրագրավորող"
            {...register("position")}
          />
        </div>

        {/* Phone */}
        <div className="h-[94px] flex flex-col gap-[14px]">
          <Label className="font-montserrat font-semibold text-[16px] leading-[16px] tracking-normal">
            Ծննդյան օր{" "}
            <span className="font-montserrat font-normal text-[16px] leading-[16px] tracking-[-0.04em]">
              {" "}
              (պարտադիր չէ)
            </span>
          </Label>
          <Input
            className="h-[64px] rounded-[16px] border border-[#1C1B1B]"
            {...register("phone")}
          />
        </div>

        {/* New Password */}
        <div className="h-[94px] flex flex-col gap-[14px]">
          <Label className="font-montserrat font-semibold text-[16px] leading-[16px] tracking-normal">
            Նոր գաղտնաբառ
          </Label>
          <Input
            className="h-[64px] rounded-[16px] border border-[#1C1B1B]"
            type="password"
            {...register("newPassword")}
          />
        </div>

        {/* Confirm Password */}
        <div className="h-[94px] flex flex-col gap-[14px]">
          <Label className="font-montserrat font-semibold text-[16px] leading-[16px] tracking-normal">
            Կրկնել գաղտնաբառը
          </Label>
          <Input
            className="h-[64px] rounded-[16px] border border-[#1C1B1B]"
            type="password"
            {...register("confirmPassword")}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="md:col-span-2 flex justify-center">
        <Button
          variant="primary"
          type="submit"
          className="w-[181px] h-[56px] gap-[10px] rounded-[16px] px-[24px] py-[16px]"
        >
          Թարմացնել
        </Button>
      </div>
    </form>
  );
};
