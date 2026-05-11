import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Container } from "@/components/ui/Container";

export const Route = createFileRoute("/contact")({
  component: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-40 pb-32">
        <Container>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Rich Aguilera</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gradient-primary">Contact & Support</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">Coming soon.</p>
        </Container>
      </main>
      <Footer />
    </div>
  ),
});
