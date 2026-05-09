import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Digital Marketing",
    image: "/DigitalIMG.png",
    color: "from-cyan-200/60 via-teal-200/40 to-transparent",
    href: "/services/digital-marketing",
  },
  {
    title: "Web Development",
    image: "/WebIMG.png",
    color: "from-yellow-200/60 via-orange-200/40 to-transparent",
    href: "/services/web-development",
  },
  {
    title: "Graphic Design",
    image: "/GraphicIMG.png",
    color: "from-green-200/60 via-emerald-200/40 to-transparent",
    href: "/services/graphics-design",
  },
];

const ServicesSection = () => {
  return (
    <section className="pt-14 sm:pt-14 lg:pt-18 pb-16 sm:pb-20 lg:pb-24 bg-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 max-w-xl leading-[1.1] tracking-tight">
            Growing your Revenue using{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Our Services</span>
              <span className="absolute bottom-1 left-0 right-0 h-2 sm:h-3 bg-[#fcd34d] -z-0" />
            </span>
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="bg-gray-100 rounded-[2rem] flex flex-col relative group transition-transform duration-300 hover:-translate-y-2 pb-6 ring-1 ring-inset ring-gray-200 overflow-hidden"
            >
              
              {/* 🔥 Gradient Hover Overlay (Top Right Effect) */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none`}
              >
                <div
                  className={`absolute -top-20 -right-20 w-[200%] h-[200%] bg-gradient-to-bl ${service.color} rounded-full blur-2xl transform scale-0 group-hover:scale-100 transition-all duration-700 ease-out`}
                />
              </div>

              {/* Card Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 px-8 pt-8 pb-6 relative z-10">
                {service.title}
              </h3>

              {/* Stacked Images Container */}
              <div className="px-6 flex-1 flex flex-col relative pb-8 z-10">
                <div className="mx-10 h-3 bg-gray-300/60 rounded-t-2xl border-t border-l border-r border-gray-300" />
                <div className="mx-5 h-3 bg-gray-200 rounded-t-2xl border-t border-l border-r border-gray-300" />
                
                {/* Front Image Layer */}
                <div className="relative bg-white rounded-2xl w-full overflow-hidden shadow-sm border border-gray-200 aspect-video flex items-center justify-center group-hover:shadow-md transition-shadow duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Bottom Right Cutout & Arrow Button */}
              <div className="absolute bottom-0 right-0 z-10">
                <svg
                  className="absolute bottom-full right-0 w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M0 24C13.2548 24 24 13.2548 24 0V24H0Z" />
                </svg>
                
                <svg
                  className="absolute bottom-0 right-full w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M0 24C13.2548 24 24 13.2548 24 0V24H0Z" />
                </svg>

                <div className="w-[5.5rem] h-[5.5rem] bg-white rounded-tl-[2rem] flex items-end justify-end p-2 relative z-10">
                  <button 
                    className="w-[4.5rem] h-[4.5rem] bg-[#222222] rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 group-hover:scale-105 shadow-md border-none outline-none"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <ArrowUpRight className="text-white w-7 h-7 group-hover:rotate-12 transition-transform duration-300" strokeWidth={2.5} />
                  </button>
                </div>
              </div>
              
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
