import { Terminal, MapPin, GraduationCap, Briefcase, Award, Code } from "lucide-react";

export default function About() {
  const quickFacts = [
    {
      label: "Education",
      value: "B.Tech, Computer Science & Engineering",
      sub: "KIET Group of Institutions (2024 – 2028)",
      icon: GraduationCap,
    },
    {
      label: "Location",
      value: "Ghaziabad, Uttar Pradesh, India",
      sub: "Open to relocation & remote roles",
      icon: MapPin,
    },
    {
      label: "Core Stack",
      value: "React · Node.js · Express · MongoDB",
      sub: "C++, Python, SQL, REST APIs",
      icon: Code,
    },
    {
      label: "Problem Solving",
      value: "150+ LeetCode DSA Problems",
      sub: "Data Structures & Algorithmic complexity",
      icon: Terminal,
    },
    {
      label: "Scholarship",
      value: "Reliance Foundation Scholar",
      sub: "Undergraduate Scholarship recipient",
      icon: Award,
    },
    {
      label: "Status",
      value: "Seeking SDE Internships",
      sub: "Available to start immediately",
      icon: Briefcase,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-[#292E38]">
      <div className="mx-auto max-w-6xl section-padding">
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#F59E0B]">// 01</span>
          <h2 className="text-2xl font-bold tracking-tight text-[#E8EAF0] sm:text-3xl">
            About Me
          </h2>
          <div className="h-[1px] flex-1 bg-[#292E38] ml-3" />
        </div>

        {/* Content Layout */}
        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Narrative Text */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base leading-relaxed text-[#A7ACB8]">
            <p>
              I am a third-year Computer Science undergraduate at KIET Group of Institutions,
              building full-stack software with a focus on web applications, scalable backend APIs,
              and algorithm problem solving.
            </p>

            <p>
              My development work centers around the modern JavaScript ecosystem—primarily
              <span className="text-[#E8EAF0] font-medium"> React.js</span>,
              <span className="text-[#E8EAF0] font-medium"> Node.js</span>,
              <span className="text-[#E8EAF0] font-medium"> Express.js</span>, and
              <span className="text-[#E8EAF0] font-medium"> MongoDB</span>. I enjoy designing clean REST
              APIs, reasoning about database schema tradeoffs, and creating fast, accessible user interfaces.
            </p>

            <p>
              Beyond building applications, I have a deep appreciation for foundational Computer Science.
              I have solved <span className="text-[#E8EAF0] font-medium">150+ algorithmic problems on LeetCode</span>,
              reinforcing principles of time and space complexity that guide how I write production code.
            </p>

            <p>
              I am actively looking for a <span className="text-[#F59E0B] font-medium">Software Development Internship and Roles</span> where
              I can contribute to impactful codebases, collaborate with experienced engineers, and solve
              demanding technical problems.
            </p>
          </div>

          {/* Quick Facts Panel */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-[#292E38] bg-[#151922] p-5">
              <div className="flex items-center justify-between border-b border-[#292E38] pb-3 mb-4">
                <span className="font-mono text-xs font-semibold text-[#E8EAF0]">Quick Facts</span>
                <span className="font-mono text-[11px] text-[#737A89]">profile_summary</span>
              </div>

              <div className="space-y-4">
                {quickFacts.map(({ label, value, sub, icon: Icon }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="mt-0.5 rounded border border-[#292E38] bg-[#1B2028] p-1.5 text-[#F59E0B]">
                      <Icon size={14} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-mono text-[#737A89] uppercase tracking-wider">{label}</div>
                      <div className="text-xs sm:text-sm font-medium text-[#E8EAF0] mt-0.5">{value}</div>
                      <div className="text-[11px] text-[#A7ACB8] mt-0.5">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}