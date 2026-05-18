import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Scale,
  Globe,
  FileText,
  ArrowUpRight,
} from "lucide-react";

const sections = [
  {
    number: "01",
    title: "Website Usage",
    content:
      "This website is intended for informational and business purposes only. You agree not to misuse, damage, interrupt, or attempt unauthorized access to the website or its services.",
  },
  {
    number: "02",
    title: "Intellectual Property",
    content:
      "All content available on this website, including text, graphics, logos, designs, images, branding, and other materials, is the property of Weborix Technologies unless otherwise stated. Unauthorized copying, reproduction, or distribution of website content is prohibited.",
  },
  {
    number: "03",
    title: "Website Availability",
    content:
      "We aim to keep the website available and functioning properly at all times. However, we do not guarantee uninterrupted or error-free operation of the website. Website access may occasionally be interrupted for maintenance, updates, or technical reasons.",
  },
  {
    number: "04",
    title: "Third-Party Links",
    content:
      "This website may contain links to third-party websites or services for additional information or convenience. Weborix Technologies is not responsible for the content, policies, or practices of third-party websites.",
  },
  {
    number: "05",
    title: "Limitation of Liability",
    content:
      "Weborix Technologies shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use of this website. All information on this website is provided on an “as is” basis without warranties of any kind.",
  },
  {
    number: "06",
    title: "Privacy & Security",
    content:
      "We value your privacy and take reasonable measures to protect website data and user information. However, no online platform can guarantee complete security against all cyber threats.",
  },
  {
    number: "07",
    title: "Changes To Terms",
    content:
      "We reserve the right to update or modify these Terms & Conditions at any time without prior notice. Continued use of the website after changes are posted constitutes acceptance of those changes.",
  },
  {
    number: "08",
    title: "Governing Law",
    content:
      "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes arising from the use of this website shall fall under the jurisdiction of the courts of Kolkata, West Bengal.",
  },
];

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="pt-24 pb-10 border-b border-border">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground mb-2">
              Legal Information
            </p>

            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
              Terms & Conditions
            </h1>

            <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-7">
              Welcome to Weborix Technologies. By accessing or using this
              website, you agree to comply with these Terms & Conditions and all
              applicable laws and regulations.
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
              Welcome to Weborix Technologies
            </h2>

            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              Please read these Terms & Conditions carefully before using our
              website. If you do not agree with any part of these terms, please
              discontinue use of this website immediately.
            </p>
          </div>

          {/* Sections */}
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

          {/* Contact Section */}
          <div className="mt-10 rounded-2xl border border-border p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs text-muted-foreground mb-5">
              <Scale className="w-3.5 h-3.5 text-yellow-500" />
              Contact Information
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Need More Information?
            </h3>

            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg max-w-2xl mb-6">
              If you have any questions regarding these Terms & Conditions,
              feel free to contact our team anytime.
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
                  info@weborixtechnologies.in                </a>
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
                Trusted Business
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

export default TermsOfUse;