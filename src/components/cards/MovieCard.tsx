import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/CineBadge";

interface MovieCardProps {
  image: string;
  title: string;
  category?: string;
  badge?: { label: string; variant?: "live" | "new" | "gold" | "default" };
  orientation?: "portrait" | "landscape";
  meta?: string;
}

export function MovieCard({ image, title, category, badge, orientation = "portrait", meta }: MovieCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-card cursor-pointer ${
        orientation === "portrait" ? "aspect-[2/3]" : "aspect-video"
      }`}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl" />

      {badge && (
        <div className="absolute top-3 left-3">
          <Badge variant={badge.variant}>{badge.label}</Badge>
        </div>
      )}

      <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-white/95 text-black scale-75 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
          <Play className="h-5 w-5 fill-black ml-0.5" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        {category && (
          <p className="text-[10px] uppercase tracking-[0.18em] text-gold/90 font-semibold mb-1.5">{category}</p>
        )}
        <h3 className="text-base md:text-lg font-bold leading-tight tracking-tight">{title}</h3>
        {meta && <p className="mt-1 text-xs text-muted-foreground">{meta}</p>}
      </div>
    </motion.article>
  );
}
