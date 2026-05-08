import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold tracking-tight rounded-full transition-all duration-300 will-change-transform active:scale-[0.97] disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_10px_40px_-10px_var(--primary)] hover:shadow-[0_15px_50px_-10px_var(--primary)] hover:-translate-y-0.5",
        gold:
          "bg-[image:var(--gradient-gold)] text-black hover:brightness-110 shadow-[0_10px_40px_-10px_var(--gold)] hover:-translate-y-0.5",
        glass:
          "glass border border-white/10 text-foreground hover:bg-white/10 hover:border-white/20",
        ghost: "text-foreground/80 hover:text-foreground hover:bg-white/5",
        outline: "border border-white/15 text-foreground hover:bg-white/5",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
);
Button.displayName = "Button";
