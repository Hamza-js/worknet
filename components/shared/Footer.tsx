import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Logo from "../../public/assets/images/worknet-logo.png";

export default async function Footer() {
  const t = await getTranslations("HomePage");

  return (
    <footer className="bg--[FAFAFA] border-t border-[#999BA7]  py-10 px-4 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 text-sm text-[#000000]">
        {/* Logo + Description */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="Worknet Logo" width={100} height={100} />
          </div>
          <p>{t("footer.about.description")}</p>
          <p className="text-xs text-gray-500">{t("footer.about.copyright")}</p>
        </div>

        {/* Section Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-3xl">
          {["jobs", "other", "social"].map((sectionKey) => {
            const section = t.raw(`footer.sections.${sectionKey}`);
            return (
              <div key={sectionKey}>
                <h4 className="font-semibold mb-3">{section.title}</h4>
                <ul className="space-y-2">
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
