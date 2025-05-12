import { AnnouncementsHeader } from "@/components/ui/announcements/header";
import { CompanyCard } from "@/components/ui/companies/companyCard";

export default function CompaniesPage() {
  return (
    <div className="p-5 flex flex-col gap-4">
      <AnnouncementsHeader />

      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
    </div>
  );
}
