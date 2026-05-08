import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionTitleProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
}

export function SectionTitle({ eyebrow, title, description, align = "left", action, className }: SectionTitleProps) {
  return (
    <div className={cn("flex flex-col gap-4 mb-10 md:mb-14 sm:flex-row sm:items-end sm:justify-between", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}
      >
        {eyebrow && (
          <div className="inline-flex items-center gap-2 mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold/90">
            <span className="h-px w-8 bg-gold/60" />
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-gradient-primary">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">{description}</p>
        )}
      </motion.div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
