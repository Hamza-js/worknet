import DashboardSidebar from "@/components/layout/dashboard-sidebar";
import { ReactNode } from "react";
// import Header from "@/components/header";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      <DashboardSidebar />
      {/* <DashboardSidebar /> */}
      <div className="flex flex-col flex-1">
        {/* <Header /> */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
