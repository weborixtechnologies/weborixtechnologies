import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import DemoImage from "@/assets/DemoImage.avif";
const items = [
  {
    title: "PROJECT 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cover: DemoImage, 
  },
  {
    title: "PROJECT 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cover: DemoImage, 
  },
  {
    title: "PROJECT 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cover: DemoImage, 
  },
  {
    title: "PROJECT 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cover: DemoImage, 
  },
  {
    title: "PROJECT 4",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cover: DemoImage, 
  },
];

const PortfolioPreview = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background overflow-hidden">
      <div className="w-full px-3 sm:px-4 lg:px-5">

        {/* Header update  */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14 w-full px-4 sm:px-6">
  
  {/* LEFT */}
  <div className="max-w-2xl">
    <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-3">
      Selected work
    </p>

    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-[1.05] tracking-tight">
      Recent projects,{" "}
      <span className="relative inline-block">
        <span className="relative z-10">real outcomes.</span>

        <span className="absolute bottom-1 left-0 right-0 h-2 sm:h-3 bg-dexon-yellow rounded-full -z-0" />
      </span>
    </h2>
  </div>

  {/* RIGHT */}
  <div className="flex justify-end sm:ml-auto">
    <Link
      to="/portfolio"
      className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold transition-all duration-300 hover:scale-105"
    >
      View all work

      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
    </Link>
  </div>
</div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-4">

          {items.map((item, i) => {
            const isActive = active === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`
                  relative group overflow-hidden rounded-[30px]
                  cursor-pointer

                  transition-[flex,height]
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  ${
                    isActive
                      ? "h-[250px] sm:h-[300px] lg:h-[560px] lg:flex-[3]"
                      : "h-[85px] sm:h-[100px] lg:h-[560px] lg:flex-1"
                  }
                `}
              >
                {/* Background */}
                <div className="absolute inset-0 overflow-hidden">

                  <img
                    src={item.cover}
                    alt={item.title}
                    className={`
                      w-full h-full object-cover
                      transition-transform duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]

                      ${
                        isActive
                          ? "scale-100"
                          : "scale-105"
                      }

                      group-hover:scale-110
                    `}
                  />
                </div>

                {/* Overlay */}
                <div
                  className={`
                    absolute inset-0 transition-colors duration-500

                    ${
                      isActive
                        ? "bg-black/55"
                        : "bg-black/45"
                    }
                  `}
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" />

                {/* Glow */}
                <div
                  className={`
                    absolute inset-0 bg-white/[0.03]
                    transition-opacity duration-500

                    ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0"
                    }
                  `}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-7">

                  {/* Mobile + Tablet Small State */}
                  {!isActive && (
                    <div className="flex items-end h-full lg:hidden">
                      <h3 className="text-white text-2xl sm:text-3xl font-black tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  )}

                  {/* Desktop Vertical Small State */}
                  {!isActive && (
                    <div className="absolute inset-0 hidden lg:flex items-end justify-start p-6">

                      <h3
                        className="
                          text-white text-[28px]
                          font-black tracking-tight
                          whitespace-nowrap

                          origin-left
                          -rotate-90
                          translate-y-2
                        "
                      >
                        {item.title}
                      </h3>
                    </div>
                  )}

                  {/* Expanded Content */}
                  <div
                    className={`
                      transition-all duration-500
                      ease-[cubic-bezier(0.22,1,0.36,1)]

                      ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6 pointer-events-none"
                      }
                    `}
                  >
                    {/* Badge */}
                    {/*
  <span
    className="
      inline-flex px-3 py-1
      rounded-full

      bg-white/10
      backdrop-blur-xl

      border border-white/10

      text-white text-[10px]
      uppercase tracking-[0.22em]
      font-semibold mb-5
    "
  >
    Featured
  </span>
*/}

                    {/* Title */}
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-none max-w-xl">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Floating Button */}
         {/*         <Link
                  to="/portfolio"
                  onClick={(e) => e.stopPropagation()}
                  className={`
                    absolute bottom-5 right-5 z-20

                    flex items-center justify-center

                    w-[56px] h-[56px]
                    sm:w-[62px] sm:h-[62px]

                    rounded-full

                    bg-[#1B1B1D]/95
                    backdrop-blur-xl

                    border border-white/10

                    shadow-[0_10px_40px_rgba(0,0,0,0.35)]

                    transition-all duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    hover:scale-110 hover:bg-black

                    ${
                      isActive
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-5 scale-90 pointer-events-none"
                    }
                  `}
                >
                  <ArrowUpRight
                    className="
                      w-5 h-5 sm:w-6 sm:h-6
                      text-white

                      rotate-[-12deg]

                      transition-transform duration-300
                      hover:rotate-0
                    "
                  />
                </Link>  

                 */}

                 
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;