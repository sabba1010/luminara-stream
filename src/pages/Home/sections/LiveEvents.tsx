import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/CineButton";
import { Badge } from "@/components/ui/CineBadge";
import { Calendar, MapPin, Ticket } from "lucide-react";
import concert from "@/assets/images/live-events/concert.jpg";
import featured from "@/assets/images/banners/featured.jpg";

const EVENTS = [
  { image: concert, title: "Light The Night Tour", date: "May 24", city: "Denver, CO", status: "live" as const, statusLabel: "On Sale" },
  { image: featured, title: "Faithforward Conference", date: "Jun 12", city: "Chicago, IL", status: "gold" as const, statusLabel: "Premiere" },
  { image: concert, title: "Worship Under Stars", date: "Jul 04", city: "Austin, TX", status: "new" as const, statusLabel: "New" },
];

export function LiveEvents() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionTitle eyebrow="Live Events" title="Be there in person." description="Cinematic live experiences crafted to gather, inspire, and move." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {EVENTS.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-card transition-all hover:border-white/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={e.image} alt={e.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 left-4"><Badge variant={e.status}>{e.statusLabel}</Badge></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{e.date}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{e.city}</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight">{e.title}</h3>
                <Button size="sm" variant="outline" className="mt-5">
                  <Ticket className="h-4 w-4" /> Get Tickets
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
