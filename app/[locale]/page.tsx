// import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/ui/landingPage/heroSection";
import LogoCarousel from "@/components/ui/landingPage/logoCarousel";
import CompanyGrid from "@/components/ui/landingPage/companyGrid";
import JobGrid from "@/components/ui/landingPage/jobGrid";
import Footer from "@/components/shared/Footer";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  return (
    <div className="">
      <HeroSection />

      <LogoCarousel />

      <CompanyGrid />

      <JobGrid />
    </div>
  );
}
