import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import logo from "../../../public/assets/images/temp1.svg";
import { useTooltip } from "@/components/hooks/useTooltip";

export default function CompanyHeader() {
  const fbTooltip = useTooltip({
    content: "Facebook",
    children: <Facebook size={14} className="fill-[#999BA7] cursor-pointer" />,
  });

  const igTooltip = useTooltip({
    content: "Instagram",
    children: <Instagram size={14} className="cursor-pointer" />,
  });

  const liTooltip = useTooltip({
    content: "Linkedin",
    children: <Linkedin size={14} className="fill-[#999BA7] cursor-pointer" />,
  });
  return (
    <header className="bg-transparent pt-2">
      <div className="flex justify-between items-center ">
        {/* Left section with logo and company name */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="flex items-center">
            <Image
              src={logo} // Dummy logo from the internet
              alt="Foodpark Logo"
              width={50} // Adjust the size of the logo
              height={50} // Adjust the size of the logo
              className="rounded-full"
            />
            <div className="ml-3 text-left text-black">
              <h1 className="font-montserrat font-bold text-[20px] ">
                Foodpark by Downtown
              </h1>
              <p className="text-sm text-[#999BA7]">Բիզնեսը</p>
            </div>
          </div>
        </div>

        {/* Social Media Icons on the right */}
        <div className="flex items-center pr-1 space-x-4 text-[#999BA7]">
          <Link href="https://facebook.com" passHref>
            <div className="  border border-[#999BA7] rounded-lg p-2.5 py-2 cursor-pointer">
              {fbTooltip}
            </div>
          </Link>

          <Link href="https://instagram.com" passHref>
            <div className=" border border-[#999BA7] rounded-lg p-2.5 py-2 cursor-pointer">
              {igTooltip}{" "}
            </div>
          </Link>

          <Link href="https://linkedin.com" passHref>
            <div className=" border border-[#999BA7] rounded-lg p-2.5 py-2 cursor-pointer">
              {liTooltip}{" "}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
