import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight, Home, TrendingUp, Search, Target, Mail, Share2, BarChart3,
  Megaphone, Sparkles, Rocket, MousePointer2, Eye, ThumbsUp, Play
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/* ---------- helpers ---------- */
const useCount = (target: number, suffix = "", duration = 1600) => {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        setV(Math.floor(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.disconnect();
    }, { threshold: 0.4 });
    io.observe(el); return () => io.disconnect();
  }, [target, duration]);
  return { ref, value: `${v.toLocaleString()}${suffix}` };
};

const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const { ref, value } = useCount(to, suffix);
  return <span ref={ref}>{value}</span>;
};

/* ---------- HERO ---------- */
const Hero = () => (
  <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-dexon-cream via-background to-background">
    <div className="absolute -top-32 -right-24 w-[28rem] h-[28rem] bg-dexon-green/40 animate-blob" />
    <div className="absolute top-40 -left-20 w-72 h-72 bg-dexon-yellow/40 animate-blob" style={{ animationDelay: "2s" }} />
    {/* dotted grid */}
    <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
      style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "22px 22px" }} />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <nav className="flex items-center gap-2 text-sm text-foreground/60 mb-8">
        <Link to="/" className="inline-flex items-center gap-1 hover:text-foreground"><Home className="w-3.5 h-3.5" />Home</Link>
        <span>/</span><span>Services</span><span>/</span>
        <span className="text-foreground font-semibold">Digital Marketing</span>
      </nav>

      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border shadow-sm mb-6">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dexon-green opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-dexon-green" /></span>
            <span className="text-xs font-bold uppercase tracking-wider">Marketing that scales</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] text-foreground">
            Turn clicks <br />
            <span className="inline-flex items-center gap-3 flex-wrap">
              into
              <span className="inline-flex items-center gap-2 bg-dexon-yellow rounded-full px-4 py-1">
                <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={2.5} />
              </span>
              <span className="relative">
                <span className="relative z-10">customers.</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8 Q50 1 100 6 T198 4" stroke="hsl(var(--dexon-green))" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </span>
          </h1>

          <p className="mt-7 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Strategy, paid ads, SEO, content & analytics — engineered together so every dollar you spend works harder than the last.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#offer" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground pl-7 pr-3 py-2.5 rounded-full text-sm sm:text-base font-semibold hover:scale-105 transition-transform">
              Grow my brand
              <span className="w-9 h-9 rounded-full bg-dexon-yellow text-foreground flex items-center justify-center group-hover:rotate-45 transition-transform"><ArrowUpRight className="w-4 h-4" /></span>
            </a>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center"><Play className="w-3.5 h-3.5 fill-foreground" /></span>
              90-sec intro
            </div>
          </div>
        </div>

        {/* floating cards collage */}
        <div className="lg:col-span-5 relative h-[460px] sm:h-[520px] hidden md:block">
          {/* big stat card */}
          <div className="absolute top-0 right-0 w-64 bg-card rounded-3xl p-5 shadow-xl ring-1 ring-border animate-float-slow">
            <div className="flex items-center justify-between text-xs text-muted-foreground"><span>ROAS</span><span className="text-dexon-green font-bold">+128%</span></div>
            <div className="text-4xl font-black mt-1"><Counter to={12} suffix="x" /></div>
            <svg viewBox="0 0 200 60" className="mt-2 w-full">
              <defs><linearGradient id="g1" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="hsl(var(--dexon-green))" stopOpacity="0.5"/><stop offset="1" stopColor="hsl(var(--dexon-green))" stopOpacity="0"/></linearGradient></defs>
              <path d="M0 50 L25 40 L50 45 L75 30 L100 35 L125 20 L150 25 L175 10 L200 15 L200 60 L0 60 Z" fill="url(#g1)"/>
              <path d="M0 50 L25 40 L50 45 L75 30 L100 35 L125 20 L150 25 L175 10 L200 15" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>

          {/* impressions */}
          <div className="absolute top-44 left-0 w-56 bg-dexon-yellow rounded-3xl p-5 shadow-xl animate-float">
            <Eye className="w-6 h-6" />
            <div className="text-3xl font-black mt-2"><Counter to={40} suffix="M+" /></div>
            <p className="text-xs font-bold uppercase tracking-wider mt-1">Impressions</p>
          </div>

          {/* circle progress */}
          <div className="absolute bottom-0 right-6 w-44 bg-card rounded-3xl p-5 shadow-xl ring-1 ring-border animate-float-slow" style={{ animationDelay: "1.4s" }}>
            <div className="relative w-24 h-24 mx-auto">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="hsl(var(--muted))" strokeWidth="3"/>
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="hsl(var(--dexon-green))" strokeWidth="3" strokeLinecap="round" strokeDasharray="98 100"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-black">98%</div>
            </div>
            <p className="text-center text-xs font-bold uppercase mt-2">Retention</p>
          </div>

          {/* like badge */}
          <div className="absolute bottom-32 left-8 bg-dexon-green rounded-2xl px-4 py-3 shadow-xl animate-float flex items-center gap-2" style={{ animationDelay: "0.6s" }}>
            <ThumbsUp className="w-5 h-5" />
            <span className="font-bold text-sm">+2.4k likes</span>
          </div>

          {/* cursor */}
          <div className="absolute top-32 right-44 animate-float-slow" style={{ animationDelay: "0.3s" }}>
            <MousePointer2 className="w-7 h-7 fill-foreground" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- WHAT WE OFFER (bento) ---------- */
const offerings = [
  { icon: Search, title: "SEO Optimization", desc: "Rank higher with technical SEO, keyword strategy, and authoritative link building.", bg: "bg-dexon-cream", span: "lg:col-span-2", accent: "bg-dexon-green/60" },
  { icon: Target, title: "Paid Ads", desc: "Google, Meta, TikTok, LinkedIn — high-ROAS campaigns by audience and budget.", bg: "bg-dexon-yellow", span: "", accent: "bg-card" },
  { icon: Share2, title: "Social Media", desc: "Calendars, community & creative that turn followers into loyal buyers.", bg: "bg-card ring-1 ring-border", span: "", accent: "bg-dexon-cyan/60" },
  { icon: Mail, title: "Email Lifecycle", desc: "Automations, newsletters & segmented flows that print repeat revenue.", bg: "bg-dexon-green/70", span: "lg:col-span-2", accent: "bg-card" },
  { icon: Megaphone, title: "Content & Copy", desc: "Blogs, landing pages, ad copy & brand voice that ranks and converts.", bg: "bg-dexon-cyan/40", span: "", accent: "bg-dexon-yellow" },
  { icon: BarChart3, title: "Analytics & CRO", desc: "GA4, dashboards, A/B testing — every visitor worth more than the last.", bg: "bg-card ring-1 ring-border", span: "lg:col-span-2", accent: "bg-dexon-green" },
];

const Offer = () => (
  <section id="offer" className="py-20 lg:py-28 bg-background relative">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground mb-3">What we offer</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
            A full-stack <br /><span className="bg-dexon-green/70 px-3 rounded-2xl">growth engine.</span>
          </h2>
        </div>
        <p className="max-w-sm text-muted-foreground">Six channels working as one system — not six agencies pulling in six directions.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(220px,auto)] gap-5">
        {offerings.map((o, i) => {
          const Icon = o.icon;
          return (
            <div key={i} className={`${o.bg} ${o.span} group relative rounded-3xl p-7 overflow-hidden hover:-translate-y-2 transition-all duration-500`}>
              <div className={`absolute -bottom-12 -right-12 w-40 h-40 ${o.accent} rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700`} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-card rounded-2xl flex items-center justify-center shadow-sm mb-5 group-hover:rotate-6 transition-transform">
                  <Icon className="w-6 h-6" strokeWidth={2.2} />
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-2">{o.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed max-w-md">{o.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ---------- PROCESS (growth curve timeline) ---------- */
const steps = [
  { t: "Discover & Audit", d: "We dig into your business, audience & current marketing to find the biggest growth gaps.", icon: Search },
  { t: "Strategy & Plan", d: "Channel mix, KPIs, budgets & creative direction — agreed and ready to execute.", icon: Target },
  { t: "Launch & Optimise", d: "We launch, monitor daily and iterate weekly — on real data, never guesses.", icon: Rocket },
  { t: "Scale & Report", d: "Once we find what works, we scale it hard — and report every result transparently.", icon: TrendingUp },
];

const Process = () => (
  <section className="py-20 lg:py-28 bg-dexon-dark text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
      <div className="text-center mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-dexon-yellow mb-3">Our process</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">From audit to <span className="text-dexon-yellow">ROI</span> in 4 moves.</h2>
      </div>

      {/* curve */}
      <div className="relative">
        <svg viewBox="0 0 1000 200" className="absolute inset-x-0 top-10 w-full hidden lg:block" preserveAspectRatio="none">
          <path d="M50 160 Q280 160 380 100 T720 50 T960 20" fill="none" stroke="hsl(var(--dexon-yellow))" strokeWidth="3" strokeDasharray="6 8" />
        </svg>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="relative">
                <div className="relative bg-card text-foreground rounded-3xl p-6 hover:-translate-y-2 transition-transform duration-500 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl font-black text-dexon-yellow leading-none">0{i + 1}</span>
                    <span className="w-12 h-12 rounded-full bg-dexon-yellow flex items-center justify-center"><Icon className="w-5 h-5" /></span>
                  </div>
                  <h3 className="text-lg font-black mb-2">{s.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

/* ---------- CHANNELS marquee ---------- */
import LogoMarquee from "@/components/LogoMarquee";
const channelLogos = [
  { name: "Google Ads", slug: "googleads" },
  { name: "Meta Ads", slug: "meta" },
  { name: "TikTok", slug: "tiktok" },
  { name: "LinkedIn", slug: "linkedin" },
  { name: "SEMrush", slug: "semrush" },
  { name: "Ahrefs", slug: "ahrefs" },
  { name: "Google Analytics", slug: "googleanalytics" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Mailchimp", slug: "mailchimp" },
  { name: "Klaviyo", slug: "klaviyo" },
  { name: "Hotjar", slug: "hotjar" },
  { name: "Looker", slug: "looker" },
];
const Channels = () => (
  <LogoMarquee eyebrow="Channels & tools we live in" items={channelLogos} variant="cream" />
);

/* ---------- FAQ chat-bubble ---------- */
const faqs = [
  { q: "How long until I see results?", a: "Paid ads can drive results within days. SEO and content typically take 3–6 months to compound, but the gains are long-lasting." },
  { q: "Do you require long contracts?", a: "Nope. All plans are month-to-month — we earn your business every single month." },
  { q: "Will I own my ad accounts and data?", a: "Always. We build everything inside your accounts so you keep full ownership of assets and history." },
  { q: "Do you handle creative and copy?", a: "Yes — designers, copywriters and video editors are all in-house, included in every plan." },
  { q: "Can I upgrade or downgrade?", a: "Anytime. Just give us 14 days notice and we'll adjust your plan with zero hidden fees." },
];

const FAQ = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <div className="text-center mb-12">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground mb-3">FAQ</p>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight">Real questions, <span className="bg-dexon-yellow px-3 rounded-2xl">honest answers.</span></h2>
      </div>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`i${i}`} className="border-b-0 bg-dexon-cream rounded-3xl px-6 sm:px-7 hover:bg-dexon-yellow/40 transition-colors">
            <AccordionTrigger className="text-left text-base sm:text-lg font-bold hover:no-underline py-5 [&[data-state=open]>div]:bg-dexon-yellow [&[data-state=open]>div]:rotate-45">
              <div className="ml-auto order-2 w-8 h-8 rounded-full bg-card flex items-center justify-center transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <span className="order-1 flex-1 pr-4">{f.q}</span>
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base text-foreground/70 leading-relaxed pb-6 pl-1">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

/* ---------- STATS ---------- */
const Stats = () => (
  <section className="py-16 bg-dexon-yellow">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[{v:250,s:"+",l:"Campaigns launched"},{v:12,s:"x",l:"Average ROAS"},{v:98,s:"%",l:"Client retention"},{v:40,s:"M+",l:"Impressions delivered"}].map((s,i)=>(
          <div key={i} className="text-center sm:text-left">
            <div className="text-5xl lg:text-6xl font-black leading-none"><Counter to={s.v} suffix={s.s}/></div>
            <p className="mt-2 text-sm font-semibold text-foreground/70">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DigitalMarketing = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Hero />
    <Offer />
    <Process />
    <Channels />
    <Stats />
    <FAQ />
    <CtaSection />
    <Footer />
  </div>
);

export default DigitalMarketing;
