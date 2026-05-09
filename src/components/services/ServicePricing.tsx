import { Check, ArrowUpRight } from "lucide-react";

export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta?: string;
}

interface Props {
  eyebrow: string;
  heading: string;
  highlight: string;
  tiers: PricingTier[];
}

const ServicePricing = ({ eyebrow, heading, highlight, tiers }: Props) => {
  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-background">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((t, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-2 ${
                t.highlighted
                  ? "bg-dexon-yellow ring-2 ring-foreground shadow-2xl scale-100 lg:scale-105"
                  : "bg-muted ring-1 ring-inset ring-border"
              }`}
            >
              {t.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">{t.name}</h3>
              <p className="mt-2 text-sm text-foreground/70 min-h-[2.5rem]">{t.description}</p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">{t.price}</span>
                {t.period && <span className="text-sm text-foreground/60 font-medium">{t.period}</span>}
              </div>

              <ul className="mt-6 space-y-3">
                {t.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm sm:text-base text-foreground/80">
                    <span className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${t.highlighted ? "bg-foreground text-dexon-yellow" : "bg-foreground text-primary-foreground"}`}>
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all hover:scale-[1.02] ${
                  t.highlighted ? "bg-foreground text-primary-foreground" : "bg-foreground text-primary-foreground hover:bg-foreground/90"
                }`}
              >
                {t.cta || "Choose Plan"}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePricing;
