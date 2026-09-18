import skills from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-[#292E38]">
      <div className="mx-auto max-w-6xl section-padding">
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#F59E0B]">// 02</span>
          <h2 className="text-2xl font-bold tracking-tight text-[#E8EAF0] sm:text-3xl">
            Technical Skills
          </h2>
          <div className="h-[1px] flex-1 bg-[#292E38] ml-3" />
        </div>

        <p className="mt-4 max-w-2xl text-sm text-[#A7ACB8]">
          Languages, frameworks, database systems, and core computer science principles I work with.
        </p>

        {/* Natural Developer Rows Layout */}
        <div className="mt-8 divide-y divide-[#292E38] border-y border-[#292E38]">
          {skills.map((group) => (
            <div
              key={group.category}
              className="py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
            >
              {/* Category Label */}
              <div className="sm:col-span-4 font-mono text-xs font-semibold uppercase tracking-wider text-[#A7ACB8] flex items-center gap-2">
                <span className="text-[#F59E0B]">//</span>
                <span>{group.category}</span>
              </div>

              {/* Skills Items with Dot Separators */}
              <div className="sm:col-span-8 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm">
                {group.items.map((item, idx) => (
                  <span key={item} className="inline-flex items-center">
                    <span className="text-[#E8EAF0] font-medium transition-colors hover:text-[#F59E0B]">
                      {item}
                    </span>
                    {idx < group.items.length - 1 && (
                      <span className="ml-2.5 text-[#737A89] select-none">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}