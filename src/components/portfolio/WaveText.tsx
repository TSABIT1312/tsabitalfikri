import { motion } from "framer-motion";

export function WaveText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.span className={`inline-flex flex-wrap ${className}`} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.8 }}>
      {text.split(/(\s+)/).map((chunk, chunkIndex) =>
        /\s+/.test(chunk) ? (
          <span key={`space-${chunkIndex}`} className="whitespace-pre">
            {chunk}
          </span>
        ) : (
          <motion.span
            key={`${text}-${chunkIndex}`}
            className="inline-flex"
            variants={{
              hidden: { y: 8, opacity: 0, filter: "blur(8px)" },
              show: {
                y: [8, -3, 0],
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 0.42, delay: chunkIndex * 0.02, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {chunk.split("").map((ch, i) => (
              <motion.span
                key={`${chunk}-${i}`}
                className="inline-block will-change-transform"
                variants={{
                  hidden: { y: 8, opacity: 0, filter: "blur(8px)" },
                  show: {
                    y: [8, -3, 0],
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.42, delay: chunkIndex * 0.02 + i * 0.008, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {ch}
              </motion.span>
            ))}
          </motion.span>
        ),
      )}
    </motion.span>
  );
}
