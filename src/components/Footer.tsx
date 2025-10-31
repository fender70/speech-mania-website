import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import speechManiaLogo from '../assets/logo/speech-mania-logo-rectangle.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#02234F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Tagline */}
          <div>
            <div className="mb-4">
              <img
                src={speechManiaLogo}
                alt="Speech Mania Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering students across Thailand and Southeast Asia through public speaking and leadership programs.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#DC2626] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#DC2626] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#DC2626] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => handleNavigate('about')} className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('programs')} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Programs
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('impact')} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Impact & Achievements
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('contact')} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => handleNavigate('get-involved')} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Join a Workshop
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('get-involved')} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Partner With Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('get-involved')} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Become a Sponsor
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('get-involved')} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Free Resources
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span>info@speechmania.org</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>+66 (0) 123 456 789</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Bangkok, Thailand</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Speech Mania. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
