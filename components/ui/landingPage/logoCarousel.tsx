"use client";

import Image from "next/image";
import logo1 from "../../../public/assets/images/brandsLogos/1.png";
import logo2 from "../../../public/assets/images/brandsLogos/2.png";
import logo3 from "../../../public/assets/images/brandsLogos/3.png";
import logo4 from "../../../public/assets/images/brandsLogos/4.png";
import logo5 from "../../../public/assets/images/brandsLogos/5.png";
import logo6 from "../../../public/assets/images/brandsLogos/6.png";
import logo7 from "../../../public/assets/images/brandsLogos/7.png";
import logo8 from "../../../public/assets/images/brandsLogos/8.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

export default function LogoCarousel() {
  return (
    <div className="relative overflow-hidden py-8 bg-[#FAFDFF]">
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
        {[...logos, ...logos].map((logo, idx) => (
          <Image
            key={idx}
            src={logo}
            alt={`logo-${idx}`}
            width={120}
            height={60}
            className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
}
