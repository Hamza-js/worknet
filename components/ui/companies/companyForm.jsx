import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CompanyForm() {
  return (
    <div className="w-full bg-white flex flex-col items-center justify-center gap-[20px] px-[24px] py-[16px] rounded-[30px] border border-[#999BA7]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  w-full">
        <div>
          <label className="block mb-1 font-montserratArm font-semibold text-[16px] leading-[16px] tracking-[0%]">
            Կազմակերպության անվանում{" "}
          </label>
          <Input
            placeholder="օրինակ՝ CC Agency LLC"
            className="h-[64px] p-6 gap-[10px] rounded-[16px] border font-montserratArm font-normal text-[16px] leading-[16px] tracking-[0%]"
          />
        </div>
        <div>
          <label className="block mb-1 font-montserratArm font-semibold text-[16px] leading-[16px] tracking-[0%]">
            Ոլորտ
          </label>
          <Select>
            <SelectTrigger className="h-[64px] p-6 gap-[10px] rounded-[16px] border font-montserratArm font-normal text-[16px] leading-[16px] tracking-[0%]">
              <SelectValue placeholder="Ընտրել ոլորտը" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="it">IT</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block mb-1 font-montserratArm font-semibold text-[16px] leading-[16px] tracking-[0%]">
            Քաղաք
          </label>
          <Input
            placeholder="Օրինակ՝ $S"
            className="h-[64px] p-6 gap-[10px] rounded-[16px] border font-montserratArm font-normal text-[16px] leading-[16px] tracking-[0%]"
          />
        </div>
        <div>
          <label className="block mb-1 font-montserratArm font-semibold text-[16px] leading-[16px] tracking-[0%]">
            Աշխատակիցների քանակ
          </label>
          <Select>
            <SelectTrigger className="h-[64px] p-6 gap-[10px] rounded-[16px] border font-montserratArm font-normal text-[16px] leading-[16px] tracking-[0%]">
              <SelectValue placeholder="Ընտրել աշխատակիցների քանակը" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1-10</SelectItem>
              <SelectItem value="11-50">11-50</SelectItem>
              <SelectItem value="50+">50+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block mb-1 font-montserratArm font-semibold text-[16px] leading-[16px] tracking-[0%]">
            Էլ․ հասցե
          </label>
          <Input
            placeholder="Օրինակ՝ name@example.com"
            className="h-[64px] p-6 gap-[10px] rounded-[16px] border font-montserratArm font-normal text-[16px] leading-[16px] tracking-[0%]"
          />
        </div>
        <div>
          <label className="block mb-1 font-montserratArm font-semibold text-[16px] leading-[16px] tracking-[0%]">
            Կոնտակտ անձ
          </label>
          <Input
            placeholder="Օրինակ՝ Էմմա"
            className="h-[64px] p-6 gap-[10px] rounded-[16px] border font-montserratArm font-normal text-[16px] leading-[16px] tracking-[0%]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <div>
          <label className="block mb-1 font-montserratArm font-semibold text-[16px] leading-[16px] tracking-[0%]">
            Facebook էջ (ըստ ցանկության)
          </label>
          <Input
            placeholder="Օրինակ՝ https://facebook.com/..."
            className="h-[64px] p-6 gap-[10px] rounded-[16px] border font-montserratArm font-normal text-[16px] leading-[16px] tracking-[0%]"
          />
        </div>
        <div>
          <label className="block mb-1 font-montserratArm font-semibold text-[16px] leading-[16px] tracking-[0%]">
            Instagram էջ (ըստ ցանկության)
          </label>
          <Input
            placeholder="Օրինակ՝ https://instagram.com/..."
            className="h-[64px] p-6 gap-[10px] rounded-[16px] border font-montserratArm font-normal text-[16px] leading-[16px] tracking-[0%]"
          />
        </div>
        <div>
          <label className="block mb-1 font-montserratArm font-semibold text-[16px] leading-[16px] tracking-[0%]">
            LinkedIn էջ (ըստ ցանկության)
          </label>
          <Input
            placeholder="Օրինակ՝ https://linkedin.com/..."
            className="h-[64px] p-6 gap-[10px] rounded-[16px] border font-montserratArm font-normal text-[16px] leading-[16px] tracking-[0%]"
          />
        </div>
      </div>

      <div className=" w-full">
        <label className="block mb-1 font-montserratArm font-semibold text-[16px] leading-[16px] tracking-[0%]">
          Կազմակերպության նկարագրություն
        </label>
        <Textarea
          placeholder="Մուտքագրեք նկարագրություն"
          className="h-[270px] p-6 gap-[10px] rounded-[16px] border border-black font-montserratArm font-normal text-[16px] leading-[16px] tracking-[0%]"
        />
      </div>

      <div className="flex justify-center">
        <Button
          variant="primary"
          size="large"
          className="w-[346px] h-[56px] font-montserratArm font-medium text-[16px] leading-[16px] tracking-[0%] text-center"
        >
          + Տեղադրել կազմակերպություն
        </Button>
      </div>
    </div>
  );
}
