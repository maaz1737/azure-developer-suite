import { Code2, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const links = ["Home", "About", "Skills", "Projects", "Services", "Contact"];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <a href="#home" className="flex items-center gap-2 font-bold text-lg">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-white">
              <Code2 className="h-5 w-5" />
            </span>
            Maaz<span className="text-gradient">.dev</span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Full Stack Laravel Developer building scalable web apps, REST APIs
            and HR / e-commerce systems.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Quick links</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-primary">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Connect</p>
          <div className="mt-4 flex gap-3">
            {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Alex.dev — All rights reserved.</p>
          <p>
            Built with <span className="text-primary">passion</span> by Alex.
          </p>
        </div>
      </div>
    </footer>
  );
}
