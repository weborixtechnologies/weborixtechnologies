import { useMemo, useState } from "react";
import {
ArrowUpRight,Briefcase,MapPin,Clock,Users,Heart,Rocket,Coffee,GraduationCap,Sparkles,CheckCircle2,Send,Upload,X,Globe,Trophy,Building2,Quote,ChevronDown,Plus,Star,Zap,Shield,Smile,Target,
} from "lucide-react";
import { toast } from "sonner";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import careersHero from "@/assets/careers-hero.png";
import careersform from "@/assets/careers-form.png";
import careersCompany from "@/assets/careers-company.png";
import careersLife from "@/assets/careers-life.png";
import jobReact from "@/assets/job-react.png";
import jobFullstack from "@/assets/job-fullstack.png";
import jobGraphics from "@/assets/job-graphics.png";
import jobUiux from "@/assets/job-uiux.png";
import jobSales from "@/assets/job-sales.png";
import jobBdm from "@/assets/job-bdm.png";
import testi1 from "@/assets/testi1.png";
import testi2 from "@/assets/testi2.png";
import testi3 from "@/assets/testi3.png";
import gAds from "@/assets/marketing-ads.png";
import gContent from "@/assets/marketing-content.png";
import gEmail from "@/assets/marketing-email.png";
import gSeo from "@/assets/marketing-seo.png";
import gSocial from "@/assets/marketing-social.png";
import gBrand from "@/assets/gfx-offer-brand.png";
import gUiux from "@/assets/gfx-offer-uiux.png";
import gPack from "@/assets/gfx-offer-packaging.png";
import Whyjoin from "@/assets/whyJoin.png";
import saasImg from "@/assets/webdev-saas.png";


/* -------------------------------------------------------------------------- */
/*                       SINGLE SOURCE OF TRUTH (JSON)                         */
/* -------------------------------------------------------------------------- */

const iconMap = {
  Heart, Rocket, Coffee, GraduationCap, Sparkles, Users,
  Globe, Trophy, Building2, Star, Zap, Shield, Smile, Target, Briefcase,
} as const;
type IconName = keyof typeof iconMap;

const careersData = {
  hero: {
    badge: "We're Hiring · Be Part of It",
    title: "Build the work you'd proudly put in your portfolio.",
    description:
      "Weborix is a tight crew of designers, developers and marketers shipping products and brands for founders worldwide. Join us if you care about the craft.",
    primaryButton: { label: "See open roles", href: "#openings" },
    secondaryButton: { label: "Apply now", href: "#apply" },
    image: careersHero,
  },

  companyOverview: {
    title: "We're a product studio, not an agency.",
    description:
      "For 6+ years we've helped startups and enterprises ship work that ranks, converts, and looks good doing it. Small senior teams, transparent process, no fluff.",
    image: careersCompany,
    highlights: [
      "Senior, low-ego team",
      "Remote-first, hybrid optional",
      "Profitable and bootstrapped",
      "Clients in 18+ countries",
    ],
  },

  whyJoinUs: {
  title: "Why people stay with us.",
  description:
    "Meaningful work, continuous growth, and a culture built on trust, ownership, and impact.",

  benefits: [
    {
      number: "01",
      title: "Ownership & Impact",
      description:
        "Take ownership of projects and see your work create real business value."
    },
    {
      number: "02",
      title: "Growth & Learning",
      description:
        "Dedicated support for courses, certifications, conferences, and career development."
    },
    {
      number: "03",
      title: "Collaborative Culture",
      description:
        "Work with talented people in a supportive, low-ego environment focused on teamwork."
    },
    {
      number: "04",
      title: "Flexibility & Wellbeing",
      description:
        "Flexible work arrangements, healthy work-life balance, and employee-focused benefits."
    }
  ]
},



  departments: [
    { id: "all", name: "All roles" },
    { id: "engineering", name: "Engineering" },
    { id: "design", name: "Design" },
    { id: "sales", name: "Sales & Growth" },
  ],

  jobs: [
    {
      id: "react-dev",
      title: "React Developer",
      department: "engineering",
      image: jobReact,
      location: "Remote / Kolkata",
      workType: "Full-time",
      experience: "1-3 yrs",
      salary: "₹6 - 12 LPA",
      openings: 2,
      shortDescription:
        "Build modern, accessible UIs and design systems for global clients using React 18 + Vite.",
      responsibilities: [
        "Translate Figma into pixel-perfect, accessible React components",
        "Own component libraries, theming and reusable hooks",
        "Collaborate with designers and backend engineers daily",
        "Maintain quality through code reviews and Storybook",
      ],
      requirements: [
        "1+ year shipping production React apps",
        "Strong TypeScript & Tailwind CSS",
        "Comfort with Git, Vite and modern tooling",
      ],
      preferredSkills: ["Framer Motion", "Radix UI / shadcn", "Storybook"],
      benefits: ["Health cover", "Learning budget", "Remote stipend"],
      applyLink: "#apply",
    },
    {
      id: "fullstack-dev",
      title: "Full Stack Developer",
      department: "engineering",
      image: jobFullstack,
      location: "Hybrid - Kolkata",
      workType: "Full-time",
      experience: "2-5 yrs",
      salary: "₹10 - 22 LPA",
      openings: 1,
      shortDescription:
        "Own features end-to-end across React frontends, Node APIs and Supabase backends.",
      responsibilities: [
        "Design APIs, schemas and integrations",
        "Build features end-to-end from spec to ship",
        "Mentor junior engineers and run code reviews",
      ],
      requirements: [
        "2+ years full-stack experience",
        "Node.js, Postgres, REST/GraphQL",
        "React + TypeScript on the frontend",
      ],
      preferredSkills: ["Supabase", "Edge functions", "Stripe"],
      benefits: ["ESOPs", "Health cover", "Conference budget"],
      applyLink: "#apply",
    },
    {
      id: "graphics-designer",
      title: "Graphics Designer",
      department: "design",
      image: jobGraphics,
      location: "On-site - Kolkata",
      workType: "Full-time",
      experience: "1-4 yrs",
      salary: "₹5 - 10 LPA",
      openings: 1,
      shortDescription:
        "Craft striking brand identities, social creatives and print collateral for fast-growing brands.",
      responsibilities: [
        "Design brand systems, logos and guidelines",
        "Produce social, ad and print creatives",
        "Collaborate with marketing and motion designers",
      ],
      requirements: [
        "Strong portfolio across brand and social",
        "Adobe Illustrator + Photoshop fluency",
        "Eye for type, grid and colour",
      ],
      preferredSkills: ["Figma", "After Effects", "Print production"],
      benefits: ["Creative gear", "Health cover", "Paid leaves"],
      applyLink: "#apply",
    },
    {
      id: "uiux-designer",
      title: "UI/UX Designer",
      department: "design",
      image: jobUiux,
      location: "Remote",
      workType: "Full-time",
      experience: "2-4 yrs",
      salary: "₹8 - 16 LPA",
      openings: 1,
      shortDescription:
        "Design beautiful, conversion-focused product experiences from research to high-fidelity flows.",
      responsibilities: [
        "Lead end-to-end product design for client and internal apps",
        "Build and maintain a scalable design system",
        "Run user interviews and usability tests",
      ],
      requirements: [
        "2+ years product design experience",
        "Figma mastery and prototyping",
        "Portfolio of shipped products",
      ],
      preferredSkills: ["Design tokens", "Motion", "Webflow"],
      benefits: ["Remote stipend", "Health cover", "Learning budget"],
      applyLink: "#apply",
    },
    {
      id: "sales-executive",
      title: "Sales Executive",
      department: "sales",
      image: jobSales,
      location: "Kolkata",
      workType: "Full-time",
      experience: "1-3 yrs",
      salary: "₹4 - 8 LPA + incentives",
      openings: 2,
      shortDescription:
        "Drive new business across web, design and marketing service lines with warm and outbound leads.",
      responsibilities: [
        "Qualify inbound leads and run discovery calls",
        "Build outbound sequences across email and LinkedIn",
        "Hand off cleanly to delivery teams",
      ],
      requirements: [
        "1+ year B2B / agency sales experience",
        "Excellent written and spoken English",
        "Comfort with CRMs and pipelines",
      ],
      preferredSkills: ["HubSpot", "Apollo", "Cold calling"],
      benefits: ["Uncapped incentives", "Health cover", "Mobile + travel"],
      applyLink: "#apply",
    },
    {
      id: "bdm",
      title: "Business Development Manager",
      department: "sales",
      image: jobBdm,
      location: "Hybrid - Kolkata",
      workType: "Full-time",
      experience: "3-6 yrs",
      salary: "₹12 - 20 LPA + incentives",
      openings: 1,
      shortDescription:
        "Own the pipeline: build partnerships, close mid-market deals and shape our GTM playbook.",
      responsibilities: [
        "Own a multi-crore revenue target",
        "Build partnerships and reseller relationships",
        "Coach the sales team on closing techniques",
      ],
      requirements: [
        "3+ years selling services or SaaS",
        "Track record of mid-market deals",
        "Strong commercial and negotiation skills",
      ],
      preferredSkills: ["Account-based selling", "Partnerships", "Forecasting"],
      benefits: ["ESOPs", "Quarterly bonus", "Health cover"],
      applyLink: "#apply",
    },
  ],

  lifeAtWeborix: {
    title: "Life inside Weborix.",
    description:
      "We're not a hustle-culture studio. We work in deep, focused blocks, ship great work and clock out without guilt.",
    image: careersLife,
    points: [
      "Quarterly team offsites in the hills or by the sea",
      "Friday demo days and monthly show-and-tells",
      "Open salary bands and clear growth ladders",
      "Birthdays off, wellness Fridays, no-meeting Wednesdays",
    ],
  },

  hiringProcess: {
    title: "From hello to offer in under three weeks.",
    description: "Lightweight, transparent, and respectful of your time.",
    steps: [
      { title: "Apply", description: "Drop the form below. We read every single application within 5 working days." },
      { title: "Intro call", description: "A 30-minute chat with the hiring manager about you and the role." },
      { title: "Paid task", description: "A short, real-world task. Capped at 4 hours. We pay for your time." },
      { title: "Team round", description: "Meet 2-3 future teammates. Culture, depth and a few fun questions." },
      { title: "Offer", description: "Transparent offer in writing within 48 hours of the final round." },
    ],
  },

  employeeBenefits: {
    title: "The full benefits stack.",
    items: [
      { title: "Comprehensive health insurance", description: "Cover for you, partner, kids and parents." },
      { title: "Annual learning budget", description: "₹50,000 / year for courses, books and conferences." },
      { title: "Home office stipend", description: "One-time ₹40,000 setup + monthly internet bill." },
      { title: "Generous paid leaves", description: "24 days off + all public holidays + sick leave." },
      { title: "Performance bonuses", description: "Half-yearly bonuses tied to clear, written goals." },
      { title: "ESOPs for senior roles", description: "Real equity with a transparent vesting schedule." },
    ],
  },

  testimonials: [
    {
      name: "Ananya Sen",
      designation: "Senior Designer · 3 yrs at Weborix",
      image: testi1,
      quote:
        "I've never had this much creative freedom anywhere else. The team trusts you, and clients actually ship what you design.",
    },
    {
      name: "Rahul Mehta",
      designation: "Full-Stack Engineer · 2 yrs at Weborix",
      image: testi2,
      quote:
        "Tiny PRs, fast reviews, no meeting marathons. I write more code here in a week than I did in a month at my last job.",
    },
    {
      name: "Priya Iyer",
      designation: "Growth Lead · 4 yrs at Weborix",
      image: testi3,
      quote:
        "The leadership genuinely cares about your growth. Open salary bands, clear ladders, no politics. It's rare.",
    },
  ],

  gallery: {
    title: "Snapshots from the studio.",
    description: "A peek at the team, the office and the work we ship.",
    images: [gAds, gContent, gEmail, gSeo, gSocial, gBrand, gUiux, gPack],
  },

  faq: [
    {
      question: "Do you support fully remote work?",
      answer:
        "Yes. Most roles are remote-first. A handful (sales, some senior leadership) prefer hybrid out of our Kolkata studio.",
    },
    {
      question: "How long does the hiring process take?",
      answer:
        "From application to offer typically takes 2-3 weeks, depending on schedules. We try hard not to drag things out.",
    },
    {
      question: "Do you hire interns or freshers?",
      answer:
        "We hire 3-4 interns each year, mostly through referrals and our partner colleges. Watch this page for openings.",
    },
    {
      question: "Is the take-home task paid?",
      answer:
        "Always. Tasks are capped at 4 hours and we pay a flat ₹4,000, regardless of whether you get the offer.",
    },
    {
      question: "What if I don't see a role that fits me?",
      answer:
        "Use the general application form below. We hire opportunistically when great people reach out.",
    },
  ],

  generalApplication: {
    title: "One form. Every role.",
    description:
      "Tell us a bit about you and pick the role you're applying for. We read every submission and reply within 5 working days.",
    perks: [
      "Honest feedback on every application",
      "Take-home tasks are paid",
      "Two interview rounds, max",
      "Regular team bonding activities",
      "Flexible work environment",
      "Opportunity to lead initiatives",
    ],
  },

  applicationForm: {
    interestedRoles: [
      "React Developer",
      "Full Stack Developer",
      "Graphics Designer",
      "UI/UX Designer",
      "Sales Executive",
      "Business Development Manager",
      "General / Other",
    ],
    genderOptions: ["Female", "Male", "Non-binary", "Prefer not to say"],
    experienceLevels: ["Fresher", "0-1 years", "1-3 years", "3-5 years", "5-8 years", "8+ years"],
  },
};

type Job = (typeof careersData)["jobs"][number];

/* -------------------------------------------------------------------------- */
/*                                  HELPERS                                    */
/* -------------------------------------------------------------------------- */

const Icon = ({ name, className }: { name: IconName; className?: string }) => {
  const I = iconMap[name] ?? Sparkles;
  return <I className={className} />;
};

/* -------------------------------------------------------------------------- */
/*                              SECTION RENDERERS                              */
/* -------------------------------------------------------------------------- */

const renderHero = () => {
  const h = careersData.hero;
  return (
    <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 bg-dexon-cream overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-dexon-yellow/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-dexon-green/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-dexon-yellow animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">{h.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-[1.05] tracking-tight">
              {h.title}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              {h.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={h.primaryButton.href}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold hover:opacity-90 hover:scale-105 transition-all"
              >
                {h.primaryButton.label}
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={h.secondaryButton.href}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-foreground border-b-2 border-foreground/80 pb-1 hover:opacity-70 transition-opacity"
              >
                {h.secondaryButton.label}
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-dexon-yellow/30 opacity-50 rounded-full blur-2xl" />
            <img
              src={h.image}
              alt="Join the Weborix team"
              width={1024}
              height={1024}
              className="relative w-full max-w-md lg:max-w-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


const renderCompanyOverview = () => {
  const c = careersData.companyOverview;
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1 flex justify-center">
            <div className="absolute inset-0 bg-dexon-cyan/20 rounded-full blur-3xl" />
            <img
              src={c.image}
              alt="About Weborix"
              loading="lazy"
              width={1024}
              height={1024}
              className="relative w-full max-w-md drop-shadow-2xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">About us</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">{c.title}</h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">{c.description}</p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {c.highlights.map((hl) => (
                <li key={hl} className="flex items-start gap-3 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderWhyJoin = () => {
  const w = careersData.whyJoinUs;
  return (
<section className="py-24 lg:py-32 bg-background">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

    <div className="grid lg:grid-cols-[1fr_0.9fr] gap-16 lg:gap-24 items-center">

      {/* Left Content */}
      <div>

        <span className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Why Join Us
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          {w.title}
        </h2>

        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
          {w.description}
        </p>

        <div className="mt-14 space-y-10">

          {w.benefits.map((b) => (
            <div
              key={b.title}
              className="grid grid-cols-[70px_1fr] gap-6"
            >
              <div>
                <span className="text-4xl md:text-5xl font-black text-primary/20 leading-none">
                  {b.number}
                </span>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                  {b.title}
                </h3>

                <p className="mt-2 text-muted-foreground leading-relaxed max-w-lg">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
{/* Right Illustration */}
<div className="relative flex items-center justify-center lg:justify-end">

  {/* Background Glow */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="h-72 w-72 lg:h-96 lg:w-96 rounded-full bg-primary/5 blur-3xl" />
  </div>

  {/* Main Illustration */}
  <img
    src={Whyjoin}
    alt="Why Join Weborix"
    className="relative z-10 w-full max-w-[500px] sm:max-w-[580px] lg:max-w-[650px] xl:max-w-[720px] h-auto object-contain select-none"
    draggable={false}
  />

</div>
    </div>
  </div>
</section>
  );
};

const JobCard = ({
  job,
  onView,
  onApply,
}: {
  job: Job;
  onView: (j: Job) => void;
  onApply: (j: Job) => void;
}) => (
  <article className="relative rounded-3xl bg-card border border-border p-6 sm:p-7 overflow-hidden flex flex-col">
    <div className="absolute -top-6 -right-6 w-40 h-40 bg-dexon-yellow/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

    <div className="relative flex items-start gap-4 sm:gap-5">
    <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center overflow-hidden">
      <img
        src={job.image}
        alt={job.title}
        loading="lazy"
        width={256}
        height={256}
        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
      />
    </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 text-[11px] font-medium text-muted-foreground mb-1.5">
          <Clock className="w-3 h-3" />
          <span>{job.openings} opening{job.openings > 1 ? "s" : ""}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold leading-snug">{job.title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{job.shortDescription}</p>
      </div>
    </div>

    <div className="relative mt-5 flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-muted">
        <Briefcase className="w-3 h-3" /> {job.workType}
      </span>
      <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-muted">
        <MapPin className="w-3 h-3" /> {job.location}
      </span>
      <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-muted">
        {job.experience}
      </span>
      <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-dexon-yellow/60">
        {job.salary}
      </span>
    </div>

    <div className="relative mt-5 pt-5 border-t border-border flex items-center justify-between gap-3">
      <button
        type="button"
        onClick={() => onView(job)}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors"
      >
        View details
      </button>
      <button
        type="button"
        onClick={() => onApply(job)}
        className="inline-flex items-center gap-1.5 text-sm font-semibold bg-primary text-primary-foreground px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
      >
        Apply <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  </article>
);

const renderJobs = (
  filter: string,
  setFilter: (s: string) => void,
  onView: (j: Job) => void,
  onApply: (j: Job) => void,
) => {
  const list =
    filter === "all" ? careersData.jobs : careersData.jobs.filter((j) => j.department === filter);

  return (
    <section id="openings" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Open positions</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Job updates, refreshed weekly.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {careersData.departments.map((d) => {
              const active = filter === d.id;
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setFilter(d.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                    active
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-foreground border-border hover:bg-muted"
                  }`}
                >
                  {d.name}
                </button>
              );
            })}
          </div>
        </div>

        {list.length === 0 ? (
          <p className="text-muted-foreground">No openings right now in this department.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
            {list.map((job) => (
              <JobCard key={job.id} job={job} onView={onView} onApply={onApply} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const renderLife = () => {
  const l = careersData.lifeAtWeborix;
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-dexon-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Life at Weborix</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">{l.title}</h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">{l.description}</p>
            <ul className="mt-8 space-y-3">
              {l.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-dexon-green/30 rounded-full blur-3xl" />
            <img
              src={l.image}
              alt="Life at Weborix"
              loading="lazy"
              width={1024}
              height={1024}
              className="relative w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const renderHiring = () => {
  const h = careersData.hiringProcess;
  return (
<section className="py-16 sm:py-20 lg:py-24">
  <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
    <div className="max-w-2xl mb-14">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        Hiring process
      </p>

      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
        {h.title}
      </h2>

      <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
        {h.description}
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
      {h.steps.map((s, i) => (
        <div
          key={s.title}
          className="
            group relative overflow-hidden
            rounded-[32px]
            border border-border
            bg-gradient-to-br from-background via-background to-muted/40
            p-8
            shadow-sm
            hover:-translate-y-2
            hover:border-black/15
            hover:shadow-xl
            transition-all duration-500
          "
        >
          {/* Background Number */}
        <div className="absolute top-0 right-2 text-[75px] lg:text-[90px] font-black leading-none text-black/[0.04] select-none pointer-events-none">
          {String(i + 1).padStart(2, "0")}
        </div>

          {/* Timeline Connector */}
          {i !== h.steps.length - 1 && (
            <div className="hidden lg:block absolute top-16 left-full w-5 h-px bg-border" />
          )}

          <div className="relative z-10">
            <h3 className="text-[28px] lg:text-[32px] font-black tracking-tight leading-none mb-5">
              {s.title}
            </h3>

            <p className="text-[15px] leading-8 text-muted-foreground">
              {s.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

const renderEmployeeBenefits = () => {
  const b = careersData.employeeBenefits;
  return (
    <section className="py-16 sm:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Benefits</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">{b.title}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {b.items.map((it) => (
            <div key={it.title} className="rounded-3xl bg-background border border-border p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-base sm:text-lg mb-1.5">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const renderTestimonials = (autoplay: React.RefObject<any>) => (
<section className="py-16 sm:py-20 lg:py-24">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-2xl mb-12">
      <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Team voices
      </p>

      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
        What the team says, unfiltered.
      </h2>
    </div>

    {/* Mobile Carousel */}
    <div className="md:hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={autoplay.current ? [autoplay.current] : []}
        className="w-full"
      >
        <CarouselContent>
          {careersData.testimonials.map((t) => (
            <CarouselItem key={t.name} className="basis-[92%]">
              <div className="rounded-3xl bg-card border border-border p-6 flex flex-col shadow-sm h-full">
                <Quote className="w-7 h-7 text-dexon-yellow mb-4" />

                <p className="text-sm text-foreground leading-relaxed flex-1">
                  "{t.quote}"
                </p>

                <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    width={64}
                    height={64}
                    className="w-12 h-12 rounded-full object-cover bg-muted"
                  />

                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.designation}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>

    {/* Desktop Grid */}
    <div className="hidden md:grid md:grid-cols-3 gap-4 sm:gap-5">
      {careersData.testimonials.map((t) => (
        <div
          key={t.name}
          className="rounded-3xl bg-card border border-border p-6 sm:p-7 flex flex-col hover:shadow-xl transition-shadow"
        >
          <Quote className="w-7 h-7 text-dexon-yellow mb-4" />

          <p className="text-sm sm:text-base text-foreground leading-relaxed flex-1">
            "{t.quote}"
          </p>

          <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
            <img
              src={t.image}
              alt={t.name}
              loading="lazy"
              width={64}
              height={64}
              className="w-12 h-12 rounded-full object-cover bg-muted"
            />

            <div>
              <div className="font-bold text-sm">{t.name}</div>
              <div className="text-xs text-muted-foreground">
                {t.designation}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
);

const renderGallery = () => {
  const g = careersData.gallery;
  return (
    <section className="py-16 sm:py-20 bg-dexon-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Gallery</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">{g.title}</h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">{g.description}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {g.images.map((src, i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl bg-card border border-border overflow-hidden flex items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <img
                src={src}
                alt={`Studio snapshot ${i + 1}`}
                loading="lazy"
                width={400}
                height={400}
                className="w-full h-full object-contain p-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-card border border-border overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 hover:bg-muted/40 transition-colors"
      >
        <span className="font-semibold text-sm sm:text-base">{q}</span>
        <Plus className={`w-5 h-5 shrink-0 transition-transform ${open ? "rotate-45" : ""}`} />
      </button>
      {open && (
        <div className="px-5 sm:px-6 pb-5 text-sm sm:text-base text-muted-foreground leading-relaxed">{a}</div>
      )}
    </div>
  );
};

const renderFaq = () => (
  <section className="py-16 sm:py-20 lg:py-24">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
      
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          FAQ
        </p>

        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
          Questions, asked often.
        </h2>

        <img
          src={saasImg}
          alt="FAQ Illustration"
          loading="lazy"
          width={1024}
          height={1024}
          className="hidden lg:block mt-8 w-full max-w-[300px] object-contain"        />
      </div>

      <div className="lg:col-span-2 space-y-3">
        {careersData.faq.map((f) => (
          <FaqItem
            key={f.question}
            q={f.question}
            a={f.answer}
          />
        ))}
      </div>

    </div>
  </div>
</section>
);

/* -------------------------------------------------------------------------- */
/*                           APPLICATION FORM SECTION                          */
/* -------------------------------------------------------------------------- */

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  gender: "",
  dob: "",
  role: "",
  experience: "",
  currentCompany: "",
  previousCompany: "",
  portfolio: "",
  linkedin: "",
  resumeName: "",
  coverLetter: "",
};

const Field = ({
  label, required, children,
}: { label: string; required?: boolean; children: React.ReactNode }) => (
  <div>
    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
      {label}{required && " *"}
    </label>
    <div className="mt-1.5">{children}</div>
  </div>
);

const renderApplicationForm = (
  form: typeof initialForm,
  setForm: React.Dispatch<React.SetStateAction<typeof initialForm>>,
  onSubmit: (e: React.FormEvent) => void,
) => {
  const g = careersData.generalApplication;
  const f = careersData.applicationForm;

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary text-sm";

  return (
    <section id="apply" className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground rounded-t-[2rem] mx-3 sm:mx-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Apply</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">{g.title}</h2>
            <p className="mt-5 text-base text-primary-foreground/70 leading-relaxed max-w-md">{g.description}</p>
<ul className="mt-8 space-y-3">
  {g.perks.map((p) => (
    <li key={p} className="flex items-center gap-3 text-sm text-primary-foreground/80">
      <CheckCircle2 className="w-4 h-4 text-dexon-yellow shrink-0" /> {p}
    </li>
  ))}
      </ul>
<div className="mt-10 flex justify-center lg:justify-start">
  <div className="relative">
    <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full" />

    <img
      src={careersform}
      alt="Career at Weborix"
      className="relative w-full max-w-[320px] lg:max-w-[400px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)]"
    />
  </div>
</div>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 rounded-3xl bg-background text-foreground p-6 sm:p-8 lg:p-10 shadow-2xl"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" required>
                <input className={inputCls} value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="Jane Doe" />
              </Field>
              <Field label="Email" required>
                <input type="email" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" />
              </Field>
              <Field label="Phone number" required>
                <input type="tel" className={inputCls} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 90000 00000" />
              </Field>
              <Field label="Gender" required>
                <select className={inputCls} value={form.gender} onChange={(e) => setForm({ ...form, gender: e.target.value })}>
                  <option value="">Select</option>
                  {f.genderOptions.map((o) => <option key={o}>{o}</option>)}
                </select>
              </Field>
              <Field label="Date of birth" required>
                <input type="date" className={inputCls} value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} />
              </Field>
              <Field label="Interested role" required>
                <select className={inputCls} value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
                  <option value="">Choose a role</option>
                  {f.interestedRoles.map((r) => <option key={r}>{r}</option>)}
                </select>
              </Field>
              <Field label="Experience level">
                <select className={inputCls} value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })}>
                  <option value="">Select</option>
                  {f.experienceLevels.map((l) => <option key={l}>{l}</option>)}
                </select>
              </Field>
              <Field label="Current company">
                <input className={inputCls} value={form.currentCompany} onChange={(e) => setForm({ ...form, currentCompany: e.target.value })} placeholder="Acme Inc." />
              </Field>
              <Field label="Previous company">
                <input className={inputCls} value={form.previousCompany} onChange={(e) => setForm({ ...form, previousCompany: e.target.value })} placeholder="Optional" />
              </Field>
              <Field label="Portfolio URL">
                <input type="url" className={inputCls} value={form.portfolio} onChange={(e) => setForm({ ...form, portfolio: e.target.value })} placeholder="https://" />
              </Field>
              <div className="sm:col-span-2">
                <Field label="LinkedIn URL">
                  <input type="url" className={inputCls} value={form.linkedin} onChange={(e) => setForm({ ...form, linkedin: e.target.value })} placeholder="https://linkedin.com/in/..." />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Cover letter / description">
                  <textarea
                    rows={4}
                    className={`${inputCls} resize-none`}
                    value={form.coverLetter}
                    onChange={(e) => setForm({ ...form, coverLetter: e.target.value })}
                    placeholder="A few lines about your favourite project, or what you'd love to build with us."
                  />
                </Field>
              </div>
                <Field label="Resume" required>
                  <label className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-dashed border-border bg-muted/40 cursor-pointer hover:bg-muted transition-colors text-sm text-muted-foreground">
                    <Upload className="w-4 h-4" />

                    <span className="truncate">
                      {form.resumeName || "Upload resume (PDF, DOC, DOCX)"}
                    </span>

                    <input
                      required
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) =>
                        setForm({
                          ...form,
                          resumeName: e.target.files?.[0]?.name ?? "",
                        })
                      }
                    />
                  </label>
                </Field>
            </div>

            <button
              type="submit"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-full text-sm font-semibold hover:opacity-90 hover:scale-[1.01] transition-all"
            >
              Send application <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*                              JOB DETAILS MODAL                              */
/* -------------------------------------------------------------------------- */

const JobModal = ({
  job, onClose, onApply,
}: { job: Job | null; onClose: () => void; onApply: (j: Job) => void }) => {
  if (!job) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in">
      <div className="bg-background w-full sm:max-w-3xl max-h-[92vh] sm:rounded-3xl rounded-t-3xl overflow-y-auto shadow-2xl">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-border px-5 sm:px-8 py-4 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-12 h-12 rounded-2xl bg-muted/60 flex items-center justify-center shrink-0 overflow-hidden">
              <img src={job.image} alt={job.title} className="w-full h-full object-contain p-1" />
            </div>
            <div className="min-w-0">
              <h3 className="font-black text-base sm:text-lg leading-tight truncate">{job.title}</h3>
              <p className="text-xs text-muted-foreground truncate">{job.location} · {job.workType}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 rounded-full border border-border hover:bg-muted flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 sm:p-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted">{job.experience}</span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-dexon-yellow/60">{job.salary}</span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted">{job.openings} opening{job.openings > 1 ? "s" : ""}</span>
          </div>

          <p className="text-base text-foreground leading-relaxed">{job.shortDescription}</p>

          {[
            { title: "What you'll do", items: job.responsibilities },
            { title: "Requirements", items: job.requirements },
            { title: "Nice to have", items: job.preferredSkills },
            { title: "Benefits", items: job.benefits },
          ].map((b) => (
            <div key={b.title} className="mt-7">
              <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">{b.title}</h4>
              <ul className="space-y-2">
                {b.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm sm:text-base">
                    <CheckCircle2 className="w-4 h-4 text-foreground shrink-0 mt-1" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <button
            type="button"
            onClick={() => onApply(job)}
            className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Apply for this role <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   PAGE                                      */
/* -------------------------------------------------------------------------- */

const Careers = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
    })
  );

  const [filter, setFilter] = useState("all");
  const [modalJob, setModalJob] = useState<Job | null>(null);
  const [form, setForm] = useState(initialForm);

  const scrollToApply = () =>
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "start" });

  const handleApply = (j: Job) => {
    setForm((f) => ({ ...f, role: j.title }));
    setModalJob(null);
    setTimeout(scrollToApply, 50);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.role) {
      toast.error("Please fill name, email and role.");
      return;
    }
    toast.success("Application sent! We'll get back to you within 5 days.");
    setForm(initialForm);
  };

  useMemo(() => null, []); // placeholder to keep import tidy

  return (
    <main className="min-h-screen bg-background">

        <Header />

      {renderHero()}
      {renderCompanyOverview()}
      {renderWhyJoin()}
      {renderJobs(filter, setFilter, setModalJob, handleApply)}
      {renderLife()}
      {renderHiring()}
      {renderEmployeeBenefits()}
      {renderTestimonials(autoplay)}
      {/* {renderGallery()} */}
      {renderFaq()}
      {renderApplicationForm(form, setForm, onSubmit)}

      <Footer />

      <JobModal job={modalJob} onClose={() => setModalJob(null)} onApply={handleApply} />
    </main>
  );
};

export default Careers;