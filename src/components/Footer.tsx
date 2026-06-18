import { Heart, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import logo from '@/assets/wasaf-logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl p-3 inline-block mb-4">
              <img src={logo} alt="WASAF Logo" className="h-20 w-auto" />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4 max-w-md">
              Wawa Seed Africa Foundation (WASAF) is a community-based organization 
              committed to nurturing dreams and empowering Africa through sustainable 
              development and compassionate service.
            </p>
            <p className="text-primary-foreground/60 text-sm mb-2">
              Registered NGO in Ghana since 2020
            </p>
            <div className="text-primary-foreground/70 text-sm">
              <p className="font-semibold text-primary-foreground/80">US Location:</p>
              <p>56 Burnett St. Unit 2</p>
              <p>Boston, MA 02130</p>
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
              <li className="text-primary-foreground/80">Education Support</li>
              <li className="text-primary-foreground/80">Women Empowerment</li>
              <li className="text-primary-foreground/80">Healthcare</li>
              <li className="text-primary-foreground/80">Vocational Training</li>
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
              <a href="https://facebook.com/WASAFGhana" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com/WASAFGhana" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com/WASAFGhana" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://youtube.com/@WASAFGhana" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-primary-foreground/60 hover:text-secondary transition-colors">
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
