import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import fantasy from "@/assets/images/categories/fantasy.jpg";
import scifi from "@/assets/images/categories/scifi.jpg";
import adventure from "@/assets/images/categories/adventure.jpg";
import doc from "@/assets/images/categories/documentary.jpg";

const CATS = [
  { name: "Adventure", image: adventure, count: 48 },
  { name: "Drama", image: doc, count: 62 },
  { name: "Sci-Fi", image: scifi, count: 24 },
  { name: "Fantasy", image: fantasy, count: 31 },
  { name: "Documentary", image: doc, count: 56 },
  { name: "Action", image: adventure, count: 39 },
  { name: "Animation", image: fantasy, count: 18 },
  { name: "Thriller", image: scifi, count: 22 },
];

export function Categories() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionTitle eyebrow="Browse by Category" title="Find your next favorite." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {CATS.map((c, i) => (
            <motion.a
              key={c.name}
              href="#"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10"
            >
              <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:saturate-150" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:from-primary/40 transition-colors duration-700" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">{c.name}</h3>
                <p className="text-xs text-foreground/70 mt-0.5">{c.count} titles</p>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
