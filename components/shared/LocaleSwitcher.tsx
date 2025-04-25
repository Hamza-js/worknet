import { routing } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <div className="flex items-center md:ml-6 gap-2">
      <Globe className="h-4 w-4 md:h-6 md:w-6 text-black" />
      <LocaleSwitcherSelect defaultValue={locale} label="Select a locale">
        {routing.locales.map((cur) => (
          <option
            className="font-montserrat font-medium text-base leading-4 tracking-normal text-center"
            key={cur}
            value={cur}
          >
            {cur}
          </option>
        ))}
      </LocaleSwitcherSelect>
    </div>
  );
}
