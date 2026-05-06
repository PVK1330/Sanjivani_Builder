import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Clock } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block bg-white p-2 md:p-2.5 rounded-xl md:rounded-2xl mb-8 shadow-xl shadow-black/20">
              <img src={logo} alt="Sanjivani Logo" className="h-10 md:h-12 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              Delivering premium residential and commercial spaces in Nashik since 1999 with trust, quality, and commitment.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Globe size={18} />, href: 'https://instagram.com/sanjivani_builders_developers' },
                { icon: <Globe size={18} />, href: '#' },
                { icon: <Mail size={18} />, href: 'mailto:sanjivanidevelopers7551@gmail.com' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-brand flex items-center justify-center transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand"></span>
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['Home', 'About Us', 'Projects', 'Services', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-brand transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand/40 group-hover:bg-brand transition-all"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand"></span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ul className="space-y-5 text-sm text-gray-400">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <span>Shiv Sanjivani Landmark, Opp. Papaya Nursery, Trimbak Road, Satpur, Nashik</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <a href="tel:9822875551" className="hover:text-brand transition-colors block">98228 75551</a>
                    <a href="tel:9822837551" className="hover:text-brand transition-colors block">98228 37551</a>
                  </div>
                </li>
              </ul>
              <ul className="space-y-5 text-sm text-gray-400">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <a href="mailto:sanjivanidevelopers7551@gmail.com" className="hover:text-brand transition-colors break-all">sanjivanidevelopers7551@gmail.com</a>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <span>9:00 AM – 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
          <p>© {currentYear} Sanjivani Builders & Developers. All rights reserved.</p>
          <div className="flex gap-8 font-bold uppercase tracking-widest">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
