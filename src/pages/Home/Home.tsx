import { Hero } from "./sections/Hero";
import { FeaturedContent } from "./sections/FeaturedContent";
import { TrendingNow } from "./sections/TrendingNow";
import { ExploreWorlds } from "./sections/ExploreWorlds";
import { MediaHub } from "./sections/MediaHub";
import { LiveEvents } from "./sections/LiveEvents";
import { Podcasts } from "./sections/Podcasts";
import { Categories } from "./sections/Categories";
import { FeaturedBanner } from "./sections/FeaturedBanner";
import { ImpactSection } from "./sections/ImpactSection";
import { Newsletter } from "./sections/Newsletter";
import { CTASection } from "./sections/CTASection";

export function Home() {
  return (
    <>
      <Hero />
      <FeaturedContent />
      <TrendingNow />
      <ExploreWorlds />
      <MediaHub />
      <FeaturedBanner />
      <LiveEvents />
      <Podcasts />
      <Categories />
      <ImpactSection />
      <Newsletter />
      <CTASection />
    </>
  );
}
