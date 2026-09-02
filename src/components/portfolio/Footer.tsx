import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="border-t border-border/60 bg-background/80 py-10 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Muhammad Tsabit Alfikri.
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          Purwokerto · Indonesia
        </div>
      </div>
    </motion.footer>
  );
}
