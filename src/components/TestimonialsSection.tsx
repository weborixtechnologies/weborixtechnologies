import { useRef } from "react";
import { Quote, Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import testi1 from "@/assets/testi1.png";
import testi2 from "@/assets/testi2.png";
import testi3 from "@/assets/testi3.png";

const testimonials = [
  {
    name: "Sonia Sara",
    role: "Marketer",
    img: testi1,
    quote: "Distinctively formulate optimal outsid for interdependent schemas to evolve end action items and fully researched vortals niche markets",
    company: "Google",
    accent: "bg-dexon-yellow",
  },
  {
    name: "John Alexon",
    role: "Researcher",
    img: testi2,
    quote: "Distinctively formulate optimal outsid for interdependent schemas to evolve end action items and fully researched vortals niche markets",
    company: "amazon",
    accent: "bg-dexon-green/40",
  },
  {
    name: "D. Morgan",
    role: "Marketer",
    img: testi3,
    quote: "Distinctively formulate optimal outsid for interdependent schemas to evolve end action items and fully researched vortals niche markets",
    company: "amazon",
    accent: "bg-dexon-cyan/50",
  },
  {
    name: "Emily Rose",
    role: "Designer",
    img: testi1,
    quote: "Distinctively formulate optimal outsid for interdependent schemas to evolve end action items and fully researched vortals niche markets",
    company: "Spotify",
    accent: "bg-dexon-yellow/60",
  },
  {
    name: "Mark Lee",
    role: "Developer",
    img: testi2,
    quote: "Distinctively formulate optimal outsid for interdependent schemas to evolve end action items and fully researched vortals niche markets",
    company: "Microsoft",
    accent: "bg-dexon-green/40",
  },
];

const TestimonialsSection = () => {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/3 -left-20 w-64 h-64 bg-dexon-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-[1.1] tracking-tight">
            What Say Our Customers
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-muted-foreground max-w-lg mx-auto px-4">
            Distinctively supply exceptional services after uniquely integrate alternative markets rather emerging initiatives.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplay.current]}
          onMouseEnter={() => autoplay.current.stop()}
          onMouseLeave={() => autoplay.current.play()}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t, i) => (
              <CarouselItem
                key={i}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="relative bg-card border border-border rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden h-full">
                  <div className={`absolute -top-10 -right-10 w-28 h-28 rounded-full ${t.accent} opacity-60 group-hover:scale-125 transition-transform duration-500`} />
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-foreground/10" />

                  <div className="relative flex flex-col h-full">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-dexon-yellow text-dexon-yellow" />
                      ))}
                    </div>

                    <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6 flex-1">
                      "{t.quote}"
                    </p>

                    <div className="flex items-center gap-3 sm:gap-4 pt-5 border-t border-border">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-card shadow-md"
                        loading="lazy"
                        width={56}
                        height={56}
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-foreground text-sm sm:text-base truncate">{t.name}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{t.role}</p>
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold text-foreground tracking-wider uppercase">
                        {t.company}
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden md:block">
            <CarouselPrevious className="-left-4 lg:-left-6 h-10 w-10 bg-card border-border hover:bg-dexon-yellow hover:text-foreground hover:border-dexon-yellow" />
            <CarouselNext className="-right-4 lg:-right-6 h-10 w-10 bg-card border-border hover:bg-dexon-yellow hover:text-foreground hover:border-dexon-yellow" />
          </div>
        </Carousel>

        <p className="text-center text-xs text-muted-foreground mt-6 md:hidden">
          ← Swipe to see more →
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
