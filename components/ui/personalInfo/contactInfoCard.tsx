"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { Pencil, Mail, Phone } from "lucide-react";

const schema = z.object({
  email: z.string().email("Invalid email"),
  phone: z.string().min(7, "Invalid phone number"),
});

type FormData = z.infer<typeof schema>;

export function ContactInfoCard() {
  const [email, setEmail] = useState("DavidAminoff123@google.com");
  const [phone, setPhone] = useState("+374 (77) 123-456");

  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { email, phone },
  });

  const onSubmit = (data: FormData) => {
    setEmail(data.email);
    setPhone(data.phone);
    setOpen(false); // Close the dialog
  };

  return (
    <div className="w-full space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="font-[Montserrat arm] font-semibold text-[20px] leading-[100%] tracking-[0%]">
          Կոնտակտային տվյալներ
        </h2>
        <Dialog
          open={open}
          onOpenChange={(state) => {
            setOpen(state);
            if (state) reset({ email, phone });
          }}
        >
          <DialogTrigger asChild>
            <button className="cursor-pointer shadow-lg h-10 w-10 rounded-lg flex items-center justify-center">
              <Pencil size={24} color="#999BA7" />
            </button>
          </DialogTrigger>
          <DialogContent className="!max-w-none !w-[961px] py-6 px-12 rounded-4xl">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl font-bold">
                Խմբագրել Կոնտակտային տվյալները
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
              <div className="flex flex-col gap-[14px]">
                <Label className="font-[Montserrat arm] font-semibold text-[16px] leading-[16px]">
                  Էլ. փոստ
                </Label>
                <Input
                  type="email"
                  placeholder="օրինակ՝ name@example.com"
                  className="h-[64px] rounded-[16px] border border-[#1C1B1B]"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-[14px]">
                <Label className="font-[Montserrat arm] font-semibold text-[16px] leading-[16px]">
                  Հեռախոսահամար
                </Label>
                <Input
                  type="tel"
                  placeholder="+374..."
                  className="h-[64px] rounded-[16px] border border-[#1C1B1B]"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              <div className="flex justify-center">
                <Button type="submit" variant="primary" size="medium">
                  Հաստատել
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <hr />

      <div className="flex flex-col gap-4 text-gray-700 ">
        <div className="flex items-center gap-3">
          <Mail size={24} className="text-gray-500" />
          <span className="font-[Montserrat arm] font-normal text-[18px] leading-[16px] tracking-[0%] text-center">
            {phone}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Phone size={24} className="text-gray-500" />
          <span className="font-[Montserrat arm] font-normal text-[18px] leading-[16px] tracking-[0%] text-center">
            {email}
          </span>
        </div>
      </div>
    </div>
  );
}
