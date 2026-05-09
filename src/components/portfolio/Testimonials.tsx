import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const items = [
  {
    name: "Sarah Chen",
    role: "Product Manager, Linear-ish",
    quote:
      "Alex delivered a beautiful, performant dashboard ahead of schedule. The attention to detail is unmatched.",
  },
  {
    name: "Marcus Lee",
    role: "Founder, NovaPay",
    quote:
      "Working with Alex felt like hiring a senior team. Clean code, great UX and proactive communication.",
  },
  {
    name: "Priya Sharma",
    role: "CTO, BrightStack",
    quote:
      "Our conversion rate jumped 38% after Alex rebuilt the marketing site. Highly recommended.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            What clients <span className="text-gradient">say</span>
          </h2>
        </div>

        <div className="mt-14 reveal">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-soft md:p-14">
            <Quote className="absolute -top-4 -left-4 h-32 w-32 text-primary/5" />
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${i * 100}%)` }}
            >
              {items.map((t) => (
                <div key={t.name} className="w-full shrink-0">
                  <p className="text-xl leading-relaxed text-foreground md:text-2xl">
                    "{t.quote}"
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-primary text-lg font-bold text-white">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === idx ? "w-8 bg-gradient-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
