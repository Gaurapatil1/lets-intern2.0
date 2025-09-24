import React from 'react';
import { Flag, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer
      className="bg-black text-white"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Flag className="h-8 w-8 text-yellow-400" aria-hidden="true" />
              <span className="text-xl font-bold">{t('hero.title')}</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering students with AI-driven internship opportunities through government and private partnerships.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/search"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Search Internships
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </nav>

          {/* Government Schemes */}
          <nav aria-label="Government Schemes">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Government Schemes</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  AICTE Programs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  PM Kaushal Vikas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Digital India
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Startup India
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <address className="not-italic" aria-label="Contact information">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" aria-hidden="true" />
                <a
                  href="mailto:info@letsintern.gov.in"
                  className="hover:text-yellow-400 transition-colors"
                >
                  info@letsintern.gov.in
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" aria-hidden="true" />
                <a href="tel:1800XXX0000" className="hover:text-yellow-400 transition-colors">
                  1800-XXX-XXXX
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </address>
        </div>

        <div className="border-t border-yellow-600 mt-8 pt-8 text-center text-gray-400 text-sm select-none">
          © 2025 Let&apos;s Intern - Government of India Initiative. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
