import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, SlidersHorizontal, TrendingUp, Users, Sparkles, Megaphone, Code2, Palette } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";

type Category = "All Projects" | "Digital Marketing" | "Web Development" | "Graphic Design";

type Project = {
  title: string;
  category: Exclude<Category, "All Projects">;
  metric: string;
  cover: string;
  tint: string; // overlay tint
  offset?: string; // tailwind translate for masonry feel
};

const projects: Project[] = [
  { title: "Lumière Skincare", category: "Digital Marketing", metric: "+312% ROAS", cover: "/DigitalIMG.png", tint: "bg-dexon-cyan/30" },
  { title: "Nodely.io", category: "Web Development", metric: "Lighthouse 99", cover: "/WebIMG.png", tint: "bg-dexon-yellow/30", offset: "md:-translate-y-12" },
  { title: "Hue & Co.", category: "Graphic Design", metric: "Brand System", cover: "/GraphicIMG.png", tint: "bg-dexon-green/30", offset: "lg:-translate-y-24" },
  { title: "Skillpath", category: "Digital Marketing", metric: "₹38 → ₹11 / lead", cover: "/DigitalIMG.png", tint: "bg-dexon-yellow/30" },
  { title: "Maker Goods", category: "Web Development", metric: "+47% conversions", cover: "/WebIMG.png", tint: "bg-dexon-green/30", offset: "md:-translate-y-12" },
  { title: "Nori Tea Co.", category: "Graphic Design", metric: "12 SKUs shipped", cover: "/GraphicIMG.png", tint: "bg-dexon-cyan/30", offset: "lg:-translate-y-24" },
];

const tabs: Category[] = ["All Projects", "Digital Marketing", "Web Development", "Graphic Design"];


const graphDots = [
  { cx: 60, cy: 100 },
  { cx: 150, cy: 92 },
  { cx: 240, cy: 60 },
  { cx: 310, cy: 20 },
];
const Portfolio = () => {
  const [active, setActive] = useState<Category>("All Projects");

  const filtered = useMemo(
    () => (active === "All Projects" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

{/* HERO */}
<section className="bg-[#f5f3ee] pt-20 sm:pt-24 lg:pt-28 pb-6 lg:pb-8 px-4 overflow-hidden min-h-[78vh]">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">

    {/* LEFT BIG CARD */}
    <div className="lg:col-span-2 relative rounded-[36px] bg-[#ece9e4] p-6 sm:p-8 lg:p-9 min-h-[520px] flex flex-col border border-black/5 overflow-hidden">

      {/* BACKGROUND BLUR */}
      <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#e3c85d]/20 rounded-full blur-3xl" />

      {/* TOP TAG */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e3c85d] bg-[#f5e7a8]/40 backdrop-blur-sm w-fit relative z-10">
        <span className="text-[11px] font-semibold tracking-wide text-[#9f8422]">
          Growing your revenue faster
        </span>

        <div className="w-5 h-5 rounded-full bg-[#e3c85d] flex items-center justify-center text-[10px] text-black">
          ↗
        </div>
      </div>

      {/* HEADING */}
      <div className="mt-7 max-w-[650px] relative z-10">
        <h1 className="text-[2.5rem] sm:text-[3.8rem] lg:text-[4.5rem] leading-[0.92] tracking-[-0.05em] font-black text-[#111111]">
          Growing your
          <br />
          Revenue using
          <br />
          <span className="text-[#e3c85d] underline decoration-[#e3c85d]/40 underline-offset-4">
            Our Services
          </span>
        </h1>

        <p className="mt-5 text-[15px] sm:text-lg leading-relaxed text-black/55 max-w-xl">
          We provide comprehensive digital solutions engineered for growth and built with technical precision.
        </p>
      </div>

      {/* BUTTONS */}
      <div className="mt-7 flex flex-wrap gap-4 relative z-10">
        <button className="h-14 px-7 rounded-2xl bg-black text-white text-sm font-semibold hover:scale-[1.03] hover:shadow-2xl transition-all duration-300">
          Get Started
        </button>

        <button className="h-14 px-7 rounded-2xl border border-black/10 bg-white text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300">
          View Works
        </button>
      </div>

      {/* TRUSTED STATS */}
      <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">

        <div className="rounded-3xl bg-white/70 backdrop-blur-sm border border-white/60 p-5">
          <h4 className="text-3xl font-black text-[#111111]">
            250+
          </h4>

          <p className="mt-1 text-sm text-black/50 font-medium">
            Projects Delivered
          </p>
        </div>

        <div className="rounded-3xl bg-[#f5e7a8]/70 backdrop-blur-sm border border-[#e3c85d]/20 p-5">
          <h4 className="text-3xl font-black text-[#111111]">
            98%
          </h4>

          <p className="mt-1 text-sm text-black/50 font-medium">
            Client Satisfaction
          </p>
        </div>

        <div className="rounded-3xl bg-[#dfe9e2]/80 backdrop-blur-sm border border-white/60 p-5 col-span-2 sm:col-span-1">
          <h4 className="text-3xl font-black text-[#111111]">
            24/7
          </h4>

          <p className="mt-1 text-sm text-black/50 font-medium">
            Dedicated Support
          </p>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="mt-6 hidden md:block">
        <div className="w-full h-[1px] bg-black/5" />
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex flex-col gap-5 min-h-[520px]">

      {/* TOP CARD */}
      <div className="relative flex-1 rounded-[36px] bg-[#dfe9e2] p-6 border border-black/5 overflow-hidden flex flex-col justify-between min-h-[300px] group">

        {/* GLOW EFFECT */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#e3c85d]/30 blur-3xl rounded-full group-hover:scale-125 transition-transform duration-700" />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-black/40 font-semibold">
              Live Stats
            </p>

            <h3 className="mt-3 text-[2.4rem] leading-[0.95] font-black tracking-tight text-[#111111]">
              Revenue
              <br />
              Analytics
            </h3>
          </div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-xl shadow-xl"
          >
            ↗
          </motion.div>
        </div>

        {/* LIVE GRAPH */}
        <div className="relative mt-5 h-[150px] z-10">

          {/* GRID */}
          <div className="absolute inset-0 grid grid-cols-4 gap-5 opacity-20">
            <div className="border-l border-black h-full" />
            <div className="border-l border-black h-full" />
            <div className="border-l border-black h-full" />
            <div className="border-l border-black h-full" />
          </div>

          {/* ANIMATED BARS */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-2">
            {[40, 65, 55, 92].map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{
                  height: [`${height - 10}%`, `${height}%`, `${height - 6}%`],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-[5px] bg-black/20 rounded-full"
              />
            ))}
          </div>

          {/* SVG GRAPH */}
          <svg
            viewBox="0 0 320 180"
            className="absolute inset-0 w-full h-full"
            fill="none"
          >
            <motion.path
              d="M10 140 C60 100, 100 80, 150 92 C210 105, 240 60, 310 20"
              stroke="#111111"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            />

            {graphDots.map((dot, index) => (
              <motion.circle
                key={index}
                cx={dot.cx}
                cy={dot.cy}
                r="6"
                fill="#111111"
                animate={{
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: index * 0.25,
                }}
              />
            ))}
          </svg>

          {/* FLOATING BADGE */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 right-0 bg-[#e3c85d] text-black text-sm font-black px-5 py-3 rounded-full shadow-2xl"
          >
            +46%
          </motion.div>
        </div>
      </div>

      {/* BOTTOM CARD */}
      <div className="rounded-[36px] bg-[#f5e7a8] min-h-[180px] p-6 border border-black/5 flex flex-col justify-between">

        <div>
          <h3 className="text-[1.9rem] leading-[1.05] font-black tracking-tight text-[#111111]">
            Build your
            <br />
            digital identity
          </h3>
        </div>

        <div className="flex items-center justify-between gap-4 flex-wrap mt-8">

          <div className="flex -space-x-3">
            <img
              className="w-12 h-12 rounded-full border-4 border-[#f5e7a8] object-cover"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Client"
            />

            <img
              className="w-12 h-12 rounded-full border-4 border-[#f5e7a8] object-cover"
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Client"
            />

            <img
              className="w-12 h-12 rounded-full border-4 border-[#f5e7a8] object-cover"
              src="https://randomuser.me/api/portraits/men/76.jpg"
              alt="Client"
            />
          </div>

          <div className="px-5 py-3 rounded-full bg-black text-white text-sm font-medium whitespace-nowrap">
            +56 Clients
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* OUR SERVICES */}
      <section className="py-16 sm:py-20 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-5">
              Growing your Revenue using{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-dexon-yellow">Our Services</span>
                <span className="absolute left-0 right-0 bottom-1 h-1 bg-dexon-yellow" />
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              We provide comprehensive digital solutions engineered for growth
              and built with technical precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Digital Marketing",
                desc: "Strategic campaigns focused on growth, SEO optimization, and maximizing your social media ROI.",
                Icon: Megaphone,
                href: "/services/digital-marketing",
                tint: "bg-dexon-cyan/30",
              },
              {
                title: "Web Development",
                desc: "High-performance, custom-coded websites engineered for speed, scalability, and exceptional UX.",
                Icon: Code2,
                href: "/services/web-development",
                tint: "bg-dexon-yellow/30",
                offset: "md:mt-10",
              },
              {
                title: "Graphic Design",
                desc: "Compelling visual identity, branding, and creative assets that communicate your brand's value.",
                Icon: Palette,
                href: "/services/graphics-design",
                tint: "bg-dexon-green/30",
              },
            ].map(({ title, desc, Icon, href, tint, offset }) => (
              <Link
                key={title}
                to={href}
                className={`group relative bg-background rounded-3xl p-7 sm:p-8 border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${offset ?? ""}`}
              >
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">{title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-7 line-clamp-3">{desc}</p>

                <div className={`relative h-44 sm:h-48 mb-7 rounded-2xl overflow-hidden ${tint} flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500`}>
                  <Icon className="w-16 h-16 sm:w-20 sm:h-20 text-foreground/30" strokeWidth={1.5} />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest">Learn More</span>
                  <span className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center group-hover:bg-dexon-yellow group-hover:text-foreground transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3 sm:mb-4">
                Selected Work
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
                Recent projects,
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">real outcomes.</span>
                  <span className="absolute left-0 right-0 bottom-1 sm:bottom-2 h-2 sm:h-3 bg-dexon-yellow -z-0" />
                </span>
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex self-start items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:scale-105 transition-transform"
            >
              View all work
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((p, i) => (
              <Link
                key={p.title + i}
                to="/contact"
                className={`group block ${p.offset ?? ""}`}
              >
                <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden mb-5 sm:mb-6 ${p.tint}`}>
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-full bg-background/90 backdrop-blur text-[11px] font-bold uppercase tracking-widest">
                    {p.category}
                  </span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight truncate">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.metric}</p>
                  </div>
                  <span className="shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* STATS BENTO */}
      <section className="py-16 sm:py-20 lg:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
            <div className="lg:col-span-8 relative overflow-hidden rounded-[2rem] bg-card text-card-foreground p-8 sm:p-10 lg:p-12 isolate">
              <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-dexon-yellow rounded-bl-[100%] opacity-30 -z-10" />
              <div className="mb-10 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-5">
                  Improve your Business{" "}
                  <span className="text-dexon-yellow">to the Next Levels</span>
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
                  Strategy, design and engineering that compound — built to grow
                  pipeline, retention, and brand value over time.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {[
                  { title: "Social Media Mastery", desc: "Content engines and paid social that turn attention into qualified pipeline." },
                  { title: "Customer Increasing", desc: "Funnels, CRO and lifecycle systems engineered for sustainable growth." },
                ].map((b) => (
                  <div key={b.title} className="bg-background text-foreground rounded-2xl p-5 sm:p-6 border border-border">
                    <h4 className="text-lg sm:text-xl font-black tracking-tight mb-2">{b.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{b.desc}</p>
                    <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest hover:text-dexon-yellow transition-colors">
                      Read more <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 sm:gap-6">
              <div className="relative overflow-hidden rounded-[2rem] bg-dexon-cyan/30 text-foreground p-8 sm:p-10 flex-1 group">
                <Users className="absolute -right-4 -top-4 w-28 h-28 sm:w-32 sm:h-32 text-foreground/10 group-hover:scale-110 transition-transform" />
                <h3 className="text-4xl sm:text-5xl font-black tracking-tight mb-2">16M+</h3>
                <p className="text-sm sm:text-base font-medium opacity-80">Advertising Reach</p>
              </div>
              <div className="relative overflow-hidden rounded-[2rem] bg-dexon-green/40 text-foreground p-8 sm:p-10 flex-1 group">
                <TrendingUp className="absolute -right-4 -top-4 w-28 h-28 sm:w-32 sm:h-32 text-foreground/10 group-hover:scale-110 transition-transform" />
                <h3 className="text-4xl sm:text-5xl font-black tracking-tight mb-2">97%</h3>
                <p className="text-sm sm:text-base font-medium opacity-80">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection/>

      <Footer />
    </div>
  );
};

export default Portfolio;
