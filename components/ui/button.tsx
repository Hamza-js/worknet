import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-center  transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-white pointer",
        primary:
          "bg-[linear-gradient(90deg,#02AAB0_0%,#00CDAC_100%)] text-white rounded-[12px] font-[Montserrat arm]",
        secondary:
          "bg-transparent text-[#293B44] border rounded-[12px] font-[Montserrat arm] font-medium  leading-[16px]",
        outline:
          "border bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        small: "min-w-[100px] h-[40px] text-[12px]",
        medium: "min-w-[150px] h-[50px] text-[12px]",
        large: "min-w-[180px] h-[50px] text-[13px]",
        default: "h-9 px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
