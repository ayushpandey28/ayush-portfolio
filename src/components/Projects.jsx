import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-[#292E38]">
      <div className="mx-auto max-w-6xl section-padding">
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#F59E0B]">// 03</span>
          <h2 className="text-2xl font-bold tracking-tight text-[#E8EAF0] sm:text-3xl">
            Featured Projects
          </h2>
          <div className="h-[1px] flex-1 bg-[#292E38] ml-3" />
        </div>

        <p className="mt-4 max-w-2xl text-sm text-[#A7ACB8]">
          Production-style full-stack applications with functional backends, database integrations, and practical developer workflows.
        </p>

        {/* Projects Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 items-stretch">
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