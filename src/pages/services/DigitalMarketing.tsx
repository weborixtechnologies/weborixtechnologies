import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Home, Search, Target, Share2, Mail, PenSquare, BarChart3,
  TrendingUp, Rocket, Sparkles, Zap, Plus, Minus, MousePointer2, Eye, ThumbsUp,
  Building2, ShoppingBag, GraduationCap, HeartPulse, Utensils, Briefcase, Palette, Plane,
  ClipboardCheck, LineChart, Megaphone, Award
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import heroImg from "@/assets/marketing-hero.png";
import seoImg from "@/assets/marketing-seo.png";
import adsImg from "@/assets/marketing-ads.png";
import socialImg from "@/assets/marketing-social.png";
import emailImg from "@/assets/marketing-email.png";
import contentImg from "@/assets/marketing-content.png";

/* =========================================================
   HERO
========================================================= */
const Hero = () => (
  <section className="bg-[#f5f3ee] pt-20 sm:pt-24 lg:pt-28 pb-6 lg:pb-8 px-4 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-black/50 mb-5">
        <Link to="/" className="inline-flex items-center gap-1 hover:text-black"><Home className="w-3.5 h-3.5" />Home</Link>
        <span>/</span><span>Services</span><span>/</span>
        <span className="text-black font-semibold">Digital Marketing</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
        {/* LEFT BIG CARD */}
        <div className="lg:col-span-2 relative rounded-[36px] bg-[#ece9e4] p-6 sm:p-8 lg:p-9 min-h-[440px] flex flex-col border border-black/5 overflow-hidden">
          <div className="absolute top-[-120px] right-[-120px] w-[360px] h-[360px] bg-[#9be3a0]/40 rounded-full blur-3xl" />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white/70 backdrop-blur-sm w-fit relative z-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3aa14b] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3aa14b]" />
            </span>
            <span className="text-[11px] font-semibold tracking-wide text-black/70">Performance Marketing </span>
          </div>

          <div className="mt-6 max-w-[700px] relative z-10">
            <h1 className="text-[2.25rem] sm:text-[3.2rem] lg:text-[3.8rem] leading-[0.95] tracking-[-0.05em] font-black text-[#111]">
              We turn ad spend into
              <br />
              <span className="text-[#1f7a30] underline decoration-[#9be3a0] underline-offset-4">predictable revenue.</span>
            </h1>
            <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-black/55 max-w-xl">
              SEO, paid ads, social, email and analytics — engineered together so every
              dollar you spend works harder than the last.
            </p>
          </div>

          <div className="mt-6 flex flex-nowrap sm:flex-wrap gap-3 relative z-10">
            <Link
              to="/contact"
              className="flex-1 sm:flex-none h-12 px-4 sm:px-6 inline-flex items-center justify-center rounded-2xl bg-black text-white text-sm font-semibold hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 whitespace-nowrap"
            >
              Get a free audit
            </Link>

            <a
              href="#offer"
              className="flex-1 sm:flex-none h-12 px-4 sm:px-6 inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              See what we do
            </a>
          </div>

          <div className="mt-auto pt-6 grid grid-cols-3 gap-3 sm:gap-4 relative z-10">
            <div className="rounded-2xl sm:rounded-3xl bg-white/70 backdrop-blur-sm border border-white/60 p-4">
              <h4 className="text-xl sm:text-2xl font-black text-[#111]">12x</h4>
              <p className="mt-1 text-xs text-black/50 font-medium">Avg ROAS</p>
            </div>
            <div className="rounded-2xl sm:rounded-3xl bg-[#dfe9e2]/80 backdrop-blur-sm border border-white/60 p-4">
              <h4 className="text-xl sm:text-2xl font-black text-[#111]">250+</h4>
              <p className="mt-1 text-xs text-black/50 font-medium">Campaigns</p>
            </div>
            <div className="rounded-2xl sm:rounded-3xl bg-[#f5e7a8]/70 backdrop-blur-sm border border-[#e3c85d]/20 p-4">
              <h4 className="text-xl sm:text-2xl font-black text-[#111]">40M+</h4>
              <p className="mt-1 text-xs text-black/50 font-medium">Impressions</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-5 min-h-[440px]">
          <div className="relative flex-1 rounded-[36px] bg-[#dfe9e2] p-6 border border-black/5 overflow-hidden flex flex-col justify-between min-h-[320px] group">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#9be3a0]/40 blur-3xl rounded-full group-hover:scale-125 transition-transform duration-700" />
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-[0.2em] text-black/40 font-semibold">Live dashboard</p>
              <h3 className="mt-2 text-[1.8rem] leading-[0.95] font-black tracking-tight text-[#111]">
                Every metric,
                <br />always on.
              </h3>
            </div>
            <motion.img
              src={heroImg}
              alt="Marketing analytics dashboard render"
              width={1024}
              height={1024}
              className="relative z-10 w-full max-w-[280px] mx-auto drop-shadow-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="rounded-[36px] bg-[#f5e7a8] min-h-[180px] p-6 border border-black/5 flex flex-col justify-between">
            <h3 className="text-[1.5rem] leading-[1.05] font-black tracking-tight text-[#111]">
              No long
              <br />contracts. Ever.
            </h3>
            <div className="flex items-center justify-between gap-4 flex-wrap mt-4">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-black/70">
                <Rocket className="w-4 h-4" /> Month-to-month
              </div>
              <Link to="/contact" className="px-5 py-3 rounded-full bg-black text-white text-sm font-medium whitespace-nowrap inline-flex items-center gap-2">
                Book a call <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* =========================================================
   OFFER (bento with PNGs)
========================================================= */
const Offer = () => (
  <section id="offer" className="py-16 sm:py-20 lg:py-24 bg-card">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-14">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">What we do</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
            A full-stack{" "}
            <span className="relative inline-block">
              <span className="relative z-10">growth team.</span>
              <span className="absolute left-0 right-0 bottom-1 sm:bottom-2 h-2 sm:h-3 bg-dexon-green/70 -z-0" />
            </span>
          </h2>
        </div>
        <p className="max-w-sm text-sm sm:text-base text-muted-foreground">
          Six channels — strategy, SEO, ads, social, email, content — working as one engine, not six agencies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
        {/* SEO - large */}
        <div className="md:col-span-4 group relative rounded-[32px] bg-dexon-green/30 border border-black/5 p-7 sm:p-9 overflow-hidden hover:-translate-y-1 transition-all duration-500 min-h-[280px] flex flex-col lg:flex-row items-stretch gap-0">
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-dexon-green/40 blur-3xl rounded-full" />

          {/* Text content */}
          <div className="relative z-10 flex flex-col justify-center flex-1 max-w-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-foreground/70 mb-4 w-fit">
              <Search className="w-3.5 h-3.5" /> SEO
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-[1.05] text-foreground">Rank where buyers are actually searching.</h3>
            <p className="mt-3 text-sm text-foreground/60">Technical audits, keyword strategy, on-page and link building — compounding traffic month after month.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Technical SEO", "Keywords", "Backlinks", "Local"].map(t => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/70 backdrop-blur text-xs font-semibold text-foreground/70">{t}</span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative flex-shrink-0 flex items-end justify-center lg:justify-end w-full lg:w-auto mt-6 lg:mt-0 lg:self-end">
            <motion.img
              src={seoImg}
              alt="SEO ranking illustration"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[300px] drop-shadow-2xl pointer-events-none object-contain"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Paid Ads */}
        <div className="md:col-span-2 group relative rounded-[32px] bg-[#f5e7a8]/60 border border-black/5 p-7 overflow-hidden hover:-translate-y-1 transition-all duration-500 min-h-[280px] flex flex-col gap-4">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-foreground/70 mb-4 w-fit">
              <Target className="w-3.5 h-3.5" /> Paid Ads
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight text-foreground">High-ROAS ad campaigns.</h3>
            <p className="mt-2 text-sm text-foreground/60">Google, Meta, TikTok, LinkedIn.</p>
          </div>
          <div className="flex-1 flex items-end justify-center">
            <img
              src={adsImg}
              alt="Paid advertising target illustration"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full max-w-[180px] sm:max-w-[200px] drop-shadow-xl object-contain"
            />
          </div>
        </div>

        {/* Social */}
        <div className="md:col-span-2 group relative rounded-[32px] bg-dexon-cyan/30 border border-black/5 p-7 overflow-hidden hover:-translate-y-1 transition-all duration-500 min-h-[280px] flex flex-col gap-4">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-foreground/70 mb-4 w-fit">
              <Share2 className="w-3.5 h-3.5" /> Social
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight text-foreground">Social that builds a brand.</h3>
            <p className="mt-2 text-sm text-foreground/60">Calendars, creative & community.</p>
          </div>
          <div className="flex-1 flex items-end justify-center">
            <img
              src={socialImg}
              alt="Social media phone illustration"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full max-w-[170px] sm:max-w-[190px] drop-shadow-xl object-contain"
            />
          </div>
        </div>

        {/* Email - large */}
        <div className="md:col-span-4 group relative rounded-[32px] bg-[#ece9e4] border border-black/5 p-7 sm:p-9 overflow-hidden hover:-translate-y-1 transition-all duration-500 min-h-[280px] flex flex-col lg:flex-row items-stretch gap-0">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-dexon-green/30 blur-3xl rounded-full" />

          {/* Text content */}
          <div className="relative z-10 flex flex-col justify-center flex-1 max-w-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-foreground/70 mb-4 w-fit">
              <Mail className="w-3.5 h-3.5" /> Email & Lifecycle
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-[1.05] text-foreground">Email flows that print repeat revenue.</h3>
            <p className="mt-3 text-sm text-foreground/60">Welcome series, abandoned cart, win-back, newsletters — segmented and split-tested for real conversion lift.</p>
            <div className="mt-5 grid grid-cols-3 gap-3 max-w-xs">
              <div><div className="text-2xl font-black">48%</div><div className="text-[11px] text-foreground/55 font-semibold">Avg open</div></div>
              <div><div className="text-2xl font-black">8x</div><div className="text-[11px] text-foreground/55 font-semibold">ROI</div></div>
              <div><div className="text-2xl font-black">24/7</div><div className="text-[11px] text-foreground/55 font-semibold">Automated</div></div>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex-shrink-0 flex items-end justify-center lg:justify-end w-full lg:w-auto mt-6 lg:mt-0 lg:self-end">
            <motion.img
              src={emailImg}
              alt="Email automation illustration"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[280px] drop-shadow-2xl pointer-events-none object-contain"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-3 group relative rounded-[32px] bg-background border border-border p-5 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-500 flex items-center gap-5">
          <img
            src={contentImg}
            alt="Content strategy"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-20 h-20 shrink-0 object-contain"
          />
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-muted text-[10px] font-bold uppercase tracking-widest text-foreground/70 mb-2">
              <PenSquare className="w-3 h-3" /> Content
            </div>
            <h3 className="text-lg font-black tracking-tight">Content that ranks & converts</h3>
            <p className="mt-1 text-sm text-muted-foreground">Blog, landing pages, ad copy & brand voice — written by humans, optimised for search.</p>
          </div>
        </div>

        {/* Analytics */}
        <div className="md:col-span-3 group relative rounded-[32px] bg-background border border-border p-5 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-500 flex items-start gap-4">
          <div className="w-12 h-12 shrink-0 rounded-2xl bg-dexon-yellow/50 flex items-center justify-center">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-black tracking-tight">Analytics & CRO</h3>
            <p className="mt-1 text-sm text-muted-foreground">GA4, dashboards and A/B tests — every visitor worth more than the last. Reports you'll actually read.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* =========================================================
   GROWTH FUNNEL (unique to marketing)
========================================================= */
const funnel = [
  { stage: "Attract", desc: "SEO + paid + social pulls qualified traffic into your funnel.", color: "bg-dexon-green/40", width: "w-full" },
  { stage: "Engage", desc: "Landing pages, content & retargeting keep them moving.", color: "bg-[#f5e7a8]", width: "w-[85%]" },
  { stage: "Convert", desc: "Optimised checkouts & lead forms turn visits into revenue.", color: "bg-dexon-cyan/50", width: "w-[68%]" },
  { stage: "Retain", desc: "Email + lifecycle keeps them buying again and again.", color: "bg-[#9be3a0]", width: "w-[48%]" },
];

const Funnel = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">The growth engine</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05]">
            Built around a full-funnel framework, not random tactics.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md">
            We don't just "run ads" — we map your customer's journey from first impression to repeat
            purchase, then optimise every stage with data.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-2xl bg-black text-white text-sm font-semibold hover:scale-[1.03] transition-transform">
            Talk strategy <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="relative rounded-[32px] bg-[#f5f3ee] border border-black/5 p-6 sm:p-8 space-y-3">
          {funnel.map((f, i) => (
            <div key={f.stage} className={`relative ${f.width} mx-auto rounded-2xl ${f.color} px-5 py-5 sm:py-6 hover:scale-[1.02] transition-transform`}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-black/50">Stage 0{i + 1}</div>
                  <div className="text-lg sm:text-xl font-black text-[#111]">{f.stage}</div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-black/50" />
              </div>
              <p className="mt-1.5 text-xs sm:text-sm text-black/60 max-w-md">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* =========================================================
   PROCESS
========================================================= */
const steps = [
  { t: "Discover & Audit", d: "We dig into your business, audience and current marketing to find the biggest gaps.", icon: ClipboardCheck },
  { t: "Strategy & Plan", d: "Channel mix, KPIs, budgets and creative direction — agreed and ready to execute.", icon: Target },
  { t: "Launch & Optimise", d: "We launch, monitor daily and iterate weekly — on real data, never guesses.", icon: Rocket },
  { t: "Scale & Report", d: "What works gets scaled hard. Every result reported transparently, every week.", icon: TrendingUp },
];

const Process = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-card">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">How we work</p>
        <h2 className="text-[22px] xs:text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] whitespace-nowrap">
          From audit to ROI in <span className="bg-dexon-yellow px-2 sm:px-3 rounded-xl sm:rounded-2xl">four moves.</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.t} className="group relative rounded-[28px] bg-background border border-border p-6 sm:p-7 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="flex items-center justify-between mb-5">
                <span className="text-5xl font-black text-foreground/10 leading-none">0{i + 1}</span>
                <span className="w-12 h-12 rounded-2xl bg-dexon-yellow flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <Icon className="w-5 h-5" />
                </span>
              </div>
              <h3 className="text-lg font-black tracking-tight">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

/* =========================================================
   INDUSTRIES
========================================================= */
const industries = [
  { name: "E-commerce", icon: ShoppingBag, tint: "bg-dexon-yellow/40" },
  { name: "SaaS", icon: Briefcase, tint: "bg-dexon-cyan/40" },
  { name: "Healthcare", icon: HeartPulse, tint: "bg-dexon-green/40" },
  { name: "Real Estate", icon: Building2, tint: "bg-[#f5e7a8]" },
  { name: "Education", icon: GraduationCap, tint: "bg-dexon-cyan/30" },
  { name: "Restaurants", icon: Utensils, tint: "bg-dexon-yellow/30" },
  { name: "Travel", icon: Plane, tint: "bg-dexon-green/30" },
  { name: "Creators", icon: Palette, tint: "bg-[#f5e7a8]/70" },
];

const Industries = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">Industries we grow</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05]">Built for brands like yours.</h2>
        </div>
        <p className="max-w-sm text-sm sm:text-base text-muted-foreground">
          We've shipped campaigns across dozens of verticals — each playbook tuned to the way your customers actually buy.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
        {industries.map(({ name, icon: Icon, tint }) => (
          <div key={name} className={`group relative rounded-3xl border border-border ${tint} p-6 sm:p-7 min-h-[150px] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-500`}>
            <Icon className="w-7 h-7" />
            <div className="text-lg sm:text-xl font-black tracking-tight">{name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* =========================================================
   REPORTING (unique — transparency)
========================================================= */
const Reporting = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-6 items-stretch">
        <div className="relative rounded-[36px] bg-[#111] text-white p-8 sm:p-10 overflow-hidden flex flex-col justify-between min-h-[460px]">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-dexon-green/20 blur-3xl rounded-full" />
          <div className="relative z-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/50 mb-3">Reporting & transparency</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05]">
              You see every
              <br />number,{" "}
              <span className="text-dexon-green">every week.</span>
            </h2>
            <p className="mt-5 text-white/60 max-w-md">
              Live dashboards, plain-English weekly summaries, and a Slack channel where real humans
              answer. No black-box agency BS.
            </p>
          </div>
          <div className="relative z-10 mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <LineChart className="w-6 h-6 text-dexon-green mb-3" />
              <div className="text-2xl font-black">Live</div>
              <p className="text-xs text-white/50 font-medium mt-1">GA4 + ad dashboards</p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <Megaphone className="w-6 h-6 text-dexon-yellow mb-3" />
              <div className="text-2xl font-black">Weekly</div>
              <p className="text-xs text-white/50 font-medium mt-1">Plain-English summary</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {[
            { stat: "+187%", label: "Organic traffic", icon: TrendingUp, bg: "bg-dexon-green/30" },
            { stat: "12x", label: "Average ROAS", icon: Sparkles, bg: "bg-dexon-yellow/40" },
            { stat: "+64%", label: "Conversion rate", icon: Zap, bg: "bg-dexon-cyan/40" },
            { stat: "98%", label: "Client retention", icon: Award, bg: "bg-[#f5e7a8]" },
          ].map(({ stat, label, icon: Icon, bg }) => (
            <div key={label} className={`relative rounded-3xl border border-border p-6 sm:p-7 ${bg} flex flex-col justify-between min-h-[210px] hover:-translate-y-1 transition-transform duration-500`}>
              <Icon className="w-7 h-7 text-foreground/70" />
              <div>
                <div className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">{stat}</div>
                <p className="mt-2 text-sm font-semibold text-foreground/60">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* =========================================================
   TOOLS (no background, monochrome logos)
========================================================= */
const tools = [
  { name: "Google Ads", slug: "googleads" },
  { name: "Google Analytics", slug: "googleanalytics" },
  { name: "Google Tag Manager", slug: "googletagmanager" },
  { name: "Google Search Console", slug: "googlesearchconsole" },

  { name: "Meta", slug: "meta" },
  { name: "Facebook", slug: "facebook" },
  { name: "Instagram", slug: "instagram" },
  { name: "YouTube", slug: "youtube" },
  { name: "Pinterest", slug: "pinterest" },
  { name: "X", slug: "x" },

  { name: "SEMrush", slug: "semrush" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Mailchimp", slug: "mailchimp" },
  { name: "Hotjar", slug: "hotjar" },
  { name: "Looker Studio", slug: "looker" },
  { name: "Zapier", slug: "zapier" },
  { name: "WhatsApp", slug: "whatsapp" },
];

const Tools = () => {
  const logos = tools.map((tool) => (
    <div key={tool.slug} className="tools-logo-slot">
      <img
        src={`https://cdn.simpleicons.org/${tool.slug}`}
        alt={tool.name}
        title={tool.name}
        loading="lazy"
        className="tools-logo"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  ));

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-12">
          Channels &amp; Tools We Live In
        </p>
      </div>

      <div className="tools-marquee-viewport">
        <div className="tools-marquee-track">
          <div className="tools-marquee-group">{logos}</div>
          <div className="tools-marquee-group" aria-hidden="true">{logos}</div>
        </div>
      </div>

      <style>{`
        .tools-marquee-viewport {
          overflow: hidden;
          width: 100%;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .tools-marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          animation: tools-scroll 70s linear infinite;
          transform: translateZ(0);
        }

        .tools-marquee-track:hover {
          animation-play-state: paused;
        }

        .tools-marquee-group {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .tools-logo-slot {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          margin: 0 2.25rem;
        }

        .tools-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          opacity: 0.75;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .tools-logo:hover {
          opacity: 1;
          transform: scale(1.12);
        }

        @keyframes tools-scroll {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }

        @media (max-width: 768px) {
          .tools-logo-slot {
            width: 34px;
            height: 34px;
            margin: 0 1.5rem;
          }
          .tools-marquee-track {
            animation-duration: 50s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tools-marquee-track {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

/* =========================================================
   FAQ
========================================================= */
const faqs = [
  { q: "How long until I see results?", a: "Paid ads can drive results within days. SEO and content typically take 3–6 months to compound, but the gains are long-lasting." },
  { q: "Do you require long contracts?", a: "Nope. All plans are month-to-month — we earn your business every single month." },
  { q: "Will I own my ad accounts and data?", a: "Always. We build everything inside your accounts so you keep full ownership of assets and history." },
  { q: "Do you handle creative and copy?", a: "Yes — designers, copywriters and video editors are all in-house, included in every plan." },
  { q: "How do you report on performance?", a: "Live dashboards plus a weekly plain-English summary. You'll always know exactly what's working." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">FAQ</p>
          <h2 className="text-[22px] xs:text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight whitespace-nowrap">
            Real questions, <span className="bg-dexon-yellow px-2 sm:px-3 rounded-xl sm:rounded-2xl">honest answers.</span>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`rounded-3xl border border-border bg-background overflow-hidden transition-all ${isOpen ? "shadow-md" : ""}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 sm:px-7 py-5"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-sm font-black text-muted-foreground/70 w-6">0{i + 1}</span>
                    <span className="text-base sm:text-lg font-bold">{f.q}</span>
                  </span>
                  <span className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shrink-0 ${isOpen ? "bg-dexon-yellow" : "bg-muted"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pl-16 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const DigitalMarketing = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Hero />
    <Offer />
    <Funnel />
    <Process />
    <Industries />
    <Reporting />
    <Tools />
    <FAQ />
    <CtaSection />
    <Footer />
  </div>
);

export default DigitalMarketing;