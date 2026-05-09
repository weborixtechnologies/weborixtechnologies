import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight, Home, Code2, Smartphone, Globe, ShoppingBag, Zap, Wrench,
  Terminal, GitBranch, Database, Layers, Plus, Minus
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";

/* ---------- HERO: code window + browser mock ---------- */
const codeLines = [
  { c: "text-purple-400", t: "const" }, { c: "text-cyan-300", t: " site " },
  { c: "text-foreground/70", t: "= " }, { c: "text-yellow-300", t: "build" },
  { c: "text-foreground/70", t: "({" },
];

const Hero = () => {
  const [typed, setTyped] = useState("");
  const full = `<Website fast scalable accessible />`;
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++; setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden bg-dexon-cream">
      {/* grid bg */}
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-dexon-cyan/40 animate-blob" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-dexon-yellow/40 animate-blob" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <nav className="flex items-center gap-2 text-sm text-foreground/60 mb-8">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-foreground"><Home className="w-3.5 h-3.5" />Home</Link>
          <span>/</span><span>Services</span><span>/</span><span className="text-foreground font-semibold">Web Development</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-dexon-dark text-dexon-yellow px-4 py-1.5 rounded-full mb-6 font-mono text-xs">
              <Terminal className="w-3.5 h-3.5" /> npm run build:awesome
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight">
              We code <br />
              <span className="relative inline-block">
                <span className="relative z-10">websites</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 sm:h-4 bg-dexon-cyan/70 -z-0" />
              </span>{" "}
              <br />
              <span className="text-foreground/30">that don't suck.</span>
            </h1>

            <p className="mt-7 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Lightning-fast landing pages, complex web apps, e-commerce stores — built in modern React/Next.js with a 95+ Lighthouse score baked in.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a href="#offer" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground pl-7 pr-3 py-2.5 rounded-full font-semibold hover:scale-105 transition-transform">
                Start a project
                <span className="w-9 h-9 rounded-full bg-dexon-cyan text-foreground flex items-center justify-center group-hover:rotate-45 transition-transform"><ArrowUpRight className="w-4 h-4" /></span>
              </a>
              <div className="flex items-center gap-3 text-sm font-semibold">
                <div className="flex -space-x-2">
                  {["bg-dexon-yellow","bg-dexon-cyan","bg-dexon-green"].map((c,i)=><span key={i} className={`${c} w-8 h-8 rounded-full border-2 border-background`}/>)}
                </div>
                180+ sites shipped
              </div>
            </div>
          </div>

          {/* Code window */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#0d0f14] ring-1 ring-white/10">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-white/40 text-xs font-mono">~/dexon/website.tsx</span>
              </div>
              <pre className="p-5 sm:p-6 text-xs sm:text-sm font-mono leading-relaxed text-white/85 overflow-x-auto">
{`import { Lovable } from '@dexon/ui';

`}<span className="text-purple-400">export default</span>{" "}
<span className="text-cyan-300">function</span>{" "}
<span className="text-yellow-300">Project</span>{`() {
  `}<span className="text-purple-400">return</span>{` (
    `}<span className="text-pink-400">{typed}</span><span className="animate-type-caret text-pink-400">|</span>{`
  );
}`}
              </pre>
              {/* terminal bottom */}
              <div className="border-t border-white/10 bg-black/40 px-5 py-3 font-mono text-xs flex items-center gap-2">
                <span className="text-green-400">▲</span>
                <span className="text-white/50">build complete</span>
                <span className="ml-auto text-dexon-yellow">98 / 100</span>
              </div>
            </div>

            {/* floating browser */}
            <div className="absolute -bottom-8 -left-6 w-56 bg-card rounded-2xl shadow-xl ring-1 ring-border overflow-hidden hidden sm:block animate-float-slow">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-muted">
                <span className="w-2 h-2 rounded-full bg-foreground/30"/><span className="w-2 h-2 rounded-full bg-foreground/30"/><span className="w-2 h-2 rounded-full bg-foreground/30"/>
                <span className="ml-2 text-[10px] text-foreground/50 font-mono">dexon.studio</span>
              </div>
              <div className="p-3 space-y-1.5">
                <div className="h-2 w-2/3 bg-foreground/15 rounded-full"/>
                <div className="h-2 w-full bg-foreground/10 rounded-full"/>
                <div className="h-12 w-full bg-dexon-cyan/60 rounded-lg mt-2"/>
                <div className="flex gap-1.5 mt-2"><div className="h-6 flex-1 bg-dexon-yellow rounded-md"/><div className="h-6 w-10 bg-foreground/10 rounded-md"/></div>
              </div>
            </div>

            {/* lighthouse badge */}
            <div className="absolute -top-5 -right-3 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-dexon-yellow shadow-xl flex flex-col items-center justify-center font-black animate-spinslow">
              <span className="text-[10px] sm:text-xs">SCORE</span>
              <span className="text-xl sm:text-2xl">98</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- WHAT WE OFFER: file-tree style ---------- */
const services = [
  { icon: Globe, title: "Marketing Websites", desc: "Beautiful, fast, conversion-optimised sites that capture leads 24/7.", tag: "/sites" },
  { icon: ShoppingBag, title: "E-commerce Stores", desc: "Shopify, WooCommerce or custom — checkout that doesn't lose customers.", tag: "/store" },
  { icon: Code2, title: "Custom Web Apps", desc: "SaaS dashboards, internal tools & portals built in React + Next.js.", tag: "/app" },
  { icon: Smartphone, title: "Mobile-First Design", desc: "Designed mobile-first then scaled up — that's where users actually live.", tag: "/mobile" },
  { icon: Zap, title: "Performance & SEO", desc: "Core Web Vitals, semantic HTML, structured data — Google will love you.", tag: "/perf" },
  { icon: Wrench, title: "Maintenance & Support", desc: "Updates, security patches, content edits on a flexible monthly retainer.", tag: "/care" },
];

const Offer = () => (
  <section id="offer" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground mb-3 font-mono">{"// what_we_offer.ts"}</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
            Every type of <br /><span className="bg-dexon-cyan/70 px-3 rounded-2xl">web project.</span>
          </h2>
        </div>
        <p className="max-w-sm text-muted-foreground">From a one-page promo to a full SaaS platform — we ship it modular, accessible & blazingly fast.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-foreground transition-all duration-300 hover:-translate-y-2">
              {/* IDE tab */}
              <div className="flex items-center gap-2 px-5 py-3 bg-muted border-b border-border font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-dexon-cyan" />
                <span className="text-foreground/60">{s.tag}</span>
                <span className="ml-auto text-foreground/30">●</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-dexon-cyan/40 rounded-xl flex items-center justify-center group-hover:bg-dexon-cyan group-hover:rotate-6 transition-all">
                    <Icon className="w-6 h-6" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black tracking-tight">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ---------- PROCESS: git commits ---------- */
const steps = [
  { hash: "a1f3c2d", t: "Discovery & Scope", d: "Map goals, audience, technical needs & timeline so there are zero surprises later.", icon: GitBranch },
  { hash: "b9e4a7f", t: "Design & Prototype", d: "High-fidelity Figma, interactive prototypes & sign-off before a single line of code.", icon: Layers },
  { hash: "c2d8b1e", t: "Build & Test", d: "Modular code, QA across browsers/devices, weekly progress in a staging URL.", icon: Code2 },
  { hash: "d7a5e9c", t: "Launch & Support", d: "Smooth deploy, analytics setup, team training & 30 days of free aftercare.", icon: Zap },
];

const Process = () => (
  <section className="py-20 lg:py-28 bg-dexon-cream">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
      <div className="text-center mb-14">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground mb-3 font-mono">{"// our_process"}</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
          Clean commits, <br /><span className="relative"><span className="relative z-10">smooth ships.</span><span className="absolute bottom-1 left-0 right-0 h-3 bg-dexon-cyan/70 -z-0"/></span>
        </h2>
      </div>

      <div className="relative pl-8 sm:pl-12">
        {/* vertical line */}
        <div className="absolute left-2 sm:left-4 top-2 bottom-2 w-[2px] bg-foreground/15" />
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="relative mb-8 last:mb-0 group">
              <div className="absolute -left-7 sm:-left-9 top-3 w-7 h-7 rounded-full bg-dexon-dark border-4 border-dexon-cream flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-dexon-cyan" />
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-foreground transition-all hover:translate-x-1">
                <div className="flex items-center gap-3 mb-3 font-mono text-xs">
                  <span className="text-dexon-green font-bold">commit {s.hash}</span>
                  <span className="text-muted-foreground">step 0{i + 1}</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dexon-cyan/40 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6"/>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black mb-1">{s.t}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ---------- TECH STACK ---------- */
import LogoMarquee from "@/components/LogoMarquee";
const stackLogos = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Vite", slug: "vite" },
  { name: "Shopify", slug: "shopify" },
  { name: "WordPress", slug: "wordpress" },
  { name: "Supabase", slug: "supabase" },
  { name: "Stripe", slug: "stripe" },
  { name: "Vercel", slug: "vercel" },
  { name: "Figma", slug: "figma" },
];
const Stack = () => (
  <div className="relative">
    <p className="sr-only">// our_stack.json</p>
    <LogoMarquee eyebrow="// our_stack.json" items={stackLogos} variant="dark" />
  </div>
);

/* ---------- FAQ: IDE collapsible ---------- */
const faqs = [
  { q: "How long does a typical project take?", a: "Landing pages: ~2 weeks. Full business sites: 4–8 weeks. Web apps depend on scope — we'll give a precise timeline after discovery." },
  { q: "Will I be able to edit content myself?", a: "Yes. Every site ships with a friendly CMS (Sanity, Contentful, WordPress or Shopify) so your team updates copy without us." },
  { q: "Do you do hosting?", a: "We deploy to Vercel, Netlify or Shopify. We can manage hosting for you or hand it over." },
  { q: "Can you redesign my existing site?", a: "Absolutely. Most of our work is redesigns — we'll preserve your SEO, migrate content & modernise everything else." },
  { q: "What about ongoing changes after launch?", a: "We offer monthly care plans with hours rolled over, plus on-demand pricing for one-off changes." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground mb-3 font-mono">{"// faq.md"}</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">Things devs <span className="bg-dexon-cyan/70 px-3 rounded-2xl">always ask.</span></h2>
        </div>
        <div className="bg-[#0d0f14] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-red-400"/><span className="w-3 h-3 rounded-full bg-yellow-400"/><span className="w-3 h-3 rounded-full bg-green-400"/>
            <span className="ml-3 text-white/40 text-xs font-mono">faq.md</span>
          </div>
          <div className="divide-y divide-white/10">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button onClick={() => setOpen(isOpen ? null : i)} className="w-full text-left px-5 sm:px-7 py-5 flex items-center gap-4 hover:bg-white/5 transition-colors">
                    <span className="font-mono text-xs text-dexon-cyan">0{i + 1}</span>
                    <span className="flex-1 text-white text-base sm:text-lg font-bold">{f.q}</span>
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                      {isOpen ? <Minus className="w-4 h-4"/> : <Plus className="w-4 h-4"/>}
                    </span>
                  </button>
                  <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 sm:px-7 pb-6 pl-14 text-sm sm:text-base text-white/70 leading-relaxed font-mono">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const WebDevelopment = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Hero />
    <Offer />
    <Process />
    <Stack />
    <FAQ />
    <CtaSection />
    <Footer />
  </div>
);

export default WebDevelopment;
