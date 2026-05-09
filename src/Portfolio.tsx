import { useEffect, useRef, useState } from "react";

const projects = [
  {
    name: "Growth Sprint",
    type: "Paid Ads / Funnel Strategy",
    result: "3.8x return on ad spend for a launch campaign",
  },
  {
    name: "Brand Lift",
    type: "Social Media / Creative Direction",
    result: "142% increase in qualified inbound leads",
  },
  {
    name: "Search Engine Win",
    type: "SEO / Content Marketing",
    result: "Top 3 rankings for priority service keywords",
  },
];

function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative z-10 scroll-mt-32 bg-background px-6 py-20 text-foreground sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`max-w-3xl ${
            isVisible ? "animate-portfolio-heading" : "opacity-0"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
            Portfolio
          </p>
          <h2
            className="mt-4 text-4xl font-normal leading-tight sm:text-6xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Campaigns built for visibility, leads, and measurable growth.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`liquid-glass rounded-lg p-6 transition duration-300 ease-out hover:-translate-y-2 hover:bg-white/[0.03] ${
                isVisible ? "animate-portfolio-card" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 120 + 160}ms` }}
            >
              <p className="text-sm text-muted-foreground">{project.type}</p>
              <h3 className="mt-4 text-2xl font-medium text-foreground">
                {project.name}
              </h3>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                {project.result}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
