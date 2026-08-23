import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, CircleDot } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  LeetCodeIcon,
} from "./BrandIcons";
import profile from "../data/profile";

function CodeCard() {
  return (
    <div className="w-full max-w-md rounded-xl border border-border bg-surface-card p-5 shadow-2xl shadow-black/30">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />

        <span className="ml-3 font-mono text-xs text-text-muted">
          developer.js
        </span>
      </div>

      <pre className="font-mono text-sm leading-relaxed">
        <code>
          <span className="text-accent">const</span>{" "}
          <span className="text-blue-400">developer</span>{" "}
          <span className="text-text-muted">=</span> {"{\n"}

          {"  "}
          <span className="text-emerald-400">name</span>
          <span className="text-text-muted">:</span>{" "}
          <span className="text-amber-400">"Ayush Pandey"</span>
          <span className="text-text-muted">,</span>
          {"\n"}

          {"  "}
          <span className="text-emerald-400">role</span>
          <span className="text-text-muted">:</span>{" "}
          <span className="text-amber-400">
            "Full Stack Developer"
          </span>
          <span className="text-text-muted">,</span>
          {"\n"}

          {"  "}
          <span className="text-emerald-400">stack</span>
          <span className="text-text-muted">:</span>{" "}
          <span className="text-amber-400">
            "React + Node.js"
          </span>
          <span className="text-text-muted">,</span>
          {"\n"}

          {"  "}
          <span className="text-emerald-400">focus</span>
          <span className="text-text-muted">:</span>{" "}
          <span className="text-amber-400">
            "Software Engineering"
          </span>
          {"\n"}

          {"};"}
        </code>
      </pre>
    </div>
  );
}

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const floatingBadges = [
  {
    label: "React",
    className:
      "absolute -top-4 right-4 sm:right-8 lg:-right-2",
    y: [0, -6, 0],
    duration: 4,
  },
  {
    label: "Node.js",
    className:
      "absolute -bottom-3 left-4 sm:left-8 lg:-left-4",
    y: [0, 6, 0],
    duration: 5,
  },
  {
    label: "C++",
    className:
      "absolute -left-2 top-1/3 hidden sm:inline-flex lg:-left-12",
    y: [0, -5, 0],
    duration: 4.5,
  },
  {
    label: "SQL",
    className:
      "absolute -right-2 bottom-1/4 hidden sm:inline-flex lg:-right-8",
    y: [0, 5, 0],
    duration: 3.5,
  },
];

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
  {
    icon: Mail,
    href: `mailto:${profile.email}`,
    label: "Email",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/[0.04] blur-[120px]" />

      <div className="mx-auto w-full max-w-6xl section-padding">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            {/* Availability Badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-card px-4 py-1.5 text-xs font-medium text-text-secondary">
                <CircleDot
                  size={12}
                  className="text-emerald-400"
                />
                Open to Software Development Internships
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
                Ayush Pandey.
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={fadeUp}
              className="mt-3 text-xl font-medium text-text-secondary sm:text-2xl"
            >
              Full Stack Developer
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg"
            >
              I build end-to-end web applications with React and
              Node.js, backed by a strong foundation in C++, Python,
              SQL, and Data Structures & Algorithms.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                <ArrowDown size={16} />
                View My Work
              </a>

              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-text-secondary transition-colors hover:border-border-hover hover:bg-surface-hover hover:text-text-primary"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center gap-4"
            >
              {socials.map(
                ({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={
                      label === "Email"
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      label === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={label}
                    title={label}
                    className="rounded-lg border border-border p-2.5 text-text-muted transition-colors hover:border-border-hover hover:bg-surface-hover hover:text-text-primary"
                  >
                    <Icon size={18} />
                  </a>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Right Code Card */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="relative order-1 flex justify-center lg:order-2"
          >
            <CodeCard />

            {/* Floating Technology Badges */}
            {floatingBadges.map(
              ({
                label,
                className,
                y,
                duration,
              }) => (
                <motion.span
                  key={label}
                  animate={{ y }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`inline-flex items-center rounded-full border border-border bg-surface-card px-3 py-1 text-xs font-medium text-text-secondary ${className}`}
                >
                  {label}
                </motion.span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}