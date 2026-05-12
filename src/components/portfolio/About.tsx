import { Sparkles } from "lucide-react";
import portrait from "@/assets/about-portrait.jpg";

export function About() {
  return (
    <section id="about" className="relative bg-section py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Picture side */}
          <div className="reveal relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
              <img
                src={portrait}
                alt="Portrait of a full-stack developer"
                width={896}
                height={1152}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-border bg-card/80 px-4 py-3 shadow-soft backdrop-blur md:block">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
                <span className="text-sm font-medium">Available for work</span>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-soft">
              <Sparkles className="h-3.5 w-3.5" />
              About me
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Laravel developer building{" "}
              <span className="text-gradient">
                scalable backend systems
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I'm Muhammad Maaz Khalid, a Full Stack Laravel Developer based in
              Lahore, Pakistan with 2.5+ years of hands-on experience shipping
              HR systems, e-commerce platforms, and lead management tools for
              startups and software houses.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I specialize in Laravel, REST APIs, MySQL optimization, and
              AJAX-driven workflows — paired with responsive frontends in
              Tailwind, Bootstrap, jQuery and React. Clean code, performance,
              and real business impact are what I care about.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { k: "Backend", v: "Laravel · PHP" },
                { k: "Database", v: "MySQL · Eloquent" },
                { k: "Frontend", v: "AJAX · Tailwind" },
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-xl border border-border bg-card p-4 shadow-soft"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {item.k}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {item.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
