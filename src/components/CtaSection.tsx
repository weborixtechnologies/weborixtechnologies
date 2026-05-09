import { Phone, ArrowUpRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-dexon-yellow/40 relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-[1.1] tracking-tight">
              Are You Ready for Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Business Success?</span>
                <span className="absolute bottom-1 left-0 right-0 h-2 sm:h-3 bg-card/60 -z-0" />
              </span>
            </h2>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-foreground/70 max-w-md">
              Ullamcorper risus ultrices risus lorem. Mollis libero in pellentesque potenti.
              Vulputate ut aliquam, consectetur turpis odio.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-6 w-full lg:w-auto">
            
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:opacity-90 hover:scale-105 transition-all"
            >
              Contact Us
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Contact Block */}
            <div className="flex items-center gap-3 sm:gap-4">
              
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-card rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <Phone className="w-5 h-5 text-foreground" />
              </div>

              <div className="flex flex-col">
                
                {/* Numbers */}
                <div className="flex flex-col text-sm sm:text-base font-semibold text-foreground">
                  <span className="tracking-wide">+91 89678 21570</span>
                  <span className="tracking-wide">+91 85098 51562</span>
                </div>

                {/* Label */}
                <p className="text-[10px] sm:text-xs text-foreground/40 tracking-[0.15em] mt-1">
                  WHATSAPP — CALL
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
