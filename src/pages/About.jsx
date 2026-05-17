import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutHero from '../assets/images/about_hero.jpg';
import storyImg from '../assets/images/brand_symbol.png';

const About = () => {
  const stats = [
    { label: 'Year Founded', value: '1999' },
    { label: 'Projects Completed', value: '40+' },
    { label: 'Happy Families', value: '500+' },
    { label: 'Team Members', value: '25+' },
  ];

  const values = [
    { 
      icon: <Target className="text-brand" size={32} />, 
      title: 'Our Mission', 
      desc: 'To deliver homes and developments that reflect trust, innovation, and superior craftsmanship for generations to come. We focus on creating spaces that combine modern architecture, premium quality, and lasting value — with attention to detail, timely execution, and customer satisfaction at the core.' 
    },
    { 
      icon: <Eye className="text-brand" size={32} />, 
      title: 'Our Vision', 
      desc: 'To become the most preferred real estate developer in Nashik, recognized for our commitment to excellence, integrity, and for creating vibrant communities that enhance quality of life. We believe a building is more than just a structure — it is a place where dreams, memories, and futures are built.' 
    }
  ];

  const leadership = [
    {
      name: 'Shivaji Laxman Bhandure',
      role: 'Founder & Chairman',
      desc: 'With a vision to provide quality housing to the people of Nashik, Shivaji Laxman Bhandure founded Sanjivani Builders & Developers in 1999. His commitment to transparency, quality, and customer trust laid the foundation for a company that has stood the test of time for over 25 years.'
    },
    {
      name: 'Amit Shivaji Bhandure',
      role: 'Managing Director',
      desc: 'Carrying forward his father\'s legacy with modern vision and energy, Amit Shivaji Bhandure leads the company\'s operations and growth. Under his leadership, Sanjivani Builders has expanded its portfolio with landmark projects that blend contemporary design with the company\'s core values of quality and commitment.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="relative pt-24 md:pt-36 pb-16 md:pb-24 bg-gray-900 text-white overflow-hidden">
        <img 
          src={aboutHero} 
          className="absolute inset-0 w-full h-full object-cover opacity-30" 
          alt="About Sanjivani Builders Nashik" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand mb-6"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60">About Us</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-8xl font-black mb-8"
          >
            Our <span className="text-brand">Legacy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-medium"
          >
            A trusted name in Nashik's real estate since 1999 — built on commitment, transparency, and a passion for quality construction.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-brand-lt text-brand text-[0.65rem] md:text-[0.72rem] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">Our Story</span>
            <h2 className="text-3xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
              25+ Years of Building <span className="gradient-text">Trust</span> and Homes
            </h2>
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed mb-10">
              <p>
                Founded in 1999 by <strong className="text-gray-700">Shivaji Laxman Bhandure</strong>, Sanjivani Builders &amp; Developers began with a simple yet powerful vision: to provide high-quality, premium housing to the people of Nashik. Over the decades, we have grown into one of the most trusted names in the region's real estate market.
              </p>
              <p>
                Today, the company is led together with <strong className="text-gray-700">Amit Shivaji Bhandure</strong>, who carries forward the legacy with modern vision and energy. Our journey has been marked by milestones of excellence — from luxury residential apartments to landmark commercial complexes like Shiv Sanjivani Landmark on Trimbak Road, Satpur.
              </p>
              <p>
                Every project we undertake is a testament to our unwavering commitment to superior construction, thoughtful design, and lasting value. We believe that a building is more than just a structure — it is a place where dreams, memories, and futures are built.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-10 border-t border-gray-100">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-brand mb-1">{stat.value}</p>
                  <p className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-brand-lt flex items-center justify-center p-12">
              <img src={storyImg} alt="Sanjivani Builders & Developers Brand Symbol" className="w-full h-auto object-contain" />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/5 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block bg-brand-lt text-brand text-[0.65rem] md:text-[0.72rem] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4">Leadership</span>
            <h2 className="text-3xl md:text-6xl font-black text-gray-900 leading-tight">The People Behind <span className="gradient-text">Our Success</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {leadership.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-brand rounded-[1.25rem] flex items-center justify-center text-white font-black text-2xl mb-8">
                  {person.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-1">{person.name}</h3>
                <p className="text-brand font-bold text-sm uppercase tracking-widest mb-6">{person.role}</p>
                <p className="text-gray-500 leading-relaxed">{person.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              <div className="w-20 h-20 bg-brand-lt rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                {v.icon}
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-6">{v.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom text-center">
          <span className="inline-block bg-brand-lt text-brand text-[0.65rem] md:text-[0.72rem] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">Our DNA</span>
          <h2 className="text-3xl md:text-6xl font-black text-gray-900 mb-12 md:mb-16">The Values That <span className="gradient-text">Drive Us</span></h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            {[
              { title: 'Uncompromising Quality', desc: 'We use the finest materials and latest construction technologies to ensure every home stands the test of time.' },
              { title: 'Absolute Transparency', desc: 'Complete legal compliance and clear communication at every step — no hidden costs, no surprises.' },
              { title: 'Customer Centricity', desc: 'Your satisfaction is our primary goal, from the first enquiry to final possession and beyond.' },
              { title: 'On-Time Delivery', desc: 'Strict adherence to project timelines and handover schedules — a promise we have kept for 25+ years.' },
              { title: 'Sustainable Living', desc: 'Environmentally conscious designs and energy-efficient features for a better tomorrow.' },
              { title: 'Innovation', desc: 'Modern architectural designs that blend aesthetics with functionality for contemporary lifestyles.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4"
              >
                <CheckCircle2 className="text-brand shrink-0" size={24} />
                <div>
                  <h4 className="font-black text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding container-custom text-center">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">Ready to Build Your <span className="gradient-text">Future With Us?</span></h2>
        <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">Explore our projects or get in touch with our team to find the perfect home for you and your family.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/projects" className="btn-primary">
            View Our Projects
            <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
