import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Users as UsersIcon, Shield, Award } from 'lucide-react';
import heroImg from '../assets/images/hero.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background with parallax effect placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Shiv Sanjivani Landmark" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10 w-full pt-20 md:pt-36 pb-8 md:pb-40">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-brand rounded-full animate-pulse shadow-[0_0_12px_rgba(232,103,26,0.8)]"></span>
            Trusted Since 1999 &middot; Nashik's Premier Developer
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-8xl font-black text-white leading-[1.1] mb-6 md:mb-8"
          >
            Building <span className="gradient-text">Dreams</span><br />
            in Nashik
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-xl text-white/70 leading-relaxed mb-8 md:mb-12 max-w-xl font-medium"
          >
            Crafting premium residential and commercial spaces across Nashik for over 25 years with quality, trust, and on-time delivery.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-5"
          >
            <button className="btn-primary group">
              Explore Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline border-white/30 text-white hover:bg-white hover:text-brand">
              Contact Us
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 md:mt-16 flex flex-wrap gap-x-8 md:gap-x-10 gap-y-3 md:gap-y-4 text-[10px] md:text-sm font-bold text-white/50"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
              25+ Years Experience
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
              RERA Registered
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
              On-Time Delivery
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats overlay */}
      <div className="relative md:absolute md:bottom-0 md:left-0 w-full z-20 mt-6 md:mt-0">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl md:rounded-none md:rounded-t-[2.5rem] shadow-2xl md:shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.2)] px-6 py-8 md:px-12 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center border border-white/20 md:border-x md:border-t md:border-b-0">
            {[
              { label: 'Happy Families', value: '500+', icon: <UsersIcon size={18} /> },
              { label: 'Years of Trust', value: '25+', icon: <Shield size={18} /> },
              { label: 'Projects Completed', value: '40+', icon: <Award size={18} /> },
              { label: 'Client Satisfaction', value: '99%', icon: <UsersIcon size={16} /> }
            ].map((stat, i) => (
              <div key={i} className="group cursor-default flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-3 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                  {stat.icon}
                </div>
                <p className="text-2xl md:text-5xl font-black text-brand mb-1 group-hover:scale-110 transition-transform duration-500">{stat.value}</p>
                <p className="text-[10px] md:text-[0.7rem] font-bold text-gray-400 uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
