import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 sm:py-16 lg:py-20 rounded-t-2xl mx-3 sm:mx-4 mt-3 sm:mt-4 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">


            <img   //Logo
              src="/IMG/Logo.png"
              alt="Weborix Technologies"
              className="h-14 w-auto mb-4"
            />
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6 max-w-xs">
              Ullamcorper risus ultrices risus lorem.
              Vulputate ut aliquam, consectetur turpis
              Vulputate ut aliquam.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-dexon-yellow hover:text-foreground transition-all"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Informations */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4">Informations</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
              {["About Company", "Portfolio", "Team", "Latest Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-dexon-yellow transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
              <li>Kolkata, WB, India, 700001</li>
              <li>
                <a href="mailto:example@gmail.com" className="hover:text-dexon-yellow transition-colors">
                  example@gmail.com
                </a>
              </li>
                <li className="flex flex-col">
                  <a
                    href="tel:+918509851562"
                    className="hover:text-dexon-yellow transition-colors"
                  >
                    +91 85098 51562
                  </a>
                  <a
                    href="tel:+918967821570"
                    className="hover:text-dexon-yellow transition-colors"
                  >
                    +91 89678 21570
                  </a>
                </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4">Newsletter</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Subscribe to get the latest updates and offers from us.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 text-sm text-primary-foreground placeholder:text-primary-foreground/40 px-4 py-3 rounded-l-full flex-1 min-w-0 outline-none border-none focus:bg-primary-foreground/15"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-dexon-yellow text-foreground px-5 sm:px-6 py-3 rounded-r-full text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-primary-foreground/50">
           © 2026 Weborix Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-5 sm:gap-6 text-xs sm:text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground transition-colors">About</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Services</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Career</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
