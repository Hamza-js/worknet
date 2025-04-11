import SigninForm from "@/components/ui/auth/SigninForm";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: "Login" });
  return {
    title: t("title"),
  };
}

export default function SignInPage() {
  return <SigninForm />;
}
