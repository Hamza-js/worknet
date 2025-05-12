import { ResumesHeader } from "@/components/ui/resumes/header";
import { ResumesCard } from "@/components/ui/resumes/resumeCard";
import Image1 from "../../../../public/assets/images/temporaries/1.jpg";
import Image2 from "../../../../public/assets/images/temporaries/2.jpg";
import Image3 from "../../../../public/assets/images/temporaries/3.jpg";
import Image4 from "../../../../public/assets/images/temporaries/4.jpg";

export default function ResumesPage() {
  return (
    <div className="p-5 flex flex-col gap-4">
      <ResumesHeader />

      <ResumesCard avatar={Image1} />
      <ResumesCard avatar={Image2} />
      <ResumesCard avatar={Image3} />
      <ResumesCard avatar={Image4} />
    </div>
  );
}
