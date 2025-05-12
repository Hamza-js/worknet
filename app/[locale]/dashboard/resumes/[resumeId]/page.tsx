import { ResumesHeader } from "@/components/ui/resumes/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Mail,
  Phone,
  MapPin,
  Link,
  CheckCircle,
  Download,
  Edit,
  X,
  CloudUpload,
} from "lucide-react";
import Image from "next/image";
import Image1 from "../../../../../public/assets/images/temporaries/1.jpg";
import { PercentageCard } from "@/components/ui/personalInfo/percentageCard";
import { ContactInfoCard } from "@/components/ui/personalInfo/contactInfoCard";
import { SkillEditorCard } from "@/components/ui/personalInfo/skillCard";
import { LanguageProficiencyCard } from "@/components/ui/personalInfo/languages";

export default function ResumesPage() {
  return (
    <div className="p-5 flex flex-col gap-4">
      <ResumesHeader />

      <div className="flex flex-col bg-white rounded-[30px] border border-[#EAEAEA] px-[24px] py-[16px] gap-[20px] h-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-5 border border-t-0 border-l-0 border-r-0 border-b-[#999BA7] pb-5">
          <div className="relative w-[180px] h-[180px] rounded-[10px] overflow-hidden">
            <Image src={Image1} alt="" />
            <button
              type="button"
              // onClick={clearImage}
              className="absolute cursor-pointer top-1 right-1  p-1 shadow"
            >
              <X size={14} color="white" />
            </button>
            <button
              type="button"
              className="absolute bottom-1 right-3 cursor-pointer p-2 rounded-full bg-white/30 backdrop-blur-sm shadow"
            >
              <CloudUpload size={20} color="white" />
            </button>
          </div>
          <div className="text-center flex flex-col gap-4">
            <h1 className="font-[Montserrat arm] font-medium text-[32px] leading-[16px] tracking-[0%] text-center">
              David Aminoff
            </h1>
            <p className="text-gray-500 font-[Montserrat arm] font-normal text-[20px] leading-[16px] tracking-[0%] text-center">
              Web Developer
            </p>
          </div>
        </div>

        {/* Main Card */}
        <Card className="p-4 border-0">
          <CardContent className="flex flex-col md:flex-row gap-6">
            {/* Left Section */}
            <div className="md:w-[385px] space-y-8">
              <PercentageCard
                percentage={75}
                title="Արդյունավետություն"
                subtitle="առաջարկներ (3)"
              />

              <ContactInfoCard />

              <SkillEditorCard />

              <LanguageProficiencyCard />
              <div className="flex flex-wrap gap-1">
                {["Հայերեն", "Ռուսերեն", "Անգլերեն"].map((lang) => (
                  <Badge variant="secondary" key={lang}>
                    {lang}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3">
                {["fb", "linkedin", "github"].map((net) => (
                  <Button
                    key={net}
                    // size="icon"
                    variant="outline"
                  >
                    <Link size={16} />
                  </Button>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-2/3 space-y-6">
              <div>
                <h2 className="font-semibold mb-1">Ինձ մասին</h2>
                <p className="text-sm text-muted-foreground">
                  Ես աշխատում եմ որպես վեբ ծրագրավորող՝ փորձով առցանց հարթակների
                  և բիզնես լուծումների ստեղծման գործում։ Ես նաև հետաքրքրված եմ
                  UX դիզայնով և օգտվողի փորձի օպտիմալացմամբ։
                </p>
              </div>
              <div>
                <h2 className="font-semibold mb-1">Կրթություն</h2>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Երևանի Պետական Համալսարան | 2016 – 2018</li>
                  <li>Հայաստանի Պոլիտեխնիկական Ինստիտուտ | 2012 – 2016</li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-1">Աշխատանքային Փորձ</h2>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>
                    ABC Technology | 2022 - Մինչ օրս – Senior Web Developer
                  </li>
                  <li>GT Systems | 2017 – 2021 – Web Developer</li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-1">Վկայագրեր</h2>
                <ul className="text-sm text-muted-foreground">
                  <li>Google Certificate – Google Analytics Certificate</li>
                </ul>
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" className="gap-1">
                  <Edit size={16} /> Խմբագրել
                </Button>
                <Button className="gap-1">
                  <Download size={16} /> Ներբեռնել PDF
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
