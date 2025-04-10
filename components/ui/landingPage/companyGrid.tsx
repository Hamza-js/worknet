import CompanyCard from "@/components/shared/CompanyCard";
import { Button } from "../button";
import { getTranslations } from "next-intl/server";

const companies = [
  {
    logo: "/assets/images/brandsLogos/1.png",
    name: "Վերլուծիր Եկամ",
    industry: "Տեղեկատվական տեխնոլոգիաներ",
  },
  {
    logo: "/assets/images/brandsLogos/2.png",
    name: "DIGIFOOD",
    industry: "Երաշխավորված սննդամթերք",
  },
  {
    logo: "/assets/images/brandsLogos/3.png",
    name: "Media Live",
    industry: "TV/Մեդիա/Դիզայն",
  },
  {
    logo: "/assets/images/brandsLogos/1.png",
    name: "Վերլուծիր Եկամ",
    industry: "Տեղեկատվական տեխնոլոգիաներ",
  },
  {
    logo: "/assets/images/brandsLogos/2.png",
    name: "DIGIFOOD",
    industry: "Երաշխավորված սննդամթերք",
  },
  {
    logo: "/assets/images/brandsLogos/3.png",
    name: "Media Live",
    industry: "TV/Մեդիա/Դիզայն",
  },
  {
    logo: "/assets/images/brandsLogos/1.png",
    name: "Վերլուծիր Եկամ",
    industry: "Տեղեկատվական տեխնոլոգիաներ",
  },
  {
    logo: "/assets/images/brandsLogos/2.png",
    name: "DIGIFOOD",
    industry: "Երաշխավորված սննդամթերք",
  },
];

export default async function CompanyGrid() {
  const t = await getTranslations("HomePage");

  return (
    <section className="py-22 bg-gray-50 text-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1C1B1B] mb-3">
          {t("companyGrid.title")}
        </h2>
        <p className="text-[#1C1B1B] mb-10 text-sm">
          {t("companyGrid.description")}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {companies.map((company, idx) => (
            <CompanyCard key={idx} {...company} />
          ))}
        </div>

        <Button variant="primary" size="medium" className="mt-18">
          {t("companyGrid.viewMore")}
        </Button>
      </div>
    </section>
  );
}
