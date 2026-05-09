import { Check, TrendingUp, Sparkles, Users, Target, Award } from "lucide-react";
import aboutPerson from "@/assets/about-person.png";

const stats = [
  { value: "16M+", label: "Advertising Partners", icon: Users },
  { value: "16%", label: "Sales Increase", icon: TrendingUp },
  { value: "5K+", label: "Social Campaigns", icon: Target },
  { value: "12K+", label: "Marketing Tools", icon: Award },
];

const features = [
  "Continually engineer ethical partnership",
  "Seamlessly pursue orthogonal customer service",
  "Dynamically reconceptualize value",
];

const AboutSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-20 -left-32 w-72 h-72 bg-dexon-yellow/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-dexon-green/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section label */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image with creative composition */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main image container with gradient bg */}
              <div className="relative bg-gradient-to-br from-dexon-cream via-dexon-cream to-dexon-yellow/40 rounded-[2rem] sm:rounded-[2.5rem] pt-6 sm:pt-10 px-6 sm:px-10 pb-0 overflow-hidden">
                {/* Pattern dots */}
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                <img
                  src={aboutPerson}
                  alt="About Weborix Technologies team specializing in business growth"
                  className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto relative z-10 drop-shadow-2xl block"
                  loading="lazy"
                />
              </div>

              {/* Decorative star */}
              <svg
                className="absolute -top-6 -right-2 sm:-top-8 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 text-dexon-green animate-spin"
                style={{ animationDuration: "15s" }}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41Z" />
              </svg>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-[1.1] tracking-tight">
              Specialize in helping{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Companies</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 sm:h-4 bg-dexon-yellow -z-0" />
              </span>{" "}
              Promote Your Business
            </h2>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Ullamcorper risus ultrices risus lorem. Mollis libero in pellentesque potenti.
              Vulputate ut aliquam, consectetur turpis odio.
            </p>

            <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-dexon-green/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-dexon-green/60 transition-colors">
                    <Check className="w-3.5 h-3.5 text-foreground" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dexon-dark text-white text-sm font-semibold hover:bg-foreground/90 hover:scale-105 transition-all"
              >
                Learn More
                <span aria-hidden>→</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-foreground/70 transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-dexon-cream flex items-center justify-center">▶</span>
                Watch Demo
              </a>
            </div>
          </div>
        </div>

        {/* Stats - creative card layout */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              const accents = ["bg-dexon-yellow", "bg-dexon-green/40", "bg-dexon-cyan/50", "bg-dexon-cream"];
              return (
                <div
                  key={stat.label}
                  className="group relative bg-card border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Accent corner */}
                  <div className={`absolute -top-8 -right-8 w-20 h-20 sm:w-24 sm:h-24 rounded-full ${accents[idx]} opacity-80 group-hover:scale-125 transition-transform duration-500`} />

                  <div className="relative">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-foreground/5 flex items-center justify-center mb-3 sm:mb-4">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                    </div>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2 font-medium">
                      {stat.label}
                    </p>
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

export default AboutSection;
