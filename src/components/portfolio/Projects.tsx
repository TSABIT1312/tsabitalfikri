import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  year: string;
  tags: string[];
  accent: string;
  image: string;
  imageAlt: string;
};

const projects: Project[] = [
  {
    name: "Coconiq",
    tagline: "Premium cocopeat, presented like a modern brand.",
    description:
      "Marketing site for a sustainable growing-media producer, with an editorial hero, a product story, and application use-cases in a calm, trust-first tone.",
    url: "https://www.coconiqindonesia.com",
    year: "2025",
    tags: ["Brand site", "Vite + React", "Product story"],
    accent: "from-primary/20 to-primary/5",
    image: "/projects/coconiq.jpg",
    imageAlt: "Homepage preview of Coconiq website",
  },
  {
    name: "Memoeria",
    tagline: "Photobooth studio with an editorial soul.",
    description:
      "Booking-focused site for a premium photobooth service in Indonesia. Curated frame collections, event-driven galleries, and a WhatsApp-first funnel.",
    url: "https://www.memoeria.my.id",
    year: "2025",
    tags: ["Product site", "Booking flow", "Gallery-first"],
    accent: "from-primary/20 to-primary/5",
    image: "/projects/memoeria.jpg",
    imageAlt: "Homepage preview of Memoeria photobooth website",
  },
  {
    name: "41Java",
    tagline: "Artist site for an independent hip-hop project.",
    description:
      "Bold artist portfolio for 41JAVA, with latest releases, a featured video, and a tour-style highlights reel that reads like a stage flyer.",
    url: "https://41java.vercel.app",
    year: "2024",
    tags: ["Artist site", "Media", "Motion"],
    accent: "from-primary/20 to-primary/5",
    image: "/projects/41java.jpg",
    imageAlt: "Homepage preview of 41Java official website",
  },
  {
    name: "Wheels Bali",
    tagline: "Bali's trusted motorbike rental, made effortless.",
    description:
      "Rental platform with a fleet browser, transparent pricing plans, a delivery flow, and WhatsApp booking, built to remove friction for travelers.",
    url: "https://wheelsbali.vercel.app",
    year: "2024",
    tags: ["Marketplace", "Conversion", "Travel"],
    accent: "from-primary/20 to-primary/5",
    image: "/projects/wheelsbali.jpg",
    imageAlt: "Homepage preview of Wheels Bali rental website",
  },
  {
    name: "Lovix Photo",
    tagline: "Wedding photography, told like a film.",
    description:
      "Portfolio site for a Jakarta-based wedding photography studio, with a cinematic full-bleed hero, curated story galleries, and a wedding-films section.",
    url: "https://loxix-photo.vercel.app",
    year: "2025",
    tags: ["Photography", "Portfolio", "Editorial"],
    accent: "from-primary/20 to-primary/5",
    image: "/projects/lovixphoto.jpg",
    imageAlt: "Homepage preview of Lovix Photo website",
  },
];

export function Projects() {
  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Five products I designed and <span className="italic">built</span> myself.
          </h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            From the last two years: brand sites, a booking platform, an artist site, a rental
            marketplace, and a photography portfolio.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noreferrer noopener"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-secondary/20 p-6 transition hover:border-primary/40"
    >
      <div
        className={`pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Visual */}
      <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-secondary/40">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
      </div>

      {/* Meta */}
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="font-mono">{project.year}</span>
            <span className="font-mono">{new URL(project.url).host.replace("www.", "")}</span>
          </div>
          <h3 className="font-display mt-2 text-xl font-semibold">{project.tagline}</h3>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-card/60 transition group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
        </span>
      </div>

      <p className="relative z-10 mt-3 text-sm text-muted-foreground">{project.description}</p>

      <div className="relative z-10 mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-[11px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
