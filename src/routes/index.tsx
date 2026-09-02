import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

const pageVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function Index() {
  return (
    <motion.main
      className="relative min-h-screen overflow-x-clip bg-background selection:bg-primary/20 selection:text-primary-foreground"
      variants={pageVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sectionVariants} className="relative z-50"><Nav /></motion.div>
      <motion.div variants={sectionVariants}><Hero /></motion.div>
      <motion.div variants={sectionVariants}><About /></motion.div>
      <motion.div variants={sectionVariants}><Skills /></motion.div>
      <motion.div variants={sectionVariants}><Projects /></motion.div>
      <motion.div variants={sectionVariants}><Contact /></motion.div>
      <motion.div variants={sectionVariants}><Footer /></motion.div>
    </motion.main>
  );
}
