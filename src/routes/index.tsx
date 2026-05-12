import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Journey } from "@/components/portfolio/Journey";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Maaz Khalid — Full Stack Laravel Developer" },
      {
        name: "description",
        content:
          "Portfolio of Muhammad Maaz Khalid, a Full Stack Laravel Developer with 2.5+ years of experience building HR systems, e-commerce platforms and REST APIs.",
      },
      { property: "og:title", content: "Muhammad Maaz Khalid — Full Stack Laravel Developer" },
      {
        property: "og:description",
        content:
          "Full Stack Laravel Developer — PHP, Laravel, MySQL, REST APIs, AJAX and responsive frontends.",
      },
      {
        link: [
          {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          },
        ],
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Journey />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
