import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "live" | "new" | "gold";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-white/10 text-foreground border-white/15",
    live: "bg-destructive/90 text-destructive-foreground border-destructive/50",
    new: "bg-primary/90 text-primary-foreground border-primary/50",
    gold: "bg-gold/90 text-black border-gold/50",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border backdrop-blur-md",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
