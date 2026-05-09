import { ArrowUpRight, BarChart3 } from "lucide-react";

const FacebookMockup = () => (
  <div className="mt-5 sm:mt-6 bg-card rounded-xl p-3 flex items-center gap-3 shadow-sm">
    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">f</div>
    <div className="flex-1 space-y-1.5 min-w-0">
      <div className="h-2 bg-muted rounded-full w-3/4"></div>
      <div className="h-2 bg-muted rounded-full w-1/2"></div>
    </div>
    <div className="px-3 py-1.5 bg-dexon-yellow rounded-lg text-xs font-semibold text-foreground flex-shrink-0">Go</div>
  </div>
);

const ChartMockup = () => (
  <div className="mt-5 sm:mt-6 flex items-end justify-end">
    <div className="relative">
      <svg className="w-20 sm:w-24 h-14 sm:h-16 text-white/40" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4">
        <path d="M0 55 Q50 55 70 30 Q80 15 95 10" />
        <path d="M88 5 L95 10 L88 15" strokeDasharray="none" />
      </svg>
    </div>
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border-2 border-dexon-green bg-card flex items-center justify-center ml-2">
      <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 text-dexon-green" />
    </div>
  </div>
);

const CalendarMockup = () => (
  <div className="mt-5 sm:mt-6 flex items-end justify-center md:justify-end gap-2">
    <div className="w-14 h-18 sm:w-16 sm:h-20 bg-card rounded-xl border border-border shadow-sm flex flex-col items-center justify-center gap-1">
      <div className="w-3 h-3 rounded-full border-2 border-muted-foreground/30"></div>
      <div className="h-1.5 bg-muted rounded-full w-7 sm:w-8"></div>
    </div>
    <div className="w-14 h-18 sm:w-16 sm:h-20 bg-dexon-yellow rounded-xl flex flex-col items-center justify-center gap-1">
      <div className="w-3 h-3 rounded-full bg-foreground/20"></div>
      <div className="h-1.5 bg-foreground/20 rounded-full w-7 sm:w-8"></div>
    </div>
    <div className="w-14 h-18 sm:w-16 sm:h-20 bg-dexon-cyan rounded-xl flex flex-col items-center justify-center gap-1">
      <div className="w-3 h-3 rounded-full bg-foreground/20"></div>
      <div className="h-1.5 bg-foreground/20 rounded-full w-7 sm:w-8"></div>
    </div>
  </div>
);

const BusinessSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-dexon-dark text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start mb-10 sm:mb-14">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight">
              Improve your Business{" "}
              <span className="text-dexon-yellow">to the Next Levels</span>
            </h2>
          </div>
          <div className="flex items-start gap-4">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-dexon-yellow flex-shrink-0 mt-1 animate-spin"
              style={{ animationDuration: "10s" }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41Z" />
            </svg>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-md">
              Ullamcorper risus ultrices risus lorem. Mollis libero in
              pellentesque Vulputate ut aliquam, consectetur turpis
            </p>
          </div>
        </div>

        {/* Cards - bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <div className="bg-dexon-yellow rounded-3xl p-6 sm:p-8 lg:p-10 group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-foreground">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Social Media Mastery</h3>
            <p className="text-sm text-foreground/70 leading-relaxed mb-4">
              Competently leverage other's diverse action items via vertical to collaboratively harness ubiquitous materials
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:opacity-80 transition-opacity underline underline-offset-4">
              Read More <ArrowUpRight className="w-4 h-4" />
            </a>
            <FacebookMockup />
          </div>

          <div className="bg-dexon-green/20 rounded-3xl p-6 sm:p-8 lg:p-10 group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-dexon-green rounded-[40%_60%_70%_30%/40%_50%_60%_50%]"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Customer Increasing</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                Competently leverage other's diverse action items via vertical to collaboratively harness ubiquitous materials
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:opacity-80 transition-opacity underline underline-offset-4">
                Read More <ArrowUpRight className="w-4 h-4" />
              </a>
              <ChartMockup />
            </div>
          </div>

          <div className="md:col-span-2 bg-card/10 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Sales Statistics</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-4">
                  Competently leverage other's diverse action items via vertical to collaboratively harness ubiquitous materials
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:opacity-80 transition-opacity underline underline-offset-4">
                  Read More <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <CalendarMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
