import { useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! I'll get back to you within 24h.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="relative bg-section py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Contact
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Let's build something <span className="text-gradient">amazing</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have a project in mind? Drop a message and I'll get back within 24 hours.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="reveal lg:col-span-2">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-xl font-semibold">Get in touch</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Available for freelance and full-time opportunities.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  { icon: Mail, label: "khalidmaaz766@gmail.com" },
                  { icon: Phone, label: "+92 302 7706101" },
                  { icon: MapPin, label: "Lahore, Pakistan" },
                ].map((c) => (
                  <li key={c.label} className="flex items-center gap-3 text-sm">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-white">
                      <c.icon className="h-4 w-4" />
                    </span>
                    {c.label}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <p className="text-sm font-semibold">Follow me</p>
                <div className="mt-3 flex gap-3">
                  {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="reveal rounded-3xl border border-border bg-card p-8 shadow-soft lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field name="name" label="Name" placeholder="Jane Doe" />
              <Field name="email" type="email" label="Email" placeholder="jane@company.com" />
            </div>
            <div className="mt-5">
              <Field name="subject" label="Subject" placeholder="Project inquiry" />
            </div>
            <div className="mt-5">
              <label className="text-sm font-medium">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <button
              disabled={loading}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-elegant transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {loading ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
