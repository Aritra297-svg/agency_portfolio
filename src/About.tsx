const strengths = [
  "Performance-led digital strategy",
  "Creative campaigns with clear business goals",
  "Transparent reporting and practical execution",
];

function About() {
  return (
    <section
      id="about"
      className="relative z-10 scroll-mt-32 bg-background px-6 py-20 text-foreground sm:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="animate-about-section">
          <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
            About Us
          </p>
          <h2
            className="mt-4 text-4xl font-normal leading-tight sm:text-6xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            We shape digital presence into meaningful brand growth.
          </h2>
        </div>

        <div className="animate-about-section space-y-7">
          <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            ZEPTIK MEDIA is a creative digital marketing agency focused on building
            refined, results-driven experiences for modern brands. We combine
            thoughtful design, strategic content, performance marketing, and
            focused execution to help businesses stand out with clarity and
            confidence.
          </p>

          <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            Our work is guided by strong visual direction, careful audience
            understanding, and measurable outcomes. From campaign planning to
            brand storytelling, we create digital systems that look polished,
            communicate clearly, and support long-term growth.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {strengths.map((item) => (
              <div
                key={item}
                className="liquid-glass rounded-lg px-5 py-5 text-sm leading-6 text-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
