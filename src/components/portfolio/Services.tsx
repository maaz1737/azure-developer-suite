import { Code2, Smartphone, Server, Database, Palette, Globe } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Modern, performant websites built with React and best-in-class tooling.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Pixel-perfect experiences that adapt to every screen and device.",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Robust REST and GraphQL APIs powering your product end-to-end.",
  },
  {
    icon: Database,
    title: "Database Integration",
    desc: "Designing schemas and queries that scale with your business.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Clean, conversion-focused interfaces with attention to every detail.",
  },
  {
    icon: Globe,
    title: "Performance & SEO",
    desc: "Fast, accessible, search-friendly websites that rank and convert.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Services
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            What I can <span className="text-gradient">do for you</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            End-to-end product development to help you ship faster and scale better.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-2 hover:shadow-elegant"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity group-hover:opacity-20" />
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-white shadow-glow">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
