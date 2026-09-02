import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const heroTitle = "I design interfaces, then I build them myself.";

const staticHeroText =
  "I'm Muhammad Tsabit Alfikri, an Informatics student in Purwokerto. I design in Figma and ship real products in React.";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section id="top" className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24">
      <motion.div style={{ y }} className="grid-bg absolute inset-0 -z-10" />

      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Open to internships and freelance work
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          I design interfaces, then I build them myself.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          I'm Muhammad Tsabit Alfikri, an Informatics student in Purwokerto. I design in Figma and ship real products in React.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:brightness-110"
          >
            See my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="/cv-muhammad-tsabit-alfikri.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary/40"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
