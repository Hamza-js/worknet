import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/shared/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} className={montserrat.className}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="fixed top-0 left-0 w-full z-50">
            <Navbar isLoggedIn={false} />
          </div>
          <div className="pt-20"> {children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
