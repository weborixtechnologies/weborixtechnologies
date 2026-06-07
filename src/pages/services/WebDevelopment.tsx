import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Home, Code2, Smartphone, Globe, ShoppingBag, Zap, Wrench,
  GitBranch, Layers, Plus, Minus, Gauge, ShieldCheck, Rocket, Sparkles, CheckCircle2,
  TrendingUp, Building2, Briefcase, Utensils, GraduationCap, HeartPulse, Palette
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import heroMockup from "@/assets/webdev-hero-mockup.png";
import processImg from "@/assets/webdev-process.png";
import resultsImg from "@/assets/webdev-results.png";
import marketingImg from "@/assets/webdev-marketing.png";
import ecommerceImg from "@/assets/webdev-ecommerce.png";
import saasImg from "@/assets/webdev-saas.png";
import mobileImg from "@/assets/webdev-mobile.png";

/* =========================================================
   HERO
========================================================= */
const Hero = () => (
  <section className="bg-[#f5f3ee] pt-16 sm:pt-20 lg:pt-24 pb-6 px-4 overflow-hidden">
    <div className="max-w-[1440px] mx-auto">
      <nav className="flex items-center gap-2 text-sm text-black/50 mb-5">
        <Link
          to="/"
          className="inline-flex items-center gap-1 hover:text-black transition-colors"
        >
          <Home className="w-3.5 h-3.5" />
          Home
        </Link>
        <span>/</span>
        <span>Services</span>
        <span>/</span>
        <span className="text-black font-semibold">Web Development</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
        {/* LEFT PREMIUM HERO */}
        <div className="lg:col-span-2 relative rounded-[40px] bg-gradient-to-br from-[#faf8f4] via-[#f2efe9] to-[#ebe7e0] p-6 sm:p-8 lg:p-10 min-h-[420px] flex flex-col border border-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden">

          {/* Pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[size:24px_24px]" />

          {/* Glow */}
          <div className="absolute top-[-120px] right-[-120px] w-[380px] h-[380px] bg-[#e3c85d]/30 rounded-full blur-3xl" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-sm w-fit relative z-10">
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#9f8422]">
              Web Development Studio
            </span>

            <div className="w-5 h-5 rounded-full bg-[#e3c85d] flex items-center justify-center text-[10px] font-bold">
              ↗
            </div>
          </div>

          {/* Content */}
          <div className="mt-7 max-w-[760px] relative z-10">
            <h1 className="text-[2.2rem] sm:text-[3.4rem] lg:text-[4.2rem] leading-[0.9] tracking-[-0.06em] font-black text-[#111]">
              We build websites
              <br />
              that

              <span className="relative ml-3 text-[#9f8422] inline-block">
                actually convert.
                <span className="absolute left-0 bottom-1 h-3 w-full rounded-full bg-[#e3c85d]/30 -z-10" />
              </span>
            </h1>

            <p className="mt-5 text-[16px] leading-relaxed text-black/60 max-w-[620px]">
              Lightning-fast marketing websites, e-commerce stores and
              custom web applications built with modern React, optimized
              for speed, SEO and conversions from day one.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3 relative z-10">
            <Link
              to="/contact"
              className="h-12 px-7 inline-flex items-center justify-center rounded-2xl bg-black text-white text-sm font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Start a Project
            </Link>

            <a
              href="#offer"
              className="h-12 px-7 inline-flex items-center justify-center rounded-2xl bg-white border border-black/10 text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300"
            >
              What We Build
            </a>
          </div>

          {/* Stats */}
          <div className="mt-auto pt-6 grid grid-cols-3 gap-3 relative z-10">
            <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/70 p-4 shadow-sm">
              <h4 className="text-2xl font-black text-[#111]">180+</h4>
              <p className="mt-1 text-xs font-medium text-black/50">
                Sites Shipped
              </p>
            </div>

            <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/70 p-4 shadow-sm">
              <h4 className="text-2xl font-black text-[#111]">98</h4>
              <p className="mt-1 text-xs font-medium text-black/50">
                Avg Lighthouse
              </p>
            </div>

            <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/70 p-4 shadow-sm">
              <h4 className="text-2xl font-black text-[#111]">4 Wks</h4>
              <p className="mt-1 text-xs font-medium text-black/50">
                Avg Launch
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-5">
          {/* Preview Card */}
          <div className="relative flex-1 rounded-[40px] bg-gradient-to-br from-[#eef5f0] via-[#e7efe9] to-[#dfe9e2] p-6 border border-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col justify-between min-h-[290px] group">

            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#e3c85d]/30 blur-3xl group-hover:scale-125 transition-transform duration-700" />

            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.25em] text-black/40 font-semibold">
                Live Preview
              </p>

              <h3 className="mt-2 text-[1.8rem] leading-[0.95] font-black tracking-tight text-[#111]">
                Pixel-perfect,
                <br />
                every device.
              </h3>
            </div>

            <motion.img
              src={heroMockup}
              alt="Website Preview"
              className="relative z-10 w-full max-w-[280px] mx-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* CTA Card */}
          <div className="rounded-[40px] bg-gradient-to-r from-[#f7efc7] to-[#efe1a1] min-h-[150px] p-6 border border-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.06)] flex flex-col justify-between">
            <h3 className="text-[1.6rem] leading-[1.05] font-black tracking-tight text-[#111]">
              From idea to
              <br />
              launch in weeks.
            </h3>

            <div className="flex items-center justify-between gap-4 flex-wrap mt-4">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-black/70">
                <Rocket className="w-4 h-4" />
                30-day aftercare
              </div>

              <Link
                to="/contact"
                className="px-5 py-3 rounded-full bg-black text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* =========================================================
   OFFER
========================================================= */
const Offer = () => (
  <section id="offer" className="py-16 sm:py-20 lg:py-24 bg-card">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-14">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">What we build</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
            Every kind of{" "}
            <span className="relative inline-block">
              <span className="relative z-10">web project.</span>
              <span className="absolute left-0 right-0 bottom-1 sm:bottom-2 h-2 sm:h-3 bg-dexon-yellow -z-0" />
            </span>
          </h2>
        </div>
        <p className="max-w-sm text-sm sm:text-base text-muted-foreground">
          From a single landing page to full e-commerce and SaaS platforms — designed and engineered end-to-end.
        </p>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
        {/* Marketing - large */}
        <div className="md:col-span-4 group relative rounded-[32px] bg-[#f5e7a8]/60 border border-black/5 p-7 sm:p-9 overflow-hidden hover:-translate-y-1 transition-all duration-500 min-h-[340px] flex flex-col justify-between">
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#e3c85d]/40 blur-3xl rounded-full" />
          <div className="relative z-10 max-w-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-foreground/70 mb-4">
              <Globe className="w-3.5 h-3.5" /> Marketing
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-[1.05] text-foreground">Marketing websites that capture leads 24/7.</h3>
            <p className="mt-3 text-sm text-foreground/60">Beautiful, fast, conversion-optimised sites with built-in SEO & analytics.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Landing pages", "Multi-page", "CMS", "Blog"].map(t => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/70 backdrop-blur text-xs font-semibold text-foreground/70">{t}</span>
              ))}
            </div>
          </div>
          <motion.img
            src={marketingImg}
            alt="Marketing website mockup"
            loading="lazy"
            width={1024}
            height={1024}
            className="absolute right-[-30px] bottom-[-20px] w-[300px] sm:w-[380px] drop-shadow-2xl pointer-events-none"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* E-commerce - tall */}
        <div className="md:col-span-2 group relative rounded-[32px] bg-dexon-cyan/30 border border-black/5 p-7 overflow-hidden hover:-translate-y-1 transition-all duration-500 min-h-[340px] flex flex-col justify-between">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-foreground/70 mb-4">
              <ShoppingBag className="w-3.5 h-3.5" /> E-commerce
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight text-foreground">Stores that actually convert.</h3>
            <p className="mt-2 text-sm text-foreground/60">Shopify, WooCommerce or fully custom checkouts.</p>
          </div>
          <img
            src={ecommerceImg}
            alt="E-commerce store illustration"
            loading="lazy"
            width={1024}
            height={1024}
            className="mt-4 w-full max-w-[220px] mx-auto drop-shadow-xl"
          />
        </div>

        {/* SaaS - tall */}
        <div className="md:col-span-2 group relative rounded-[32px] bg-dexon-green/30 border border-black/5 p-7 overflow-hidden hover:-translate-y-1 transition-all duration-500 min-h-[340px] flex flex-col justify-between">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-foreground/70 mb-4">
              <Code2 className="w-3.5 h-3.5" /> Web apps
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight text-foreground">SaaS & internal tools.</h3>
            <p className="mt-2 text-sm text-foreground/60">Dashboards, portals & APIs in React + Next.</p>
          </div>
          <img
            src={saasImg}
            alt="SaaS dashboard illustration"
            loading="lazy"
            width={1024}
            height={1024}
            className="mt-4 w-full max-w-[240px] mx-auto drop-shadow-xl"
          />
        </div>

        {/* Mobile-first - large with image right */}
        <div className="md:col-span-4 group relative rounded-[32px] bg-[#ece9e4] border border-black/5 p-7 sm:p-9 overflow-hidden hover:-translate-y-1 transition-all duration-500 min-h-[340px] flex flex-col justify-between">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#e3c85d]/20 blur-3xl rounded-full" />
          <div className="relative z-10 max-w-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-foreground/70 mb-4">
              <Smartphone className="w-3.5 h-3.5" /> Mobile-first
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-[1.05] text-foreground">Pixel-perfect on every device.</h3>
            <p className="mt-3 text-sm text-foreground/60">Designed mobile-first and scaled up — because that's where your users actually live.</p>
            <div className="mt-5 grid grid-cols-3 gap-3 max-w-xs">
              <div><div className="text-2xl font-black">100%</div><div className="text-[11px] text-foreground/55 font-semibold">Responsive</div></div>
              <div><div className="text-2xl font-black">A11y</div><div className="text-[11px] text-foreground/55 font-semibold">WCAG AA</div></div>
              <div><div className="text-2xl font-black">PWA</div><div className="text-[11px] text-foreground/55 font-semibold">Ready</div></div>
            </div>
          </div>
          <motion.img
            src={mobileImg}
            alt="Responsive mobile screens"
            loading="lazy"
            width={1024}
            height={1024}
            className="absolute right-[-20px] bottom-[-10px] w-[280px] sm:w-[340px] drop-shadow-2xl pointer-events-none"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
{/* Performance */}
<div className="md:col-span-3 group relative rounded-[32px] bg-background border border-border p-5 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-500 flex items-start gap-4">
  <div className="w-12 h-12 shrink-0 rounded-2xl bg-dexon-yellow/50 flex items-center justify-center">
    <Zap className="w-6 h-6" />
  </div>

  <div>
    <h3 className="text-lg font-black tracking-tight">
      Performance & SEO
    </h3>
    <p className="mt-1 text-sm text-muted-foreground">
      Core Web Vitals, semantic HTML & structured data Google rewards.
      95+ Lighthouse on every build.
    </p>
  </div>
</div>

{/* Care */}
<div className="md:col-span-3 group relative rounded-[32px] bg-background border border-border p-5 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-500 flex items-start gap-4">
  <div className="w-12 h-12 shrink-0 rounded-2xl bg-dexon-cyan/50 flex items-center justify-center">
    <Wrench className="w-6 h-6" />
  </div>

  <div>
    <h3 className="text-lg font-black tracking-tight">
      Care & Support
    </h3>
    <p className="mt-1 text-sm text-muted-foreground">
      Updates, security patches and content edits on a flexible monthly
      plan — real humans, fast replies.
    </p>
  </div>
</div>
      </div>
    </div>
  </section>
);

/* =========================================================
   RESULTS — NEW (with PNG)
========================================================= */
const Results = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-6 items-stretch">
        <div className="relative rounded-[36px] bg-[#111] text-white p-8 sm:p-10 overflow-hidden flex flex-col justify-between min-h-[480px]">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-dexon-yellow/20 blur-3xl rounded-full" />
          <div className="relative z-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/50 mb-3">Real results</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05]">
              Numbers our
              <br />clients{" "}
              <span className="text-dexon-yellow">actually see.</span>
            </h2>
            <p className="mt-5 text-white/60 max-w-md">
              Every project we ship is measured. Here's the average lift our clients see in the first 90 days post-launch.
            </p>
          </div>
          <img
            src={resultsImg}
            alt="Performance gauge showing 98 Lighthouse score"
            loading="lazy"
            width={1024}
            height={1024}
            className="relative z-10 mt-6 w-full max-w-[280px] mx-auto"
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          {[
            { stat: "+187%", label: "Organic traffic", icon: TrendingUp, bg: "bg-dexon-yellow/30" },
            { stat: "+64%", label: "Conversion rate", icon: Sparkles, bg: "bg-dexon-cyan/30" },
            { stat: "-72%", label: "Bounce rate", icon: Zap, bg: "bg-dexon-green/30" },
            { stat: "3.2x", label: "Page speed", icon: Rocket, bg: "bg-[#f5e7a8]" },
          ].map(({ stat, label, icon: Icon, bg }) => (
            <div key={label} className={`relative rounded-3xl border border-border p-6 sm:p-7 ${bg} flex flex-col justify-between min-h-[220px] hover:-translate-y-1 transition-transform duration-500`}>
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
   WHY US
========================================================= */
const reasons = [
  { icon: Gauge, title: "98+ Lighthouse", desc: "Every site ships with near-perfect performance, accessibility & SEO scores." },
  { icon: ShieldCheck, title: "Built to scale", desc: "Type-safe, tested, modular code — easy to extend long after launch." },
  { icon: Sparkles, title: "Pixel-perfect UI", desc: "Designs translated 1:1 from Figma to production, on every breakpoint." },
  { icon: Rocket, title: "Ship in weeks", desc: "Most projects launch in 4–8 weeks with weekly staging previews." },
];

const WhyUs = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-card">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-1 relative rounded-3xl bg-[#ece9e4] p-7 sm:p-8 border border-black/5 overflow-hidden flex flex-col justify-between min-h-[340px]">
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#e3c85d]/30 blur-3xl rounded-full" />
          <div className="relative z-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-black/50 mb-3">Why teams pick us</p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.05] text-[#111]">
              Engineering
              <br />you can
              <br />
              <span className="text-[#9f8422]">trust.</span>
            </h2>
          </div>
          <ul className="relative z-10 space-y-2 mt-6">
            {["No bloated frameworks", "Owned code, no lock-in", "Real humans, fast replies"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm font-semibold text-black/70">
                <CheckCircle2 className="w-4 h-4 text-[#9f8422]" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group relative rounded-3xl bg-background border border-border p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-dexon-yellow/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-dexon-yellow/40 flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="text-lg sm:text-xl font-black tracking-tight mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <span className="absolute top-6 right-6 text-xs font-bold text-foreground/30">0{i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* =========================================================
   PROCESS — with PNG visual
========================================================= */
const steps = [
  { t: "Discovery & Scope", d: "Map goals, audience, technical needs & timeline so there are zero surprises later.", icon: GitBranch },
  { t: "Design & Prototype", d: "High-fidelity Figma, interactive prototypes & sign-off before a single line of code.", icon: Layers },
  { t: "Build & Test", d: "Modular code, QA across browsers & devices, weekly progress on a live staging URL.", icon: Code2 },
  { t: "Launch & Support", d: "Smooth deploy, analytics setup, team training & 30 days of free aftercare.", icon: Zap },
];

const Process = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="grid lg:grid-cols-5 gap-6 items-center mb-12 sm:mb-14">
        <div className="lg:col-span-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">Our process</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
            Clean steps,{" "}
            <span className="relative inline-block">
              <span className="relative z-10">smooth ships.</span>
              <span className="absolute left-0 right-0 bottom-1 sm:bottom-2 h-2 sm:h-3 bg-dexon-cyan -z-0" />
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            A repeatable four-step path we've refined across 180+ launches. Predictable timelines, no last-minute surprises.
          </p>
        </div>
        <div className="lg:col-span-2 flex justify-center">
          <img
            src={processImg}
            alt="Layered website wireframes illustrating the design process"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full max-w-[360px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map(({ t, d, icon: Icon }, i) => (
          <div
            key={t}
            className="relative rounded-3xl bg-card border border-border p-6 sm:p-7 hover:-translate-y-1 hover:shadow-xl transition-all duration-500"
          >
            <span className="absolute top-5 right-5 text-4xl font-black text-foreground/10">0{i + 1}</span>
            <div className="w-12 h-12 rounded-2xl bg-dexon-cyan/40 flex items-center justify-center mb-5">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-black tracking-tight mb-2">{t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* =========================================================
   STACK
========================================================= */
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
  <section className="py-16 sm:py-20 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <p className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-10">
        Our stack
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-10 gap-y-10 items-center justify-items-center">
        {stackLogos.map((l) => (
          <img
            key={l.slug}
            src={`https://cdn.simpleicons.org/${l.slug}/111111`}
            alt={l.name}
            title={l.name}
            loading="lazy"
            className="h-8 sm:h-9 w-auto opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
        ))}
      </div>
    </div>
  </section>
);

/* =========================================================
   INDUSTRIES — replaces testimonials & pricing
========================================================= */
const industries = [
  { icon: ShoppingBag, name: "E-commerce", desc: "Stores, checkouts, subscriptions.", tint: "bg-dexon-yellow/40" },
  { icon: Briefcase, name: "SaaS & B2B", desc: "Landing, app, billing & onboarding.", tint: "bg-dexon-cyan/30" },
  { icon: Building2, name: "Agencies", desc: "Portfolios & client portals.", tint: "bg-dexon-green/30" },
  { icon: HeartPulse, name: "Healthcare", desc: "Clinics, booking & patient portals.", tint: "bg-[#f5e7a8]/70" },
  { icon: GraduationCap, name: "Education", desc: "Course platforms & LMS.", tint: "bg-dexon-cyan/30" },
  { icon: Utensils, name: "Restaurants", desc: "Menus, reservations & ordering.", tint: "bg-dexon-yellow/40" },
  { icon: Palette, name: "Creative & Studios", desc: "Photo, art & design portfolios.", tint: "bg-dexon-green/30" },
  { icon: Building2, name: "Real Estate", desc: "Listings, search & lead capture.", tint: "bg-[#f5e7a8]/70" },
];

const Industries = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-card">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="grid lg:grid-cols-3 gap-6 mb-10 sm:mb-12 items-end">
        <div className="lg:col-span-2 max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">Industries</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
            Built for{" "}
            <span className="relative inline-block">
              <span className="relative z-10">teams like yours.</span>
              <span className="absolute left-0 right-0 bottom-1 sm:bottom-2 h-2 sm:h-3 bg-dexon-yellow -z-0" />
            </span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground lg:text-right">
          A flexible studio model — same engineering quality, tailored to the rhythm of your industry.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {industries.map(({ icon: Icon, name, desc, tint }, i) => (
          <div
            key={name}
            className="group relative rounded-3xl bg-background border border-border p-5 sm:p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 overflow-hidden min-h-[180px] flex flex-col justify-between"
          >
            <div className={`absolute -top-12 -right-12 w-32 h-32 ${tint} blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className={`relative z-10 w-12 h-12 rounded-2xl ${tint} flex items-center justify-center group-hover:rotate-6 transition-transform`}>
              <Icon className="w-6 h-6 text-foreground" strokeWidth={2} />
            </div>
            <div className="relative z-10 mt-4">
              <h3 className="text-base sm:text-lg font-black tracking-tight">{name}</h3>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
            <span className="absolute top-4 right-5 text-xs font-bold text-foreground/20">0{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* =========================================================
   FAQ
========================================================= */
const faqs = [
  { q: "How long does a typical project take?", a: "Landing pages: ~2 weeks. Full business sites: 4–8 weeks. Web apps depend on scope — we'll give a precise timeline after discovery." },
  { q: "Will I be able to edit content myself?", a: "Yes. Every site ships with a friendly CMS (Sanity, Contentful, WordPress or Shopify) so your team updates copy without us." },
  { q: "Do you handle hosting?", a: "We deploy to Vercel, Netlify or Shopify. We can manage hosting for you or hand it over." },
  { q: "Can you redesign my existing site?", a: "Absolutely. Most of our work is redesigns — we preserve your SEO, migrate content & modernise everything else." },
  { q: "What about ongoing changes after launch?", a: "We offer monthly care plans with hours rolled over, plus on-demand pricing for one-off changes." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Things clients{" "}
            <span className="relative inline-block">
              <span className="relative z-10">always ask.</span>
              <span className="absolute left-0 right-0 bottom-1 sm:bottom-2 h-2 sm:h-3 bg-dexon-yellow -z-0" />
            </span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`rounded-2xl border border-border bg-background overflow-hidden transition-all ${isOpen ? "shadow-lg" : ""}`}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full text-left px-5 sm:px-7 py-5 flex items-center gap-4 hover:bg-muted/40 transition-colors">
                  <span className="text-xs font-bold text-muted-foreground w-6">0{i + 1}</span>
                  <span className="flex-1 text-base sm:text-lg font-bold">{f.q}</span>
                  <span className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-7 pb-6 pl-14 text-sm sm:text-base text-muted-foreground leading-relaxed">{f.a}</p>
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

const WebDevelopment = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Hero />
    <Offer />
    <Results />
    <WhyUs />
    <Process />
    <Stack />
    <Industries />
    <FAQ />
    <CtaSection />
    <Footer />
  </div>
);

export default WebDevelopment;