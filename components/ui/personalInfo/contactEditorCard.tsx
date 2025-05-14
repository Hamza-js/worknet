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

export function ContactEditorCard() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("vardanpetrosyan22@gmail.com");
  const [phone, setPhone] = useState("+374(44) 13 13 13");

  const [tempEmail, setTempEmail] = useState(email);
  const [tempPhone, setTempPhone] = useState(phone);

  const handleSave = () => {
    setEmail(tempEmail);
    setPhone(tempPhone);
    setOpen(false);
  };

  return (
    <div className="w-full">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" onClick={() => setOpen(true)}>
            Խմբագրել Կոնտակտային Տվյալները
          </Button>
        </DialogTrigger>
        <DialogContent className="!max-w-none !w-[640px] py-6 px-12 rounded-4xl">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold">
              Խմբագրել Կոնտակտային Տվյալները
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <div>
              <label className="block mb-1 font-semibold">Էլ.հասցե</label>
              <Input
                value={tempEmail}
                onChange={(e) => setTempEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Հեռախոսահամար</label>
              <Input
                value={tempPhone}
                onChange={(e) => setTempPhone(e.target.value)}
              />
            </div>
            <div className="flex justify-center mt-4">
              <Button onClick={handleSave} variant="primary" size="medium">
                Հաստատել
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="mt-4 space-y-1">
        <p>
          <strong>Էլ.հասցե:</strong> {email}
        </p>
        <p>
          <strong>Հեռախոսահամար:</strong> {phone}
        </p>
      </div>
    </div>
  );
}
