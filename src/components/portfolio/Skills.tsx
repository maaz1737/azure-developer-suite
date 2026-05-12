const skills = [
  { name: "PHP", level: 95 },
  { name: "Laravel", level: 95 },
  { name: "MySQL", level: 92 },
  { name: "REST APIs", level: 93 },
  { name: "Livewire", level: 85 },
  { name: "JavaScript", level: 88 },
  { name: "AJAX / jQuery", level: 90 },
  { name: "React.js", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Bootstrap", level: 92 },
  { name: "Eloquent ORM", level: 92 },
  { name: "Git & GitHub", level: 90 },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Skills
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            My <span className="text-gradient">tech stack</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tools and technologies I use every day to build modern Laravel applications.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="absolute inset-0 -z-10 bg-gradient-primary opacity-0 blur-2xl transition-opacity group-hover:opacity-10" />
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <span className="text-sm font-medium text-primary">{s.level}%</span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-gradient-primary transition-[width] duration-1000"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
