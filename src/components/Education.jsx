export default function Education() {
  const education = {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "KIET Group of Institutions, Ghaziabad",
    duration: "2024 – 2028",
    cgpa: "7.49 / 10",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOPs)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
    ],
  };

  return (
    <section id="education" className="py-20 sm:py-28 border-t border-[#292E38]">
      <div className="mx-auto max-w-6xl section-padding">
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#F59E0B]">// 05</span>
          <h2 className="text-2xl font-bold tracking-tight text-[#E8EAF0] sm:text-3xl">
            Education
          </h2>
          <div className="h-[1px] flex-1 bg-[#292E38] ml-3" />
        </div>

        {/* Structured Layout */}
        <div className="mt-10 ml-2 relative pl-6 sm:pl-8 border-l border-[#292E38]">
          {/* Amber Marker Dot */}
          <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#F59E0B] ring-4 ring-[#0F1115]" />

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="text-base sm:text-lg font-semibold text-[#E8EAF0]">
              {education.degree}
            </h3>
            <span className="font-mono text-xs text-[#737A89]">{education.duration}</span>
          </div>

          <div className="mt-1 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-[#A7ACB8]">{education.institution}</span>
            <span className="text-[#737A89]">·</span>
            <span className="rounded border border-[#292E38] bg-[#151922] px-2 py-0.5 font-mono text-xs font-semibold text-[#F59E0B]">
              CGPA: {education.cgpa}
            </span>
          </div>

          <div className="mt-5">
            <span className="font-mono text-xs text-[#737A89] uppercase tracking-wider block mb-2">
              Relevant Coursework &amp; Core CS:
            </span>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs sm:text-sm text-[#A7ACB8]">
              {education.coursework.map((course, idx) => (
                <span key={course} className="inline-flex items-center">
                  <span>{course}</span>
                  {idx < education.coursework.length - 1 && (
                    <span className="ml-3 text-[#737A89] font-mono">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}