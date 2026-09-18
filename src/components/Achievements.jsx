const achievements = [
  "Solved 200+ Data Structures & Algorithms problems on LeetCode and competitive programming platforms, strengthening core algorithmic reasoning.",
  "Selected as a Reliance Foundation Undergraduate Scholar (2024–Present), recognized among top engineering applicants across India.",
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-28 border-t border-[#292E38]">
      <div className="mx-auto max-w-6xl section-padding">
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#F59E0B]">// 07</span>
          <h2 className="text-2xl font-bold tracking-tight text-[#E8EAF0] sm:text-3xl">
            Honors &amp; Achievements
          </h2>
          <div className="h-[1px] flex-1 bg-[#292E38] ml-3" />
        </div>

        <div className="mt-8 space-y-3">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-lg border border-[#292E38] bg-[#151922] p-4 text-xs sm:text-sm text-[#A7ACB8] transition-colors hover:border-[#3E4656]"
            >
              <span className="font-mono text-xs text-[#F59E0B] mt-0.5">[{idx + 1}]</span>
              <span className="leading-relaxed text-[#E8EAF0]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
