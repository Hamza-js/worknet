"use client";

import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const Policy = () => {
  const t = useTranslations("policyPage");
  const pathname = usePathname();

  const isActive = (path: string): boolean => {
    const normalizedPath = pathname.replace(/^\/[a-z]{2}\/?/, "/");
    return normalizedPath === path;
  };

  return (
    <section className="py-22 bg-gray-50 text-center px-2 md:px-10 lg:px-20 xl:px-32">
      <div className="mx-auto  px-4 md:mx-8 lg:mx-12 xl:mx-24">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1C1B1B] mb-3 ">
          {t("title")}
        </h2>
        <p className="text-[#1C1B1B] mb-3 text-sm">{t("description")}</p>
        <div className="flex w-full items-center text-center justify-center gap-3  p-0">
          <p className="text-[#999BA7]  text-sm">{t("HomePage")}</p>
          <ChevronRight size={18} color="#999BA7" />
          <p className="text-[#23BA97]  font-bold text-sm">{t("policyPage")}</p>
        </div>
      </div>

      <div className="flex  flex-col md:flex-row gap-6 py-20">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/3 space-y-2 max-w-[400px]">
          {/* Page selector */}
          <div className="bg-white rounded-3xl border">
            <details className="w-full">
              <summary className="flex w-full  items-center text-left justify-between cursor-pointer font-medium text-sm text-[#1C1B1B]">
                <div className=" w-full">
                  <div className="w-full">
                    <a
                      href="/help"
                      className={`block  w-full px-4 py-4 text-sm font-semibold border border-t-0 border-l-0 border-r-0 border-b-[#B8BDD8]  ${
                        isActive("/help") ? "text-[#23BA97]" : "text-black"
                      }`}
                    >
                      {t("help")}
                    </a>
                  </div>
                  <div>
                    <a
                      href="/policy"
                      className={`block px-4 py-4 text-sm font-semibold border border-t-0 border-l-0 border-r-0 border-b-[#B8BDD8] ${
                        isActive("/policy") ? "text-[#23BA97]" : "text-black"
                      }`}
                    >
                      {t("policy")}
                    </a>
                  </div>
                  <div>
                    <a
                      href="/publicOffer"
                      className={`block px-4 py-4 text-sm font-semibold border border-t-0 border-l-0 border-r-0 border-b-[#B8BDD8] ${
                        isActive("/publicOffer")
                          ? "text-[#23BA97]"
                          : "text-black"
                      }`}
                    >
                      {t("publicOffer")}
                    </a>
                  </div>
                  <div>
                    <a
                      href="/aboutPlatform"
                      className={`block px-4 py-4 text-sm font-semibold  ${
                        isActive("/aboutPlatform")
                          ? "text-[#23BA97]"
                          : "text-black"
                      }`}
                    >
                      {t("aboutPlatform")}
                    </a>
                  </div>
                </div>
              </summary>
            </details>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white rounded-3xl border text-left space-y-10 py-14 px-12">
          <div>
            <h2 className="font-[Montserrat arm] font-semibold text-base leading-6 tracking-normal mb-2">
              Գաղտնիության քաղաքականություն
            </h2>
            <span className="font-[Montserrat arm] text-base leading-6 tracking-normal">
              Սույն գաղտնիության քաղաքականությունում նկարագրված են Ձեր տվյալների
              գաղտնիության պաշտպանության նպատակով ձեռնարկվող միջոցառումները:
              Մենք կարող ենք փոփոխել մեր կայքի վրա պարունակվող տեղեկությունների
              բովանդակությունը կամ ծառայություները առանց Ձեզ նախապես ծանուցելու,
              որի հետևանքով գաղտնիության վերաբերյալ մեր քաղաքականությունն էլ
              կարող է համապատասխանաբար ապագայում փոփոխությունների ենթարկվել: Ձեր
              կողմից շարունակական մուտքը կայք կամ դրա օգտագործումը կհամարվի
              որպես Ձեր կողմից այդ փոփոխությունների ընդունում:
            </span>
          </div>

          <div>
            <h2 className="font-[Montserrat arm] font-semibold text-base leading-6 tracking-normal mb-2">
              Գաղտնիության սկզբունքներ{" "}
            </h2>
            <span className="font-[Montserrat arm] text-base leading-6 tracking-normal">
              Ձեր կողմից մեզ տրամադրվող բոլոր տվյալների գաղտնիությունն
              ապահովելու համար worknet.am-ը հետևում է գաղտնիության հետևյալ
              սկզբունքներին. worknet.am-ը հավաքագրում է Անհատ և Գործատու
              (այսուհետ՝ Օգտատեր) հանդիսացող հաճախորդների վերաբերյալ միայն այն
              տեղեկատվությունը, որն արտացոլվում է worknet.am հարթակում և
              անհրաժեշտ է աշխատանք/աշխատակից փնտրելու համար: worknet.am-ը
              օգտագործում է Օգտատիրոջ մասին տեղեկությունները` նրան մատուցվող
              ծառայությունների և սպասարկման որակը բարելավելու նպատակով,
              worknet.am-ը չի կարող տրամադրել Օգտատիրոջ վերաբերյալ
              տեղեկություններ որևէ երրորդ անձի, worknet.am-ը կարող է ժամանակ առ
              ժամանակ իր Օգտատերերին էլ-փոստի և այլ հաղորդակցման միջոցներով
              Օգտատիրոջ վերաբերյալ տվյալների թարմացման հարցում ուղարկել
              worknet.am-ն ունի անվտանգության համակարգեր, որոնց նպատակն է
              պաշտպանել Օգտատիրոջ վերաբերյալ տեղեկությունները կորստից,
              վնասումից, անթույլատրելի օգտագործումից ցանկացած երրորդ անձանց
              կողմից:
            </span>
          </div>

          <div>
            <h2 className="font-[Montserrat arm] font-semibold text-base leading-6 tracking-normal mb-2">
              Կայքի հանրամատչելի հատվածները{" "}
            </h2>
            <span className="font-[Montserrat arm] text-base leading-6 tracking-normal">
              Կայքի հանրամատչելի հատվածները օգտագործելիս Դուք պարտավոր չեք
              տրամադրել Ձեր վերաբերյալ որևէ անձնական տեղեկություններ և նման ձևով
              կայքից օգտվելու ժամանակ մենք չենք հսկում կամ հավաքագրում Ձեր անձը
              նույնացնող որևէ տեղեկություն: Մենք կարող ենք հետևել, թե որքան մարդ
              է օգտվում մեր կայքից, այդուհանդերձ Ջեր ինքնությունը նման
              գործողությունների հետևանքով չի բացահայտվի: Ինչպես նաև մենք կարող
              ենք գրանցել Ձեր համակարգչի/մոբայլ սարքի տեղակայվածությունը
              Ինտերնետում համակարգի կառավարման և առաջացած խնդիրների լուծման
              նպատակով և գրանցել ընդհանուր տեղեկությունները:
            </span>
          </div>

          <div>
            <h2 className="font-[Montserrat arm] font-semibold text-base leading-6 tracking-normal mb-2">
              Անձնական տեղեկություններ{" "}
            </h2>
            <span className="font-[Montserrat arm] text-base leading-6 tracking-normal">
              Մենք խիստ հետևում ենք անվտանգության մեր ընթացակարգերին`
              կանխարգելելու ոչ լիազորված անձանց, Ձեր անձնական տեղեկություններից
              օգտվելու հնարավորությունը: Այդ նպատակով մենք գործածում ենք այնպիսի
              առաջատար տեխնոլոգիաներ ինչպիսիք են տվյալների գաղտնագրումը,
              արգելապատնեշների կիրառումը և սերվերների նույնականացումը, սակայն
              չենք սահմանփակվում վերը թվարկված եղանակներով:
            </span>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Policy;
