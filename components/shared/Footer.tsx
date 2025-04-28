import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Logo from "../../public/assets/images/worknet-logo.svg";

export default async function Footer() {
  const t = await getTranslations("HomePage");

  return (
    <footer className=" bg-[FAFAFA] border-t border-[#999BA7] py-16 px-4 md:h-[320px] md:pt-[40px] md:pr-[80px] md:pb-[40px] md:pl-[80px] flex justify-center ">
      <div className="flex flex-col md:flex-row gap-8 text-[#000000] w-full max-w-[1900px] justify-center">
        {/* Logo + Description */}
        <div className="flex flex-col gap-3 md:w-[450px]">
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="Worknet Logo" width={160} height={34} />
          </div>
          <p className="font-montserrat font-normal text-[16px] leading-[25px]">
            {t("footer.about.description")}
          </p>
          <p className="font-montserrat font-normal text-[16px] leading-[16px]">
            {t("footer.about.copyright")}
          </p>
        </div>

        {/* Section Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1000px]">
          {["jobs", "other", "social"].map((sectionKey) => {
            const section = t.raw(`footer.sections.${sectionKey}`);
            return (
              <div key={sectionKey}>
                <h4 className="font-montserrat font-semibold text-[16px] leading-[16px] mb-3">
                  {section.title}
                </h4>
                <ul className="space-y-2 font-montserrat font-normal text-[16px] leading-[16px]">
                  {section.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
