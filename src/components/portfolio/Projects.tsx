import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "SaaS Analytics Dashboard",
    desc: "Real-time analytics platform with customizable widgets and team collaboration.",
    img: p1,
    tags: ["React", "Tailwind", "Node.js"],
    category: "Web App",
  },
  {
    title: "E-commerce Storefront",
    desc: "Headless commerce experience with lightning-fast checkout and CMS.",
    img: p2,
    tags: ["React", "Stripe", "MySQL"],
    category: "E-commerce",
  },
  {
    title: "Fintech Mobile UI",
    desc: "Cross-platform banking app with secure auth and transaction insights.",
    img: p3,
    tags: ["React Native", "PHP", "API"],
    category: "Mobile",
  },
  {
    title: "Productivity Suite",
    desc: "Kanban-based team productivity tool with realtime sync.",
    img: p4,
    tags: ["React", "Tailwind", "Realtime"],
    category: "Web App",
  },
];

const categories = ["All", "Web App", "E-commerce", "Mobile"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative bg-section py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Projects
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Selected <span className="text-gradient">work</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A handful of projects that showcase what I love to build.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  filter === c
                    ? "bg-gradient-primary text-white shadow-soft"
                    : "border border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {list.map((p, i) => (
            <article
              key={p.title}
              className="reveal group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-2 hover:shadow-elegant"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold transition-colors hover:border-primary"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
