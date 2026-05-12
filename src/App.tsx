import { Button } from "@/components/ui/button";
import About from "@/About";
import Portfolio from "@/Portfolio";

const videoUrl =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Agency Members", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const scrollToPortfolio = () => {
  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
};

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <nav className="animate-header-reveal fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/45 backdrop-blur-md transition-all duration-300 ease-out">
        <div className="mx-auto flex max-w-7xl flex-row flex-wrap items-center justify-between px-4 py-4 sm:px-8 md:flex-nowrap md:py-5">
          <a
            href="#"
            className="text-2xl font-normal tracking-tight text-foreground transition duration-300 ease-out hover:scale-[1.02] hover:text-white sm:text-3xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            ZEPTIK MEDIA<sup className="text-xs">&reg;</sup>
          </a>

          <div className="order-3 mt-5 flex w-full items-center gap-5 overflow-x-auto whitespace-nowrap pb-1 md:order-none md:mt-0 md:w-auto md:gap-7 md:overflow-visible md:pb-0">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={
                  item.label === "Home"
                    ? "nav-link text-sm text-foreground"
                    : "nav-link text-sm text-muted-foreground hover:text-foreground"
                }
              >
                {item.label}
              </a>
            ))}
          </div>

          <Button
            variant="glass"
            size="nav"
            className="hidden transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,255,255,0.12)] md:inline-flex"
          >
            Get Proposal
          </Button>

          <Button
            variant="glass"
            size="nav"
            className="inline-flex px-4 py-2 text-xs transition duration-300 ease-out hover:-translate-y-0.5 md:hidden"
          >
            Quote
          </Button>
        </div>
      </nav>

      <div className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-[90px] pb-40 pt-44 text-center md:pt-32">
          <h1
            className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl md:text-8xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Welcome <em className="not-italic text-muted-foreground">to</em>{" "}
            ZEPTIK MEDIA{" "}
            <em className="not-italic text-muted-foreground">
              portfolio.
            </em>
          </h1>

          <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We're designing tools for deep thinkers, bold creators, and quiet
            rebels. Amid the chaos, we build digital spaces for sharp focus and
            inspired work.
          </p>

          <Button
            variant="glass"
            size="hero"
            className="animate-fade-rise-delay-2 mt-12 cursor-pointer"
            onClick={scrollToPortfolio}
          >
            View Portfolio
          </Button>
        </section>
      </div>

      <About />
      <Portfolio />
    </main>
  );
}

export default App;
