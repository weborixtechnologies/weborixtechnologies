import { Check } from "lucide-react";

interface Props {
  eyebrow: string;
  heading: string;
  highlight: string;
  paragraphs: string[];
  bullets: string[];
  image: string;
  accent: string;
}

const ServiceOverview = ({ eyebrow, heading, highlight, paragraphs, bullets, image, accent }: Props) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className={`absolute -top-6 -left-6 w-32 h-32 ${accent} rounded-3xl -z-10`} />
            <div className={`absolute -bottom-6 -right-6 w-40 h-40 ${accent} opacity-50 rounded-full blur-2xl -z-10`} />
            <div className="relative bg-muted rounded-[2rem] p-6 sm:p-8 ring-1 ring-inset ring-border overflow-hidden">
              <img src={image} alt={heading} loading="lazy" width={1024} height={1024} className="w-full h-auto" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">{eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-[1.1] tracking-tight">
              {heading}{" "}
              <span className="relative inline-block">
                <span className="relative z-10">{highlight}</span>
                <span className="absolute bottom-1 left-0 right-0 h-2 sm:h-3 bg-dexon-yellow -z-0" />
              </span>
            </h2>

            {paragraphs.map((p, i) => (
              <p key={i} className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">{p}</p>
            ))}

            <ul className="mt-7 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm sm:text-base text-foreground font-medium">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-dexon-yellow flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-foreground" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
