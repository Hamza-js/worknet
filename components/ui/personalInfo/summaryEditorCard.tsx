"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Pencil } from "lucide-react";
import { useState } from "react";

export function SummaryEditorCard() {
  const [open, setOpen] = useState(false);
  const [summary, setSummary] = useState(
    "Ես սովորում եմ թմայնին ախշտանարում, ուզում կորզորոշվել և խնդիրների արդյունավետ լուծման ունակություն։ Ունեմ տեխնիկական հմտություններ և նոր տեխնոլոգիաներ արագ յուրացնելու կարողություն։ Փորձառություն պրոյեկտավորման տարբեր շրջափակներում և նախագծերում։"
  );

  const [tempSummary, setTempSummary] = useState(summary);

  const handleSave = () => {
    setSummary(tempSummary);
    setOpen(false);
  };

  return (
    <div className="w-full space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="font-[Montserrat arm] font-semibold text-[20px]">
          Ամփոփագիր
        </h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="shadow-lg h-10 w-10 rounded-lg flex items-center justify-center">
              <Pencil className="cursor-pointer" size={20} color="#999BA7" />
            </button>
          </DialogTrigger>
          <DialogContent className="!max-w-none md:!w-[961px] py-6 px-12 rounded-[40px]">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl font-bold">
                Խմբագրել <strong>Ամփոփագիրը</strong>
              </DialogTitle>
            </DialogHeader>

            <Textarea
              value={tempSummary}
              onChange={(e) => setTempSummary(e.target.value)}
              className="w-full mt-4 h-[200px] text-[20px] font-normal p-4 rounded-xl border !border-black"
            />

            <div className="flex justify-center mt-6">
              <Button onClick={handleSave} variant="primary" size="medium">
                Պահպանել
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <hr />

      <p className="font-[Montserrat arm] font-normal text-[20px] leading-[28px] tracking-[0] text-[#1C1B1B]">
        {summary}
      </p>
    </div>
  );
}
