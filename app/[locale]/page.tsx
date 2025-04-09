// import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import Navbar from "@/components/layout/navbar";

export default async function HomePage() {
  // const t = useTranslations("HomePage");
  const t = await getTranslations("HomePage");

  return (
    <div className="">
      <Navbar isLoggedIn={false} />
    </div>
  );
}
