import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export default function ProjectCard({ project, index }) {
  const {
    title,
    description,
    points = [],
    image,
    technologies = [],
    github,
    live,
  } = project;

  const [hasImageError, setHasImageError] = useState(false);

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
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface-card transition-all duration-300 hover:border-border-hover hover:shadow-xl hover:shadow-black/20"
    >
      {/* Project Banner Preview */}
      <div className="relative aspect-video w-full overflow-hidden bg-surface">
        {image && !hasImageError ? (
          <img
            src={image}
            alt={`${title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            onError={() => setHasImageError(true)}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center p-6 text-center">
            <div className="mb-3 rounded-lg bg-accent-muted p-3 text-accent">
              <FolderGit2 size={28} />
            </div>
            <span className="font-mono text-sm font-medium text-text-primary">
              {title}
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight text-text-primary">
          {title}
        </h3>

        {description && (
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {description}
          </p>
        )}

        {/* Feature Points from Resume */}
        {points.length > 0 && (
          <ul className="mt-3 space-y-1.5 border-t border-border/50 pt-3">
            {points.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs leading-relaxed text-text-secondary"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

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

        {/* Action Links */}
        <div className="mt-auto flex items-center gap-3 pt-5">
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
              className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg bg-accent/30 px-4 py-2 text-sm font-medium text-white/50"
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