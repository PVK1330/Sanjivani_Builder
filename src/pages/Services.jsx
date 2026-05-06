import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Store, Paintbrush, Landmark, Gavel, Settings, Search, Layout, HardHat } from 'lucide-react';
import servicesHero from '../assets/images/services_hero.jpg';

const Services = () => {
  const serviceList = [
    { 
      icon: <Building2 size={32} />, 
      title: 'Residential Construction', 
      desc: 'From luxury apartments to premium row houses, we build homes with the highest standards of quality and durability.' 
    },
    { 
      icon: <Store size={32} />, 
      title: 'Commercial Development', 
      desc: 'Premium office spaces and retail showrooms designed for high efficiency, visibility, and business growth.' 
    },
    { 
      icon: <Paintbrush size={32} />, 
      title: 'Interior Design', 
      desc: 'Bespoke interior solutions that combine aesthetics with functionality to create spaces that reflect your personality.' 
    },
    { 
      icon: <Landmark size={32} />, 
      title: 'Home Loan Assistance', 
      desc: 'Tie-ups with leading banks for hassle-free loan approvals at the best interest rates for our valued customers.' 
    },
    { 
      icon: <Gavel size={32} />, 
      title: 'Legal Consulting', 
      desc: 'Complete support for RERA registration, sale deeds, and other property-related legal documentation.' 
    },
    { 
      icon: <Settings size={32} />, 
      title: 'Facility Management', 
      desc: 'Professional maintenance and management of residential societies to ensure a smooth and premium living experience.' 
    }
  ];

  const processSteps = [
    { icon: <Search />, title: 'Discovery', desc: 'Understanding your needs, budget, and preferred location.' },
    { icon: <Layout />, title: 'Planning', desc: 'Detailed architectural planning and legal approvals.' },
    { icon: <HardHat />, title: 'Execution', desc: 'Quality construction by our expert team on strict schedule.' },
    { icon: <Landmark />, title: 'Possession', desc: 'Handing over your dream home with 100% satisfaction.' }
  ];

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="relative pt-24 md:pt-36 pb-16 md:pb-24 bg-gray-900 text-white overflow-hidden text-center">
        <img 
          src={servicesHero} 
          className="absolute inset-0 w-full h-full object-cover opacity-30" 
          alt="Services Hero" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand mb-6"
          >
            <span>Home</span>
            <span className="text-white/30">/</span>
            <span className="text-white/60">Services</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-8xl font-black mb-8"
          >
            What We <span className="text-brand">Offer</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Comprehensive real estate solutions designed to turn your property dreams into reality with quality and precision.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-gray-100 hover:bg-brand transition-all duration-500 hover:shadow-2xl hover:shadow-brand/20"
              >
                <div className="w-20 h-20 bg-brand-lt rounded-[1.5rem] flex items-center justify-center text-brand mb-10 group-hover:bg-white/20 group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 group-hover:text-white transition-colors">
                   {service.title}
                 </h3>
                 <p className="text-gray-500 leading-relaxed text-base md:text-lg group-hover:text-white/80 transition-colors">
                   {service.desc}
                 </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container-custom text-center">
          <span className="inline-block bg-brand-lt text-brand text-[0.65rem] md:text-[0.72rem] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">Our Journey</span>
          <h2 className="text-3xl md:text-6xl font-black text-gray-900 mb-12 md:mb-20">How We <span className="gradient-text">Work</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-brand/10 -z-0"></div>
            
            {processSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 group"
              >
                <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-xl group-hover:border-brand group-hover:scale-110 transition-all duration-500 text-brand">
                  <div className="text-2xl font-black italic absolute -top-4 -right-4 w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center shadow-lg">
                    0{i+1}
                  </div>
                  {React.cloneElement(step.icon, { size: 32 })}
                </div>
                <h4 className="text-xl font-black text-gray-900 mb-4">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section className="section-padding container-custom">
        <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand opacity-10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-6xl font-black text-white mb-6 md:mb-8">Redevelopment <span className="text-brand">Experts</span></h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                Sanjivani Builders specializes in the redevelopment of old residential societies. We bring modern architectural excellence and superior amenities to your existing space, significantly increasing its value and your quality of life.
              </p>
              <ul className="space-y-4 text-white/80 font-bold mb-10">
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-brand rounded-full"></span> Zero out-of-pocket cost for residents</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-brand rounded-full"></span> Significant increase in carpet area</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-brand rounded-full"></span> Modern earthquake-resistant structure</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-brand rounded-full"></span> Premium modern amenities & lifestyle</li>
              </ul>
              <button className="btn-primary">Enquire for Redevelopment</button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square bg-white/5 backdrop-blur rounded-[2rem] p-8 flex flex-col justify-end">
                <p className="text-3xl font-black text-brand mb-2">15+</p>
                <p className="text-xs text-white/40 font-bold uppercase tracking-widest">Societies Redeveloped</p>
              </div>
              <div className="aspect-square bg-brand/10 backdrop-blur rounded-[2rem] p-8 flex flex-col justify-end">
                <p className="text-3xl font-black text-white mb-2">100%</p>
                <p className="text-xs text-white/40 font-bold uppercase tracking-widest">Legal Compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
