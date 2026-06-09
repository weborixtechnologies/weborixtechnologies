import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Home, Sparkles, Layout, Image as ImageIcon, Layers, PenTool, Brush,
  Pipette, Scissors, Plus, Minus, Award, Eye, Type, Package, Video,
  Megaphone, ShoppingBag, Building2, HeartPulse, GraduationCap, Utensils, Briefcase, Palette,
  CheckCircle2, Rocket, Heart, Zap
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import gfxHero from "@/assets/gfx-hero.png";

/* =========================================================
   HERO — bento style
========================================================= */
const Hero = () => (
  <section className="bg-[#f5f3ee] pt-20 sm:pt-24 lg:pt-28 pb-6 lg:pb-8 px-4 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-black/50 mb-5">
        <Link to="/" className="inline-flex items-center gap-1 hover:text-black"><Home className="w-3.5 h-3.5" />Home</Link>
        <span>/</span><span>Services</span><span>/</span><span className="text-black font-semibold">Graphics Design</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
        {/* LEFT BIG CARD */}
        <div className="lg:col-span-2 relative rounded-[36px] bg-[#ece9e4] p-6 sm:p-8 lg:p-9 min-h-[440px] flex flex-col border border-black/5 overflow-hidden">
          <div className="absolute top-[-120px] right-[-120px] w-[360px] h-[360px] bg-[#e3c85d]/30 rounded-full blur-3xl" />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e3c85d] bg-[#f5e7a8]/40 backdrop-blur-sm w-fit relative z-10">
            <span className="text-[11px] font-semibold tracking-wide text-[#9f8422]">Design Studio</span>
            <div className="w-5 h-5 rounded-full bg-[#e3c85d] flex items-center justify-center text-[10px] text-black">↗</div>
          </div>

          <div className="mt-6 max-w-[700px] relative z-10">
            <h1 className="text-[2.25rem] sm:text-[3.2rem] lg:text-[3.8rem] leading-[0.95] tracking-[-0.05em] font-black text-[#111]">
              Design that makes
              <br />
              <span className="text-[#9f8422] underline decoration-[#e3c85d] underline-offset-4">people stop scrolling.</span>
            </h1>
            <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-black/55 max-w-xl">
              Brand identities, packaging, social creatives, illustration & motion — handcrafted visuals
              that turn quiet brands into ones people remember.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 relative z-10">
            <Link to="/contact" className="h-12 px-6 inline-flex items-center rounded-2xl bg-black text-white text-sm font-semibold hover:scale-[1.03] hover:shadow-2xl transition-all duration-300">
              Start a project
            </Link>
            <a href="#gallery" className="h-12 px-6 inline-flex items-center rounded-2xl border border-black/10 bg-white text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300">
              See the work
            </a>
          </div>

          <div className="mt-auto pt-6 grid grid-cols-3 gap-3 sm:gap-4 relative z-10">
            <div className="rounded-2xl sm:rounded-3xl bg-white/70 backdrop-blur-sm border border-white/60 p-4">
              <h4 className="text-xl sm:text-2xl font-black text-[#111]">240+</h4>
              <p className="mt-1 text-xs text-black/50 font-medium">Brands designed</p>
            </div>
            <div className="rounded-2xl sm:rounded-3xl bg-[#f5e7a8]/70 backdrop-blur-sm border border-[#e3c85d]/20 p-4">
              <h4 className="text-xl sm:text-2xl font-black text-[#111]">17</h4>
              <p className="mt-1 text-xs text-black/50 font-medium">Design awards</p>
            </div>
            <div className="rounded-2xl sm:rounded-3xl bg-[#dfe9e2]/80 backdrop-blur-sm border border-white/60 p-4">
              <h4 className="text-xl sm:text-2xl font-black text-[#111]">∞</h4>
              <p className="mt-1 text-xs text-black/50 font-medium">Revisions</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-5 min-h-[440px]">
          <div className="relative flex-1 rounded-[36px] bg-[#dfe9e2] p-6 border border-black/5 overflow-hidden flex flex-col justify-between min-h-[320px] group">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#e3c85d]/30 blur-3xl rounded-full group-hover:scale-125 transition-transform duration-700" />
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-[0.2em] text-black/40 font-semibold">Studio</p>
              <h3 className="mt-2 text-[1.8rem] leading-[0.95] font-black tracking-tight text-[#111]">
                Crafted in
                <br />Figma, loved IRL.
              </h3>
            </div>
            <motion.img
              src={gfxHero}
              alt="Isometric design studio with frames, swatches and typography"
              width={1024}
              height={1024}
              className="relative z-10 w-full max-w-[280px] mx-auto drop-shadow-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="rounded-[36px] bg-[#f5e7a8] min-h-[180px] p-6 border border-black/5 flex flex-col justify-between">
            <h3 className="text-[1.5rem] leading-[1.05] font-black tracking-tight text-[#111]">
              Unlimited
              <br />revisions, always.
            </h3>
            <div className="flex items-center justify-between gap-4 flex-wrap mt-4">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-black/70">
                <Heart className="w-4 h-4" /> Until you love it
              </div>
              <Link to="/contact" className="px-5 py-3 rounded-full bg-black text-white text-sm font-medium whitespace-nowrap inline-flex items-center gap-2">
                Get a quote <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* =========================================================
   OFFER — bento services
========================================================= */
const Offer = () => (
  <section id="offer" className="py-16 sm:py-20 lg:py-24 bg-card">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-14">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">What we design</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
            Design across{" "}
            <span className="relative inline-block">
              <span className="relative z-10">every touchpoint.</span>
              <span className="absolute left-0 right-0 bottom-1 sm:bottom-2 h-2 sm:h-3 bg-dexon-yellow -z-0" />
            </span>
          </h2>
        </div>
        <p className="max-w-sm text-sm sm:text-base text-muted-foreground">
          From a single logo to full brand systems, packaging, motion & social — designed end-to-end by one focused studio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
        {/* Branding - large */}
        <div className="md:col-span-4 group relative rounded-[32px] bg-[#f5e7a8]/60 border border-black/5 p-7 sm:p-9 overflow-hidden hover:-translate-y-1 transition-all duration-500 min-h-[340px] flex flex-col justify-between">
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#e3c85d]/40 blur-3xl rounded-full" />
          <div className="relative z-10 max-w-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-foreground/70 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Brand identity
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-[1.05] text-foreground">Logos & full identity systems that scale.</h3>
            <p className="mt-3 text-sm text-foreground/60">Logo, type, colour, voice and a brand book — built to last for years, not trends.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Logo", "Brand book", "Typography", "Voice"].map(t => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/70 backdrop-blur text-xs font-semibold text-foreground/70">{t}</span>
              ))}
            </div>
          </div>
          {/* decorative logo collage */}
          <div className="absolute right-6 bottom-6 hidden sm:flex items-end gap-3 pointer-events-none">
            <div className="w-24 h-24 rounded-3xl bg-white shadow-xl flex items-center justify-center text-3xl font-black text-[#9f8422] rotate-[-6deg]">Aa</div>
            <div className="w-20 h-20 rounded-2xl bg-[#111] shadow-xl flex items-center justify-center text-2xl font-black text-[#e3c85d] rotate-[4deg]">D.</div>
            <div className="w-16 h-16 rounded-full bg-dexon-cyan shadow-xl flex items-center justify-center rotate-[10deg]"><Sparkles className="w-7 h-7" /></div>
          </div>
        </div>

        {/* UI/UX */}
        <div className="md:col-span-2 group relative rounded-[32px] bg-dexon-cyan/30 border border-black/5 p-7 overflow-hidden hover:-translate-y-1 transition-all duration-500 min-h-[340px] flex flex-col justify-between">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-foreground/70 mb-4">
              <Layout className="w-3.5 h-3.5" /> UI / UX
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight text-foreground">Interfaces people enjoy using.</h3>
            <p className="mt-2 text-sm text-foreground/60">Web & mobile design in Figma, ready for dev.</p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`aspect-square rounded-xl ${i % 3 === 0 ? "bg-white" : i % 3 === 1 ? "bg-foreground/80" : "bg-dexon-yellow"} shadow-sm`} />
            ))}
          </div>
        </div>

        {/* Packaging */}
        <div className="md:col-span-2 group relative rounded-[32px] bg-dexon-green/30 border border-black/5 p-7 overflow-hidden hover:-translate-y-1 transition-all duration-500 min-h-[340px] flex flex-col justify-between">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-foreground/70 mb-4">
              <Package className="w-3.5 h-3.5" /> Packaging
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight text-foreground">Print & packaging that pop.</h3>
            <p className="mt-2 text-sm text-foreground/60">Boxes, labels, brochures, cards — print-ready files.</p>
          </div>
          <div className="mt-4 flex items-end gap-2 h-24 justify-center">
            <div className="w-14 h-20 rounded-md bg-white shadow-lg rotate-[-6deg] border border-black/5" />
            <div className="w-16 h-24 rounded-md bg-[#111] shadow-lg" />
            <div className="w-14 h-16 rounded-md bg-dexon-yellow shadow-lg rotate-[8deg]" />
          </div>
        </div>

        {/* Social creatives - large */}
        <div className="md:col-span-4 group relative rounded-[32px] bg-[#ece9e4] border border-black/5 p-7 sm:p-9 overflow-hidden hover:-translate-y-1 transition-all duration-500 min-h-[340px] flex flex-col justify-between">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#e3c85d]/20 blur-3xl rounded-full" />
          <div className="relative z-10 max-w-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-foreground/70 mb-4">
              <ImageIcon className="w-3.5 h-3.5" /> Social creatives
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-[1.05] text-foreground">Scroll-stopping content for every feed.</h3>
            <p className="mt-3 text-sm text-foreground/60">Reels covers, story templates, carousels & ad creatives that match your brand pitch-perfect.</p>
            <div className="mt-5 grid grid-cols-3 gap-3 max-w-xs">
              <div><div className="text-2xl font-black">IG</div><div className="text-[11px] text-foreground/55 font-semibold">Templates</div></div>
              <div><div className="text-2xl font-black">TT</div><div className="text-[11px] text-foreground/55 font-semibold">Covers</div></div>
              <div><div className="text-2xl font-black">YT</div><div className="text-[11px] text-foreground/55 font-semibold">Thumbnails</div></div>
            </div>
          </div>
          {/* mock phones */}
          <div className="absolute right-6 bottom-6 hidden sm:flex items-end gap-3 pointer-events-none">
            <div className="w-24 h-40 rounded-2xl bg-white shadow-xl border-4 border-black overflow-hidden rotate-[-6deg]">
              <div className="h-1/2 bg-dexon-yellow" />
              <div className="h-1/2 bg-[#111]" />
            </div>
            <div className="w-24 h-40 rounded-2xl bg-white shadow-xl border-4 border-black overflow-hidden rotate-[6deg]">
              <div className="h-2/3 bg-dexon-cyan" />
              <div className="h-1/3 bg-white" />
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="md:col-span-3 group relative rounded-[32px] bg-background border border-border p-7 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-500 min-h-[220px] flex items-start gap-5">
          <div className="w-14 h-14 shrink-0 rounded-2xl bg-dexon-yellow/50 flex items-center justify-center">
            <PenTool className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-black tracking-tight">Illustration & Icons</h3>
            <p className="mt-2 text-sm text-muted-foreground">Custom illustrations, icon sets & mascots that give your brand a personality competitors can't copy.</p>
          </div>
        </div>

        {/* Motion */}
        <div className="md:col-span-3 group relative rounded-[32px] bg-background border border-border p-7 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-500 min-h-[220px] flex items-start gap-5">
          <div className="w-14 h-14 shrink-0 rounded-2xl bg-dexon-cyan/50 flex items-center justify-center">
            <Video className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-black tracking-tight">Motion Graphics</h3>
            <p className="mt-2 text-sm text-muted-foreground">Animated logos, explainers & short-form motion for ads, product pages and social — built in After Effects & Lottie.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* =========================================================
   CREATIVE GALLERY — 3 column infinite scroll
========================================================= */
const galleryImages = Array.from({ length: 20 }, (_, i) =>
  `https://picsum.photos/seed/dexon-gfx-${i + 1}/600/800`
);
// Split 20 across 3 columns (7, 6, 7)
const colA = galleryImages.slice(0, 7);
const colB = galleryImages.slice(7, 13);
const colC = galleryImages.slice(13, 20);

const GalleryColumn = ({
  images,
  direction = "up",
  duration = 40,
}: {
  images: string[];
  direction?: "up" | "down";
  duration?: number;
}) => {
  const animName = direction === "up" ? "gfx-marquee-up" : "gfx-marquee-down";
  return (
    <div className="relative overflow-hidden flex-1 rounded-2xl">
      <div
        className="flex flex-col gap-3 sm:gap-4 will-change-transform"
        style={{ animation: `${animName} ${duration}s linear infinite` }}
      >
        {[...images, ...images].map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative overflow-hidden rounded-2xl bg-muted ring-1 ring-black/5 group"
          >
            <img
              src={src}
              alt={`Creative work ${i + 1}`}
              loading="lazy"
              className="w-full h-auto block object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

const CreativeGallery = () => (
  <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
    <style>{`
      @keyframes gfx-marquee-up {
        0% { transform: translateY(0); }
        100% { transform: translateY(-50%); }
      }
      @keyframes gfx-marquee-down {
        0% { transform: translateY(-50%); }
        100% { transform: translateY(0); }
      }
    `}</style>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-10 sm:mb-14">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">Creative gallery</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
            A live look at the{" "}
            <span className="relative inline-block">
              <span className="relative z-10">studio floor.</span>
              <span className="absolute left-0 right-0 bottom-1 sm:bottom-2 h-2 sm:h-3 bg-dexon-cyan -z-0" />
            </span>
          </h2>
        </div>
        <p className="max-w-sm text-sm sm:text-base text-muted-foreground">
          A rolling reel of work shipped — brand systems, packaging, social and editorial. Hover to slow down.
        </p>
      </div>
    </div>

    <div className="relative">
      {/* gradient masks */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-background to-transparent z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div
          className="flex gap-3 sm:gap-4 h-[560px] sm:h-[700px] lg:h-[820px] [&_>*:hover_>div]:!animation-play-state-paused"
          style={{ ["--play" as never]: "running" }}
        >
          <GalleryColumn images={colA} direction="down" duration={45} />
          <GalleryColumn images={colB} direction="up" duration={38} />
          <GalleryColumn images={colC} direction="down" duration={50} />
        </div>
      </div>
    </div>
  </section>
);

/* =========================================================
   DELIVERABLES — what you get
========================================================= */
const deliverables = [
  { icon: Type, t: "Type system", d: "Display, body & UI font pairings with weight scale." },
  { icon: Pipette, t: "Colour palette", d: "Primary, accent, neutral & semantic tokens." },
  { icon: ImageIcon, t: "Logo lockups", d: "Primary, secondary, monogram & favicon variants." },
  { icon: Layers, t: "Components", d: "Buttons, cards, forms — production-ready in Figma." },
  { icon: Brush, t: "Illustration kit", d: "Custom illustrations & icon set in your style." },
  { icon: Award, t: "Brand book", d: "PDF guidelines so every team stays on brand." },
];
const Deliverables = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-card">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-1 relative rounded-3xl bg-[#ece9e4] p-7 sm:p-8 border border-black/5 overflow-hidden flex flex-col justify-between min-h-[340px]">
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#e3c85d]/30 blur-3xl rounded-full" />
          <div className="relative z-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-black/50 mb-3">What you walk away with</p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.05] text-[#111]">
              A complete
              <br />brand kit,
              <br />
              <span className="text-[#9f8422]">not a logo.</span>
            </h2>
          </div>
          <ul className="relative z-10 space-y-2 mt-6">
            {["Editable source files", "All export formats", "Brand guidelines PDF"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm font-semibold text-black/70">
                <CheckCircle2 className="w-4 h-4 text-[#9f8422]" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
          {deliverables.map(({ icon: Icon, t, d }, i) => (
            <div
              key={t}
              className="group relative rounded-3xl bg-background border border-border p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-dexon-yellow/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-dexon-yellow/40 flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="text-lg sm:text-xl font-black tracking-tight mb-2">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
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
   PROCESS
========================================================= */
const steps = [
  { t: "Brief & mood", d: "We dig into goals, audience & references to lock a clear creative direction.", icon: Pipette },
  { t: "Concept & sketch", d: "Multiple directions explored, then narrowed to the strongest two for refinement.", icon: PenTool },
  { t: "Design & refine", d: "High-fidelity designs with rounds of feedback until every pixel feels right.", icon: Brush },
  { t: "Deliver & document", d: "Source files, exports & brand guidelines packaged neatly for your team.", icon: Scissors },
];

const Process = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="max-w-3xl mb-12 sm:mb-14">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">Our process</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
          From scribble to{" "}
          <span className="relative inline-block">
            <span className="relative z-10">masterpiece.</span>
            <span className="absolute left-0 right-0 bottom-1 sm:bottom-2 h-2 sm:h-3 bg-dexon-yellow -z-0" />
          </span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          A predictable four-step path refined across 240+ brands — clear timelines, no last-minute surprises.
        </p>
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
   TOOLS
========================================================= */
const toolLogos = [
  { name: "Figma", slug: "figma" },
  { name: "Blender", slug: "blender" },
  { name: "Sketch", slug: "sketch" },
  { name: "CorelDRAW", slug: "coreldraw" },
  { name: "Krita", slug: "krita" },
  { name: "Inkscape", slug: "inkscape" },
  { name: "GIMP", slug: "gimp" },
  { name: "Miro", slug: "miro" },
  { name: "Behance", slug: "behance" },
  { name: "Dribbble", slug: "dribbble" },
  { name: "Freepik", slug: "freepik" },
  { name: "Unsplash", slug: "unsplash" },
  { name: "Pexels", slug: "pexels" },
  { name: "Envato", slug: "envato" },
  { name: "LottieFiles", slug: "lottiefiles" },
];
const Tools = () => {
  const logos = toolLogos.map((l) => (
    <div key={l.slug} className="tools-logo-slot">
      <img
        src={`https://cdn.simpleicons.org/${l.slug}`}
        alt={l.name}
        title={l.name}
        loading="lazy"
        className="tools-logo-img"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  ));

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-10">
          Tools we love
        </p>
      </div>

      <div className="tools-viewport">
        <div className="tools-track">
          <div className="tools-group">{logos}</div>
          <div className="tools-group" aria-hidden="true">{logos}</div>
        </div>
      </div>

      <style>{`
        .tools-viewport {
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

        .tools-track {
          display: flex;
          align-items: center;
          width: max-content;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          animation: tools-scroll 70s linear infinite;
          transform: translateZ(0);
        }

        .tools-track:hover {
          animation-play-state: paused;
        }

        .tools-group {
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

        .tools-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          opacity: 0.75;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .tools-logo-img:hover {
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
          .tools-track {
            animation-duration: 50s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tools-track {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

/* =========================================================
   INDUSTRIES
========================================================= */
const industries = [
  { icon: ShoppingBag, name: "E-commerce", desc: "Packaging, product, social.", tint: "bg-dexon-yellow/40" },
  { icon: Briefcase, name: "SaaS & Tech", desc: "Brand systems & UI kits.", tint: "bg-dexon-cyan/30" },
  { icon: Building2, name: "Real Estate", desc: "Brochures, listings, signage.", tint: "bg-dexon-green/30" },
  { icon: HeartPulse, name: "Healthcare", desc: "Calm, clear, approachable.", tint: "bg-[#f5e7a8]/70" },
  { icon: GraduationCap, name: "Education", desc: "Course brands & illustration.", tint: "bg-dexon-cyan/30" },
  { icon: Utensils, name: "Hospitality", desc: "Menus, packaging & signage.", tint: "bg-dexon-yellow/40" },
  { icon: Megaphone, name: "Creators", desc: "Personal brand & thumbnails.", tint: "bg-dexon-green/30" },
  { icon: Palette, name: "Studios", desc: "Portfolio & editorial design.", tint: "bg-[#f5e7a8]/70" },
];

const Industries = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-card">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="grid lg:grid-cols-3 gap-6 mb-10 sm:mb-12 items-end">
        <div className="lg:col-span-2 max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">Industries</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
            Brands we{" "}
            <span className="relative inline-block">
              <span className="relative z-10">love designing for.</span>
              <span className="absolute left-0 right-0 bottom-1 sm:bottom-2 h-2 sm:h-3 bg-dexon-yellow -z-0" />
            </span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground lg:text-right">
          Same studio quality, tailored to the rhythm and language of your industry.
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
   PROMISES — dark section
========================================================= */
const Promises = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="relative rounded-[36px] bg-[#111] text-white p-8 sm:p-12 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-dexon-yellow/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-dexon-cyan/20 blur-3xl rounded-full" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/50 mb-3">Our promise</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05]">
              No fluff. No clichés.
              <br /><span className="text-dexon-yellow">Just design that works.</span>
            </h2>
            <p className="mt-5 text-white/60 max-w-md">
              We ship visuals that look beautiful and earn their keep — on shelves, on feeds, on screens.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Eye, t: "Unlimited revisions", d: "Until you're genuinely thrilled — not just polite." },
              { icon: Rocket, t: "Fast turnaround", d: "Single creatives in 1–3 days, projects in weeks." },
              { icon: Zap, t: "On-brand, always", d: "Every asset audited against your brand book." },
              { icon: CheckCircle2, t: "You own everything", d: "Editable source files & full IP, no lock-in." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors">
                <Icon className="w-6 h-6 text-dexon-yellow mb-3" />
                <h3 className="text-base font-black tracking-tight">{t}</h3>
                <p className="mt-1 text-sm text-white/60 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* =========================================================
   FAQ
========================================================= */
const faqs = [
  { q: "How many revisions do I get?", a: "Unlimited. We'll keep refining until you're genuinely thrilled — not just polite about it." },
  { q: "Will I get the source files?", a: "Yes. You receive editable Figma, AI, PSD or InDesign files plus exports in every format you need." },
  { q: "Can you match my existing brand?", a: "Of course. Share your brand guidelines or current assets and we'll work within them perfectly." },
  { q: "How fast can you turn things around?", a: "Single creatives ship in 1–3 business days. Bigger projects depend on scope — we always agree a timeline upfront." },
  { q: "Do you handle print production too?", a: "We deliver print-ready files and can manage production with our trusted print partners on request." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Designer's{" "}
            <span className="relative inline-block">
              <span className="relative z-10">notebook.</span>
              <span className="absolute left-0 right-0 bottom-1 sm:bottom-2 h-2 sm:h-3 bg-dexon-cyan -z-0" />
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

const GraphicsDesign = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Hero />
    <Offer />
    <CreativeGallery />
    <Deliverables />
    <Process />
    <Tools />
    <Industries />
    <Promises />
    <FAQ />
    <CtaSection />
    <Footer />
  </div>
);

export default GraphicsDesign;