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
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar isLoggedIn={false} />
      </div>

      {/* Adjust padding-top to match the height of your navbar */}
      <div className="pt-20">
        <HeroSection />

        <LogoCarousel />

        <CompanyGrid />

        <JobGrid />

        <Footer />
      </div>
    </div>
  );
}
