import { InforHeaderHeader } from "@/components/ui/personalInfo/header";
import { PersonalInfoForm } from "@/components/ui/personalInfo/info-form";

const PersonaInfoPage = () => {
  return (
    <div className="p-5 flex flex-col gap-4">
      <InforHeaderHeader />

      <div className="w-full h-[982px] md:h-[640px] gap-5 rounded-[30px] px-6 py-4 bg-white border border-[#EAEAEA]">
        <PersonalInfoForm />
      </div>
    </div>
  );
};

export default PersonaInfoPage;
