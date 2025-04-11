import RegistrationForm from "@/components/ui/auth/RegistrationForm";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: "Login" });
  return {
    title: t("title"),
  };
}

export default function SignUpPage() {
  return <RegistrationForm />;
}
