import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Search, User, Menu, X, Play } from "lucide-react";

const NAV = [
  { label: "Watch", to: "/movies" },
  { label: "Listen", to: "/explore" },
  { label: "Explore", to: "/explore" },
  { label: "Events", to: "/events" },
  { label: "Resources", to: "/resources" },
  { label: "Support", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong border-b border-white/5 py-3" : "py-5"
      }`}
    >
      <Container className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative h-9 w-9 rounded-lg bg-[image:var(--gradient-gold)] grid place-items-center shadow-gold">
            <Play className="h-4 w-4 text-black fill-black" />
          </div>
          <div className="leading-none">
            <div className="text-[15px] font-bold tracking-tight">RICH AGUILERA</div>
            <div className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground">Faith & Exploration</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="px-4 py-2 text-sm font-medium text-foreground/75 hover:text-foreground transition-colors rounded-full hover:bg-white/5"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <button className="hidden sm:grid h-10 w-10 place-items-center rounded-full hover:bg-white/10 transition-colors" aria-label="Search">
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button className="hidden sm:grid h-10 w-10 place-items-center rounded-full hover:bg-white/10 transition-colors" aria-label="Account">
            <User className="h-[18px] w-[18px]" />
          </button>
          <button
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full hover:bg-white/10"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-white/5 overflow-hidden"
          >
            <Container className="py-4 flex flex-col">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-medium border-b border-white/5"
                >
                  {item.label}
                </Link>
              ))}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
