import { Heart, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import logo from '@/assets/wasaf-logo.jpg';
import { useSection } from '@/hooks/useSiteContent';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footer = useSection('footer');

  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl p-3 inline-block mb-4">
              <img src={logo} alt="WASAF Logo" className="h-20 w-auto" />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4 max-w-md">{footer.about}</p>
            <p className="text-primary-foreground/60 text-sm mb-2">{footer.registration}</p>
            <div className="text-primary-foreground/70 text-sm">
              <p className="font-semibold text-primary-foreground/80">{footer.usLocationLabel}</p>
              {footer.usLocationLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#impact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Our Impact
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Programs</h4>
            <ul className="space-y-3">
              {footer.programs.map((program) => (
                <li key={program} className="text-primary-foreground/80">
                  {program}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Wawa Seed Africa Foundation. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={footer.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href={footer.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href={footer.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href={footer.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
            <p className="text-primary-foreground/60 text-sm flex items-center gap-2">
              Made with <Heart size={14} className="text-secondary" /> in Ghana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
