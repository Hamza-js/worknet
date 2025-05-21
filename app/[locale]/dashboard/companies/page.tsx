import { AnnouncementsHeader } from "@/components/ui/announcements/header";
import { CompanyCard } from "@/components/ui/companies/companyCard";
import { CompanyHeader } from "@/components/ui/companies/header";
import { NoCompanyCard } from "@/components/ui/companies/noCompanyCard";
import { CompanyForm } from "@/components/ui/companies/companyForm";

export default function CompaniesPage() {
  return (
    <div className="p-5 flex flex-col gap-4">
      <CompanyHeader />

      <NoCompanyCard />

      <CompanyForm />

      <CompanyCard />
      <CompanyCard />
    </div>
  );
}
