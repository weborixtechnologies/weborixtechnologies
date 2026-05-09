interface Props {
  eyebrow: string;
  heading: string;
  items: string[];
}

const ServiceStack = ({ eyebrow, heading, items }: Props) => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">{eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground leading-[1.1] tracking-tight">{heading}</h2>
          </div>
          <div className="lg:col-span-2 flex flex-wrap gap-3">
            {items.map((item) => (
              <span
                key={item}
                className="inline-flex items-center px-5 py-3 rounded-full bg-muted ring-1 ring-inset ring-border text-sm sm:text-base font-semibold text-foreground hover:bg-dexon-yellow hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceStack;
