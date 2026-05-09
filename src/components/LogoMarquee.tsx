interface LogoItem {
  name: string;
  slug: string; // simpleicons slug
}

interface Props {
  eyebrow: string;
  items: LogoItem[];
  variant?: "dark" | "light" | "cream";
  reverse?: boolean;
}

const LogoMarquee = ({ eyebrow, items, variant = "light", reverse = false }: Props) => {
  const bg =
    variant === "dark"
      ? "bg-dexon-dark text-primary-foreground"
      : variant === "cream"
      ? "bg-dexon-cream"
      : "bg-background";
  const chip =
    variant === "dark"
      ? "border border-white/15 bg-white/5 text-white"
      : "border border-border bg-card text-foreground";
  const eyebrowColor = variant === "dark" ? "text-dexon-yellow" : "text-muted-foreground";
  const animClass = reverse ? "animate-marquee-rev" : "animate-marquee";

  return (
    <section className={`py-10 sm:py-12 overflow-hidden border-y border-border ${bg}`}>
      <p className={`text-center text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] mb-6 ${eyebrowColor}`}>
        {eyebrow}
      </p>
      <div className="relative">
        <div className={`flex gap-5 sm:gap-7 ${animClass} whitespace-nowrap w-max`}>
          {[...items, ...items].map((logo, i) => (
            <span
              key={i}
              className={`inline-flex items-center justify-center px-4 sm:px-5 py-2.5 sm:py-3 rounded-full ${chip} shrink-0`}
            >
              <img
                src={`https://cdn.simpleicons.org/${logo.slug}`}
                alt={logo.name}
                className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
