import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import fantasy from "@/assets/images/categories/fantasy.jpg";
import scifi from "@/assets/images/categories/scifi.jpg";
import adventure from "@/assets/images/categories/adventure.jpg";
import lostCity from "@/assets/images/movies/lost-city.jpg";
import { ArrowUpRight } from "lucide-react";

const WORLDS = [
  { image: fantasy, title: "Whispering Forests", desc: "Ancient woods where every tree tells a story.", size: "tall" },
  { image: scifi, title: "Beyond the Veil", desc: "A cosmic odyssey across galaxies of grace.", size: "wide" },
  { image: adventure, title: "Canyons of Courage", desc: "Adventures that test the heart and refine the soul.", size: "square" },
  { image: lostCity, title: "The Lost Kingdoms", desc: "Discover civilizations time forgot, but truth remembers.", size: "wide" },
];

export function ExploreWorlds() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10 opacity-50" style={{ background: "var(--gradient-radial-primary)" }} />
      <Container>
        <SectionTitle
          eyebrow="Explore Our Worlds"
          title={<>Step into stories <br className="hidden md:block" />that change lives.</>}
          description="Immersive worlds, epic narratives, and cinematic adventures crafted to spark wonder and inspire belief."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[280px] md:auto-rows-[340px]">
          {WORLDS.map((w, i) => {
            const span =
              w.size === "tall"
                ? "md:col-span-5 md:row-span-2"
                : w.size === "wide"
                ? "md:col-span-7"
                : "md:col-span-5";
            return (
              <motion.a
                key={w.title}
                href="#"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.01 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 ${span}`}
              >
                <img src={w.image} alt={w.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
                <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="max-w-md">
                      <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">{w.title}</h3>
                      <p className="mt-2 text-sm md:text-base text-foreground/75 leading-relaxed">{w.desc}</p>
                    </div>
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 backdrop-blur-md border border-white/15 group-hover:bg-gold group-hover:text-black transition-all">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
