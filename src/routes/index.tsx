import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Home } from "@/pages/Home/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rich Aguilera — Cinematic Faith Stories" },
      { name: "description", content: "Premium cinematic faith-centered streaming. Watch films, listen to podcasts, attend live events — one immersive ecosystem." },
      { property: "og:title", content: "Rich Aguilera — Faith Cinema" },
      { property: "og:description", content: "Stories that move faith forward. Watch. Listen. Live." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}
