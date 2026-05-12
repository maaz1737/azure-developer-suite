import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "HR Management System",
    desc: "Attendance, leave management and payroll modules with API integrations to automate HR operations.",
    img: p1,
    tags: ["Laravel", "MySQL", "REST APIs", "Bootstrap"],
    category: "Web App",
  },
  {
    title: "E-Commerce Platform",
    desc: "Product management, cart and order processing with optimized backend workflows and AJAX UX.",
    img: p2,
    tags: ["Laravel", "AJAX", "MySQL", "Tailwind"],
    category: "E-commerce",
  },
  {
    title: "Lead Management System",
    desc: "Lead tracking and assignment modules with dynamic CRUD operations, DataTables and reporting.",
    img: p3,
    tags: ["Laravel", "AJAX", "jQuery", "DataTables"],
    category: "Web App",
  },
  {
    title: "Multi Calculator Web App",
    desc: "Financial and business calculators with reusable CRUD modules and clean validation workflows.",
    img: p4,
    tags: ["Laravel", "PHP", "Bootstrap"],
    category: "Web App",
  },
];

const categories = ["All", "Web App", "E-commerce"];

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
