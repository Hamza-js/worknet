import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import logo from "../../../public/assets/images/temp1.svg";
import { Hint } from "@/components/shared/hint";

export default function CompanyHeader() {
  return (
    <header className="bg-transparent h-[165px] md:h-[86px] flex items-center justify-center w-full">
      <div className="flex justify-between items-center flex-col md:flex-row w-full">
        {/* Left section with logo and company name */}
        <div className="flex items-center  space-x-3 cursor-pointer">
          <div className="flex items-center gap-3 md:gap-0 flex-col md:flex-row">
            <Image
              src={logo} // Dummy logo from the internet
              alt="Foodpark Logo"
              // width={80}
              // height={80}
              className="rounded-full h-[56px] w-[56px] md:h-[80px] md:w-[80px]"
            />
            <div className="ml-3 space-y-2 text-center md:text-left text-black">
              <h1 className="font-[Montserrat] font-medium text-[16px] md:text-[40px] leading-[100%] tracking-normal ">
                Foodpark by Downtown
              </h1>
              <p className="font-[Montserrat] font-normal text-[14px] md:text-[24px] leading-[100%] tracking-normal text-[#999BA7] ">
                Բիզնեսը
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Icons on the right */}
        <div className="flex items-center pr-1 mt-4 md:mt-0 space-x-4 text-[#999BA7]">
          <Hint label="Facebook" side="top">
            <Link href="https://facebook.com" passHref>
              <div className="w-[40px] h-[40px]  md:w-[56px] md:h-[56px] rounded-[12px] md:rounded-[16px] gap-[10px] flex items-center justify-center   border border-[#999BA7] cursor-pointer">
                <Facebook size={24} className="fill-[#999BA7] cursor-pointer" />
              </div>
            </Link>
          </Hint>
          <Hint label="Instagram" side="top">
            <Link href="https://instagram.com" passHref>
              <div className="w-[40px] h-[40px]  md:w-[56px] md:h-[56px] rounded-[12px] md:rounded-[16px] gap-[10px] flex items-center justify-center   border border-[#999BA7] cursor-pointer">
                <Instagram size={24} className="cursor-pointer" />
              </div>
            </Link>
          </Hint>
          <Hint label="Linkedin" side="top">
            <Link href="https://linkedin.com" passHref>
              <div className="w-[40px] h-[40px]  md:w-[56px] md:h-[56px] rounded-[12px] md:rounded-[16px] gap-[10px] flex items-center justify-center   border border-[#999BA7] cursor-pointer">
                <Linkedin size={24} className="fill-[#999BA7] cursor-pointer" />
              </div>
            </Link>
          </Hint>
        </div>
      </div>
    </header>
  );
}
