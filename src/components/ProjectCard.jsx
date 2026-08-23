import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export default function ProjectCard({ project, index }) {
  const {
    title,
    description,
    image,
    technologies = [],
    github,
    live,
  } = project;

  const isLink = (url) => Boolean(url && url !== "#");

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="group overflow-hidden rounded-xl border border-border bg-surface-card transition-all duration-300 hover:border-border-hover hover:shadow-xl hover:shadow-black/20"
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden bg-surface">
        {image ? (
          <img
            src={image}
            alt={`${title} project preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="flex h-full items-center justify-center px-4 text-center">
            <span className="text-sm text-text-muted">
              {title}
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold tracking-tight text-text-primary">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-accent-muted px-2.5 py-1 text-xs font-medium text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="mt-5 flex items-center gap-3">
          {isLink(github) ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm text-text-secondary transition-colors hover:border-border-hover hover:bg-surface-hover hover:text-text-primary"
            >
              <GithubIcon size={15} />
              GitHub
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm text-text-muted"
            >
              <GithubIcon size={15} />
              GitHub
            </span>
          )}

          {isLink(live) ? (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg bg-accent/40 px-4 py-2 text-sm font-medium text-white/60"
            >
              <ExternalLink size={15} />
              Live Demo
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}