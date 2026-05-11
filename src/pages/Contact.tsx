import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Send,
  MessageCircle,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Check,
  IndianRupee,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  service: z.array(z.string()).min(1, "Pick at least one service"),
  budget: z.string().min(1, "Pick a budget"),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(1500),
});

const services = [
  { id: "web", label: "Web Development", color: "bg-dexon-green" },
  { id: "marketing", label: "Digital Marketing", color: "bg-dexon-yellow" },
  { id: "graphics", label: "Graphics Design", color: "bg-dexon-cyan" },
  { id: "other", label: "Something Else", color: "bg-muted" },
];

const budgets = ["< 3K", "5K – 10K", "10K – 20K", "20K+"];

const reasons = [
  { icon: Sparkles, title: "Reply within 24h", desc: "Real humans, not bots." },
  { icon: Check, title: "Free discovery call", desc: "30-min strategy session." },
  { icon: MessageCircle, title: "NDA on request", desc: "Your idea stays yours." },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<{
    name: string; email: string; phone: string; service: string[]; budget: string; message: string;
  }>({
    name: "",
    email: "",
    phone: "",
    service: [],
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErr: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        fieldErr[i.path[0] as string] = i.message;
      });
      setErrors(fieldErr);
      toast({ title: "Please check the form", description: "A few fields need your attention." });
      return;
    }
    setErrors({});
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      toast({ title: "Message sent! 🎉", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", email: "", phone: "", service: [], budget: "", message: "" });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />

      {/* HERO */}
      <section className="relative pt-32 sm:pt-36 lg:pt-44 pb-12 sm:pb-16 lg:pb-20">
        {/* Decorative blobs */}
        <div className="absolute top-24 -left-20 w-72 h-72 bg-dexon-yellow/40 animate-blob -z-10" />
        <div className="absolute top-40 right-0 w-80 h-80 bg-dexon-cyan/30 animate-blob [animation-delay:-4s] -z-10" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-dexon-green/30 animate-blob [animation-delay:-8s] -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.95] text-foreground">
              Let's make
              <br />
              something{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic font-serif">great</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 sm:h-4 bg-dexon-yellow -z-0 -rotate-1" />
              </span>
              <span className="inline-block ml-2 animate-wiggle origin-bottom">.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* MAIN GRID — Form + Side info */}
      <section className="pb-20 sm:pb-24 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">

            {/* FORM CARD */}
            <div className="lg:col-span-3">
              <div className="relative bg-card border border-border rounded-[2rem] p-6 sm:p-10 shadow-[8px_8px_0_0_hsl(var(--foreground))]">
                {/* Sticker accent */}
                <div className="absolute -top-5 -right-3 sm:-right-5 bg-dexon-yellow border-2 border-foreground rounded-2xl px-4 py-2 rotate-6 shadow-md">
                  <span className="text-xs font-black uppercase tracking-wider">Say Hi 👋</span>
                </div>

                {submitted ? (
                  <div className="py-12 text-center animate-fade-up">
                    <div className="w-20 h-20 mx-auto bg-dexon-green rounded-full flex items-center justify-center mb-6">
                      <Check className="w-10 h-10 text-foreground" strokeWidth={3} />
                    </div>
                    <h3 className="text-3xl font-black mb-3">Message sent!</h3>
                    <p className="text-muted-foreground mb-6">We'll reply within 24 hours. Promise.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold"
                    >
                      Send another <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Tell us about your project</h2>
                      <p className="text-sm text-muted-foreground mt-1">Fill out the form — we'll do the rest.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field
                        label="Your name"
                        error={errors.name}
                        value={form.name}
                        onChange={(v) => setForm({ ...form, name: v })}
                        placeholder="Jane Doe"
                      />
                      <Field
                        label="Email"
                        type="email"
                        error={errors.email}
                        value={form.email}
                        onChange={(v) => setForm({ ...form, email: v })}
                        placeholder="jane@company.com"
                      />
                    </div>

                    <Field
                      label="Phone (optional)"
                      error={errors.phone}
                      value={form.phone}
                      onChange={(v) => setForm({ ...form, phone: v })}
                      placeholder="+91 ..."
                    />

                    {/* Service picker */}
                    <div>
                      <label className="block text-sm font-bold mb-3">What do you need?</label>
                      <div className="grid grid-cols-2 gap-2.5">
                        {services.map((s) => {
                          const active = form.service.includes(s.id);
                          return (
                            <button
                              type="button"
                              key={s.id}
                              onClick={() =>
                                setForm({
                                  ...form,
                                  service: active
                                    ? form.service.filter((x) => x !== s.id)
                                    : [...form.service, s.id],
                                })
                              }
                              className={`relative flex items-center gap-3 px-4 py-3 rounded-2xl border-2 text-sm font-semibold text-left transition-all ${
                                active
                                  ? "border-foreground bg-foreground text-background scale-[1.02]"
                                  : "border-border bg-background hover:border-foreground/40"
                              }`}
                            >
                              <span className={`w-3 h-3 rounded-full ${s.color}`} />
                              {s.label}
                              {active && <Check className="w-4 h-4 ml-auto" />}
                            </button>
                          );
                        })}
                      </div>
                      {errors.service && <p className="text-xs text-destructive mt-2">{errors.service}</p>}
                    </div>

                    {/* Budget pills */}
                    <div>
                      <label className="block text-sm font-bold mb-3">Project budget</label>
                      <div className="flex flex-wrap gap-2">
                        {budgets.map((b) => {
                          const active = form.budget === b;
                          return (
                            <button
                              type="button"
                              key={b}
                              onClick={() => setForm({ ...form, budget: b })}
                              className={`inline-flex items-center gap-1 px-4 py-2 rounded-full border-2 text-sm font-semibold transition-all ${
                                active
                                  ? "border-foreground bg-dexon-yellow text-foreground"
                                  : "border-border bg-background hover:border-foreground/40"
                              }`}
                            >
                              <IndianRupee className="w-3.5 h-3.5" strokeWidth={2.5} />
                              {b}
                            </button>
                          );
                        })}
                      </div>
                      {errors.budget && <p className="text-xs text-destructive mt-2">{errors.budget}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-bold mb-2">Project details</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={5}
                        maxLength={1500}
                        placeholder="Tell us about your goals, timeline, links to references..."
                        className="w-full px-4 py-3 rounded-2xl border-2 border-border bg-background focus:border-foreground outline-none text-sm resize-none transition-colors"
                      />
                      {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="group relative w-full inline-flex items-center justify-center gap-3 bg-foreground text-background py-4 rounded-full text-base font-bold hover:scale-[1.01] active:scale-[0.99] transition-transform shadow-lg overflow-hidden disabled:opacity-90 disabled:cursor-not-allowed"
                    >
                      <span className={`inline-flex items-center gap-3 transition-opacity duration-200 ${sending ? "opacity-0" : "opacity-100"}`}>
                        Send message
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                      {sending && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="relative flex items-center gap-2">
                            <span className="text-sm font-bold">Sending</span>
                            <Send
                              className="w-5 h-5"
                              style={{ animation: "send-fly 1.1s ease-in forwards" }}
                            />
                          </span>
                        </span>
                      )}
                    </button>
                    <style>{`
                      @keyframes send-fly {
                        0% { transform: translate(0,0) rotate(0deg); opacity: 1; }
                        60% { transform: translate(60px,-40px) rotate(15deg); opacity: 1; }
                        100% { transform: translate(160px,-90px) rotate(25deg); opacity: 0; }
                      }
                    `}</style>
                  </form>
                )}
              </div>
            </div>

            {/* SIDE INFO */}
            <div className="lg:col-span-2 space-y-6">
              {/* Big contact tile */}
              <div className="bg-foreground text-background rounded-[2rem] p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-dexon-yellow/20 rounded-full blur-3xl" />
                <h3 className="text-xl font-black mb-6 relative">Reach us directly</h3>
                <div className="space-y-5 relative">
                  <ContactRow icon={Mail} label="Email" value="example@gmail.com" href="mailto:example@gmail.com" />
                  <ContactRow icon={Phone} label="WhatsApp / Call" value="+91 85098 51562" href="tel:+918509851562" />
                  <ContactRow icon={Phone} label="Call" value="+91 89678 21570" href="tel:+918967821570" />
                  <ContactRow icon={MapPin} label="Studio" value="Kolkata, WB, India" />
                  <ContactRow icon={Clock} label="Working hours" value="Mon – Sat · 10am – 7pm IST" />
                </div>

                <div className="mt-8 pt-6 border-t border-background/10 flex items-center gap-3 relative">
                  <span className="text-xs uppercase tracking-widest text-background/50 mr-2">Follow</span>
                  {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-dexon-yellow hover:text-foreground transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Why us */}
              <div className="bg-dexon-cream border border-border rounded-[2rem] p-6 sm:p-8">
                <h3 className="text-xl font-black mb-5">Why teams pick Weborix</h3>
                <ul className="space-y-4">
                  {reasons.map((r) => (
                    <li key={r.title} className="flex items-start gap-4">
                      <span className="shrink-0 w-10 h-10 rounded-2xl bg-card border border-border flex items-center justify-center">
                        <r.icon className="w-5 h-5" />
                      </span>
                      <div>
                        <p className="font-bold text-sm">{r.title}</p>
                        <p className="text-xs text-muted-foreground">{r.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sticker quote */}
              <div className="relative bg-dexon-yellow rounded-[2rem] p-6 sm:p-8 -rotate-1 hover:rotate-0 transition-transform">
                <p className="text-2xl font-black leading-tight tracking-tight">
                  "Great projects start with a single message."
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest font-bold">— The Weborix Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP / LOCATION STRIP */}
      <section className="pb-20 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2rem] overflow-hidden bg-dexon-cream border border-border h-72 sm:h-96">
            <iframe
              title="Weborix Technologies Studio Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=88.30%2C22.52%2C88.40%2C22.60&layer=mapnik&marker=22.5726%2C88.3639"
              className="w-full h-full grayscale-[40%] contrast-[0.95]"
              loading="lazy"
            />
            <div className="absolute top-6 left-6 bg-card border border-border rounded-2xl px-5 py-4 shadow-xl max-w-xs">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4 text-foreground" />
                <p className="font-black text-sm">Weborix Studio</p>
              </div>
              <p className="text-xs text-muted-foreground">Kolkata, West Bengal · India 700001</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Field = ({
  label, value, onChange, error, type = "text", placeholder,
}: {
  label: string; value: string; onChange: (v: string) => void;
  error?: string; type?: string; placeholder?: string;
}) => (
  <div>
    <label className="block text-sm font-bold mb-2">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-2xl border-2 border-border bg-background focus:border-foreground outline-none text-sm transition-colors"
    />
    {error && <p className="text-xs text-destructive mt-1">{error}</p>}
  </div>
);

const ContactRow = ({
  icon: Icon, label, value, href,
}: { icon: any; label: string; value: string; href?: string }) => {
  const content = (
    <div className="flex items-start gap-4 group">
      <span className="shrink-0 w-10 h-10 rounded-2xl bg-background/10 flex items-center justify-center group-hover:bg-dexon-yellow group-hover:text-foreground transition-colors">
        <Icon className="w-4 h-4" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-widest text-background/50">{label}</p>
        <p className="font-semibold text-sm mt-0.5">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{content}</a> : content;
};

export default ContactPage;
