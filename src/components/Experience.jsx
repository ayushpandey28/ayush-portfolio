const experiences = [
  {
    role: "ServiceNow Virtual Internship Program",
    company: "AICTE & SmartBridge",
    duration: "2025",
    points: [
      "Completed structured training in ServiceNow Administration Fundamentals covering platform configuration, Agentic AI, Flow Designer, and Reporting.",
      "Applied workflow automation concepts through hands-on developer modules on the ServiceNow platform.",
      "Built foundational knowledge aligned with ServiceNow CSA (Certified System Administrator) certification standards.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-[#292E38]">
      <div className="mx-auto max-w-6xl section-padding">
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#F59E0B]">// 04</span>
          <h2 className="text-2xl font-bold tracking-tight text-[#E8EAF0] sm:text-3xl">
            Experience &amp; Training
          </h2>
          <div className="h-[1px] flex-1 bg-[#292E38] ml-3" />
        </div>

        {/* Minimal Timeline */}
        <div className="mt-10 ml-2 space-y-10">
          {experiences.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 border-l border-[#292E38]">
              {/* Amber Marker Dot */}
              <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#F59E0B] ring-4 ring-[#0F1115]" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-base sm:text-lg font-semibold text-[#E8EAF0]">
                  {item.role}
                </h3>
                <span className="font-mono text-xs text-[#737A89]">{item.duration}</span>
              </div>

              <div className="font-mono text-xs text-[#F59E0B] mt-0.5">
                {item.company}
              </div>

              <ul className="mt-4 space-y-2 max-w-3xl">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-[#A7ACB8]"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#737A89]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
