import { motion } from "framer-motion";
import { WaveText } from "@/components/portfolio/WaveText";

const groups = [
  {
    title: "Design",
    items: ["Figma", "Design Systems", "Prototyping", "Motion", "Wireframing", "Brand"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
  },
  {
    title: "Backend & Tools",
    items: ["Node.js", "PostgreSQL", "Supabase", "Prisma", "Git", "Vercel"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          A toolkit chosen for clarity and speed.
        </motion.h2>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid gap-4 py-7 sm:grid-cols-[180px_1fr] sm:items-center"
            >
              <h3 className="text-lg font-semibold">{g.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border bg-secondary/30 px-3 py-1 text-xs text-foreground/85 transition hover:border-primary/50 hover:text-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
