"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";
// ✅ Correct
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaBehance,
  FaTwitter,
  FaDribbble,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const socialPlatforms = [
  { key: "behance", label: "Behance", icon: FaBehance },
  { key: "facebook", label: "Facebook", icon: FaFacebook },
  { key: "instagram", label: "Instagram", icon: FaInstagram },
  { key: "dribbble", label: "Dribbble", icon: FaDribbble },
  { key: "twitter", label: "Twitter", icon: FaTwitter },
  { key: "github", label: "Github", icon: FaGithub },
  { key: "linkedin", label: "Linkedin", icon: FaLinkedin },
  { key: "youtube", label: "Youtube", icon: FaYoutube },
  { key: "pinterest", label: "Pinterest", icon: FaPinterest },
];

export function SocialLinksEditorCard() {
  const [open, setOpen] = useState(false);
  const [links, setLinks] = useState<Record<string, string>>({
    facebook: "facebook/aramnazaryan.com",
    linkedin: "facebook/aramnazaryan.com",
    github: "facebook/aramnazaryan.com",
    instagram: "facebook/aramnazaryan.com",
  });

  const handleChange = (key: string, value: string) => {
    setLinks((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="w-full space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="font-[Montserrat arm] font-semibold text-[20px]">
          Հղումներ
        </h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="shadow-lg h-10 w-10 rounded-lg flex items-center justify-center">
              <Pencil className="cursor-pointer" size={20} color="#999BA7" />
            </button>
          </DialogTrigger>
          <DialogContent className="!max-w-none !w-[961px] py-6 px-12 rounded-4xl">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl font-bold">
                Խմբագրել Հղումները
              </DialogTitle>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 ">
              {socialPlatforms.map(({ key, label, icon: Icon }) => (
                <div key={key} className="flex items-start  flex-col gap-3 ">
                  <div className="flex items-center gap-2 ">
                    <Icon size={24} />
                    <span className="w-[90px] font-semibold">{label}</span>
                  </div>
                  <Input
                    value={links[key] || ""}
                    onChange={(e) => handleChange(key, e.target.value)}
                    placeholder={`https://${key}.com/...`}
                    className=" h-16"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <Button
                onClick={() => setOpen(false)}
                variant="primary"
                size="medium"
              >
                Պահպանել
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <hr />

      <div className="flex flex-wrap gap-4 mt-3">
        {Object.entries(links).map(([key, value]) => {
          const platform = socialPlatforms.find((p) => p.key === key);
          if (!platform || !value) return null;
          const Icon = platform.icon;
          return (
            <a
              key={key}
              href={`https://${value}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border rounded-[16px] hover:bg-gray-100 transition h-14 w-14 flex items-center justify-center"
            >
              <Icon size={24} color="black" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
