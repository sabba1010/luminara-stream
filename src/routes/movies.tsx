import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Container } from "@/components/ui/Container";

function ComingSoon({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-40 pb-32">
        <Container>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Lumen</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gradient-primary">{title}</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            This experience is currently in cinematic post-production. Check back soon.
          </p>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export const Route = createFileRoute("/movies")({ component: () => <ComingSoon title="Films & Series" /> });
