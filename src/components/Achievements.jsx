import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const achievements = [
  "Solved 200+ Data Structures & Algorithms problems on LeetCode and other competitive coding platforms.",
  "Reliance Foundation Undergraduate Scholarship — 2024–Present | Selected Scholar",
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Achievements
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-accent" />
        </motion.div>

        <div className="mt-12 space-y-4 max-w-2xl">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-xl border border-border bg-surface-card p-5"
            >
              <div className="shrink-0 rounded-lg bg-accent-muted p-2.5 text-accent">
                <Trophy size={20} />
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
