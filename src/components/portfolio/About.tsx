import { motion } from "framer-motion";
import { GraduationCap, Palette, Code2 } from "lucide-react";
import { WaveText } from "@/components/portfolio/WaveText";

const stats = [
  { k: "5", v: "Live products shipped" },
  { k: "3rd yr", v: "Informatics, UIN Saizu" },
  { k: "Solo", v: "Design and code, no team" },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              <WaveText text="I sweat the details other people skip." />
            </h2>
            <p className="mt-6 text-muted-foreground">
              I'm an Informatics student at UIN Prof. K.H. Saifuddin Zuhri Purwokerto, working at the intersection of design and engineering. I like problems that need both a strong system and a soft touch: brand-driven landing pages, product surfaces, and small tools that feel effortless.
            </p>
            <p className="mt-4 text-muted-foreground">
              My workflow leans on Figma for exploration and modern React stacks for delivery. I obsess over spacing, motion timing, and copy that respects the reader.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.v} className="rounded-2xl border border-border bg-secondary/30 px-4 py-5">
                  <div className="font-display text-2xl font-semibold text-foreground">{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <Card icon={<GraduationCap className="h-4 w-4" />} title="Education">
              Informatics, UIN Prof. K.H. Saifuddin Zuhri Purwokerto
            </Card>
            <Card icon={<Palette className="h-4 w-4" />} title="Design focus">
              Product UI, brand systems, motion, and design tokens
            </Card>
            <Card icon={<Code2 className="h-4 w-4" />} title="Engineering focus">
              Next.js, TypeScript, Tailwind, Supabase, end to end
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-secondary/20 p-5 transition hover:border-primary/40">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
        <span className="grid h-6 w-6 place-items-center rounded-md bg-primary/15 text-primary">
          {icon}
        </span>
        {title}
      </div>
      <div className="mt-3 text-sm text-foreground/90">{children}</div>
    </div>
  );
}
