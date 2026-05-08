import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/CineButton";
import { Badge } from "@/components/ui/CineBadge";
import { Play, Plus } from "lucide-react";
import banner from "@/assets/images/banners/featured.jpg";

export function FeaturedBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="py-12 md:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 aspect-[16/10] md:aspect-[21/9]">
          <motion.img src={banner} alt="" loading="lazy" style={{ y }} className="absolute inset-0 h-[120%] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="relative h-full flex items-center">
            <div className="px-6 sm:px-12 md:px-16 max-w-2xl">
              <Badge variant="gold" className="mb-4">Limited Series</Badge>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight"
              >
                The Light <span className="text-gradient-gold italic font-serif">we carry.</span>
              </motion.h3>
              <p className="mt-4 text-sm md:text-base text-foreground/80 max-w-md leading-relaxed">
                A six-part cinematic journey across continents, voices, and the quiet courage of those who keep the flame.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button variant="gold"><Play className="h-4 w-4 fill-black" /> Watch Trailer</Button>
                <Button variant="glass"><Plus className="h-4 w-4" /> My List</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
