"use client";

import { BookmarkMinus, ChevronLeft } from "lucide-react";
import bgImage from "../../../public/assets/images/digitain.png";
import { useRouter } from "next/navigation";
import { useTooltip } from "@/components/hooks/useTooltip"; // Import the useTooltip hook

export default function Header() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const backTooltip = useTooltip({
    content: "Go Back",
    children: <ChevronLeft size={18} className="cursor-pointer" />,
  });

  return (
    <header className="bg-white py-3 relative h-36 rounded-2xl overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      ></div>

      <div className="flex justify-between items-center px-3 relative z-10">
        {/* Back Button with Tooltip */}
        <span
          onClick={handleGoBack}
          className="bg-white p-2 cursor-pointer text-sm rounded-md"
        >
          {backTooltip} {/* Render Tooltip here with "Go Back" text */}
        </span>

        {/* Save Button */}
        <span className="bg-white flex space-x-1 items-center p-2 cursor-pointer text-sm rounded-md">
          <BookmarkMinus size={18} color="#999BA7" />
          <span>Պահել</span>
        </span>
      </div>
    </header>
  );
}
