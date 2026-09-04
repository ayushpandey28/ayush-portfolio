import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experience = {
  role: "ServiceNow Virtual Internship Program",
  company: "AICTE & SmartBridge",
  points: [
    "Completed structured training in ServiceNow Administration Fundamentals, covering platform configuration, Agentic AI, Flow Designer, and Reporting.",
    "Applied workflow automation concepts through hands-on modules on the ServiceNow platform.",
    "Built foundational knowledge aligned with ServiceNow CSA (Certified System Administrator) certification concepts.",
  ],
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Training / Internship
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-accent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 max-w-2xl rounded-xl border border-border bg-surface-card p-6 sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 rounded-lg bg-accent-muted p-3 text-accent">
              <Briefcase size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{experience.role}</h3>
              <p className="mt-1 text-sm text-text-secondary">{experience.company}</p>
              <ul className="mt-4 space-y-2">
                {experience.points.map((point, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
