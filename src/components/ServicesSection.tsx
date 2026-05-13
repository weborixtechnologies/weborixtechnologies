import React, { useRef } from 'react';
import { Megaphone, Code, PenTool, ArrowRight, Facebook, Instagram, Linkedin, Target, MousePointer2, Type } from 'lucide-react';

const services = [
  {
    titleLine1: "Digital",
    titleLine2: "Marketing",
    titleColor: "text-blue-600",
    description: "We help you reach the right audience, increase engagement, and grow your business online.",
    bgColor: "bg-white",
    hoverBgColor: "hover:bg-[#F4F7FF]",
    icon: Megaphone,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    phoneMockup: 'digital',
    href: "/services/digital-marketing",
  },
  {
    titleLine1: "Web",
    titleLine2: "Development",
    titleColor: "text-purple-600",
    description: "We build fast, secure, and scalable websites that deliver amazing user experiences.",
    bgColor: "bg-white",
    hoverBgColor: "hover:bg-[#F8F4FF]",
    icon: Code,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    phoneMockup: 'web',
    href: "/services/web-development",
  },
  {
    titleLine1: "Graphic",
    titleLine2: "Design",
    titleColor: "text-orange-500",
    description: "We create stunning visuals that communicate your brand value and leave a lasting impression.",
    bgColor: "bg-white",
    hoverBgColor: "hover:bg-[#FFF9F2]",
    icon: PenTool,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    phoneMockup: 'graphic',
    href: "/services/graphics-design",
  },
];

const PhoneFrame = ({ children }) => (
  <div className="relative mx-auto w-[260px] sm:w-[285px] h-[460px] bg-[#1a1a1a] rounded-[3rem] p-[8px] shadow-2xl overflow-hidden cursor-ns-resize border border-gray-800 transition-all duration-300">
    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative flex flex-col shadow-inner">
      
      {/* Dynamic Island Cutout */}
      <div className="absolute top-2 inset-x-0 flex justify-center z-40 pointer-events-none">
        <div className="w-24 h-6 bg-black rounded-full flex items-center justify-end px-3 relative shadow-md">
           <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-[#222] mr-1 flex items-center justify-center">
             <div className="w-1 h-1 rounded-full bg-blue-500/60 shadow-[0_0_3px_1px_rgba(59,130,246,0.6)]"></div>
           </div>
        </div>
      </div>

      {/* Internal Phone Scroll Area */}
      <div className="w-full h-full overflow-y-auto hide-scrollbar pt-12 pb-10">
        {children}
      </div>
    </div>
  </div>
);

const DigitalMarketingPhone = () => (
  <div className="flex flex-col min-h-full bg-[#f8f9fc] p-4 text-[10px] relative overflow-hidden">
    {/* Live Header */}
    <div className="flex justify-between items-center mb-4 pl-1 pr-1">
      <span className="font-bold text-gray-800 text-[14px] tracking-tight">Analytics</span>
      <div className="flex items-center gap-1.5 bg-green-100/80 px-2 py-1 rounded-full shadow-sm border border-green-200">
         <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
         <span className="text-[8px] text-green-700 font-bold uppercase tracking-wider">Live</span>
      </div>
    </div>

    {/* Blue Stat Card */}
    <div className="bg-[#2B6CB0] rounded-2xl p-4 text-white mb-4 shadow-lg shadow-blue-600/20 relative overflow-hidden group/card cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/card:animate-[shimmer_1.5s_infinite]"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-center text-[9px] mb-3">
          <span className="font-medium text-white/90">Total Reach</span>
          <span className="flex items-center gap-1 bg-white/20 hover:bg-white/30 transition-colors px-2 py-1 rounded-md backdrop-blur-sm">
            This Month <span className="text-[6px] ml-0.5">▼</span>
          </span>
        </div>
        <div className="text-[32px] font-black mb-2 tracking-tight leading-none">128.6K</div>
        <div className="flex items-center text-[9px]">
          <span className="bg-white/20 text-white px-1.5 py-0.5 rounded flex items-center gap-0.5 font-medium border border-white/10 shadow-sm">
             ▲ 24.5%
          </span>
          <span className="opacity-80 ml-2 font-medium">vs last month</span>
        </div>
      </div>
    </div>

    {/* Live Chart Area */}
    <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 mb-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-2 px-1">
        <span className="font-semibold text-gray-700 text-[10px]">Performance</span>
        <span className="text-blue-600 font-bold text-[9px] bg-blue-50 px-1.5 py-0.5 rounded">0.5%</span>
      </div>
      
      <div className="h-16 w-full relative flex items-end mt-2">
        <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="10" x2="100" y2="10" stroke="#f1f5f9" strokeWidth="0.5" />
          <line x1="0" y1="20" x2="100" y2="20" stroke="#f1f5f9" strokeWidth="0.5" />
          <line x1="0" y1="30" x2="100" y2="30" stroke="#f1f5f9" strokeWidth="0.5" />
          
          <path d="M0,35 Q15,30 25,25 T50,20 T75,10 T100,5 L100,40 L0,40 Z" fill="url(#chartGradient)" className="animate-fade-in" />
          <path d="M0,35 Q15,30 25,25 T50,20 T75,10 T100,5" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" className="animate-draw" />
          
          <circle cx="100" cy="5" r="3" fill="#fff" stroke="#3b82f6" strokeWidth="2" className="animate-pulse" />
        </svg>
      </div>
    </div>

    {/* Channels list */}
    <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 relative overflow-hidden z-10 mb-4">
       <span className="font-semibold text-gray-700 mb-3 block text-[10px]">Top Channels</span>
       <div className="flex justify-between items-end px-2">
          <div className="flex flex-col items-center gap-1.5 group/chan cursor-pointer">
            <div className="w-7 h-7 rounded-full bg-[#1877F2] flex items-center justify-center shadow-sm group-hover/chan:scale-110 transition-transform">
                <Facebook size={14} className="text-white" fill="currentColor"/>
            </div>
            <span className="text-gray-800 font-bold text-[9px]">26%</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 group/chan cursor-pointer">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center shadow-sm group-hover/chan:scale-110 transition-transform">
                <Instagram size={14} className="text-white" />
            </div>
            <span className="text-gray-800 font-bold text-[9px]">42%</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 group/chan cursor-pointer">
            <div className="w-7 h-7 rounded-full bg-[#0077b5] flex items-center justify-center shadow-sm group-hover/chan:scale-110 transition-transform">
                <Linkedin size={14} className="text-white" fill="currentColor"/>
            </div>
            <span className="text-gray-800 font-bold text-[9px]">14%</span>
          </div>
       </div>
    </div>

    {/* Campaign Activity */}
    <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 relative z-10 flex-1">
       <span className="font-semibold text-gray-700 mb-2 block text-[10px]">Active Campaigns</span>
       <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
             <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-[8px]">Q3</div>
                <div className="flex flex-col">
                   <span className="text-[9px] font-bold text-gray-800">Summer Sale Ads</span>
                   <span className="text-[7px] text-gray-500">Google Search • Active</span>
                </div>
             </div>
             <div className="text-[9px] font-bold text-green-500">+12%</div>
          </div>
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer">
             <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-[8px]">IG</div>
                <div className="flex flex-col">
                   <span className="text-[9px] font-bold text-gray-800">Brand Awareness</span>
                   <span className="text-[7px] text-gray-500">Instagram Reel • Active</span>
                </div>
             </div>
             <div className="text-[9px] font-bold text-green-500">+8.4%</div>
          </div>
       </div>
    </div>
    
    <Target className="absolute -right-6 bottom-4 w-20 h-20 text-blue-500 opacity-5 transform rotate-12 pointer-events-none" strokeWidth={1} />
  </div>
);

const WebDevelopmentPhone = () => (
  <div className="flex flex-col min-h-full bg-white relative">
    <div className="p-4 z-10">
      <div className="flex justify-between items-center mb-6 px-1 mt-2">
        <div className="flex items-center gap-2">
          <img
            src="IMG/Logo_Dark.png"
            alt="Weborix Logo"
            className="w-14 h-auto object-contain"
          />
        </div>

        <div className="flex flex-col gap-[4px] cursor-pointer">
          <div className="w-5 h-[2px] bg-gray-400 rounded-full"></div>
          <div className="w-5 h-[2px] bg-gray-400 rounded-full"></div>
          <div className="w-5 h-[2px] bg-gray-400 rounded-full"></div>
        </div>
      </div>

      <h3 className="font-bold text-gray-900 text-[18px] leading-[1.15] mb-2 tracking-tight">Build Powerful<br/>Web Experiences</h3>
      <p className="text-gray-500 text-[9px] leading-relaxed mb-4 w-[85%]">Create modern websites that help your business grow online.</p>
      
<button
  onClick={() => window.location.href = "/contact"}
  className="bg-purple-600 hover:bg-purple-700 transition-colors text-white text-[10px] font-semibold py-2 px-5 rounded-lg mb-6 shadow-md shadow-purple-600/30"
>
  Get Started
</button>

      <div className="flex justify-between bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(147,51,234,0.1)] p-3 border border-purple-50 mb-4 z-10 relative">
        <div className="flex flex-col justify-between">
           <div className="text-[8px] text-gray-500 font-medium">Projects</div>
           <div className="font-bold text-gray-900 text-sm mt-1">24</div>
           <div className="text-[7px] text-green-500 font-medium mt-0.5 flex items-center gap-0.5">▲ 12%</div>
        </div>
        <div className="flex flex-col justify-between">
           <div className="text-[8px] text-gray-500 font-medium">Happy Clients</div>
           <div className="font-bold text-gray-900 text-sm mt-1">98%</div>
           <div className="text-[7px] text-green-500 font-medium mt-0.5 flex items-center gap-0.5">▲ 8%</div>
        </div>
        <div className="flex flex-col justify-between">
           <div className="text-[8px] text-gray-500 font-medium">Performance</div>
           <div className="font-bold text-gray-900 text-sm mt-1">99</div>
           <div className="w-8 h-3 mt-1 relative overflow-hidden">
             <svg viewBox="0 0 30 10" className="w-full h-full overflow-visible absolute inset-0">
                <path d="M0,8 Q5,2 10,6 T20,4 T30,2" fill="none" stroke="#9333ea" strokeWidth="1.5" strokeLinecap="round" className="animate-draw" />
             </svg>
           </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-4 z-10 relative">
        <span className="font-semibold text-gray-700 mb-2 block text-[10px] px-1">Core Technologies</span>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
          <div className="px-2 py-1 bg-white border border-gray-100 rounded-md shadow-sm text-[8px] font-bold text-gray-600 flex items-center gap-1 shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> React
          </div>
          <div className="px-2 py-1 bg-white border border-gray-100 rounded-md shadow-sm text-[8px] font-bold text-gray-600 flex items-center gap-1 shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Node.js
          </div>
          <div className="px-2 py-1 bg-white border border-gray-100 rounded-md shadow-sm text-[8px] font-bold text-gray-600 flex items-center gap-1 shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div> Next.js
          </div>
        </div>
      </div>

      {/* System Deployment */}
      <div className="bg-white rounded-xl shadow-sm p-3 border border-gray-100 mb-4 z-10 relative flex items-center justify-between">
         <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
            <div className="flex flex-col">
               <span className="text-[9px] font-bold text-gray-800">System Online</span>
               <span className="text-[7px] text-gray-500">Last deployed 2m ago</span>
            </div>
         </div>
         <span className="text-[8px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-medium">v2.4.1</span>
      </div>
    </div>

    <div className="absolute top-[35%] left-0 right-0 h-40 opacity-30 z-0 pointer-events-none">
      <svg viewBox="0 0 1440 320" className="w-full h-full object-cover">
        <path fill="#d8b4fe" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,160C672,160,768,192,864,197.3C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
    
    <div className="bg-[#1e1e2e] flex-1 min-h-[120px] rounded-t-2xl p-4 text-[8px] font-mono leading-relaxed text-gray-300 relative z-10 border-t border-purple-500/20 shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.1)]">
       <div className="flex gap-1.5 mb-3">
         <div className="w-2 h-2 rounded-full bg-red-500"></div>
         <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
         <div className="w-2 h-2 rounded-full bg-green-500"></div>
       </div>
       <div className="opacity-90">
         <div><span className="text-gray-500 mr-2">1</span> <span className="text-blue-400">&lt;!DOCTYPE html&gt;</span></div>
         <div><span className="text-gray-500 mr-2">2</span> <span className="text-blue-400">&lt;html</span> <span className="text-yellow-300">lang</span>=<span className="text-green-400">"en"</span><span className="text-blue-400">&gt;</span></div>
         <div><span className="text-gray-500 mr-2">3</span> <span className="text-blue-400">&lt;head&gt;</span></div>
         <div className="pl-4"><span className="text-gray-500 mr-2">4</span> <span className="text-blue-400">&lt;meta</span> <span className="text-yellow-300">charset</span>=<span className="text-green-400">"UTF-8"</span><span className="text-blue-400">&gt;</span></div>
       </div>
    </div>
  </div>
);

const GraphicDesignPhone = () => (
  <div className="flex flex-col min-h-full bg-[#fdfdfd] p-4 text-[10px]">
    <div className="flex justify-between items-center mb-5 px-1 mt-2">
      <span className="font-bold text-gray-800 text-[14px]">Design Studio</span>
      <div className="flex flex-col gap-[4px] cursor-pointer">
        <div className="w-5 h-[2px] bg-gray-400 rounded-full"></div>
        <div className="w-5 h-[2px] bg-gray-400 rounded-full"></div>
        <div className="w-5 h-[2px] bg-gray-400 rounded-full"></div>
      </div>
    </div>

    <div className="flex gap-3 mb-6 h-[140px]">
      <div className="bg-[#1a1a1a] rounded-xl p-2 w-8 flex flex-col gap-4 items-center justify-start text-white/70 shadow-lg">
        <div className="p-1 bg-white/20 rounded text-white cursor-pointer hover:bg-white/30 transition-colors"><MousePointer2 size={12} strokeWidth={2.5}/></div>
        <PenTool size={12} className="cursor-pointer hover:text-white transition-colors" />
        <Type size={12} className="cursor-pointer hover:text-white transition-colors" />
        <div className="w-3.5 h-3.5 border-2 border-white/50 rounded-full mt-auto mb-1 cursor-pointer hover:border-white transition-colors"></div>
      </div>
      
      <div className="bg-white flex-1 rounded-xl border border-gray-200 border-dashed flex flex-col items-center justify-center relative shadow-sm overflow-hidden group">
        <div className="absolute inset-0 bg-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative w-16 h-16 z-10 hover:scale-105 transition-transform duration-300 cursor-pointer">
           <div className="absolute bottom-0 left-1 w-5 h-14 bg-blue-600 transform -skew-x-[20deg] origin-bottom-left rounded-sm shadow-sm"></div>
           <div className="absolute bottom-0 right-1 w-5 h-14 bg-orange-400 transform skew-x-[20deg] origin-bottom-right rounded-sm shadow-sm"></div>
           <div className="absolute top-6 left-1/2 -translate-x-1/2 w-8 h-3.5 bg-yellow-400 rounded-sm shadow-sm"></div>
           <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-white rotate-45 transform origin-center shadow-sm"></div>
        </div>
        
        {/* Selection box outline */}
        <div className="absolute inset-4 border border-blue-400/50"></div>
        <div className="absolute top-3 left-3 w-2.5 h-2.5 bg-white border border-blue-500 rounded-sm"></div>
        <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-white border border-blue-500 rounded-sm"></div>
        <div className="absolute bottom-3 left-3 w-2.5 h-2.5 bg-white border border-blue-500 rounded-sm"></div>
        <div className="absolute bottom-3 right-3 w-2.5 h-2.5 bg-white border border-blue-500 rounded-sm"></div>
      </div>
    </div>

    {/* Color Palette */}
    <div className="flex gap-2 justify-center mb-6 bg-white py-2 px-3 rounded-xl shadow-sm border border-gray-50 max-w-max mx-auto">
      <div className="w-6 h-6 rounded-md bg-[#1a1a1a] shadow-inner cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-6 h-6 rounded-md bg-blue-600 shadow-inner cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-6 h-6 rounded-md bg-pink-500 shadow-inner cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-6 h-6 rounded-md bg-orange-400 shadow-inner cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-6 h-6 rounded-md bg-yellow-400 shadow-inner cursor-pointer hover:scale-110 transition-transform"></div>
    </div>

    <div className="font-semibold text-gray-800 mb-3 px-1 text-[11px]">Brand Assets</div>
    <div className="grid grid-cols-3 gap-3 mb-5">
       <div className="bg-white rounded-xl border border-gray-100 flex flex-col items-center justify-center shadow-sm cursor-pointer hover:shadow-md transition-shadow py-3">
         <div className="text-blue-600 font-bold text-2xl mb-1 tracking-tighter">A</div>
         <span className="text-[6px] text-gray-500 font-semibold tracking-widest uppercase mt-auto">Brand</span>
       </div>
       <div className="bg-[#1a1a1a] rounded-xl flex flex-col items-center justify-center shadow-md cursor-pointer hover:bg-black transition-colors py-3">
         <div className="text-blue-500 font-bold text-2xl mb-1 tracking-tighter">A</div>
         <span className="text-[6px] text-gray-400 font-semibold tracking-widest uppercase mt-auto">Brand</span>
       </div>
       
       {/* Coffee Cup Mockup */}
       <div className="bg-white rounded-xl border border-gray-100 flex flex-col items-center justify-end overflow-hidden shadow-sm relative cursor-pointer hover:shadow-md transition-shadow pt-2 pb-1">
          <div className="relative w-10 h-14 flex flex-col items-center">
            {/* Lid */}
            <div className="w-[110%] h-3 bg-gray-800 rounded-t-md rounded-b-sm z-20 relative shadow-sm">
                <div className="absolute top-0 w-full h-[1px] bg-white/20 rounded-t-md"></div>
            </div>
            {/* Cup Body */}
            <div className="w-full flex-1 bg-white border-x border-b border-gray-200 rounded-b-xl shadow-inner flex items-center justify-center overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-r from-gray-200/50 via-transparent to-gray-200/50"></div>
               <span className="text-blue-600 font-black text-sm mt-[-4px] relative z-20">A</span>
            </div>
          </div>
       </div>
    </div>

    {/* Typography Area */}
    <div className="font-semibold text-gray-800 mb-3 px-1 text-[11px]">Typography</div>
    <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 mb-5">
       <div className="flex items-end justify-between border-b border-gray-50 pb-2 mb-2">
          <div className="flex flex-col">
             <span className="text-[14px] font-serif text-gray-800 leading-none mb-1">Playfair Display</span>
             <span className="text-[7px] text-gray-400 font-bold uppercase tracking-widest">Primary Font</span>
          </div>
          <span className="text-[14px] text-gray-300 font-serif leading-none">Aa</span>
       </div>
       <div className="flex items-end justify-between pt-1">
          <div className="flex flex-col">
             <span className="text-[14px] font-sans text-gray-800 font-medium leading-none mb-1">Inter</span>
             <span className="text-[7px] text-gray-400 font-bold uppercase tracking-widest">Secondary Font</span>
          </div>
          <span className="text-[14px] text-gray-300 font-sans leading-none">Aa</span>
       </div>
    </div>

    {/* Recent Exports */}
    <div className="font-semibold text-gray-800 mb-3 px-1 text-[11px]">Recent Exports</div>
    <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 flex-1 items-start">
       <div className="w-16 h-12 shrink-0 bg-blue-50 rounded-lg border border-blue-100 flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-blue-100 transition-colors">
          <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center text-white text-[6px] font-bold">SVG</div>
          <span className="text-[6px] text-blue-700 font-bold">Logo_v2</span>
       </div>
       <div className="w-16 h-12 shrink-0 bg-gray-50 rounded-lg border border-gray-100 flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-gray-100 transition-colors">
          <div className="w-4 h-4 bg-gray-400 rounded-sm flex items-center justify-center text-white text-[6px] font-bold">PNG</div>
          <span className="text-[6px] text-gray-600 font-bold">Banner</span>
       </div>
       <div className="w-16 h-12 shrink-0 bg-gray-50 rounded-lg border border-gray-100 flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-gray-100 transition-colors">
          <div className="w-4 h-4 bg-gray-400 rounded-sm flex items-center justify-center text-white text-[6px] font-bold">ZIP</div>
          <span className="text-[6px] text-gray-600 font-bold">Assets</span>
       </div>
    </div>
  </div>
);

const ServicesSection = () => {
  const scrollContainerRef = useRef(null);

  return (
    <section className="py-20 bg-white relative overflow-hidden font-sans">
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes draw-line {
          0% { stroke-dashoffset: 200; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-draw {
          stroke-dasharray: 200;
          animation: draw-line 3.5s ease-in-out infinite alternate;
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in-up 1s ease-out forwards; }

        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />

      <div className="container mx-auto px-4 max-w-[1200px]">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 px-3 py-1 rounded-full mb-6 shadow-sm border border-indigo-100/50">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></div>
            <span className="text-[10px] font-bold text-indigo-900 tracking-widest uppercase">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-4 leading-tight tracking-tight">
            Growing your Revenue<br />using{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Our Services</span>
              <svg className="absolute w-full h-3 -bottom-0.5 left-0 z-0 text-yellow-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          
          <p className="text-gray-500 text-base max-w-2xl mx-auto px-4 md:px-0">
            Powerful digital solutions to help your business grow, engage, and convert more customers.
          </p>
        </div>

        {/* Services Grid & Scroll Container */}
        <div className="relative w-full max-w-full">
            <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 -mx-4 px-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-x-visible md:mx-0 md:px-0 gap-4"
                style={{ scrollBehavior: 'smooth' }}
            >
            {services.map((service, index) => {
                const Icon = service.icon;
                
                return (
                <div 
                    key={index}
                    // Height is precisely fixed to 650px to ensure uniformity and perfect bottom-alignment
                    className={`${service.bgColor} rounded-[2.5rem] w-[100%] shrink-0 snap-center md:w-auto md:shrink md:snap-align-none p-8 pb-0 flex flex-col relative overflow-hidden transition-colors duration-500 ${service.hoverBgColor} shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] border border-gray-100/80 group h-[650px]`}
                >
                    
                    {/* Top Content (Fixed Height) */}
                    <div className={`w-12 h-12 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                        <Icon className={`w-5 h-5 ${service.iconColor}`} />
                    </div>


                    {/* Title forced to a single line */}
                    <h3 className="text-[20px] sm:text-[22px] lg:text-2xl font-black text-gray-900 mb-4 leading-none tracking-tight whitespace-nowrap">
                      {service.titleLine1} <span className={service.titleColor}>{service.titleLine2}</span>
                    </h3>

                    {/* Description stretches with flex-grow to push the button down evenly across all cards */}
                    <p className="text-gray-500 leading-relaxed text-sm pr-2 flex-grow">
                      {service.description}
                    </p>

                    {/* Explore Button Container - mb-[380px] guarantees it sits strictly above the phone area */}
                    <div className="relative z-20 mb-[380px] w-full">
                        <a href={service.href} className="relative flex items-center justify-center gap-2 text-[13px] font-semibold text-gray-800 w-max group/btn z-20 px-5 py-2.5 rounded-full border border-gray-200 shadow-sm bg-white overflow-hidden transition-all duration-300">
                          {/* Premium Left-to-Right Dark Fill */}
                          <span className="absolute inset-0 bg-[#171717] transform origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 ease-[0.4,0,0.2,1] z-0"></span>
                          
                          <span className="relative z-10 flex items-center gap-2 group-hover/btn:text-white transition-colors duration-300">
                            Explore Service 
                            <ArrowRight size={14} className="text-gray-500 group-hover/btn:text-white transition-transform duration-300 group-hover/btn:translate-x-1" />
                          </span>
                        </a>
                    </div>

                    {/* Phone Mockup Absolute Positioning Container */}
                    {/* Mobile: fixed at -90px (80% visible). Desktop: -180px (60%) default, -90px (80%) on hover */}
                    <div className="absolute -bottom-[90px] md:-bottom-[180px] md:group-hover:-bottom-[90px] left-0 right-0 w-full flex justify-center transition-all duration-700 ease-[0.25,1,0.5,1] z-10">
                        <PhoneFrame>
                            {service.phoneMockup === 'digital' && <DigitalMarketingPhone />}
                            {service.phoneMockup === 'web' && <WebDevelopmentPhone />}
                            {service.phoneMockup === 'graphic' && <GraphicDesignPhone />}
                        </PhoneFrame>
                    </div>

                </div>
                );
            })}
            </div>
        </div>
        
        {/* Mobile Swipe Indicator (Hidden on md/desktop) */}
        <div className="md:hidden flex items-center justify-center gap-3 text-gray-400 text-sm font-medium mt-6 animate-pulse">
          <span className="text-lg opacity-60">←</span>
          <span className="tracking-wide">Swipe to see more</span>
          <span className="text-lg opacity-60">→</span>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;