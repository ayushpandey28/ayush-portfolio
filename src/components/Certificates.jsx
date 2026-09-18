import { ExternalLink } from "lucide-react";
import certificates from "../data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 sm:py-28 border-t border-[#292E38]">
      <div className="mx-auto max-w-6xl section-padding">
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#F59E0B]">// 06</span>
          <h2 className="text-2xl font-bold tracking-tight text-[#E8EAF0] sm:text-3xl">
            Certifications
          </h2>
          <div className="h-[1px] flex-1 bg-[#292E38] ml-3" />
        </div>

        <p className="mt-4 max-w-2xl text-sm text-[#A7ACB8]">
          Specialized learning and industry-recognized credentials supporting my software development foundations.
        </p>

        {/* Clean List / Grid */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="flex items-start justify-between rounded-lg border border-[#292E38] bg-[#151922] p-4 transition-colors hover:border-[#3E4656]"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F59E0B]" />
                <div>
                  <h3 className="text-sm font-semibold text-[#E8EAF0]">
                    {cert.title}
                  </h3>
                  <p className="font-mono text-xs text-[#A7ACB8] mt-0.5">
                    {cert.issuer}
                  </p>
                  {cert.year && (
                    <span className="font-mono text-[11px] text-[#737A89] mt-1 block">
                      {cert.year}
                    </span>
                  )}
                </div>
              </div>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${cert.title} certificate`}
                  className="rounded p-1 text-[#737A89] transition-colors hover:text-[#E8EAF0]"
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}