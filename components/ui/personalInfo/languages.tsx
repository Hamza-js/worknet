"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

interface Language {
  name: string;
  value: number;
}

const allLanguages = ["Հայերեն", "Ռուսերեն", "Անգլերեն"];

export function LanguageProficiencyCard() {
  const [languages, setLanguages] = useState<Language[]>([
    { name: "Հայերեն", value: 95 },
    { name: "Ռուսերեն", value: 85 },
    { name: "Անգլերեն", value: 90 },
  ]);

  const [selected, setSelected] = useState<string>("");
  const [slider, setSlider] = useState<number>(0);
  const [open, setOpen] = useState(false);

  const addLanguage = () => {
    if (selected && !languages.find((l) => l.name === selected)) {
      setLanguages((prev) => [...prev, { name: selected, value: slider }]);
      setSelected("");
      setSlider(0);
    }
  };

  const updateValue = (index: number, val: number[]) => {
    setLanguages((prev) => {
      const newLangs = [...prev];
      newLangs[index].value = val[0];
      return newLangs;
    });
  };

  const updateInput = (index: number, val: string) => {
    const num = parseInt(val);
    if (!isNaN(num) && num >= 0 && num <= 100) {
      setLanguages((prev) => {
        const newLangs = [...prev];
        newLangs[index].value = num;
        return newLangs;
      });
    }
  };

  const removeLanguage = (name: string) => {
    setLanguages((prev) => prev.filter((l) => l.name !== name));
  };

  return (
    <div className="w-full space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="font-[Montserrat arm] font-semibold text-[20px] leading-[100%]">
          Լեզուների իմացություն
        </h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="cursor-pointer shadow-lg h-10 w-10 rounded-lg flex items-center justify-center">
              <Pencil size={24} color="#999BA7" />
            </button>
          </DialogTrigger>
          <DialogContent className="!max-w-none !w-[600px]">
            <DialogHeader>
              <DialogTitle className="font-[Montserrat arm] font-normal text-[24px] leading-[100%] tracking-[0%] text-center block">
                Խմբագրել Լեզուն
              </DialogTitle>
              <span className=" mt-4 font-[Montserrat arm] font-normal text-[20px] leading-[16px] tracking-[0%]">
                Ավելացնել լեզու
              </span>
            </DialogHeader>

            <div className="space-y-4 mt-4">
              <Label className="font-[Montserrat arm] font-semibold text-[16px] leading-[16px] tracking-[0%]">
                Ավելացնել լեզու
              </Label>
              <Select
                value={selected}
                onValueChange={(val) => setSelected(val)}
              >
                <SelectTrigger className="!h-[64px] !min-h-[64px] p-6 gap-[10px] rounded-[16px] border font-montserratArm font-normal text-[16px] leading-[16px] tracking-[0%]">
                  <SelectValue placeholder="Ընտրել լեզու" />
                </SelectTrigger>
                <SelectContent>
                  {allLanguages.map((lang) => (
                    <SelectItem key={lang} value={lang}>
                      {lang}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex justify-between text-sm px-1">
                <span className="text-gray-500 font-[Montserrat arm] font-normal text-[14px] leading-[16px] tracking-[0%]">
                  {selected || "Լեզու"}
                </span>
                <span className="text-gray-500 font-[Montserrat arm] font-normal text-[14px] leading-[16px] tracking-[0%]">
                  {slider}%
                </span>
              </div>
              <Slider
                value={[slider]}
                onValueChange={(val) => setSlider(val[0])}
                max={100}
                step={1}
                rangeClassName="bg-[#02AAB0]"
                thumbClassName="bg-[#02AAB0] border border-[#02AAB0]"
              />

              <Label className="font-[Montserrat arm] font-normal text-[20px] leading-[16px] tracking-[0%] mt-10 pt-5 border border-r-0 border-l-0 border-b-0">
                Ձեր ավելացված լեզուները
              </Label>
              <div className="space-y-3">
                {languages.map((lang, idx) => (
                  <div
                    key={lang.name}
                    className="rounded-xl border p-3 space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{lang.name}</span>
                      <button onClick={() => removeLanguage(lang.name)}>
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Slider
                        value={[lang.value]}
                        onValueChange={(val) => updateValue(idx, val)}
                        max={100}
                        step={1}
                        className="flex-1"
                        rangeClassName="bg-[#02AAB0]"
                        thumbClassName="bg-[#02AAB0] border border-[#02AAB0]"
                      />
                      <Input
                        type="number"
                        value={lang.value}
                        onChange={(e) => updateInput(idx, e.target.value)}
                        className="w-[60px] text-center h-12"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-10">
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

      <div className="space-y-8">
        {languages.map((lang) => (
          <div key={lang.name} className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-gray-00 font-[Montserrat arm] font-normal text-[14px] leading-[16px] tracking-[0%]">
                {lang.name}
              </span>
              <span className="text-gray-00 font-[Montserrat arm] font-normal text-[14px] leading-[16px] tracking-[0%]">
                {lang.value}%
              </span>
            </div>
            <Slider
              value={[lang.value]}
              disabled
              max={100}
              step={1}
              rangeClassName="bg-[#02AAB0]"
              thumbClassName="bg-[#02AAB0] border border-[#02AAB0]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
