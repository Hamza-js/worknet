import { CompanyHeader } from "@/components/ui/companies/header";
import { CompanyCard } from "@/components/ui/companies/companyCard";

import { Separator } from "@/components/ui/separator";

export default function DashboardPage() {
  return (
    <div className="p-5 flex flex-col gap-4">
      <CompanyHeader />

      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
    </div>
  );
}
