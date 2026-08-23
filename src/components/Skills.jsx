import { motion } from "framer-motion";
import skills from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technical Skills
          </h2>

          <p className="mt-3 max-w-2xl text-text-secondary">
            Technologies, programming languages, development tools, and core
            computer science concepts I use to build software and solve
            technical problems.
          </p>

          <div className="mt-3 h-1 w-12 rounded-full bg-accent" />
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
              }}
              className="rounded-xl border border-border bg-surface-card p-6 transition-all duration-300 hover:border-border-hover hover:bg-surface-hover"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                {group.category}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}