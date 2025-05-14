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
import { Pencil, X } from "lucide-react";
import clsx from "clsx";

export function HobbiesEditorCard() {
  const allCategories = [
    "Գրիր",
    "Թենիս",
    "Կյոռլինգ",
    "Կիբեռսպորտ",
    "Ընթերցել",
    "Ֆիլմի դիտում",
    "Բասկետբոլ",
  ];

  const [selected, setSelected] = useState<string[]>(["Բասկետբոլ"]);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleSelect = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item]
    );
  };

  const addInputValue = () => {
    const trimmed = inputValue.trim();
    if (trimmed && !selected.includes(trimmed)) {
      setSelected((prev) => [...prev, trimmed]);
      setInputValue("");
    }
  };

  return (
    <div className="w-full space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="font-[Montserrat arm] font-semibold text-[20px]">
          Հետաքրքրություն/հոբբի
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
                Խմբագրել Հոբբիները
              </DialogTitle>
            </DialogHeader>

            {/* Input + Tag Box */}
            <div className="border border-[#1C1B1B] rounded-xl px-4 py-3 mt-4">
              <div className="flex flex-wrap gap-2">
                {selected.map((item) => (
                  <div
                    key={item}
                    className="bg-gray-200 relative rounded-full flex items-center px-3 py-1 text-[16px] font-medium gap-1"
                  >
                    {item}
                    <button
                      className="bg-black rounded-full p-[2px] cursor-pointer"
                      onClick={() => toggleSelect(item)}
                    >
                      <X size={12} color="white" />
                    </button>
                  </div>
                ))}
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addInputValue()}
                  placeholder="Գրեք..."
                  className="border-none focus-visible:ring-0 px-2 py-1 w-auto h-auto text-sm"
                />
              </div>
            </div>

            {/* All Categories */}
            <div className="mt-4 flex flex-wrap gap-2">
              {allCategories.map((item) => (
                <button
                  key={item}
                  onClick={() => toggleSelect(item)}
                  className={clsx(
                    "rounded-full px-4 py-1 border text-sm font-medium",
                    selected.includes(item)
                      ? "bg-[#02AAB0] text-white"
                      : "bg-gray-100 text-black"
                  )}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Confirm */}
            <div className="flex justify-center mt-4">
              <Button
                onClick={() => setOpen(false)}
                variant="primary"
                size="medium"
              >
                Հաստատել
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <hr />

      <div className="flex flex-wrap gap-3">
        {selected.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-gray-200 px-4 py-1 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
