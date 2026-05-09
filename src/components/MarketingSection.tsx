import { ArrowUpRight, TrendingUp } from "lucide-react";
import marketingImg from "@/assets/marketing-img.png";

const MarketingSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dexon-cream border border-border mb-5">
              <TrendingUp className="w-4 h-4 text-foreground" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">Marketing</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-[1.1] tracking-tight">
              We use various marketing channels to reach{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Sales</span>
                <span className="absolute bottom-1 left-0 right-0 h-2 sm:h-3 bg-dexon-yellow -z-0" />
              </span>
            </h2>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
              Ullamcorper risus ultrices risus lorem. Mollis libero in pellentesque potenti.
              Vulputate ut aliquam, consectetur turpis odio.
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

          {/* Right image */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-to-br from-dexon-cream to-dexon-yellow/30 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-dexon-green rounded-2xl p-3 sm:p-4 shadow-lg z-10">
                <p className="text-xl sm:text-2xl font-black text-foreground">97%</p>
                <p className="text-[10px] sm:text-xs text-foreground/70">Success</p>
              </div>
              <img
                src={marketingImg}
                alt="Marketing dashboard"
                className="w-full max-w-sm sm:max-w-md mx-auto relative z-0 drop-shadow-2xl"
                loading="lazy"
                width={512}
                height={512}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
