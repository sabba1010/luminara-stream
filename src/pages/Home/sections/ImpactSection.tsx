import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/CineButton";
import { Heart } from "lucide-react";
import impact from "@/assets/images/banners/impact.jpg";

export function ImpactSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              <span className="h-px w-8 bg-gold/60" /> Make an Impact
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Real stories. <br />
              <span className="text-gradient-gold italic font-serif">Eternal purpose.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-foreground/75 max-w-xl leading-relaxed">
              Your support helps us create films, podcasts, and live experiences that reach hearts across 100+ countries — and last beyond a single watch.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "1.2M+", l: "Lives reached" },
                { v: "200+", l: "Original titles" },
                { v: "100+", l: "Countries" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl md:text-3xl font-bold text-gradient-gold">{s.v}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-9 flex gap-3">
              <Button variant="gold"><Heart className="h-4 w-4 fill-black" /> Support the Mission</Button>
              <Button variant="ghost">Learn More</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10"
          >
            <img src={impact} alt="" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute -inset-px rounded-3xl ring-1 ring-inset ring-gold/20" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
