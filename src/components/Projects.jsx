import { motion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl section-padding">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>

          <p className="mt-3 max-w-2xl text-text-secondary">
            A selection of projects demonstrating my experience with
            full-stack development, REST APIs, SQL, data analysis, and
            practical problem solving.
          </p>

          <div className="mt-3 h-1 w-12 rounded-full bg-accent" />
        </motion.div>

        {/* Project Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}