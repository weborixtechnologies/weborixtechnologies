import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  TrendingUp,
  Search,
  Megaphone,
  Mail,
  Share2,
  Users,
  BarChart2,
  Zap,
} from "lucide-react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const CHANNELS = [
  { id: "seo",    Icon: Search,    label: "SEO",       accent: "#F5D547", textColor: "#92720A", img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=48&h=48&fit=crop" },
  { id: "ads",    Icon: Megaphone, label: "Paid Ads",  accent: "#86EFAC", textColor: "#166534", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=48&h=48&fit=crop" },
  { id: "email",  Icon: Mail,      label: "Email",     accent: "#93C5FD", textColor: "#1E3A8A", img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=48&h=48&fit=crop" },
  { id: "social", Icon: Share2,    label: "Social",    accent: "#F9A8D4", textColor: "#9D174D", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=48&h=48&fit=crop" },
];

const SEGMENTS = [
  { id: "leads",   Icon: Zap,      label: "Leads",    accent: "#FDE68A" },
  { id: "users",   Icon: Users,    label: "Users",    accent: "#A7F3D0" },
  { id: "revenue", Icon: BarChart2, label: "Revenue", accent: "#BFDBFE" },
];

/* ─────────────────────────────────────────
   HOOK — intersection observer
───────────────────────────────────────── */
function useInView(threshold = 0.25): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─────────────────────────────────────────
   TRAVELLING DOT along an SVG path
───────────────────────────────────────── */
function TravelDot({ pathId, color, duration, delay, started }) {
  return started ? (
    <circle r="4" fill={color} style={{ filter: `drop-shadow(0 0 4px ${color})` }}>
      <animateMotion
        dur={`${duration}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
        keyPoints="0;1"
        keyTimes="0;1"
        calcMode="linear"
      >
        <mpath href={`#${pathId}`} />
      </animateMotion>
    </circle>
  ) : null;
}

/* ─────────────────────────────────────────
   DRAW-IN PATH (stroke-dashoffset reveal)
───────────────────────────────────────── */
function RevealPath({ d, id, stroke, strokeWidth = 1.5, delay, inView, dashed }) {
  const ref = useRef(null);
  const [len, setLen] = useState(400);
  useEffect(() => {
    if (ref.current) setLen(ref.current.getTotalLength());
  }, [d]);
  return (
    <path
      ref={ref}
      id={id}
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeDasharray={dashed ? "5 5" : `${len}`}
      strokeDashoffset={inView ? 0 : len}
      strokeLinecap="round"
      style={{
        transition: `stroke-dashoffset 1s cubic-bezier(.4,0,.2,1) ${delay}ms`,
      }}
    />
  );
}

/* ─────────────────────────────────────────
   CHANNEL CARD (left column)
───────────────────────────────────────── */
function ChannelCard({ ch, index, inView }) {
  const delay = 100 + index * 120;
  return (
    <div
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-18px)",
        transition: `opacity .5s ease ${delay}ms, transform .5s ease ${delay}ms`,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "#fff",
        border: `1.5px solid ${ch.accent}`,
        borderRadius: "14px",
        padding: "10px 14px",
        boxShadow: `0 2px 12px ${ch.accent}44`,
        cursor: "default",
        userSelect: "none",
      }}
    >
      <div style={{
        width: 36, height: 36, borderRadius: "10px",
        background: ch.accent + "33",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        <ch.Icon size={16} color={ch.textColor} strokeWidth={2.2} />
      </div>
      <div>
        <div style={{ fontSize: "12px", fontWeight: 700, color: "#111", lineHeight: 1.2 }}>{ch.label}</div>
        <div style={{ fontSize: "10px", color: "#9CA3AF", marginTop: 2 }}>Channel active</div>
      </div>
      <div style={{
        marginLeft: "auto",
        width: 8, height: 8, borderRadius: "50%",
        background: ch.accent,
        boxShadow: `0 0 6px ${ch.accent}`,
        animation: inView ? "pulse-dot 1.8s ease-in-out infinite" : "none",
        animationDelay: `${index * 0.3}s`,
      }} />
    </div>
  );
}

/* ─────────────────────────────────────────
   SEGMENT PILL (right column)
───────────────────────────────────────── */
function SegmentPill({ seg, index, inView }) {
  const delay = 900 + index * 150;
  return (
    <div
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(18px)",
        transition: `opacity .5s ease ${delay}ms, transform .5s ease ${delay}ms`,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        background: "#fff",
        border: `1.5px solid ${seg.accent}`,
        borderRadius: "14px",
        padding: "10px 14px",
        boxShadow: `0 2px 10px ${seg.accent}44`,
      }}
    >
      <div style={{
        width: 32, height: 32, borderRadius: "9px",
        background: seg.accent + "55",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        <seg.Icon size={15} color="#374151" strokeWidth={2.2} />
      </div>
      <span style={{ fontSize: "12px", fontWeight: 700, color: "#111" }}>{seg.label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN DIAGRAM
───────────────────────────────────────── */
function MarketingDiagram() {
  const [ref, inView] = useInView(0.2);
  const [dotsGo, setDotsGo] = useState(false);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setDotsGo(true), 1200);
      return () => clearTimeout(t);
    }
  }, [inView]);

  /* SVG canvas */
  const W = 560, H = 420;

  /* Column X positions */
  const leftX  = 90;
  const coreX  = W / 2;
  const rightX = W - 90;
  const coreY  = H / 2;
  const coreR  = 46;

  /* Channel Y positions — evenly spread */
  const chYs = CHANNELS.map((_, i) => {
    const spread = 230;
    return coreY - spread / 2 + (i / (CHANNELS.length - 1)) * spread;
  });

  /* Segment Y positions */
  const segYs = SEGMENTS.map((_, i) => {
    const spread = 170;
    return coreY - spread / 2 + (i / (SEGMENTS.length - 1)) * spread;
  });

  /* Bezier path: channel → core */
  function chPath(i) {
    const sx = 176, sy = chYs[i];
    const ex = coreX - coreR - 2, ey = coreY;
    const mx = (sx + ex) / 2;
    return `M ${sx} ${sy} C ${mx} ${sy}, ${mx} ${ey}, ${ex} ${ey}`;
  }

  /* Bezier path: core → segment */
  function segPath(i) {
    const sx = coreX + coreR + 2, sy = coreY;
    const ex = W - 176, ey = segYs[i];
    const mx = (sx + ex) / 2;
    return `M ${sx} ${sy} C ${mx} ${sy}, ${mx} ${ey}, ${ex} ${ey}`;
  }

  return (
    /* ↓ Only change: added lg:max-w-[720px] to make it larger on desktop */
    <div ref={ref} style={{ width: "100%", margin: "0 auto", position: "relative" }} className="max-w-[560px] lg:max-w-[720px]">
      <style>{`
        @keyframes pulse-dot {
          0%,100% { transform:scale(1); opacity:1; }
          50%      { transform:scale(1.6); opacity:.6; }
        }
        @keyframes spin-ring {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes counter-ring {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes hub-breathe {
          0%,100% { r:46; }
          50%      { r:48; }
        }
      `}</style>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", overflow: "visible" }}>
        <defs>
          {/* Radial glow for core */}
          <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#F5D547" stopOpacity="1" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
          </radialGradient>
          <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#F5D547" stopOpacity=".35" />
            <stop offset="100%" stopColor="#F5D547" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── channel → core paths ── */}
        {CHANNELS.map((ch, i) => (
          <g key={ch.id}>
            <RevealPath
              id={`ch-path-${i}`}
              d={chPath(i)}
              stroke={ch.accent}
              strokeWidth={2}
              delay={200 + i * 100}
              inView={inView} dashed={undefined}            />
            {/* travelling dots */}
            {[0, 0.4, 0.8].map((offset, k) => (
              <TravelDot
                key={k}
                pathId={`ch-path-${i}`}
                color={ch.accent}
                duration={1.8}
                delay={offset + i * 0.25}
                started={dotsGo}
              />
            ))}
          </g>
        ))}

        {/* ── core → segment paths ── */}
        {SEGMENTS.map((seg, i) => (
          <g key={seg.id}>
            <RevealPath
              id={`seg-path-${i}`}
              d={segPath(i)}
              stroke={seg.accent}
              strokeWidth={2}
              delay={800 + i * 120}
              inView={inView} dashed={undefined}            />
            {[0, 0.5].map((offset, k) => (
              <TravelDot
                key={k}
                pathId={`seg-path-${i}`}
                color={seg.accent}
                duration={1.6}
                delay={offset + 0.5 + i * 0.3}
                started={dotsGo}
              />
            ))}
          </g>
        ))}

        {/* ── Core Hub ── */}

        {/* spinning dashed ring */}
        <g style={{
          transformOrigin: `${coreX}px ${coreY}px`,
          animation: inView ? "spin-ring 12s linear infinite" : "none",
          opacity: inView ? 1 : 0,
          transition: "opacity .5s ease 600ms",
        }}>
          <circle cx={coreX} cy={coreY} r={coreR + 14}
            fill="none" stroke="#F5D547" strokeWidth="1.5"
            strokeDasharray="4 8" strokeLinecap="round" />
        </g>
        {/* counter-spinning ring */}
        <g style={{
          transformOrigin: `${coreX}px ${coreY}px`,
          animation: inView ? "counter-ring 18s linear infinite" : "none",
          opacity: inView ? 1 : 0,
          transition: "opacity .5s ease 650ms",
        }}>
          <circle cx={coreX} cy={coreY} r={coreR + 22}
            fill="none" stroke="#F5D54760" strokeWidth="1"
            strokeDasharray="2 14" strokeLinecap="round" />
        </g>
        {/* solid hub — shadow glow removed */}
        <circle
          cx={coreX}
          cy={coreY}
          r={coreR}
          fill="#000000"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity .5s ease 450ms",
          }}
        />
        {/* avatar */}
        <clipPath id="avatarClip">
          <circle cx={coreX} cy={coreY} r={coreR - 3} />
        </clipPath>
        <image
          href="/icon.png"
          x={coreX - (coreR - 3)} y={coreY - (coreR - 3)}
          width={(coreR - 3) * 2} height={(coreR - 3) * 2}
          clipPath="url(#avatarClip)"
          style={{ opacity: inView ? 1 : 0, transition: "opacity .5s ease 550ms" }}
        />

        {/* ── Channel card foreign objects ── */}
        {CHANNELS.map((ch, i) => (
          <foreignObject
            key={ch.id}
            x={4} y={chYs[i] - 28}
            width="172" height="56"
            style={{
              opacity: inView ? 1 : 0,
              transition: `opacity .5s ease ${80 + i * 110}ms`,
            }}
          >
            <div style={{
              display: "flex", alignItems: "center", gap: "9px",
              background: "#fff",
              border: `1.5px solid ${ch.accent}`,
              borderRadius: "13px",
              padding: "8px 12px",
              boxShadow: `0 2px 10px ${ch.accent}44`,
              height: "100%",
              boxSizing: "border-box",
            }}>
              <div style={{
                width: 30, height: 30, borderRadius: "9px",
                background: ch.accent + "33",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <ch.Icon size={14} color={ch.textColor} strokeWidth={2.2} />
              </div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#111", lineHeight: 1.2 }}>{ch.label}</div>
                <div style={{ fontSize: "11px", color: "#9CA3AF", marginTop: 1 }}>Active</div>
              </div>
              <div style={{
                marginLeft: "auto",
                width: 7, height: 7, borderRadius: "50%",
                background: ch.accent,
                boxShadow: `0 0 5px ${ch.accent}`,
                flexShrink: 0,
                animation: inView ? "pulse-dot 2s ease-in-out infinite" : "none",
                animationDelay: `${i * 0.35}s`,
              }} />
            </div>
          </foreignObject>
        ))}

        {/* ── Segment pill foreign objects ── */}
        {SEGMENTS.map((seg, i) => (
          <foreignObject
            key={seg.id}
            x={W - 176} y={segYs[i] - 28}
            width="172" height="56"
            style={{
              opacity: inView ? 1 : 0,
              transition: `opacity .5s ease ${880 + i * 140}ms`,
            }}
          >
            <div style={{
              display: "flex", alignItems: "center", gap: "9px",
              background: "#fff",
              border: `1.5px solid ${seg.accent}`,
              borderRadius: "13px",
              padding: "8px 12px",
              height: "100%",
              boxSizing: "border-box",
              boxShadow: `0 2px 10px ${seg.accent}44`,
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: "8px",
                background: seg.accent + "55",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <seg.Icon size={13} color="#374151" strokeWidth={2.2} />
              </div>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#111" }}>{seg.label}</span>
            </div>
          </foreignObject>
        ))}

        <style>{`
          @keyframes floatY {
            0%,100% { transform: translateY(0); }
            50%      { transform: translateY(-6px); }
          }
        `}</style>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────
   PAGE SECTION
───────────────────────────────────────── */
const MarketingSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left content (UNCHANGED) ── */}
          <div className="order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dexon-cream border border-border mb-5">
              <TrendingUp className="w-4 h-4 text-foreground" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Marketing
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-[1.1] tracking-tight">
              We use various marketing channels to reach{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Sales</span>
                <span className="absolute bottom-1 left-0 right-0 h-2 sm:h-3 bg-dexon-yellow -z-0" />
              </span>
            </h2>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
              Ullamcorper risus ultrices risus lorem. Mollis libero in
              pellentesque potenti. Vulputate ut aliquam, consectetur turpis
              odio.
            </p>
            <div className="grid grid-cols-2 gap-6 sm:gap-12 mt-7 sm:mt-8 max-w-sm">
              <div>
                <p className="text-3xl sm:text-4xl font-black text-foreground">50%</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Content Strategy</p>
                <div className="mt-3 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-dexon-yellow rounded-full" />
                </div>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-foreground">70%</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Audience Growup</p>
                <div className="mt-3 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[70%] bg-dexon-green rounded-full" />
                </div>
              </div>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground mt-7 sm:mt-8 border-b-2 border-dexon-yellow pb-1 hover:opacity-80 transition-opacity"
            >
              Learn More
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* ── Right: Animated Diagram ── */}
          <div className="order-2 flex items-center justify-center w-full">
            <MarketingDiagram />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketingSection;