import { ArrowUpRight, Clock } from "lucide-react";
import heroPerson from "@/assets/hero-person.png";
import testi1 from "@/assets/testi1.png";
import testi2 from "@/assets/testi2.png";
import testi3 from "@/assets/testi3.png";

const HeroSection = () => {
  return (
    <section className="relative h-auto bg-gradient-to-b from-dexon-cream via-dexon-cream/50 to-background overflow-hidden pt-20 sm:pt-24">
      {/* Decorative dashed circles */}
      <div className="absolute top-32 right-10 lg:right-40 w-48 h-48 lg:w-64 lg:h-64 border-2 border-dashed border-foreground/10 rounded-full hidden md:block" />
      <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-dashed border-foreground/10 rounded-full hidden md:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 pt-6 sm:pt-10 lg:pt-16 pb-0">
          {/* Left decorative card */}
          <div className="hidden lg:block relative flex-shrink-0">
            <div className="bg-dexon-green rounded-2xl p-6 w-52 xl:w-56 relative">
              <span className="text-7xl xl:text-8xl font-black text-foreground/10 absolute top-2 right-4">01</span>
              <div className="relative z-10 mt-14 xl:mt-16">
                <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-foreground" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider">The Weekly</p>
                <p className="text-xs font-bold uppercase tracking-wider">Status - 2023</p>
                <div className="mt-4 bg-card/80 rounded-full px-4 py-2 text-sm font-bold inline-block">
                  3250+
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>

          {/* Center content */}
          <div className="text-center flex-1 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-foreground leading-[1.05] tracking-tight">
              Digital Products{" "}
              <span className="inline-flex -space-x-2 sm:-space-x-3 align-middle">
                <img src={testi1} alt="" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-card object-cover" />
                <img src={testi2} alt="" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-card object-cover" />
                <img src={testi3} alt="" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-card object-cover" />
              </span>
            </h1>
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2 sm:mt-3 flex-wrap">
              <div className="bg-dexon-yellow rounded-full px-4 sm:px-6 py-1.5 sm:py-2 flex items-center gap-2">
                <span className="text-foreground text-sm sm:text-base">✦</span>
                <span className="text-foreground text-sm sm:text-base">→</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-foreground tracking-tight">
                Use Marketing
              </h1>
            </div>

            <p className="mt-6 sm:mt-8 text-sm sm:text-base text-muted-foreground max-w-md mx-auto leading-relaxed px-4">
              Distinctively supply exceptional services after uniquely integrate alternative markets
              rather emerging initiatives.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold mt-6 sm:mt-8 hover:opacity-90 hover:scale-105 transition-all"
            >
              Get Started
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

          {/* Right decorative */}
          <div className="hidden lg:block relative flex-shrink-0">
            <div className="bg-dexon-yellow rounded-2xl w-60 xl:w-64 h-72 relative overflow-visible">
              <span className="text-7xl xl:text-8xl font-black text-foreground/10 absolute bottom-4 right-4">02</span>
              <img
                src={heroPerson}
                alt="Person with phone"
                className="absolute -top-12 left-1/2 -translate-x-1/2 w-44 xl:w-48 h-auto z-10"
                width={512}
                height={512}
              />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-dexon-yellow rounded-sm" />
              <p className="text-sm font-medium text-foreground">Get to Know</p>
            </div>
            <p className="text-sm font-medium text-foreground ml-5">Our Work</p>
          </div>

          {/* Mobile/Tablet decorative cards */}
          <div className="flex lg:hidden gap-4 sm:gap-6 w-full justify-center mt-2">
            <div className="bg-dexon-green rounded-2xl p-4 sm:p-5 w-36 sm:w-44 relative">
              <Clock className="w-5 h-5 text-foreground mb-2" />
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Weekly Status</p>
              <div className="mt-2 bg-card/80 rounded-full px-3 py-1 text-xs font-bold inline-block">
                3250+
              </div>
            </div>
            <div className="bg-dexon-yellow rounded-2xl p-4 sm:p-5 w-36 sm:w-44 relative">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Get to Know</p>
              <p className="text-base sm:text-lg font-black text-foreground mt-1">Our Work</p>
              <ArrowUpRight className="w-5 h-5 text-foreground mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
