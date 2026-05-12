import { GraduationCap, Briefcase, Rocket, Code2 } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    year: "2023",
    title: "BS Information Technology",
    desc: "Graduated from University of Sargodha with a degree in Information Technology.",
  },
  {
    icon: Rocket,
    year: "Jan 2024",
    title: "Laravel Developer — DEVMINE",
    desc: "Built a multi-calculator web app, reusable CRUD modules, validation workflows and responsive interfaces.",
  },
  {
    icon: Briefcase,
    year: "Oct 2024",
    title: "Laravel Developer — LARAARTISAN",
    desc: "Developing HR management and e-commerce systems, REST APIs, payroll integrations and role-based auth.",
  },
  {
    icon: Code2,
    year: "Today",
    title: "Open for Opportunities",
    desc: "Available for full-time, freelance and remote Laravel and full-stack roles.",
  },
];

export function Journey() {
  return (
    <section id="journey" className="relative bg-section py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Journey
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            My <span className="text-gradient">experience</span> timeline
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />
          <ul className="space-y-10">
            {items.map((it, i) => (
              <li
                key={it.title}
                className={`reveal relative md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
                }`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                    <span className="text-sm font-semibold text-primary">{it.year}</span>
                    <h3 className="mt-1 text-lg font-semibold">{it.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {it.desc}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block" />
                <span className="absolute left-4 top-6 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-gradient-primary text-white shadow-glow md:left-1/2">
                  <it.icon className="h-4 w-4" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
