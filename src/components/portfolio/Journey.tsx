import { GraduationCap, Briefcase, Award, Rocket } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    year: "2019",
    title: "Started Coding Journey",
    desc: "Discovered web development and fell in love with building things on the web.",
  },
  {
    icon: Rocket,
    year: "2021",
    title: "First Freelance Projects",
    desc: "Started shipping real client projects — from landing pages to small SaaS tools.",
  },
  {
    icon: Briefcase,
    year: "2023",
    title: "Full-Stack Developer",
    desc: "Joined a fast-growing startup, leading frontend and contributing to backend systems.",
  },
  {
    icon: Award,
    year: "2025",
    title: "Certified & Independent",
    desc: "Earned multiple certifications and now help companies build polished products.",
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
