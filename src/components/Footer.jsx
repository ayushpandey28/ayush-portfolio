import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./BrandIcons";
import profile from "../data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: GithubIcon,
      href: profile.github,
      label: "GitHub",
      external: true,
    },
    {
      icon: LinkedinIcon,
      href: profile.linkedin,
      label: "LinkedIn",
      external: true,
    },
    {
      icon: LeetCodeIcon,
      href: profile.leetcode,
      label: "LeetCode",
      external: true,
    },
    {
      icon: Mail,
      href: `mailto:${profile.email}`,
      label: "Email",
      external: false,
    },
  ];

  return (
    <footer className="border-t border-border bg-surface-card/50">
      <div className="mx-auto max-w-6xl section-padding py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-text-primary">
              {profile.name}
            </p>

            <p className="mt-0.5 text-xs text-text-muted">
              {profile.role}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(
              ({ icon: Icon, href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  title={label}
                  className="rounded-lg border border-border p-2 text-text-muted transition-all hover:border-border-hover hover:bg-surface-hover hover:text-text-primary"
                >
                  <Icon size={16} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs text-text-muted">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}