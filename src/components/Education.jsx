import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

/* Education information */
const education = {
  degree: "B.Tech — Computer Science & Engineering",
  institution: "KIET Group of Institutions, Ghaziabad",
  year: "2024 – 2028",
  cgpa: "7.49 / 10",
  description:
    "Currently pursuing a Bachelor's degree in Computer Science & Engineering with a strong foundation in programming, software development, Data Structures & Algorithms, databases, and core computer science concepts.",
};

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl section-padding">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Education
          </h2>

          <div className="mt-3 h-1 w-12 rounded-full bg-accent" />
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 max-w-2xl rounded-xl border border-border bg-surface-card p-6 sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 rounded-lg bg-accent-muted p-3 text-accent">
              <GraduationCap size={24} />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-text-primary">
                {education.degree}
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-secondary">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-text-muted" />
                  {education.institution}
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={14} className="text-text-muted" />
                  {education.year}
                </span>
              </div>

              <p className="mt-3 text-sm font-medium text-accent">
                CGPA: {education.cgpa}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {education.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}