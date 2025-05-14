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

type Experience = {
  company: string;
  position: string;
  start: string;
  end: string;
};

const years = Array.from({ length: 30 }, (_, i) => `Օգոստոս ${2000 + i}`);
years.push("մինչ օրս");

export function ExperienceEditorCard() {
  const [open, setOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      company: "ABC Technology",
      position: "Senior Web Developer",
      start: "2022",
      end: "մինչ օրս",
    },
    {
      company: "GT Systems",
      position: "Web Developer",
      start: "2017",
      end: "2021",
    },
  ]);

  const [form, setForm] = useState<Experience>({
    company: "",
    position: "",
    start: "2022",
    end: "մինչ օրս",
  });

  const openEditor = (index: number | null) => {
    if (index !== null) {
      setForm(experiences[index]);
    } else {
      setForm({ company: "", position: "", start: "2022", end: "մինչ օրս" });
    }
    setEditingIndex(index);
    setOpen(true);
  };

  const handleSave = () => {
    if (editingIndex !== null) {
      const updated = [...experiences];
      updated[editingIndex] = form;
      setExperiences(updated);
    } else {
      setExperiences((prev) => [...prev, form]);
    }
    setOpen(false);
  };

  return (
    <div className="w-full space-y-3">
      <h2 className="font-[Montserrat arm] font-semibold text-[20px]">
        Աշխատանք
      </h2>

      {experiences.map((exp, index) => (
        <div
          key={`${exp.company}-${index}`}
          className="flex justify-between items-start"
        >
          <div>
            <p className="font-semibold">
              {exp.company} | {exp.start} - {exp.end}
            </p>
            <p>{exp.position}</p>
          </div>
          <button onClick={() => openEditor(index)} className="mt-1">
            <Pencil size={18} color="#999BA7" />
          </button>
        </div>
      ))}

      <button
        className="text-[#00B894] text-sm font-semibold"
        onClick={() => openEditor(null)}
      >
        + Ավելացնել
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="!max-w-none !w-[700px] py-6 px-12 rounded-4xl">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold">
              {editingIndex !== null
                ? "Խմբագրել Աշխատանքը"
                : "Ավելացնել Աշխատանքը"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <div>
              <label className="block mb-1 font-semibold">
                Կազմակերպության անվանում
              </label>
              <Input
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-1 font-semibold">Ուսման սկիզբ</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={form.start}
                  onChange={(e) => setForm({ ...form, start: e.target.value })}
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
                  value={form.end}
                  onChange={(e) => setForm({ ...form, end: e.target.value })}
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
                Դիրք/մասնագիտություն
              </label>
              <Input
                value={form.position}
                onChange={(e) => setForm({ ...form, position: e.target.value })}
              />
            </div>

            <div className="flex justify-center mt-4">
              <Button onClick={handleSave} variant="primary" size="medium">
                Պահպանել
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
