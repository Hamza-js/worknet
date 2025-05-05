import CompanyCard from "@/components/shared/CompanyCard";
import { Button } from "../button";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const companies = [
  {
    logo: "https://logo.clearbit.com/google.com",
    name: "Google",
    industry: "Information Technology Enterprise Software",
  },
  {
    logo: "https://logo.clearbit.com/apple.com",
    name: "Apple",
    industry: "Consumer Electronics Enterprise Software",
  },
  {
    logo: "https://logo.clearbit.com/microsoft.com",
    name: "Microsoft",
    industry:
      "Enterprise Software Enterprise Software Enterprise Software Enterprise Software Enterprise Software Enterprise Software",
  },
  {
    logo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    industry:
      "E-commerce Enterprise Software Enterprise Software Enterprise Software",
  },
  {
    logo: "https://logo.clearbit.com/netflix.com",
    name: "Netflix",
    industry: "Media & Entertainment",
  },
  {
    logo: "https://logo.clearbit.com/airbnb.com",
    name: "Airbnb",
    industry: "Hospitality & Travel",
  },
  {
    logo: "https://logo.clearbit.com/meta.com",
    name: "Meta",
    industry: "Social Media & Advertising",
  },
  {
    logo: "https://logo.clearbit.com/spotify.com",
    name: "Spotify",
    industry: "Music Streaming",
  },
];

export default async function CompanyGrid() {
  const t = await getTranslations("HomePage");

  return (
    <section className="py-10 md:py-22 px-1 md:px-10 w-full bg-gray-50 text-center">
      <div className=" mx-auto px-4 max-w-[1464px]">
        <h2 className=" font-montserrat font-extrabold text-[24px] leading-none text-center uppercase font-montserrat  md:text-[32px] md:leading-none md:text-center text-[#1C1B1B] mb-3 ">
          {t("companyGrid.title")}
        </h2>
        <p className="text-[#1C1B1B] mb-10 font-montserrat font-light text-sm leading-5 tracking-normal text-center font-montserrat md:font-light text-[16px] md:leading-[16px]">
          {t("companyGrid.description")}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center items-center">
          {companies.map((company, idx) => (
            <CompanyCard {...company} />
          ))}
        </div>

        <Link href="/employers">
          <Button variant="primary" size="medium" className="mt-18">
            {t("companyGrid.viewMore")}
          </Button>
        </Link>
      </div>
    </section>
  );
}
