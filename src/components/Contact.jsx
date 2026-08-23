import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import profile from "../data/profile";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: profile.github,
    href: profile.github,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: profile.linkedin,
    href: profile.linkedin,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const update = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${form.name}`;

    const body = `Hello Ayush,

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`;

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(profile.email)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");

    setSent(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSent(false);
    }, 3000);
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
            I'm currently looking for Software Development and Software
            Engineering internship opportunities. I'm also open to
            collaborations and interesting development projects.
          </p>

          <div className="mt-3 h-1 w-12 rounded-full bg-accent" />
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={
                  label === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface-card p-5 transition-colors hover:border-border-hover hover:bg-surface-hover"
              >
                <div className="rounded-lg bg-accent-muted p-2.5 text-accent">
                  <Icon size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{label}</p>

                  <p className="truncate text-sm text-text-secondary">
                    {value}
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-text-secondary"
              >
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={update}
                placeholder="John Doe"
                className="input-base"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-text-secondary"
              >
                Your Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={update}
                placeholder="john@example.com"
                className="input-base"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-text-secondary"
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={update}
                placeholder="I'd like to connect about..."
                className="input-base resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              <Send size={16} />
              {sent ? "Gmail Opened!" : "Send Message"}
            </button>

          </motion.form>
        </div>
      </div>
    </section>
  );
}