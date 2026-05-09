import { Briefcase, Code, Users, Award } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Projects Completed", value: "50+" },
  { icon: Code, label: "Technologies Mastered", value: "20+" },
  { icon: Users, label: "Happy Clients", value: "30+" },
  { icon: Award, label: "Years Experience", value: "5+" },
];

export function About() {
  return (
    <section id="about" className="relative bg-section py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              About me
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Building digital products with{" "}
              <span className="text-gradient">precision & passion</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I'm a full-stack developer obsessed with crafting modern web
              experiences. From pixel-perfect interfaces to scalable APIs and
              database design, I bring ideas to life end-to-end.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I love turning complex problems into clean, elegant solutions.
              Whether it's a startup MVP or a large-scale platform, I focus on
              performance, accessibility and details that make products feel
              premium.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="reveal group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                  <s.icon className="h-6 w-6" />
                </div>
                <p className="mt-4 text-3xl font-bold text-foreground">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
