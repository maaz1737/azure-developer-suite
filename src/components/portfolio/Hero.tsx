import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Github } from "lucide-react";
import heroImg from "@/assets/hero-illustration.png";

const ROLES = ["Laravel Developer", "PHP Engineer", "REST API Builder", "Full Stack Developer"];

function useTyping(words: string[], speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) setTimeout(() => setDel(true), pause);
        } else {
          const next = word.slice(0, text.length - 1);
          setText(next);
          if (next.length === 0) {
            setDel(false);
            setI((x) => x + 1);
          }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* animated glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-glow" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div
        className="pointer-events-none absolute top-20 -right-32 h-96 w-96 rounded-full bg-sky/25 blur-3xl animate-blob"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Available for new opportunities
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Hi, I'm Alex —<br />
            <span className="text-gradient">{typed}</span>
            <span className="ml-1 inline-block h-12 w-1 -translate-y-2 bg-primary animate-blink md:h-14 lg:h-16" />
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I craft fast, scalable, and beautifully designed web applications.
            Blending creative front-end engineering with rock-solid back-ends to
            ship products people love.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-elegant transition-all hover:-translate-y-0.5 hover:shadow-glow"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary"
            >
              <Github className="h-4 w-4" />
              Hire Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-8 text-sm">
            <div>
              <p className="text-2xl font-bold text-foreground">5+</p>
              <p className="text-muted-foreground">Years</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="text-2xl font-bold text-foreground">50+</p>
              <p className="text-muted-foreground">Projects</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="text-2xl font-bold text-foreground">30+</p>
              <p className="text-muted-foreground">Clients</p>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-primary opacity-20 blur-3xl" />
          <img
            src={heroImg}
            alt="Developer illustration"
            width={1024}
            height={1024}
            className="w-full drop-shadow-[0_25px_50px_rgba(37,99,235,0.25)]"
          />
        </div>
      </div>
    </section>
  );
}
