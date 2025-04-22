import HelpForm from "@/components/ui/help/helpForm";
import { ChevronRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

const Help = async () => {
  const t = await getTranslations("HelpPage");

  return (
    <section className="py-22 bg-gray-50 text-center">
      <div className="mx-auto  px-4 md:mx-8 lg:mx-12 xl:mx-24">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1C1B1B] mb-3 ">
          {t("title")}
        </h2>
        <p className="text-[#1C1B1B] mb-3 text-sm">{t("description")}</p>
        <div className="flex w-full items-center text-center justify-center gap-3  p-0">
          <p className="text-[#999BA7]  text-sm">{t("HomePage")}</p>
          <ChevronRight size={18} color="#999BA7" />
          <p className="text-[#23BA97]  font-bold text-sm">{t("help")}</p>
        </div>

        <HelpForm />
      </div>
    </section>
  );
};

export default Help;
