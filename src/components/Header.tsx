import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, ChevronDown, ArrowRight, ArrowUpRight  } from "lucide-react";
import DigitalImg from "@/assets/NavDigitalMarketing.png";
import webDevImg from "@/assets/NavWebsiteDevelopment.png";
import GraphicImg from "@/assets/NavGraphicDesign.png";

const navItems = [
  { label: "Home", hasDropdown: false, href: "/" },
  {
    label: "Services",
    hasDropdown: true,
    href: "#",
    subItems: [
      {
        label: "Digital Marketing",
        href: "/services/digital-marketing",
        image: DigitalImg,
        hoverBg: "group-hover/item:bg-[#e1f2e8]",
        hoverBorder: "group-hover/item:border-[#e1f2e8]"
      },
      {
        label: "Web Development",
        href: "/services/web-development",
        image: webDevImg,
        hoverBg: "group-hover/item:bg-[#f7eebb]",
        hoverBorder: "group-hover/item:border-[#f7eebb]"
      },
      {
        label: "Graphics Design",
        href: "/services/graphics-design",
        image: GraphicImg,
        hoverBg: "group-hover/item:bg-[#b9e8f4]",
        hoverBorder: "group-hover/item:border-[#b9e8f4]"
      },
    ]
  },
  { label: "Portfolio", hasDropdown: false, href: "/portfolio" },
  { label: "About Us", hasDropdown: false, href: "/about" },
];

const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`flex items-center ${className}`}>
    <img
      src="/IMG/Logo_Dark.png"
      alt="Weborix Technologies"
      className="h-10 sm:h-12 w-auto object-contain"
    />
  </Link>
);

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-out
          mx-3 mt-3
          ${scrolled ? 'bg-muted backdrop-blur-sm rounded-2xl' : 'bg-transparent'}
          lg:mx-0 lg:mt-0 lg:rounded-none
          lg:bg-transparent lg:backdrop-blur-none
        `}
      >
        <div className="container mx-auto flex items-center justify-between gap-4 px-3 lg:px-8 py-2 sm:py-4">
          <div
            className={`transition-all duration-500 ease-out ${
              scrolled
                ? "lg:opacity-0 lg:-translate-x-6 lg:pointer-events-none"
                : "lg:opacity-100 lg:translate-x-0"
            }`}
          >
            <Logo />
          </div>

          <nav
            className={`hidden lg:flex items-center bg-muted rounded-full transition-all duration-500 ease-out ${
              scrolled ? "px-2 py-2 gap-1" : "px-2 py-2"
            }`}
          >
            <div
              className={`overflow-hidden transition-all duration-500 ease-out ${
                scrolled ? "max-w-[160px] opacity-100 pl-3 pr-2" : "max-w-0 opacity-0 pl-0 pr-0"
              }`}
            >
              <Logo />
            </div>

            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-5 xl:px-6 py-2 text-sm xl:text-base font-medium text-foreground/80 hover:text-foreground rounded-full hover:bg-background transition-all duration-200 whitespace-nowrap"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />}
                </Link>

                {item.hasDropdown && (
                  <div className="fixed top-[75px] left-4 right-4 bg-muted p-8 rounded-[2.5rem] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 border border-foreground/5 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-4 group-hover:translate-y-0">
                    <div className="container mx-auto">
                      <div className="grid grid-cols-3 gap-8">
                        {item.subItems?.map((sub) => (
                          <Link key={sub.label} to={sub.href} className="group/item relative flex flex-col mt-5">
                            {/* Layered Background Tabs Effect */}
                            <div className="absolute -top-4 left-8 right-8 h-10 bg-background/50 rounded-t-[2rem] transition-colors duration-500 group-hover/item:bg-black/5 shadow-sm" />
                            <div className="absolute -top-2 left-4 right-4 h-10 bg-background/80 rounded-t-[2rem] transition-colors duration-500 group-hover/item:bg-black/5 shadow-sm" />
                            
                            {/* Main Interactive Card */}
                            <div className={`relative z-10 flex flex-col bg-background shadow-xl rounded-[2rem] p-3 transition-colors duration-500 ${sub.hoverBg}`}>
                              
                              {/* Header Title */}
                              <div className="px-3 py-3 pb-4">
                                <span className="text-xl font-bold tracking-tight text-foreground transition-colors duration-500">
                                  {sub.label}
                                </span>
                              </div>

                              {/* Image Container with Custom Corner Cutout */}
                              <div className="relative w-full aspect-video rounded-[1.5rem] overflow-hidden bg-muted">
                                <img 
                                  src={sub.image} 
                                  alt={sub.label} 
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" 
                                />
                                
                                {/* Bottom-Right Cutout & Arrow Button */}
                                <div className={`absolute bottom-0 right-0 w-20 h-20 bg-background transition-colors duration-500 ${sub.hoverBg} flex items-end justify-end p-2 rounded-tl-[1.5rem]`}>
                                  <div className="w-14 h-14 rounded-full bg-muted group-hover/item:bg-background text-foreground flex items-center justify-center transition-all duration-500 shadow-sm">
                                    <ArrowRight className="w-6 h-6 -rotate-45 group-hover/item:rotate-0 transition-transform duration-500" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div
              className={`overflow-hidden transition-all duration-500 ease-out ${
                scrolled ? "max-w-[200px] opacity-100 ml-1" : "max-w-0 opacity-0 ml-0"
              }`}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-5 xl:px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm xl:text-base font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Let's Talk
              </Link>
            </div>
          </nav>

          <Link
            to="/contact"
            className={`hidden lg:inline-flex relative items-center px-7 xl:px-8 py-3 bg-muted rounded-full text-sm xl:text-base font-medium text-foreground hover:bg-background transition-all shadow-[4px_4px_0_0_hsl(var(--primary))] hover:shadow-[2px_2px_0_0_hsl(var(--primary))] hover:translate-x-[2px] hover:translate-y-[2px] duration-500 ease-out ${
              scrolled ? "opacity-0 translate-x-6 pointer-events-none" : "opacity-100 translate-x-0"
            }`}
          >
            Let's Talk
          </Link>

          <button
            className="lg:hidden group relative inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-primary text-primary-foreground shadow-[3px_3px_0_0_hsl(var(--foreground))] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-200"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="flex flex-col items-end justify-center gap-[5px] w-5">
              <span className="block h-[2.5px] w-5 bg-primary-foreground rounded-full" />
              <span className="block h-[2.5px] w-3 bg-primary-foreground rounded-full" />
              <span className="block h-[2.5px] w-4 bg-primary-foreground rounded-full" />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] bg-background transition-all duration-500 ease-in-out overflow-y-auto ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col min-h-full w-full">
          {/* Top Header Section */}
          <div className="flex items-center justify-between px-6 py-5 shrink-0">
            <Logo />
            <button
                className="group inline-flex items-center justify-center w-11 h-11 rounded-full bg-muted border border-foreground/10 active:scale-90 transition-all duration-300 hover:bg-foreground/5"              onClick={() => {
                setMobileOpen(false);
                setServicesOpen(false);
              }}
            >
            <div className="flex flex-col items-center justify-center gap-[5px] w-5">
              <span className="block h-[2.5px] w-5 bg-foreground rounded-full rotate-45 translate-y-[3px]"></span>
              <span className="block h-[2.5px] w-5 bg-foreground rounded-full -rotate-45 -translate-y-[3px]"></span>
            </div>
            </button>
          </div>

          {/* Navigation Section */}
          <nav className="flex flex-col px-6 py-8 my-auto w-full">
            {navItems.map((item, i) => (
              <div key={item.label} className="py-3 w-full">
                {item.hasDropdown ? (
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`relative w-full flex items-center justify-center gap-3 text-4xl sm:text-5xl font-black uppercase tracking-tighter text-foreground transition-all duration-500 ${
                      mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <span className={servicesOpen ? "text-primary" : ""}>{item.label}</span>
                    <div className={`p-2 rounded-full bg-muted border border-foreground/5 transition-transform duration-500 ${servicesOpen ? "rotate-180 bg-primary text-primary-foreground" : ""}`}>
                      <ChevronDown className="w-6 h-6" />
                    </div>
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => { setMobileOpen(false); setServicesOpen(false); }}
                    className={`relative w-full flex items-center justify-center gap-3 text-4xl sm:text-5xl font-black uppercase tracking-tighter text-foreground transition-all duration-500 ${
                      mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {item.label}
                  </Link>
                )}
                
                {item.hasDropdown && (
                  <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${servicesOpen ? "grid-rows-[1fr] mt-8 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="min-h-0 flex flex-col gap-6 items-center pt-2">
                      {item.subItems?.map((sub, subIdx) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          onClick={() => { setMobileOpen(false); setServicesOpen(false); }}
                          className="group/item relative w-full flex flex-col mt-4"
                          style={{ transitionDelay: `${subIdx * 100}ms` }}
                        >
                          {/* Mobile Layered Tabs */}
                          <div className="absolute -top-3 left-6 right-6 h-8 bg-muted/40 border border-border/10 rounded-t-[1.5rem]" />
                          <div className="absolute -top-1.5 left-3 right-3 h-8 bg-muted/70 border border-border/20 rounded-t-[1.5rem]" />

                          {/* Mobile Main Card */}
                          <div className={`relative z-10 bg-background shadow-lg border border-border/50 rounded-[1.5rem] p-2.5 transition-colors duration-300 ${sub.hoverBg} ${sub.hoverBorder}`}>
                            <div className="px-2 py-2 pb-3 text-center">
                              <span className="text-xl font-bold tracking-tight text-foreground transition-colors">{sub.label}</span>
                            </div>
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-muted">
                              <img src={sub.image} alt={sub.label} className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105" />
                              
                              {/* Mobile Cutout & Arrow Button */}
                              <div className={`absolute bottom-0 right-0 w-16 h-16 bg-background transition-colors flex items-end justify-end p-1.5 rounded-tl-[1.25rem] ${sub.hoverBg}`}>
                                <div className="w-12 h-12 rounded-full bg-muted group-hover/item:bg-background text-foreground flex items-center justify-center">
                                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover/item:rotate-0 transition-transform duration-300" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Footer CTA Section */}
        <div className="px-6 pb-8 pt-4 shrink-0 w-full mt-auto">
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="group relative flex items-center justify-center w-full h-20 pl-10 pr-16 bg-[#222] text-white rounded-full text-3xl font-bold uppercase tracking-tighter shadow-xl transition-all duration-300 active:scale-95"
          >
            {/* Text */}
            <span className="text-center">Let's Talk</span>
        
            {/* Circle (FINAL SIZE & POSITION) */}
            <div className="absolute right-0 top-1/2 -translate-y-[55%] translate-x-[10%] flex items-center justify-center w-16 h-16 border-2 border-white rounded-full bg-[#222]">
              
              {/* Arrow */}
              <ArrowUpRight className="w-5 h-5" strokeWidth={3} />
            
            </div>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default Header;
