import { Link } from "react-router-dom";
import { ArrowUpRight, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";

interface ServicePageLayoutProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  heroImage: string;
  accentClass: string;
  blobClass: string;
  children: React.ReactNode;
}

const ServicePageLayout = ({
  badge,
  title,
  highlight,
  description,
  heroImage,
  accentClass,
  blobClass,
  children,
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className={`relative pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 ${accentClass} overflow-hidden`}>
        <div className={`absolute -top-32 -right-32 w-96 h-96 ${blobClass} rounded-full blur-3xl opacity-60 pointer-events-none`} />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-dexon-yellow/30 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="flex items-center gap-2 text-sm text-foreground/60 mb-6">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <span>/</span>
            <span className="text-foreground/80">Services</span>
            <span>/</span>
            <span className="text-foreground font-semibold">{badge}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border mb-5 sm:mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-dexon-yellow" />
                <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">{badge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-[1.05] tracking-tight">
                {title}{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">{highlight}</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2 sm:h-3 lg:h-4 bg-dexon-yellow -z-0" />
                </span>
              </h1>

              <p className="mt-6 sm:mt-7 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                {description}
              </p>

              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:opacity-90 hover:scale-105 transition-all"
                >
                  Get Started
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-foreground border-b-2 border-foreground/80 pb-1 hover:opacity-70 transition-opacity"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className={`absolute inset-0 ${blobClass} opacity-40 rounded-full blur-2xl`} />
              <img
                src={heroImage}
                alt={`${badge} illustration`}
                width={1024}
                height={1024}
                className="relative w-full max-w-md lg:max-w-lg drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <main>{children}</main>

      <CtaSection />
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
