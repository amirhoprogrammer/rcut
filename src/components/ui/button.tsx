import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { Slot } from "radix-ui";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-brand text-white hover:bg-brand/90", // دکمه «استعلام قیمت»
        neutral:
          "border border-border bg-background text-foreground hover:bg-brand",
        outline:
          "border border-brand text-brand font-semibold bg-transparent hover:bg-brand hover:text-white", // «مشاهده همه محصولات»
        dark: "bg-primary text-white hover:bg-primary-hover",
        light: "bg-white text-foreground hover:bg-secondary", // روی عکس تیره
        ghost: "hover:bg-secondary text-foreground",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        full: "h-11 w-full", // دکمه تمام‌عرض داخل کارت
        icon: "size-11", // فلش‌های اسلایدر
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
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
