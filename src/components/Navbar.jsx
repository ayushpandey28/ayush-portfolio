import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import profile from "../data/profile";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      // Simple active section detection
      const scrollPos = window.scrollY + 120;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const sectionId = navLinks[i].href.substring(1);
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-[#0F1115]/95 border-b border-[#292E38]"
          : "bg-[#0F1115] border-b border-[#292E38]/60"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between section-padding py-3.5">
        {/* Brand */}
        <a
          href="#home"
          onClick={() => setMobileOpen(false)}
          className="group flex items-center gap-2 text-base font-semibold tracking-tight text-[#E8EAF0] transition-colors hover:text-[#F59E0B]"
        >
          <span className="font-mono text-xs text-[#F59E0B]">&gt;</span>
          <span>Ayush Pandey</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? "text-[#E8EAF0]"
                    : "text-[#A7ACB8] hover:text-[#E8EAF0]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#F59E0B] rounded-full" />
                )}
              </a>
            );
          })}

          {/* Resume Button */}
          <a
            href={profile.resume}
            download="Ayush_Pandey_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-1.5 rounded-[6px] border border-[#F59E0B]/70 bg-[#F59E0B]/10 px-3 py-1.5 text-xs font-medium text-[#F59E0B] transition-all hover:bg-[#F59E0B] hover:text-[#0F1115]"
          >
            <span>Resume</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-md border border-[#292E38] bg-[#151922] p-1.5 text-[#A7ACB8] transition-colors hover:border-[#3E4656] hover:text-[#E8EAF0] lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="border-b border-[#292E38] bg-[#0F1115] px-6 py-5 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#151922] text-[#F59E0B]"
                        : "text-[#A7ACB8] hover:bg-[#151922] hover:text-[#E8EAF0]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />}
                  </a>
                );
              })}

              <a
                href={profile.resume}
                download="Ayush_Pandey_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-[#F59E0B] px-4 py-2.5 text-sm font-medium text-[#0F1115] transition-colors hover:bg-[#D97706]"
              >
                <span>Download Resume</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}