import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/CineButton";
import { Badge } from "@/components/ui/CineBadge";
import { Play, ArrowRight, Film, Headphones, Radio } from "lucide-react";
import heroImg from "@/assets/images/hero/hero-main.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex items-end pt-32 pb-20">
      <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.07 0.015 270 / 0.4) 0%, oklch(0.07 0.015 270 / 0.55) 45%, oklch(0.06 0.015 270) 100%)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,color-mix(in_oklab,var(--primary)_30%,transparent),transparent_60%)]" />

      <Container className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="gold">New Series</Badge>
            <span className="text-xs text-muted-foreground tracking-wide uppercase">Streaming Now</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold leading-[0.95] tracking-tight">
            <span className="text-gradient-primary">Stories that</span>
            <br />
            <span className="text-foreground">move faith</span>{" "}
            <span className="text-gradient-gold italic font-serif">forward.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base md:text-lg text-foreground/75 leading-relaxed">
            Watch. Listen. Learn. Live. A premium ecosystem of cinematic films, podcasts, and live experiences crafted for the soul.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button size="lg" variant="gold">
              <Play className="h-4 w-4 fill-black" />
              Watch Now
            </Button>
            <Button size="lg" variant="glass">
              Explore More
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-24 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl"
        >
          {[
            { icon: Film, label: "200+ Films", sub: "Cinematic library" },
            { icon: Headphones, label: "1.2M Listeners", sub: "Weekly podcasts" },
            { icon: Radio, label: "100+ Countries", sub: "Live broadcasts" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl border border-white/10 p-4 sm:p-5">
              <s.icon className="h-5 w-5 text-gold mb-3" />
              <div className="text-base sm:text-lg font-bold leading-tight">{s.label}</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">{s.sub}</div>
            </div>
          ))}
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll to explore
      </motion.div>
    </section>
  );
}
