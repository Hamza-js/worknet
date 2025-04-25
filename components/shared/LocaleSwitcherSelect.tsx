"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, usePathname } from "next/navigation"; // ✅ from next-intl
import { useParams } from "next/navigation"; // ✅ from Next.js
import { useLocale } from "next-intl";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams(); // optional, depending on your needs
  const currentLocale = useLocale();

  function onSelectChange(selectedLocale: string) {
    // Replace the current path with the new locale in the URL
    const newPath = pathname.replace(`/${currentLocale}`, `/${selectedLocale}`);

    // Push the new path to the router (it will update the URL)
    router.replace(newPath);
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
      <SelectTrigger
        className="w-[80px] h-8 cursor-pointer border-none bg-transparent focus:ring-0 focus:ring-offset-0 text-black outline-none shadow-none"
        aria-label={label}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {["en", "hy"].map((locale) => (
          <SelectItem key={locale} value={locale}>
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
