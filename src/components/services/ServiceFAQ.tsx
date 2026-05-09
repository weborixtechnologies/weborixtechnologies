import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface FAQItem {
  q: string;
  a: string;
}

interface Props {
  eyebrow: string;
  heading: string;
  highlight: string;
  faqs: FAQItem[];
}

const ServiceFAQ = ({ eyebrow, heading, highlight, faqs }: Props) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-dexon-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">{eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-[1.1] tracking-tight">
            {heading}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{highlight}</span>
              <span className="absolute bottom-1 left-0 right-0 h-2 sm:h-3 bg-dexon-yellow -z-0" />
            </span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card rounded-2xl px-6 sm:px-7 ring-1 ring-inset ring-border border-b-0 shadow-sm"
            >
              <AccordionTrigger className="text-left text-base sm:text-lg font-bold text-foreground hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ServiceFAQ;
