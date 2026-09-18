import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export default function ProjectCard({ project, index }) {
  const {
    title,
    tagline,
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
    <article className="group flex flex-col rounded-lg border border-[#292E38] bg-[#151922] overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-[#3E4656]">
      {/* Top Banner Preview */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#0F1115] border-b border-[#292E38]">
        {image && !hasImageError ? (
          <img
            src={image}
            alt={`${title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
            onError={() => setHasImageError(true)}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center p-6 text-center">
            <span className="font-mono text-sm font-semibold text-[#E8EAF0]">
              {title}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="font-mono text-[11px] text-[#F59E0B]">
              0{index + 1} // PROJECT
            </span>
            <h3 className="text-lg font-bold tracking-tight text-[#E8EAF0] mt-0.5">
              {title}
            </h3>
          </div>
        </div>

        {tagline && (
          <p className="text-xs font-mono text-[#A7ACB8] mt-1">
            {tagline}
          </p>
        )}

        {description && (
          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#A7ACB8]">
            {description}
          </p>
        )}

        {/* Feature Points */}
        {points.length > 0 && (
          <ul className="mt-4 space-y-1.5 border-t border-[#292E38] pt-3">
            {points.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs leading-relaxed text-[#A7ACB8]"
              >
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#F59E0B]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded border border-[#292E38] bg-[#1B2028] px-2 py-0.5 font-mono text-[11px] text-[#A7ACB8]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Links */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-5 border-t border-[#292E38]">
          {isLink(github) ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[6px] border border-[#292E38] bg-[#1B2028] px-3 py-1.5 text-xs font-medium text-[#E8EAF0] transition-colors hover:border-[#3E4656] hover:bg-[#292E38]"
            >
              <GithubIcon size={14} />
              <span>Source</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-[6px] border border-[#292E38]/50 px-3 py-1.5 text-xs text-[#737A89]">
              <GithubIcon size={14} />
              <span>Internal</span>
            </span>
          )}

          {isLink(live) ? (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[6px] bg-[#F59E0B] px-3.5 py-1.5 text-xs font-semibold text-[#0F1115] transition-all hover:bg-[#D97706]"
            >
              <span>Live Demo</span>
              <ExternalLink size={13} />
            </a>
          ) : (
            <span className="font-mono text-[11px] text-[#737A89]">
              In Development
            </span>
          )}
        </div>
      </div>
    </article>
  );
}