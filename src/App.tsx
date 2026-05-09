import { Button } from "@/components/ui/button";

const videoUrl =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const navItems = [
  "Home",
  "Services",
  "Portfolio",
  "Case Studies",
  "About",
  "Contact",
];

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      <nav className="relative z-10 mx-auto flex max-w-7xl flex-row flex-wrap items-center justify-between px-4 py-5 sm:px-8 md:flex-nowrap md:py-6">
        <a
          href="#"
          className="text-2xl font-normal tracking-tight text-foreground sm:text-3xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          ZEPTIK DIGITAL<sup className="text-xs">&reg;</sup>
        </a>

        <div className="order-3 mt-5 flex w-full items-center gap-5 overflow-x-auto whitespace-nowrap pb-1 md:order-none md:mt-0 md:w-auto md:gap-7 md:overflow-visible md:pb-0">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={
                item === "Home"
                  ? "text-sm text-foreground transition-colors"
                  : "text-sm text-muted-foreground transition-colors hover:text-foreground"
              }
            >
              {item}
            </a>
          ))}
        </div>

        <Button variant="glass" size="nav" className="hidden md:inline-flex">
          Get Proposal
        </Button>

        <Button
          variant="glass"
          size="nav"
          className="inline-flex px-4 py-2 text-xs md:hidden"
        >
          Quote
        </Button>
      </nav>

      <section className="relative z-10 flex min-h-[calc(100vh-96px)] flex-col items-center justify-center px-6 py-[90px] pb-40 pt-32 text-center">
        <h1
          className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl md:text-8xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Welcome <em className="not-italic text-muted-foreground">to</em>{" "}
          ZEPTIKMEDIA{" "}
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
        >
          Begin Journey
        </Button>
      </section>
    </main>
  );
}

export default App;
