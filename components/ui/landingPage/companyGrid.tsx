import CompanyCard from "@/components/shared/CompanyCard";
import { Button } from "../button";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const companies = [
  {
    logo: "https://logo.clearbit.com/google.com",
    name: "Google",
    industry: "Information Technology",
  },
  {
    logo: "https://logo.clearbit.com/apple.com",
    name: "Apple",
    industry: "Consumer Electronics",
  },
  {
    logo: "https://logo.clearbit.com/microsoft.com",
    name: "Microsoft",
    industry: "Enterprise Software",
  },
  {
    logo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    industry: "E-commerce",
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
    <section className="py-14 md:py-22 bg-gray-50 text-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-montserrat font-extrabold text-2xl leading-[100%] tracking-normal text-center uppercase text-[#1C1B1B] mb-3">
          {t("companyGrid.title")}
        </h2>
        <p className="text-[#1C1B1B] mb-10 font-montserrat font-light text-sm leading-5 tracking-normal text-center">
          {t("companyGrid.description")}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {companies.map((company, idx) => (
            <CompanyCard key={idx} {...company} />
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
