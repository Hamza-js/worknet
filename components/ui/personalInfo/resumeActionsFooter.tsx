"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Download, Trash2 } from "lucide-react";

export function ResumeActionsFooter() {
  const [isPublished, setIsPublished] = useState(true);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 mt-6">
      <div className="flex items-center gap-3">
        <Switch
          checked={isPublished}
          onCheckedChange={setIsPublished}
          className="data-[state=checked]:bg-[#02B1AF]"
        />
        <div>
          <p className="text-sm font-medium">Թողարկել Հրապարակված վիճակում</p>
          <p className="text-sm text-gray-500 font-medium">
            Ձեր ռեզյումեն կհայտնվի գործատուի բաց տեսանելիության դաշտում
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          variant="outline"
          size="medium"
          className="flex items-center gap-2 rounded-xl"
        >
          <Download size={16} />
          Ներբեռնել
        </Button>
        <Button
          variant="secondary"
          className="flex text-red-500 items-center gap-2 rounded-xl"
          size="medium"
        >
          <Trash2 size={16} color="red" />
          Ջնջել CV-ն
        </Button>
      </div>
    </div>
  );
}
