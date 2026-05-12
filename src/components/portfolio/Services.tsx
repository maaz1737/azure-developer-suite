import { Code2, Smartphone, Server, Database, Palette, Globe } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Laravel Web Apps",
    desc: "End-to-end Laravel applications with clean MVC architecture and maintainable code.",
  },
  {
    icon: Server,
    title: "REST API Development",
    desc: "Robust REST APIs powering mobile apps, SPAs, and third-party integrations.",
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    desc: "MySQL schemas and Eloquent queries tuned for speed and scale.",
  },
  {
    icon: Smartphone,
    title: "Responsive Frontends",
    desc: "Pixel-perfect UIs in Tailwind, Bootstrap, jQuery and AJAX-driven interactions.",
  },
  {
    icon: Palette,
    title: "HR & E-commerce Systems",
    desc: "Custom HRMS, attendance, payroll, product, cart and order modules.",
  },
  {
    icon: Globe,
    title: "API Integrations",
    desc: "Connecting Laravel apps to payment, attendance, and third-party services.",
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
