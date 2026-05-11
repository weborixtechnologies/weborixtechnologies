import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Sparkles,
  Target,
  Lightbulb,
  HeartHandshake,
  Rocket,
  ShieldCheck,
  Users,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";

const values = [
  { Icon: Target, title: "Outcome-driven", desc: "Every pixel and every line of code ties back to a measurable business goal." },
  { Icon: Lightbulb, title: "Creative rigor", desc: "We pair bold ideas with disciplined craft — no gimmicks, no fluff." },
  { Icon: HeartHandshake, title: "Real partnership", desc: "Long-term collaborators, not vendors. We win when you win." },
  { Icon: ShieldCheck, title: "Built to last", desc: "Performance, accessibility and maintainability are non-negotiable." },
];



const milestones = [
  { year: "2021", title: "Weborix is born", desc: "Started as a two-person studio building lean websites for founders." },
  { year: "2022", title: "Performance practice", desc: "Launched our paid + organic growth practice for D2C and SaaS teams." },
  { year: "2023", title: "Brand & identity", desc: "Added a dedicated design studio for full brand systems." },
  { year: "2024", title: "180+ projects", desc: "Crossed 180 shipped projects across three continents." },
  { year: "2025", title: "Next chapter", desc: "Doubling down on AI-assisted growth and product engineering." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(hsl(var(--foreground)) 1.5px, transparent 1.5px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-dexon-yellow/30 blur-2xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-start gap-6 sm:gap-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-dexon-yellow" />
                About Weborix
              </span>

              <h1 className="font-black tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-[5rem]">
                A studio that
                <br />
                ships <span className="text-dexon-yellow">growth</span>,
                <br />
                not just slides.
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Weborix Technologies is a multi-disciplinary digital studio
                blending strategy, design and engineering — built for ambitious
                teams who want measurable outcomes, not vanity work.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:scale-105 transition-transform"
                >
                  Work with us <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border text-sm font-semibold hover:border-foreground/40 transition-colors"
                >
                  See our work
                </Link>
              </div>
            </div>

            {/* Stat collage */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-5">
              <div className="rounded-3xl bg-dexon-yellow p-6 sm:p-7 aspect-square flex flex-col justify-between">
                <Sparkles className="w-6 h-6" />
                <div>
                  <div className="text-3xl sm:text-4xl font-black">180+</div>
                  <div className="text-xs font-semibold mt-1 opacity-80">Projects shipped</div>
                </div>
              </div>
              <div className="rounded-3xl bg-card border border-border p-6 sm:p-7 aspect-square flex flex-col justify-between mt-8">
                <Users className="w-6 h-6 text-muted-foreground" />
                <div>
                  <div className="text-3xl sm:text-4xl font-black">60+</div>
                  <div className="text-xs font-semibold mt-1 text-muted-foreground">Happy clients</div>
                </div>
              </div>
              <div className="rounded-3xl bg-dexon-cyan/40 p-6 sm:p-7 aspect-square flex flex-col justify-between">
                <TrendingUp className="w-6 h-6" />
                <div>
                  <div className="text-3xl sm:text-4xl font-black">5.2x</div>
                  <div className="text-xs font-semibold mt-1 opacity-80">Avg. growth</div>
                </div>
              </div>
              <div className="rounded-3xl bg-dexon-green/50 p-6 sm:p-7 aspect-square flex flex-col justify-between mt-8">
                <Rocket className="w-6 h-6" />
                <div>
                  <div className="text-3xl sm:text-4xl font-black">4 yrs</div>
                  <div className="text-xs font-semibold mt-1 opacity-80">In business</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-16 sm:py-20 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-4">
                Our Mission
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
                Make great brands{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">measurably better</span>
                  <span className="absolute left-0 right-0 bottom-1 sm:bottom-2 h-2 sm:h-3 bg-dexon-yellow -z-0" />
                </span>
                .
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                We started Weborix because most agency work looks impressive in
                a deck and disappears in production. Our promise is simple — every
                engagement leaves you with a system you can keep running, growing
                and learning from long after we ship.
              </p>
              <p>
                Strategy informs design. Design informs engineering. Engineering
                feeds back into strategy. One studio, one accountable team, one
                outcome — your business doing better next quarter than it did this
                one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-4">
              What we believe
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
              Values that shape{" "}
              <span className="text-dexon-yellow">every project</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {values.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="group relative bg-card rounded-3xl p-6 sm:p-7 border border-border hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-dexon-yellow/30 mb-5 group-hover:bg-dexon-yellow transition-colors">
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="text-lg sm:text-xl font-black tracking-tight mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 sm:py-20 lg:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-14">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-background/60 mb-4">
                Our Journey
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
                From two laptops to a{" "}
                <span className="text-dexon-yellow">full studio</span>.
              </h2>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-background/20" />
            <div className="space-y-10 sm:space-y-12">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 items-start ${
                    i % 2 === 1 ? "sm:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className={`pl-12 sm:pl-0 ${i % 2 === 1 ? "sm:text-left sm:pl-12" : "sm:text-right sm:pr-12"}`}>
                    <span className="inline-block text-dexon-yellow text-2xl sm:text-3xl font-black tracking-tight">
                      {m.year}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight mt-1">{m.title}</h3>
                    <p className="text-sm text-background/70 mt-2 max-w-md sm:inline-block">
                      {m.desc}
                    </p>
                  </div>
                  <div />
                  <span className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-dexon-yellow ring-4 ring-foreground" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      
      <CtaSection />
      <Footer />
    </div>
  );
};

export default About;
