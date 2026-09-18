import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./BrandIcons";
import profile from "../data/profile";
import projects from "../data/projects";

const socials = [
  {
    icon: GithubIcon,
    href: profile.github,
    label: "GitHub",
  },
  {
    icon: LinkedinIcon,
    href: profile.linkedin,
    label: "LinkedIn",
  },
  {
    icon: LeetCodeIcon,
    href: profile.leetcode,
    label: "LeetCode",
  },
  // {
  //   icon: Mail,
  //   href: `mailto:${profile.email}`,
  //   label: "Email",
  // },
];

export default function Hero() {
  const featured = projects[0]; // TigerResume

  return (
    <section id="home" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="mx-auto max-w-6xl section-padding">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Introduction */}
          <div className="lg:col-span-7">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-[6px] border border-[#292E38] bg-[#151922] px-3 py-1.5 text-xs text-[#A7ACB8]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E]"></span>
              </span>

              <span className="font-mono text-xs">
                Available for Software Development Internships
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#E8EAF0] sm:text-5xl lg:text-6xl leading-[1.1]">
              Hi, I'm <span className="text-[#E8EAF0]">Ayush Pandey</span>.
            </h1>

            {/* Role & Summary */}
            <p className="mt-4 text-base font-mono text-[#F59E0B] sm:text-lg">
              Full Stack Developer · B.Tech CSE @ KIET
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#A7ACB8] sm:text-base">
              Building practical, production-ready web applications with
              React, Node.js, Express, and MongoDB. Passionate about clean
              backend architectures and solving complex problems with Data
              Structures &amp; Algorithms.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-[6px] bg-[#F59E0B] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0F1115] transition-all hover:bg-[#D97706] hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowDown size={14} />
              </a>

              <a
                href={profile.resume}
                download="Ayush_Pandey_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[6px] border border-[#292E38] bg-[#151922] px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-[#E8EAF0] transition-all hover:border-[#3E4656] hover:bg-[#1B2028] hover:-translate-y-0.5"
              >
                <Download size={14} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-2.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="rounded-[6px] border border-[#292E38] bg-[#151922] p-2 text-[#737A89] transition-colors hover:border-[#3E4656] hover:text-[#E8EAF0]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* Real Stats Row */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#292E38] pt-6">
              <div>
                <div className="font-mono text-xl font-bold text-[#E8EAF0]">
                  150+
                </div>
                <div className="text-xs text-[#737A89]">
                  LeetCode Solved
                </div>
              </div>

              <div>
                <div className="font-mono text-xl font-bold text-[#E8EAF0]">
                  2+
                </div>
                <div className="text-xs text-[#737A89]">
                  Shipped Projects
                </div>
              </div>

              <div>
                <div className="font-mono text-xl font-bold text-[#22C55E]">
                  2028
                </div>
                <div className="text-xs text-[#737A89]">
                  Graduation Year
                </div>
              </div>
            </div>
          </div>

          {/* Right Showcase: Real Featured Project Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-lg border border-[#292E38] bg-[#151922] transition-all hover:border-[#3E4656]"
            >
              {/* Clean Header */}
              <div className="flex items-center justify-between border-b border-[#292E38] bg-[#151922] px-4 py-2.5">
                <span className="flex items-center gap-1.5 font-mono text-xs text-[#A7ACB8]">
                  <span className="text-[#F59E0B]">//</span>
                  <span>Featured Work</span>
                </span>

                <span className="rounded border border-[#292E38] bg-[#1B2028] px-2 py-0.5 font-mono text-[10px] text-[#A7ACB8]">
                  Production
                </span>
              </div>

              {/* Project Image Banner */}
              <div className="relative aspect-video w-full overflow-hidden border-b border-[#292E38] bg-[#0F1115]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="p-5">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-base font-semibold text-[#E8EAF0]">
                    {featured.title}
                  </h3>

                  <span className="font-mono text-xs text-[#737A89]">
                    Full Stack
                  </span>
                </div>

                <p className="mt-2 text-xs leading-relaxed text-[#A7ACB8]">
                  {featured.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {featured.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-[#292E38] bg-[#1B2028] px-2 py-0.5 font-mono text-[11px] text-[#A7ACB8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="mt-5 flex items-center gap-3 border-t border-[#292E38] pt-3">
                  {featured.github && (
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#A7ACB8] transition-colors hover:text-[#E8EAF0]"
                    >
                      <GithubIcon size={14} />
                      <span>Source Code</span>
                    </a>
                  )}

                  {featured.live && (
                    <a
                      href={featured.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-[#F59E0B] transition-colors hover:text-[#D97706]"
                    >
                      <span>Live Platform</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}