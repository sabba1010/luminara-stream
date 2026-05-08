import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Video, Headphones, Radio, Film, Mic2, BookOpen, Tv, Users } from "lucide-react";

const HUB = [
  { icon: Video, label: "Videos", desc: "On-demand cinematic library" },
  { icon: Headphones, label: "Podcasts", desc: "Conversations that matter" },
  { icon: Radio, label: "Live Events", desc: "Tour & broadcast schedule" },
  { icon: Film, label: "Films", desc: "Originals & festival picks" },
  { icon: Mic2, label: "Radio", desc: "24/7 streaming" },
  { icon: BookOpen, label: "Resources", desc: "Studies & devotionals" },
  { icon: Tv, label: "Series", desc: "Episodic storytelling" },
  { icon: Users, label: "Community", desc: "Connect & grow" },
];

export function MediaHub() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Media Hub"
          title="One ecosystem. Every kind of story."
          description="A premium platform unifying everything we make — built for the way you live, watch, and listen."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {HUB.map((item, i) => (
            <motion.a
              key={item.label}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur-sm p-6 md:p-8 hover:border-primary/40 hover:bg-card transition-all"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                  <item.icon className="h-5 w-5 text-foreground group-hover:text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight">{item.label}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
