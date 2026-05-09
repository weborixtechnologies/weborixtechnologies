import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    title: "Lumière Skincare",
    category: "Digital Marketing",
    metric: "+312% ROAS",
    cover: "/DigitalIMG.png",
    accent: "bg-dexon-cyan/40",
  },
  {
    title: "Nodely.io",
    category: "Web Development",
    metric: "Lighthouse 99",
    cover: "/WebIMG.png",
    accent: "bg-dexon-yellow/60",
  },
  {
    title: "Hue & Co.",
    category: "Graphic Design",
    metric: "Brand System",
    cover: "/GraphicIMG.png",
    accent: "bg-dexon-green/50",
  },
];

const PortfolioPreview = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-3">
              Selected work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-[1.05] tracking-tight">
              Recent projects,{" "}
              <span className="relative inline-block">
                <span className="relative z-10">real outcomes.</span>
                <span className="absolute bottom-1 left-0 right-0 h-2 sm:h-3 bg-dexon-yellow -z-0" />
              </span>
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 self-start sm:self-auto px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:scale-105 transition-transform"
          >
            View all work
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map((p, i) => (
            <Link
              key={p.title}
              to="/portfolio"
              className="group relative bg-card rounded-3xl border border-border overflow-hidden hover:-translate-y-1.5 transition-all duration-500"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`relative aspect-[4/3] ${p.accent} overflow-hidden`}>
                <img
                  src={p.cover}
                  alt={p.title}
                  className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full bg-background/90 backdrop-blur text-[10px] font-semibold uppercase tracking-widest">
                  {p.category}
                </span>
              </div>
              <div className="flex items-center justify-between p-5 sm:p-6">
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold tracking-tight truncate">{p.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{p.metric}</p>
                </div>
                <span className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
