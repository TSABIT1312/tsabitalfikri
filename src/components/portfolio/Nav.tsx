import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 8));

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav
        className={`glass flex items-center gap-1 rounded-full px-2 py-2 transition-all ${
          scrolled ? "shadow-[0_8px_24px_-16px_rgba(255,167,64,0.28)]" : ""
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold tracking-tight"
        >
          <img
            src="/avatar.jpg"
            alt="Muhammad Tsabit Alfikri"
            className="h-7 w-7 rounded-full border border-border object-cover"
          />
          <span className="hidden sm:inline">Tsabit</span>
        </a>
        <div className="mx-1 hidden h-5 w-px bg-border sm:block" />
        <ul className="hidden items-center sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="ml-1 rounded-full bg-primary/90 px-4 py-1.5 text-sm font-medium text-primary-foreground transition hover:bg-primary hover:brightness-95"
        >
          Let's talk
        </a>
      </nav>
    </motion.header>
  );
}
