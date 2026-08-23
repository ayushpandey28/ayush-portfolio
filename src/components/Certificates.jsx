import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import certificates from "../data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Certifications
          </h2>

          <div className="mt-3 h-1 w-12 rounded-full bg-accent" />

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">
            Professional certifications and specialized learning that support
            my software development and technical foundation.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-xl border border-border bg-surface-card p-6 transition-all duration-300 hover:border-border-hover hover:bg-surface-hover"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-lg bg-accent-muted p-2.5 text-accent">
                  <Award size={20} />
                </div>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${cert.title} certificate`}
                    className="rounded-md p-2 text-text-muted transition-colors hover:bg-accent-muted hover:text-accent"
                  >
                    <ExternalLink size={17} />
                  </a>
                )}
              </div>

              <h3 className="mt-5 text-base font-semibold text-text-primary">
                {cert.title}
              </h3>

              <p className="mt-2 text-sm text-text-secondary">
                {cert.issuer}
              </p>

              {cert.year && (
                <p className="mt-1 text-xs text-text-muted">{cert.year}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}