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
      university: "Հայաստանի Ամերիկյան Համալսարան",
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
          className="flex justify-between items-start"
        >
          <div>
            <p className="font-semibold">
              {edu.university} | {edu.startYear} - {edu.endYear}
            </p>
            <p>{edu.degree}</p>
          </div>
          <button onClick={() => openEditor(index)} className="mt-1">
            <Pencil size={18} color="#999BA7" />
          </button>
        </div>
      ))}

      <button
        className="text-[#00B894] text-sm font-semibold cursor-pointer"
        onClick={() => openEditor(null)}
      >
        + Ավելացնել
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="!max-w-none !w-[700px] py-6 px-12 rounded-4xl">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold">
              Խմբագրել Կրթությունը
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <div>
              <label className="block mb-1 font-semibold">
                Համալսարանի անվանումը
              </label>
              <Input
                value={form.university}
                onChange={(e) =>
                  setForm({ ...form, university: e.target.value })
                }
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-1 font-semibold">Ուսման սկիզբ</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={form.startYear}
                  onChange={(e) =>
                    setForm({ ...form, startYear: e.target.value })
                  }
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label className="block mb-1 font-semibold">Ուսման ավարտ</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={form.endYear}
                  onChange={(e) =>
                    setForm({ ...form, endYear: e.target.value })
                  }
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Բաժին/մասնագիտություն
              </label>
              <Input
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
