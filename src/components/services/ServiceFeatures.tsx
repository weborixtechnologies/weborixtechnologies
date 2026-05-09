import { LucideIcon, ArrowUpRight } from "lucide-react";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Props {
  eyebrow: string;
  heading: string;
  highlight: string;
  features: FeatureItem[];
  accent: string; // tailwind bg color class for icon tile
}

const ServiceFeatures = ({ eyebrow, heading, highlight, features, accent }: Props) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mb-12 sm:mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">{eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-[1.1] tracking-tight">
            {heading}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{highlight}</span>
              <span className="absolute bottom-1 left-0 right-0 h-2 sm:h-3 bg-dexon-yellow -z-0" />
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="group relative bg-muted rounded-3xl p-7 sm:p-8 ring-1 ring-inset ring-border hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute -top-16 -right-16 w-48 h-48 ${accent} rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 ${accent} rounded-2xl flex items-center justify-center mb-5 shadow-sm`}>
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-foreground" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 leading-tight">{f.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{f.description}</p>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-foreground opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    Learn more <ArrowUpRight className="w-4 h-4" />
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

export default ServiceFeatures;
