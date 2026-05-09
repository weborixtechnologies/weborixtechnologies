import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight, Home, Palette, Layers, PenTool, Image as ImageIcon,
  Sparkles, Layout, Brush, Scissors, Pipette, Plus
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";

/* ---------- HERO: artistic collage ---------- */
const Hero = () => (
  <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden bg-dexon-cream">
    {/* paint splashes */}
    <div className="absolute -top-20 -right-10 w-96 h-96 bg-dexon-yellow animate-blob" />
    <div className="absolute top-32 -left-24 w-80 h-80 bg-dexon-cyan/60 animate-blob" style={{ animationDelay: "2.5s" }} />
    <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-dexon-green/50 animate-blob" style={{ animationDelay: "5s" }} />

    {/* paper texture dots */}
    <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
      style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "18px 18px" }} />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <nav className="flex items-center gap-2 text-sm text-foreground/60 mb-8">
        <Link to="/" className="inline-flex items-center gap-1 hover:text-foreground"><Home className="w-3.5 h-3.5" />Home</Link>
        <span>/</span><span>Services</span><span>/</span><span className="text-foreground font-semibold">Graphics Design</span>
      </nav>

      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 animate-fade-up relative">
          <div className="inline-flex items-center gap-2 bg-card border border-border px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <Palette className="w-3.5 h-3.5" />
            <span className="text-xs font-bold uppercase tracking-wider">Design Studio</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight">
            <span className="inline-block animate-wiggle origin-bottom-left">Visuals</span>{" "}
            that
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">make people</span>
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 14" fill="none">
                <path d="M2 10 Q60 2 120 8 T198 6" stroke="hsl(var(--dexon-yellow))" strokeWidth="8" strokeLinecap="round"/>
              </svg>
            </span>
            <br />
            <span className="inline-flex items-center gap-3 flex-wrap">
              <span className="inline-block w-12 h-12 sm:w-14 sm:h-14 bg-dexon-cyan rounded-2xl rotate-12" />
              stop scrolling.
              <span className="inline-block w-10 h-10 sm:w-12 sm:h-12 bg-dexon-green rounded-full" />
            </span>
          </h1>

          <p className="mt-7 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Brand identities, packaging, social creatives, illustrations & motion — beautiful, on-brand visuals that make your business impossible to ignore.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#offer" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground pl-7 pr-3 py-2.5 rounded-full text-sm sm:text-base font-semibold hover:scale-105 transition-transform">
              See what we make
              <span className="w-9 h-9 rounded-full bg-dexon-yellow text-foreground flex items-center justify-center group-hover:rotate-45 transition-transform"><ArrowUpRight className="w-4 h-4" /></span>
            </a>
            {/* color palette */}
            <div className="flex items-center gap-2 bg-card rounded-full p-2 shadow-sm border border-border">
              {["bg-dexon-yellow","bg-dexon-cyan","bg-dexon-green","bg-foreground","bg-pink-300"].map((c,i)=>(
                <span key={i} className={`${c} w-7 h-7 rounded-full ring-2 ring-card hover:scale-125 transition-transform`} style={{transitionDelay:`${i*40}ms`}}/>
              ))}
              <Pipette className="w-4 h-4 mx-2 text-foreground/60"/>
            </div>
          </div>
        </div>

        {/* artistic collage */}
        <div className="lg:col-span-5 relative h-[460px] sm:h-[540px] hidden md:block">
          {/* polaroid 1 */}
          <div className="absolute top-0 left-4 bg-card p-3 pb-10 shadow-2xl rotate-[-8deg] hover:rotate-0 transition-transform duration-500 w-48">
            <div className="w-full h-44 bg-gradient-to-br from-dexon-yellow to-dexon-green rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-6xl font-black text-foreground/80">Aa</div>
            </div>
            <p className="text-xs font-bold text-center mt-2 font-mono">brand_v2.png</p>
          </div>

          {/* polaroid 2 */}
          <div className="absolute top-12 right-0 bg-card p-3 pb-10 shadow-2xl rotate-[7deg] hover:rotate-0 transition-transform duration-500 w-44 z-10">
            <div className="w-full h-40 bg-foreground rounded-sm flex items-center justify-center">
              <div className="grid grid-cols-3 gap-1.5">
                {[...Array(9)].map((_,i)=>(<span key={i} className={`w-4 h-4 ${i%3===0?'bg-dexon-yellow':i%3===1?'bg-dexon-cyan':'bg-dexon-green'} ${i%2?'rounded-full':'rounded-sm'}`}/>))}
              </div>
            </div>
            <p className="text-xs font-bold text-center mt-2 font-mono">poster.jpg</p>
          </div>

          {/* sticky note */}
          <div className="absolute top-56 left-0 bg-dexon-yellow p-4 shadow-xl rotate-[-4deg] w-48 animate-float">
            <PenTool className="w-5 h-5 mb-1"/>
            <p className="text-sm font-bold leading-snug">"Make it pop, but also calm."</p>
            <p className="text-xs mt-2 text-foreground/60 font-mono">— every client, ever</p>
          </div>

          {/* swatch card */}
          <div className="absolute bottom-12 right-6 bg-card rounded-2xl p-4 shadow-xl rotate-[5deg] w-52 animate-float-slow">
            <p className="text-xs font-bold uppercase mb-3">Palette · 2026</p>
            <div className="grid grid-cols-4 gap-2">
              <div className="aspect-square bg-dexon-yellow rounded-md"/>
              <div className="aspect-square bg-dexon-cyan rounded-md"/>
              <div className="aspect-square bg-dexon-green rounded-md"/>
              <div className="aspect-square bg-foreground rounded-md"/>
            </div>
          </div>

          {/* squiggle */}
          <svg className="absolute top-40 right-1/2 w-24 h-24" viewBox="0 0 100 100" fill="none">
            <path d="M10 50 Q30 10 50 50 T90 50" stroke="hsl(var(--foreground))" strokeWidth="4" strokeLinecap="round"/>
          </svg>

          {/* star */}
          <Sparkles className="absolute bottom-0 left-12 w-10 h-10 text-dexon-yellow animate-spinslow"/>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- WHAT WE OFFER: rotated polaroid cards ---------- */
const offerings = [
  { icon: Sparkles, title: "Logo & Branding", desc: "Identity systems — logo, type, colour, voice — built to scale and last for years.", bg: "bg-dexon-yellow", rot: "-rotate-2" },
  { icon: Layout, title: "UI / UX Design", desc: "Web & mobile interfaces in Figma with usability, accessibility & conversion at the core.", bg: "bg-dexon-cyan/70", rot: "rotate-2" },
  { icon: ImageIcon, title: "Social Creatives", desc: "Scroll-stopping posts, reels covers, story templates & ad creatives for your grid.", bg: "bg-dexon-green/80", rot: "-rotate-1" },
  { icon: Layers, title: "Print & Packaging", desc: "Cards, brochures, packaging, signage — print-ready files that look gorgeous IRL.", bg: "bg-card", rot: "rotate-1" },
  { icon: PenTool, title: "Illustration", desc: "Custom illustrations, icon sets & characters that give your brand personality.", bg: "bg-dexon-yellow/70", rot: "rotate-2" },
  { icon: Brush, title: "Motion Graphics", desc: "Animated logos, explainers & short-form motion for ads, social & product pages.", bg: "bg-dexon-cyan", rot: "-rotate-2" },
];

const Offer = () => (
  <section id="offer" className="py-20 lg:py-28 bg-background relative overflow-hidden">
    {/* corner shapes */}
    <div className="absolute top-20 left-10 w-16 h-16 border-4 border-foreground rounded-full hidden lg:block"/>
    <div className="absolute top-40 right-20 w-12 h-12 bg-dexon-yellow rotate-45 hidden lg:block"/>
    <div className="absolute bottom-32 left-20 w-20 h-20 bg-dexon-cyan/50 rounded-full hidden lg:block animate-float"/>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
      <div className="text-center mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground mb-3">What we make</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
          Design across <br />
          <span className="inline-flex items-center gap-3">
            every <span className="bg-dexon-yellow rounded-2xl px-4 -rotate-2 inline-block">touchpoint.</span>
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {offerings.map((o, i) => {
          const Icon = o.icon;
          return (
            <div key={i} className={`${o.bg} ${o.rot} group p-6 sm:p-8 rounded-[2rem] shadow-xl ring-1 ring-foreground/5 hover:rotate-0 hover:-translate-y-3 transition-all duration-500 cursor-default`}>
              {/* tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-foreground/15 rounded-sm" />
              <div className="w-14 h-14 bg-card/80 rounded-2xl flex items-center justify-center shadow-md mb-5 group-hover:rotate-12 transition-transform">
                <Icon className="w-7 h-7" strokeWidth={2.2} />
              </div>
              <h3 className="text-2xl font-black tracking-tight mb-3">{o.title}</h3>
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">{o.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ---------- PROCESS: sketch arrows ---------- */
const steps = [
  { t: "Brief & Mood", d: "We dig into goals, audience & references to align on a clear creative direction.", color: "bg-dexon-yellow", icon: Pipette },
  { t: "Concept & Sketch", d: "Multiple directions explored, then narrowed to the strongest two for refinement.", color: "bg-dexon-cyan", icon: PenTool },
  { t: "Design & Refine", d: "High-fidelity designs with rounds of feedback until every detail feels exactly right.", color: "bg-dexon-green", icon: Brush },
  { t: "Deliver & Document", d: "Source files, exports & brand guidelines packaged neatly for your team forever.", color: "bg-card", icon: Scissors },
];

const Process = () => (
  <section className="py-20 lg:py-28 bg-dexon-cream relative overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="text-center mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground mb-3">Our process</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
          From scribble to <span className="relative inline-block"><span className="relative z-10">masterpiece.</span><span className="absolute bottom-1 left-0 right-0 h-3 bg-dexon-cyan/70 -z-0"/></span>
        </h2>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="relative">
              {/* hand-drawn arrow */}
              {i < steps.length - 1 && (
                <svg className="absolute top-12 -right-8 w-16 h-12 hidden lg:block text-foreground/40" viewBox="0 0 60 40" fill="none">
                  <path d="M5 20 Q25 5 50 20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round"/>
                  <path d="M44 14 L50 20 L44 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </svg>
              )}
              <div className={`${s.color} relative rounded-[2rem] p-6 ring-1 ring-foreground/10 hover:-translate-y-2 transition-transform duration-500 shadow-md`}>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-6xl font-black text-foreground/15 leading-none">0{i + 1}</span>
                  <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-md"><Icon className="w-5 h-5"/></div>
                </div>
                <h3 className="text-xl font-black mb-2">{s.t}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{s.d}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ---------- TOOLS marquee ---------- */
import LogoMarquee from "@/components/LogoMarquee";
const toolLogos = [
  { name: "Figma", slug: "figma" },
  { name: "Photoshop", slug: "adobephotoshop" },
  { name: "Illustrator", slug: "adobeillustrator" },
  { name: "InDesign", slug: "adobeindesign" },
  { name: "After Effects", slug: "adobeaftereffects" },
  { name: "Premiere Pro", slug: "adobepremierepro" },
  { name: "Procreate", slug: "procreate" },
  { name: "Blender", slug: "blender" },
  { name: "Framer", slug: "framer" },
  { name: "Canva", slug: "canva" },
];
const Tools = () => (
  <LogoMarquee eyebrow="Tools we love" items={toolLogos} variant="light" reverse />
);

/* ---------- FAQ: folder cards ---------- */
const faqs = [
  { q: "How many revisions do I get?", a: "Unlimited. We'll keep refining until you're genuinely thrilled — not just polite about it." },
  { q: "Will I get the source files?", a: "Yes. You receive editable Figma, AI, PSD or InDesign files plus exports in every format you need." },
  { q: "Can you match my existing brand?", a: "Of course. Just share your brand guidelines (or current assets) and we'll work within them perfectly." },
  { q: "How fast can you turn things around?", a: "Single creatives ship in 1–3 business days. Bigger projects depend on scope — we always agree a timeline upfront." },
  { q: "Do you do print production too?", a: "We deliver print-ready files and can manage production with our trusted print partners on request." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  const colors = ["bg-dexon-yellow","bg-dexon-cyan/70","bg-dexon-green/70","bg-card","bg-dexon-yellow/70"];
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground mb-3">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">Designer's <span className="inline-block bg-dexon-cyan rounded-2xl px-3 -rotate-1">notebook.</span></h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`${colors[i % colors.length]} rounded-3xl ring-1 ring-foreground/10 shadow-lg overflow-hidden transition-all`}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full text-left px-6 sm:px-8 py-6 flex items-center gap-4">
                  <span className="text-2xl font-black text-foreground/30 font-mono">0{i + 1}</span>
                  <span className="flex-1 text-base sm:text-lg font-bold">{f.q}</span>
                  <span className={`w-10 h-10 rounded-full bg-card flex items-center justify-center transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}>
                    <Plus className="w-5 h-5"/>
                  </span>
                </button>
                <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 sm:px-8 pb-6 pl-16 text-sm sm:text-base text-foreground/80 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const GraphicsDesign = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Hero />
    <Offer />
    <Process />
    <Tools />
    <FAQ />
    <CtaSection />
    <Footer />
  </div>
);

export default GraphicsDesign;
