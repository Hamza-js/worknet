"use client";

import Image from "next/image";
import logo1 from "../../../public/assets/images/brandsLogos/1.svg";
import logo2 from "../../../public/assets/images/brandsLogos/2.svg";
import logo3 from "../../../public/assets/images/brandsLogos/3.svg";
import logo4 from "../../../public/assets/images/brandsLogos/4.svg";
import logo5 from "../../../public/assets/images/brandsLogos/5.svg";
import logo6 from "../../../public/assets/images/brandsLogos/6.svg";
import logo7 from "../../../public/assets/images/brandsLogos/7.svg";
import logo8 from "../../../public/assets/images/brandsLogos/8.svg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

export default function LogoCarousel() {
  return (
    <div className="relative overflow-hidden py-8 bg-[#FFFFFF]">
      {/* Inline keyframes + animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>

      <div className="flex w-max gap-18 scroll">
        {[...logos, ...logos, ...logos].map((logo, idx) => (
          <Image
            key={idx}
            src={logo}
            alt={`logo-${idx}`}
            className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
}
