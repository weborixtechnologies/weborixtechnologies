import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", hasDropdown: false, href: "/" },

  {
    label: "Services",
    hasDropdown: true,
    href: "#",
    subItems: [
      {
        label: "DIGITAL MARKETING",
        description: "Creative growth strategies for modern brands",
        href: "/services/digital-marketing",
        icon: "marketing",
        bg: "from-[#b7dcc4] via-[#9fd0b1] to-[#8cc8a2]",
        glow:
          "group-hover/item:shadow-[0_20px_60px_rgba(143,201,164,0.45)]",
      },

      {
        label: "WEB DEVELOPMENT",
        description: "Clean fast websites with modern experiences",
        href: "/services/web-development",
        icon: "web",
        bg: "from-[#f3dc67] via-[#efd85b] to-[#e9cf4d]",
        glow:
          "group-hover/item:shadow-[0_20px_60px_rgba(240,212,88,0.45)]",
      },

      {
        label: "GRAPHICS DESIGN",
        description: "Visual identities that leave strong impressions",
        href: "/services/graphics-design",
        icon: "design",
        bg: "from-[#d7d3ff] via-[#c5bfff] to-[#b1a7ff]",
        glow:
          "group-hover/item:shadow-[0_20px_60px_rgba(180,170,255,0.45)]",
      },
    ],
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
          ${
            scrolled
              ? "bg-muted backdrop-blur-sm rounded-2xl"
              : "bg-transparent"
          }
          lg:mx-0 lg:mt-0 lg:rounded-none
          lg:bg-transparent lg:backdrop-blur-none
        `}
      >
        <div className="container mx-auto flex items-center justify-between gap-4 px-3 lg:px-8 py-2 sm:py-4">
          
          {/* Left Logo */}
          <div
            className={`transition-all duration-500 ease-out ${
              scrolled
                ? "lg:opacity-0 lg:-translate-x-6 lg:pointer-events-none"
                : "lg:opacity-100 lg:translate-x-0"
            }`}
          >
            <Logo />
          </div>

          {/* Desktop Nav */}
          <nav
            className={`hidden lg:flex items-center bg-muted rounded-full transition-all duration-500 ease-out ${
              scrolled ? "px-2 py-2 gap-1" : "px-2 py-2"
            }`}
          >
            <div
              className={`overflow-hidden transition-all duration-500 ease-out ${
                scrolled
                  ? "max-w-[160px] opacity-100 pl-3 pr-2"
                  : "max-w-0 opacity-0 pl-0 pr-0"
              }`}
            >
              <Logo />
            </div>

            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-5 xl:px-6 py-2 text-sm xl:text-base font-medium text-foreground/80 hover:text-foreground rounded-full hover:bg-background transition-all duration-300 whitespace-nowrap"
                >
                  {item.label}

                  {item.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Desktop Services Dropdown */}
                {item.hasDropdown && (
                  <div className="fixed top-[78px] left-5 right-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-5 group-hover:translate-y-0">

                    <div className="rounded-[2.7rem] overflow-hidden bg-[#f4f1eb] shadow-[0_35px_80px_rgba(0,0,0,0.12)]">

                      <div className="grid grid-cols-3">

                        {item.subItems?.map((sub, index) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            className={`group/item relative flex items-center gap-7 px-10 py-10 bg-gradient-to-br ${sub.bg} overflow-hidden transition-all duration-500 hover:-translate-y-1 ${sub.glow}`}
                          >

                            {/* Overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 bg-white/10" />

                            {/* Number */}
                            <span
                              className="
                                absolute
                                bottom-3
                                right-5
                                text-[72px]
                                xl:text-[82px]
                                leading-none
                                font-black
                                text-black/10
                                pointer-events-none
                                select-none
                                transition-all
                                duration-500
                                group-hover/item:scale-105
                              "
                            >
                              {index + 1 < 10 ? `0${index + 1}` : index + 1}
                            </span>

                            {/* Glow Circle */}
                            <div className="absolute -bottom-14 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl transition-all duration-700 group-hover/item:scale-125" />

                            {/* Icon */}
                            <div className="relative z-10 flex items-center justify-center shrink-0 transition-all duration-500 group-hover/item:rotate-6 group-hover/item:scale-110">

                              {sub.icon === "marketing" && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-16 h-16 text-[#111]"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={1.8}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 17v-6m4 6V7m4 10v-3M5 19h14"
                                  />
                                </svg>
                              )}

                              {sub.icon === "web" && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-12 h-12 text-[#111]"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={1.7}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M7 8l-5 4 5 4"
                                  />

                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 8l5 4-5 4"
                                  />

                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14 4l-4 16"
                                  />
                                </svg>
                              )}

                             {sub.icon === "design" && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10 h-10 text-[#111]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.8}
                              >
                                {/* Top Layer */}
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4L3 8.5 12 13l9-4.5L12 4z" />
                                {/* Middle Layer (Offset) */}
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 12.2L3 13.5 12 18l9-4.5-2.5-1.3" />
                                {/* Bottom Layer (Offset) */}
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 16.7L3 18 12 22.5l9-4.5-2.5-1.3" />
                                {/* Creative "Spark" or Cursor dot */}
                                <circle cx="12" cy="8.5" r="1" fill="currentColor" />
                              </svg>
                            )}
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col">

                              <h3 className="text-[30px] font-black text-[#111] tracking-tight leading-none transition-all duration-500 group-hover/item:translate-x-1">
                                {sub.label}
                              </h3>

                              <p className="text-[#333]/70 text-[15px] leading-relaxed mt-3 max-w-[260px] transition-all duration-500 group-hover/item:translate-x-1">
                                {sub.description}
                              </p>

                              {/* Hover CTA */}
                              <div className="mt-5 flex items-center gap-2 opacity-0 translate-y-3 transition-all duration-500 group-hover/item:opacity-100 group-hover/item:translate-y-0">

                                <div className="w-9 h-9 rounded-full bg-[#111] flex items-center justify-center">
                                  <ArrowUpRight className="w-4 h-4 text-white" />
                                </div>

                                <span className="text-sm font-semibold text-[#111]">
                                  Explore Service
                                </span>
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

            {/* Desktop CTA */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-out ${
                scrolled
                  ? "max-w-[200px] opacity-100 ml-1"
                  : "max-w-0 opacity-0 ml-0"
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

          {/* Right CTA */}
          <Link
            to="/contact"
            className={`hidden lg:inline-flex relative items-center px-7 xl:px-8 py-3 bg-muted rounded-full text-sm xl:text-base font-medium text-foreground hover:bg-background transition-all shadow-[4px_4px_0_0_hsl(var(--primary))] hover:shadow-[2px_2px_0_0_hsl(var(--primary))] hover:translate-x-[2px] hover:translate-y-[2px] duration-500 ease-out ${
              scrolled
                ? "opacity-0 translate-x-6 pointer-events-none"
                : "opacity-100 translate-x-0"
            }`}
          >
            Let's Talk
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden group relative inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-primary text-primary-foreground shadow-[3px_3px_0_0_hsl(var(--foreground))]"
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

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] bg-background transition-all duration-500 ease-in-out overflow-y-auto ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col min-h-full w-full">

          {/* Top */}
          <div className="flex items-center justify-between px-6 py-5 shrink-0">
            <Logo />

            <button
              className="group inline-flex items-center justify-center w-11 h-11 rounded-full bg-muted border border-foreground/10"
              onClick={() => {
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

          {/* Navigation */}
          <nav className="flex flex-col px-6 py-8 my-auto w-full">

            {navItems.map((item, i) => (
              <div key={item.label} className="py-3 w-full">

                {item.hasDropdown ? (
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`relative w-full flex items-center justify-center gap-3 text-4xl sm:text-5xl font-black uppercase tracking-tighter text-foreground transition-all duration-500 ${
                      mobileOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <span className={servicesOpen ? "text-primary" : ""}>
                      {item.label}
                    </span>

                    <div
                      className={`p-2 rounded-full bg-muted border border-foreground/5 transition-transform duration-500 ${
                        servicesOpen
                          ? "rotate-180 bg-primary text-primary-foreground"
                          : ""
                      }`}
                    >
                      <ChevronDown className="w-6 h-6" />
                    </div>
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => {
                      setMobileOpen(false);
                      setServicesOpen(false);
                    }}
                    className={`relative w-full flex items-center justify-center gap-3 text-4xl sm:text-5xl font-black uppercase tracking-tighter text-foreground transition-all duration-500 ${
                      mobileOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mobile Services */}
                {item.hasDropdown && (
                  <div
                    className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                      servicesOpen
                        ? "grid-rows-[1fr] mt-8 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 flex flex-col gap-4 pt-2">

                      {item.subItems?.map((sub, index) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          onClick={() => {
                            setMobileOpen(false);
                            setServicesOpen(false);
                          }}
                          className={`group/item relative overflow-hidden rounded-[2rem] px-6 py-6 flex items-center gap-5 bg-gradient-to-br ${sub.bg} transition-all duration-500 active:scale-[0.98]`}
                        >

                        {/* Mobile Number */}
                        <span
                          className="
                            absolute
                            bottom-3
                            right-4
                            text-[52px]
                            leading-none
                            font-black
                            text-black/10
                            pointer-events-none
                            select-none
                            transition-all
                            duration-500
                            group-hover/item:scale-105
                          "
                        >
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>

                          {/* Glow */}
                          <div className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full bg-white/20 blur-2xl" />

                          {/* Icon */}
                          <div className="relative z-10 flex items-center justify-center shrink-0 transition-all duration-500 group-hover/item:scale-110">

                            {sub.icon === "marketing" && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10 h-10 text-[#111]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.8}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 17v-6m4 6V7m4 10v-3M5 19h14"
                                />
                              </svg>
                            )}

                           {sub.icon === "web" && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-10 h-10 text-[#111]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.7}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 8l-5 4 5 4"
                              />

                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 8l5 4-5 4"
                              />

                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14 4l-4 16"
                              />
                            </svg>
                          )}

                          {sub.icon === "design" && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-8 h-8 text-[#111]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.8}
                            >
                              {/* Top Layer */}
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4L3 8.5 12 13l9-4.5L12 4z"
                              />

                              {/* Middle Layer */}
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.5 12.2L3 13.5 12 18l9-4.5-2.5-1.3"
                              />

                              {/* Bottom Layer */}
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.5 16.7L3 18 12 22.5l9-4.5-2.5-1.3"
                              />

                              {/* Spark Dot */}
                              <circle cx="12" cy="8.5" r="1" fill="currentColor" />
                            </svg>
                          )}
                          </div>

                          {/* Content */}
                          <div className="relative z-10 flex flex-col">

                            <h3 className="text-[#111] text-lg font-black tracking-tight leading-none">
                              {sub.label}
                            </h3>

                            <p className="text-[#111]/70 text-sm leading-relaxed mt-2 max-w-[220px]">
                              {sub.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Footer CTA */}
          <div className="px-6 pb-8 pt-4 shrink-0 w-full mt-auto">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="group relative flex items-center justify-center w-full h-20 pl-10 pr-16 bg-[#222] text-white rounded-full text-3xl font-bold uppercase tracking-tighter shadow-xl transition-all duration-300 active:scale-95"
            >
              <span className="text-center">Let's Talk</span>

              <div className="absolute right-0 top-1/2 -translate-y-[55%] translate-x-[10%] flex items-center justify-center w-16 h-16 border-2 border-white rounded-full bg-[#222]">
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