import { Container } from "@/components/ui/Container";
import { Play, Instagram, Youtube, Twitter, Facebook } from "lucide-react";

const COLS = [
  { title: "Watch", links: ["Films", "Series", "Documentaries", "Kids", "Originals"] },
  { title: "Listen", links: ["Podcasts", "Radio", "Audiobooks", "Worship"] },
  { title: "Connect", links: ["Live Events", "Community", "Newsletter", "Support"] },
  { title: "Company", links: ["About", "Mission", "Press", "Careers", "Contact"] },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-[oklch(0.06_0.015_270)]">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_3fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="h-10 w-10 rounded-lg bg-[image:var(--gradient-gold)] grid place-items-center">
                <Play className="h-4 w-4 text-black fill-black" />
              </div>
              <div>
                <div className="text-base font-bold tracking-tight">LUMEN</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Faith Cinema</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Premium cinematic stories that move faith forward. Watch, listen, and live a story worth telling.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Youtube, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {COLS.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Lumen Faith Cinema. All stories crafted with purpose.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
