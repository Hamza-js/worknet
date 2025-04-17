import { useState } from "react";
import {
  BookmarkMinus,
  ChevronLeft,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import bgImage from "../../../public/assets/images/digitain.png";

export default function Header() {
  return (
    <header className=" py-3 relative h-36 rounded-2xl overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      ></div>

      <div className=" flex justify-between items-center px-3 relative z-10">
        <span className="bg-white p-2 cursor-pointer text-sm rounded-md ">
          <ChevronLeft size={18} />
        </span>

        <span className="bg-white flex space-x-1 items-center p-2 cursor-pointer text-sm rounded-md ">
          <BookmarkMinus size={18} color="#999BA7" />
          <span>Պահել</span>
        </span>
      </div>
    </header>
  );
}
