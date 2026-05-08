import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/CineButton";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 glass px-6 py-14 md:px-16 md:py-20 text-center"
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative max-w-2xl mx-auto">
            <Mail className="mx-auto h-7 w-7 text-gold mb-5" />
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Never miss a <span className="text-gradient-gold italic font-serif">moment.</span>
            </h3>
            <p className="mt-4 text-base text-muted-foreground">
              Premieres, podcasts, live events, and behind-the-scenes — sent gently to your inbox.
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 h-12 px-5 rounded-full bg-white/5 border border-white/10 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <Button type="submit" variant="gold" size="md">Subscribe</Button>
            </form>
            <p className="mt-4 text-[11px] text-muted-foreground">No spam. Unsubscribe anytime.</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
