"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Pencil, X } from "lucide-react";

export function SkillEditorCard() {
  const [skills, setSkills] = useState([
    "Html",
    "Css3",
    "Java Script",
    "Php",
    "Laravel",
    "Bootstrap",
    "Github",
  ]);
  const [open, setOpen] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  const removeSkill = (skill: string) => {
    setSkills((prev) => prev.filter((s) => s !== skill));
  };

  const addSkill = () => {
    const trimmed = newSkill.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills((prev) => [...prev, trimmed]);
      setNewSkill("");
    }
  };

  return (
    <div className="w-full space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="font-[Montserrat arm] font-semibold text-[20px] leading-[100%] tracking-[0%]">
          Հմտություններ/Ծրագրեր
        </h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="cursor-pointer shadow-sm h-10 w-10 rounded-lg flex items-center justify-center">
              <Pencil className="cursor-pointer" size={24} color="#999BA7" />
            </button>
          </DialogTrigger>
          <DialogContent className="!max-w-none !w-[961px] py-6 px-12 rounded-4xl">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl font-bold">
                Խմբագրել Հմտությունները
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <Label className="font-[Montserrat arm] font-semibold text-[16px] leading-[16px]">
                Հմտություններ
              </Label>
              <div className="flex flex-wrap gap-2 p-2 h-[64px] rounded-[16px] border border-[#1C1B1B] ">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-200 relative rounded-full flex items-center px-3 py-1 text-[18px] font-medium gap-1"
                  >
                    {skill}
                    <button
                      className="bg-black rounded-full flex items-center p-[2px] cursor-pointer justify-center absolute top-0 right-0"
                      onClick={() => removeSkill(skill)}
                    >
                      <X size={12} color="white" />
                    </button>
                  </div>
                ))}
                <Input
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addSkill()}
                  placeholder="Գրեք..."
                  className="border-none focus-visible:ring-0 px-2 py-1 w-auto h-auto text-sm"
                />
              </div>

              <Label className="font-[Montserrat arm] font-semibold text-[16px] leading-[16px]">
                Ավելացված Հմտություններ
              </Label>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={() => setOpen(false)}
                  variant="primary"
                  size="medium"
                >
                  Հաստատել
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <hr />

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
