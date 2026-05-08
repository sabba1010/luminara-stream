import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Play } from "lucide-react";
import studio from "@/assets/images/podcasts/studio.jpg";
import faithJourney from "@/assets/images/movies/faith-journey.jpg";

const PODS = [
  { image: studio, title: "The Faith Journey", host: "Daniel Cole", duration: "48 min", episode: "Ep. 124" },
  { image: faithJourney, title: "Stories of Wonder", host: "Mara Vance", duration: "1h 02m", episode: "Ep. 47" },
  { image: studio, title: "Quiet Mornings", host: "Ezra Holt", duration: "22 min", episode: "Ep. 88" },
  { image: faithJourney, title: "The Long Road", host: "Lia Reyes", duration: "55 min", episode: "Ep. 31" },
];

export function Podcasts() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionTitle eyebrow="Podcasts" title="Listen in. Lean closer." description="Premium conversations, interviews, and reflections — produced with cinematic depth." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PODS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/10 bg-card/70 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-colors"
            >
              <div className="relative aspect-square overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <button className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-gold text-black shadow-gold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all" aria-label="Play">
                  <Play className="h-4 w-4 fill-black ml-0.5" />
                </button>
              </div>
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">{p.episode}</p>
                <h3 className="mt-1.5 text-lg font-bold tracking-tight leading-tight">{p.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{p.host} · {p.duration}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
