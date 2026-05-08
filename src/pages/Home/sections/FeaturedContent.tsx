import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MovieCard } from "@/components/cards/MovieCard";
import { Button } from "@/components/ui/CineButton";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import lostCity from "@/assets/images/movies/lost-city.jpg";
import faithJourney from "@/assets/images/movies/faith-journey.jpg";
import concert from "@/assets/images/live-events/concert.jpg";
import running from "@/assets/images/movies/running-race.jpg";

const ITEMS = [
  { image: lostCity, title: "The Lost City", category: "Film · Drama", badge: { label: "New Episode", variant: "new" as const } },
  { image: faithJourney, title: "The Faith Journey", category: "Podcast", badge: { label: "Latest", variant: "gold" as const } },
  { image: concert, title: "Denver Live · May 24", category: "Live Event", badge: { label: "Live Soon", variant: "live" as const } },
  { image: running, title: "Running the Race", category: "Original Film", badge: { label: "Featured", variant: "default" as const } },
];

export function FeaturedContent() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Featured Content"
          title={<>Stories handpicked <br className="hidden md:block" />for this moment.</>}
          action={
            <Button variant="ghost" size="sm">
              View all <ArrowRight className="h-4 w-4" />
            </Button>
          }
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {ITEMS.map((it) => (
            <motion.div key={it.title} variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } }}>
              <MovieCard {...it} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
