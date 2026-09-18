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
    <footer className="border-t border-[#292E38] bg-[#0F1115]">
      <div className="mx-auto max-w-6xl section-padding py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand & Stack Info */}
          <div>
            <div className="flex items-center gap-2 font-mono text-sm font-semibold text-[#E8EAF0]">
              <span className="text-[#F59E0B]">&gt;</span>
              <span>ayush.pandey</span>
              <span className="text-[#737A89] font-normal text-xs">// portfolio</span>
            </div>
            <p className="mt-1 text-xs text-[#737A89]">
              B.Tech CSE Student &amp; Aspiring Software Development Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, href, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                title={label}
                className="rounded-md border border-[#292E38] bg-[#151922] p-2 text-[#A7ACB8] transition-colors hover:border-[#F59E0B] hover:text-[#F59E0B]"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom meta */}
        <div className="mt-8 border-t border-[#292E38] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#737A89] font-mono">
          <p>© {currentYear} Ayush Pandey. All rights reserved.</p>
          <p>Crafted with React, Vite &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}