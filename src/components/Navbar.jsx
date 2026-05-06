import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          scrolled || isOpen ? 'bg-white shadow-lg py-2' : 'lg:bg-transparent bg-white shadow-sm lg:shadow-none py-4 lg:py-4'
        }`}
      >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Sanjivani Logo" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-2 text-sm font-bold">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-2 rounded-lg transition-all ${
                isActive(link.path) 
                  ? 'bg-brand text-white' 
                  : 'text-gray-700 hover:text-brand hover:bg-brand-lt'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="tel:9822875551" 
            className="hidden sm:flex items-center gap-2 text-sm font-bold text-brand hover:scale-105 transition-transform"
          >
            <div className="w-8 h-8 rounded-full bg-brand-lt flex items-center justify-center">
              <Phone size={14} />
            </div>
            <span>98228 75551</span>
          </a>
          
          <Link 
            to="/contact" 
            className="hidden md:flex bg-brand hover:bg-brand-dk text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-brand/20 items-center gap-2 group"
          >
            Enquire Now
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <button 
            className={`lg:hidden p-2 transition-colors duration-300 ${scrolled || isOpen ? 'text-gray-900' : 'text-gray-900'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      </nav>
 
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[90] lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-10">
              <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block py-4 text-3xl font-black border-b border-gray-50 transition-colors ${
                          isActive(link.path) ? 'text-brand' : 'text-gray-900'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <a 
                  href="tel:9822875551" 
                  className="flex items-center justify-center gap-3 bg-gray-50 text-brand py-4 rounded-2xl font-bold"
                >
                  <Phone size={20} />
                  98228 75551
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center bg-brand text-white py-4 rounded-2xl font-bold shadow-xl shadow-brand/20"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
