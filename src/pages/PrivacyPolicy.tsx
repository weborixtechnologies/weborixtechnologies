import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Scale,
  Globe,
  FileText,
  ArrowUpRight,
  Lock,
} from "lucide-react";

const sections = [
  {
    number: "01",
    title: "Information We May Collect",
    content:
      "When you visit our website, certain technical information may be collected automatically, including IP Address, Browser Information, Device / Operating System Information, Date & Time of Visit, Pages Visited, Referrer Information, Server Logs, and Contact Form Information if submitted.",
  },
  {
    number: "02",
    title: "How We Use Information",
    content:
      "The information collected may be used for website functionality and maintenance, security and monitoring purposes, improving website performance and user experience, and responding to inquiries or contact requests.",
  },
  {
    number: "03",
    title: "Cookies Policy",
    content:
      "Our website may use cookies or similar technologies to improve website functionality and performance. Cookies are small text files stored on your browser that help websites operate efficiently. We may use Essential Cookies, Performance / Analytics Cookies, and Security Related Cookies.",
  },
  {
    number: "04",
    title: "Third-Party Services",
    content:
      "Our website may use third-party services such as hosting providers, analytics tools, embedded content, CDN services, or communication tools that may process limited technical information. We are not responsible for the privacy practices of third-party websites or services linked from our website.",
  },
  {
    number: "05",
    title: "Data Security",
    content:
      "We implement reasonable security measures to help protect website information and maintain website security. However, no internet-based service can be guaranteed to be completely secure.",
  },
  {
    number: "06",
    title: "Changes To This Policy",
    content:
      "We reserve the right to update or modify this Privacy Policy at any time without prior notice.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      {/* HERO */}
{/* HERO */}
<section className="pt-24 pb-10 border-b border-border">
  <div className="container mx-auto max-w-5xl px-4">
    
    <div className="max-w-3xl">


      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
        Privacy Policy
      </h1>

      <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-7">
        Weborix Technologies is committed to protecting the privacy of
        visitors using our website and maintaining a secure browsing
        experience.
      </p>

      <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
        <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
        Last Updated: May 2026
      </div>
    </div>

  </div>
</section>

      {/* CONTENT */}
      <section className="py-14">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Intro */}
          <div className="rounded-2xl border border-border p-6 sm:p-8 mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Your Privacy Matters
            </h2>

            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              This Privacy Policy explains how we collect, use, and protect
              limited information collected through our website.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-5">
            {sections.map((section, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border p-6 sm:p-8"
              >
                <div className="border-l-2 border-yellow-500 pl-5">
                  <p className="text-sm text-muted-foreground mb-2">
                    {section.number}
                  </p>

                  <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                    {section.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Cookie Info */}
          <div className="mt-5 rounded-2xl border border-border p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              Managing Cookies
            </h3>

            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              You may disable cookies through your browser settings. Some parts
              of the website may not function properly if cookies are disabled.
            </p>
          </div>

          {/* Contact Section */}
          <div className="mt-10 rounded-2xl border border-border p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs text-muted-foreground mb-5">
              <Scale className="w-3.5 h-3.5 text-yellow-500" />
              Contact Information
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Questions About Privacy?
            </h3>

            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg max-w-2xl mb-6">
              If you have any questions regarding this Privacy Policy, feel free
              to contact our team anytime.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 rounded-2xl bg-[#D4A017] text-black p-5 sm:p-6">
  
  <div>
    <p className="text-sm text-black/70 mb-2">
      Official Email
    </p>

    <a
      href="mailto:contact@weborixtechnologies.in"
      className="text-lg sm:text-2xl font-bold tracking-tight break-all hover:opacity-80 transition-opacity"
    >
      info@weborixtechnologies.in    </a>
  </div>

  <a
    href="mailto:contact@weborixtechnologies.in"
    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white font-semibold hover:scale-105 transition-all w-fit"
  >
    Contact Us
    <ArrowUpRight className="w-4 h-4 text-white" />
  </a>

</div>

            <div className="mt-6 flex flex-wrap gap-5 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-yellow-500" />
                Secure Website
              </div>

              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-yellow-500" />
                Based in India
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;