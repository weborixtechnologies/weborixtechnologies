interface Step {
  title: string;
  description: string;
}

interface Props {
  eyebrow: string;
  heading: string;
  highlight: string;
  steps: Step[];
  accent: string;
}

const ServiceProcess = ({ eyebrow, heading, highlight, steps, accent }: Props) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-dexon-cream">
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

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {/* connector line */}
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-foreground/20" />

          {steps.map((s, i) => (
            <div key={i} className="relative bg-card rounded-3xl p-6 sm:p-7 ring-1 ring-inset ring-border hover:-translate-y-2 transition-transform duration-300 shadow-sm">
              <div className={`relative z-10 w-16 h-16 ${accent} rounded-full flex items-center justify-center mb-5 font-black text-2xl text-foreground shadow-md ring-4 ring-card`}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 leading-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
