import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Phone,
  MapPin,
  Check,
  Copy,
  ArrowUpRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./BrandIcons";
import profile from "../data/profile";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      external: false,
    },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/[^0-9+]/g, "")}`,
      external: false,
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile.location,
      href: null,
      external: false,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "linkedin.com/in/ayushpandey028",
      href: profile.linkedin,
      external: true,
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "github.com/ayushpandey28",
      href: profile.github,
      external: true,
    },
    {
      icon: LeetCodeIcon,
      label: "LeetCode",
      value: "leetcode.com/u/ayush_pandey__28",
      href: profile.leetcode,
      external: true,
    },
  ];

  const update = (e) => {
    if (status !== "idle" && status !== "submitting") {
      setStatus("idle");
      setErrorMessage("");
    }
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedMessage = form.message.trim();

    if (!trimmedName) {
      return "Please enter your name.";
    }
    if (!trimmedEmail) {
      return "Please enter your email address.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return "Please enter a valid email address.";
    }
    if (!trimmedMessage) {
      return "Please enter your message.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setErrorMessage(validationError);
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          _subject: "New Portfolio Contact Message",
          _captcha: "false",
          _template: "table",
          _replyto: form.email.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true || data.message)) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setErrorMessage(
        "Unable to send message right now. Please try again or reach out directly at " +
          profile.email
      );
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl section-padding">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let's Connect
          </h2>

          <p className="mt-3 max-w-lg text-text-secondary">
            I'm currently seeking Software Development and Software
            Engineering internship opportunities. If you have an opening or
            want to discuss potential collaborations, feel free to reach out.
          </p>

          <div className="mt-3 h-1 w-12 rounded-full bg-accent" />
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Details Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            <div className="mb-4 flex items-center justify-between rounded-xl border border-border bg-surface-card p-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  Quick Copy
                </p>
                <p className="text-sm font-medium text-text-primary">
                  {profile.email}
                </p>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-border-hover hover:bg-surface-hover hover:text-text-primary"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    Copy Email
                  </>
                )}
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {contactLinks.map(({ icon: Icon, label, value, href, external }) => {
                const content = (
                  <div className="group flex items-center gap-3 rounded-xl border border-border bg-surface-card p-4 transition-colors hover:border-border-hover hover:bg-surface-hover">
                    <div className="rounded-lg bg-accent-muted p-2 text-accent">
                      <Icon size={18} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-text-muted">
                        {label}
                      </p>
                      <p className="truncate text-sm font-medium text-text-primary">
                        {value}
                      </p>
                    </div>

                    {href && (
                      <ArrowUpRight
                        size={15}
                        className="text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-text-primary"
                      />
                    )}
                  </div>
                );

                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Message Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 rounded-xl border border-border bg-surface-card/60 p-6 sm:p-8"
          >
            {/* Status Feedback Messages */}
            {status === "success" && (
              <div className="flex items-start gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-sm text-emerald-400">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="mt-0.5 text-xs text-emerald-400/80">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-3.5 text-sm text-red-400">
                <AlertCircle size={18} className="mt-0.5 shrink-0" />
                <p className="leading-snug">{errorMessage}</p>
              </div>
            )}

            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-text-secondary"
              >
                Your Name <span className="text-accent">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={status === "submitting"}
                value={form.name}
                onChange={update}
                placeholder="John Doe"
                className="input-base disabled:opacity-60"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-text-secondary"
              >
                Your Email <span className="text-accent">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={status === "submitting"}
                value={form.email}
                onChange={update}
                placeholder="john@example.com"
                className="input-base disabled:opacity-60"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-text-secondary"
              >
                Your Message <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                disabled={status === "submitting"}
                value={form.message}
                onChange={update}
                placeholder="Hi Ayush, I came across your portfolio and wanted to reach out regarding..."
                className="input-base resize-none disabled:opacity-60"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <Check size={16} className="text-emerald-300" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}