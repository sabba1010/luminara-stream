import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MovieCard } from "@/components/cards/MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import lostCity from "@/assets/images/movies/lost-city.jpg";
import faithJourney from "@/assets/images/movies/faith-journey.jpg";
import running from "@/assets/images/movies/running-race.jpg";
import fantasy from "@/assets/images/categories/fantasy.jpg";
import scifi from "@/assets/images/categories/scifi.jpg";
import doc from "@/assets/images/categories/documentary.jpg";
import adventure from "@/assets/images/categories/adventure.jpg";

const TABS = ["All", "Films", "Series", "Documentaries", "Originals"];

const ROW = [
  { image: lostCity, title: "The Vanishing Trail", category: "Series · S2", meta: "8 episodes" },
  { image: faithJourney, title: "Into the Wild", category: "Film", meta: "1h 42m" },
  { image: adventure, title: "The Pilgrim Path", category: "Documentary", meta: "1h 12m" },
  { image: fantasy, title: "Whispering Woods", category: "Original", meta: "S1 · 6 ep" },
  { image: scifi, title: "Beyond the Veil", category: "Sci-Fi", meta: "2h 04m" },
  { image: running, title: "Eternal Sprint", category: "Drama", meta: "1h 38m" },
  { image: doc, title: "Pages of Truth", category: "Documentary", meta: "55m" },
  { image: lostCity, title: "Faith of Our Fathers", category: "Film", meta: "1h 56m" },
];

export function TrendingNow() {
  const [active, setActive] = useState("All");
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    ref.current?.scrollBy({ left: dir * 480, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 relative">
      <Container>
        <SectionTitle
          eyebrow="Trending Now"
          title="What the world is watching this week."
          action={
            <div className="flex items-center gap-2">
              <button onClick={() => scroll(-1)} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:bg-white/10 transition-colors" aria-label="Previous">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={() => scroll(1)} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:bg-white/10 transition-colors" aria-label="Next">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          }
        />
        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                active === t
                  ? "bg-foreground text-background"
                  : "border border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </Container>

      <div className="relative">
        <div ref={ref} className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-5 sm:px-8 lg:px-12 snap-x snap-mandatory">
          {ROW.map((it, i) => (
            <div key={i} className="snap-start shrink-0 w-[60%] sm:w-[40%] md:w-[28%] lg:w-[22%]">
              <MovieCard {...it} orientation="portrait" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
