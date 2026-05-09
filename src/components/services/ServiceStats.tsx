interface Stat {
  value: string;
  label: string;
}

interface Props {
  stats: Stat[];
}

const ServiceStats = ({ stats }: Props) => {
  return (
    <section className="py-16 sm:py-20 bg-dexon-dark text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {stats.map((s, i) => (
            <div key={i} className="text-center sm:text-left">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-dexon-yellow leading-none tracking-tight">
                {s.value}
              </div>
              <p className="mt-3 text-sm sm:text-base text-primary-foreground/70 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceStats;
