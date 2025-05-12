import HelpForm from "@/components/ui/help/helpForm";
import { ChevronRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

const Help = async () => {
  const t = await getTranslations("HelpPage");

  return (
    <section className="py-10 md:py-22 px-1 md:px-12 w-full bg-gray-50 text-center">
      <div className=" mx-auto px-4 max-w-[1750px]">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1C1B1B] mb-3">
          {t("title")}
        </h2>
        <p className="text-[#1C1B1B] mb-3 font-montserrat md:text-base md:leading-4 tracking-normal font-montserrat font-light text-xs leading-5 text-center">
          {t("description")}
        </p>

        <div className="flex w-full items-center text-center justify-center gap-3  p-0">
          <p className="text-[#999BA7] font-montserrat font-normal text-base leading-none tracking-normal capitalize">
            {t("HomePage")}
          </p>
          <ChevronRight size={24} color="#999BA7" />
          <p className="text-[#23BA97]  font-montserrat font-semibold text-base leading-none tracking-normal capitalize">
            {t("help")}
          </p>
        </div>

        <HelpForm />
      </div>
    </section>
  );
};

export default Help;
