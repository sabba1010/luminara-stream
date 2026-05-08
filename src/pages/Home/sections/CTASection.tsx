import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/CineButton";
import { Play, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--primary)_30%,transparent),transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
      </div>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold mb-6">Begin your journey</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            Watch a story <br />
            <span className="text-gradient-gold italic font-serif">worth telling.</span>
          </h2>
          <p className="mt-7 text-base md:text-lg text-foreground/75 max-w-xl mx-auto">
            Start streaming. Join the gathering. Become part of the story moving faith forward.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button size="lg" variant="gold"><Play className="h-4 w-4 fill-black" /> Start Watching</Button>
            <Button size="lg" variant="glass">Join the Mission <ArrowRight className="h-4 w-4" /></Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
