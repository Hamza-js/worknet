"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Education = {
  university: string;
  degree: string;
  startYear: string;
  endYear: string;
};

const years = Array.from({ length: 30 }, (_, i) => `${2000 + i}`);

export function EducationEditorCard() {
  const [open, setOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [educations, setEducations] = useState<Education[]>([
    {
      university: "Some leorem text here ",
      degree: "Բիզնես Կառավարում (MBA)",
      startYear: "2016",
      endYear: "2018",
    },
    {
      university: "Երևանի Պետական Համալսարան",
      degree: "Տեխնիկական Տնտեսագիտություն",
      startYear: "2012",
      endYear: "2016",
    },
  ]);

  const [form, setForm] = useState<Education>({
    university: "",
    degree: "",
    startYear: "2016",
    endYear: "2020",
  });

  const openEditor = (index: number | null) => {
    if (index !== null) {
      setForm(educations[index]);
    } else {
      setForm({
        university: "",
        degree: "",
        startYear: "2016",
        endYear: "2020",
      });
    }
    setEditingIndex(index);
    setOpen(true);
  };

  const handleSave = () => {
    if (editingIndex !== null) {
      const updated = [...educations];
      updated[editingIndex] = form;
      setEducations(updated);
    } else {
      setEducations((prev) => [...prev, form]);
    }
    setOpen(false);
  };

  return (
    <div className="w-full space-y-3">
      <h2 className="font-[Montserrat arm] font-semibold text-[20px]">
        Կրթություն
      </h2>

      {educations.map((edu, index) => (
        <div
          key={`${edu.university}-${index}`}
          className="flex gap-5 items-start"
        >
          <div className="text-[20px] text-black">
            <p className="font-semibold">
              {edu.university} | {edu.startYear} - {edu.endYear}
            </p>
            <p>{edu.degree}</p>
          </div>
          <button
            onClick={() => openEditor(index)}
            className="shadow-lg h-10 w-10 rounded-lg flex items-center justify-center"
          >
            <Pencil className="cursor-pointer" size={20} color="#999BA7" />
          </button>
        </div>
      ))}

      <button
        className="text-[#00B894] text-[16px] font-semibold cursor-pointer"
        onClick={() => openEditor(null)}
      >
        + Ավելացնել
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="!max-w-none md:!w-[961px] py-6 px-12 rounded-[40px]">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-normal">
              Խմբագրել <strong>Կրթությունը</strong>
            </DialogTitle>
          </DialogHeader>

          <div className="mt-4 space-y-4">
            <div className="flex-1 flex flex-col h-[94px] justify-between">
              <label className="block mb-1 text-[16px] font-semibold">
                Համալսարանի անվանումը
              </label>
              <Input
                className="!h-[64px] !min-h-[64px]"
                value={form.university}
                onChange={(e) =>
                  setForm({ ...form, university: e.target.value })
                }
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1 flex flex-col h-[94px] justify-between">
                <label className="block mb-1 text-[16px] font-semibold">
                  Ուսման սկիզբ
                </label>
                <Select
                  value={form.startYear}
                  onValueChange={(value) =>
                    setForm({ ...form, startYear: value })
                  }
                >
                  <SelectTrigger className="!h-[64px] !min-h-[64px] p-6 gap-[10px] rounded-[16px] border font-montserratArm font-normal text-[16px] leading-[16px] tracking-[0%]">
                    <SelectValue placeholder="Ընտրել տարեթիվ" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1 flex flex-col h-[94px] justify-between">
                <label className="block mb-1 text-[16px] font-semibold">
                  Ուսման ավարտ
                </label>
                <Select
                  value={form.endYear}
                  onValueChange={(value) =>
                    setForm({ ...form, endYear: value })
                  }
                >
                  <SelectTrigger className="!h-[64px] !min-h-[64px] p-6 gap-[10px] rounded-[16px] border font-montserratArm font-normal text-[16px] leading-[16px] tracking-[0%]">
                    <SelectValue placeholder="Ընտրել տարեթիվ" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex-1 flex flex-col h-[94px] justify-between">
              <label className="block mb-1 font-semibold">
                Բաժին/մասնագիտություն
              </label>
              <Input
                className="!h-[64px] !min-h-[64px]"
                value={form.degree}
                onChange={(e) => setForm({ ...form, degree: e.target.value })}
              />
            </div>

            <div className="flex justify-center mt-4">
              <Button onClick={handleSave} variant="primary" size="medium">
                Ավելացնել
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
