import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function GlowCard({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-[0_30px_80px_-20px_var(--primary)]",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), color-mix(in oklab, var(--primary) 25%, transparent), transparent 50%)" }}
      />
      {children}
    </div>
  );
}
