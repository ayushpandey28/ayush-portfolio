import { motion } from "framer-motion";
import { Code2, Brain, Database, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Full Stack Development" },
  { icon: Brain, title: "DSA & Problem Solving" },
  { icon: Database, title: "APIs & Databases" },
  { icon: Rocket, title: "Building Real Projects" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>

          <div className="mt-3 h-1 w-12 rounded-full bg-accent" />
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 text-text-secondary leading-relaxed lg:col-span-3"
          >
            <p>
              I'm{" "}
              <span className="font-medium text-text-primary">
                Ayush Pandey
              </span>
              , a Computer Science and Engineering undergraduate at KIET Group
              of Institutions with a strong interest in full-stack development
              and software engineering.
            </p>

            <p>
              I work with technologies such as{" "}
              <span className="font-medium text-text-primary">
                React, Node.js, C++, Python, and SQL
              </span>
              . I enjoy building end-to-end web applications, designing REST
              APIs, working with databases, and understanding how different
              parts of a software system work together.
            </p>

            <p>
              Alongside development, I actively practice{" "}
              <span className="font-medium text-text-primary">
                Data Structures & Algorithms
              </span>
              , with 200+ problems solved on LeetCode and other competitive
              coding platforms. I'm continuously improving my technical skills
              through hands-on projects and practical problem solving.
            </p>

            <p>
              I'm currently seeking a{" "}
              <span className="font-medium text-text-primary">
                Software Development / Software Engineering internship
              </span>{" "}
              where I can contribute to real-world projects, learn from
              experienced engineers, and grow as a software developer.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 lg:col-span-2">
            {highlights.map(({ icon: Icon, title }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-surface-card p-5 text-center transition-colors hover:border-border-hover hover:bg-surface-hover"
              >
                <div className="rounded-lg bg-accent-muted p-2.5 text-accent">
                  <Icon size={20} />
                </div>

                <span className="text-sm font-medium leading-snug">
                  {title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}