import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Award, Clock, Shield, Users, ArrowRight, MapPin } from 'lucide-react';

// Images
import proj1 from '../assets/images/hero.jpg';
import proj2 from '../assets/images/project1.jpg';
import proj3 from '../assets/images/project2.jpg';
import whyUsImg from '../assets/images/about_hero.jpg';

const Home = () => {
  const projects = [
    {
      title: 'Shiv Sanjivani Landmark',
      desc: 'Premium mixed-use complex on Trimbak Road, Satpur — luxury residences above world-class retail showrooms.',
      location: 'Trimbak Road, Satpur, Nashik',
      tag: 'Flagship Project',
      img: proj1
    },
    {
      title: 'Sanjivani Heights',
      desc: 'Elegant multi-storey residences with spacious balconies, premium wood-finish interiors, and lush green surroundings.',
      location: 'Nashik',
      tag: 'Residential',
      img: proj2
    },
    {
      title: 'Sanjivani Residency',
      desc: 'Modern residential complex featuring contemporary facade, covered parking, and thoughtfully designed 2 & 3 BHK homes.',
      location: 'Nashik',
      tag: 'Premium',
      img: proj3
    }
  ];

  const features = [
    { icon: <Award className="text-brand" />, title: '25+ Years Legacy', desc: 'Established in 1999, serving Nashik with pride and excellence.' },
    { icon: <Clock className="text-brand" />, title: 'On-Time Delivery', desc: 'Zero delay policy. We deliver your dream home as promised, every time.' },
    { icon: <Shield className="text-brand" />, title: 'Premium Quality', desc: 'Best-in-class materials and finishes for a lasting construction.' },
    { icon: <Users className="text-brand" />, title: 'Customer First', desc: 'Dedicated post-possession support and customer care services.' }
  ];

  return (
    <div className="bg-white">
      <Hero />

      {/* Projects Section */}
      <section className="section-padding container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="inline-block bg-brand-lt text-brand text-[0.65rem] md:text-[0.72rem] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4">Our Portfolio</span>
            <h2 className="text-3xl md:text-6xl font-black text-gray-900 leading-tight">Featured Projects</h2>
          </div>
          <button className="text-brand font-bold flex items-center gap-2 hover:underline group">
            View All Projects 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-6 left-6 bg-brand text-white text-[0.65rem] font-black uppercase tracking-widest px-4 py-2 rounded-xl">
                  {project.tag}
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {project.desc}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <span className="text-xs font-bold text-gray-400 flex items-center gap-2">
                    <MapPin size={14} className="text-brand" />
                    {project.location}
                  </span>
                  <button className="text-brand font-black text-sm group/btn flex items-center gap-1">
                    Details 
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl h-[300px] md:h-[500px]"
              >
                <img 
                  src={whyUsImg} 
                  alt="Quality Construction" 
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-lt rounded-full -z-0"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 border-[16px] border-brand/5 rounded-full -z-0"></div>
            </div>

            <div>
              <span className="inline-block bg-brand-lt text-brand text-[0.65rem] md:text-[0.72rem] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">Why Choose Us</span>
              <h2 className="text-3xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
                Building <span className="gradient-text">Trust</span>,<br />Not Just Structures
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-12">
                Since 1999, Sanjivani Builders & Developers has been the most trusted name in Nashik's real estate market. Every project reflects our commitment to quality craftsmanship and exceptional customer satisfaction.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                {features.map((f, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5"
                  >
                    <div className="w-14 h-14 shrink-0 bg-white shadow-xl rounded-[1.25rem] flex items-center justify-center">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{f.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-brand relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8">Ready to Find Your <br className="md:hidden" /><span className="text-white/80">Dream Home?</span></h2>
          <p className="text-base md:text-lg text-white/70 mb-8 md:mb-12 max-w-2xl mx-auto">Visit our office at Shiv Sanjivani Landmark, Trimbak Road, Satpur, Nashik or call us today to schedule a site visit.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-5">
            <button className="bg-white text-brand px-7 py-3.5 md:px-8 md:py-4 rounded-xl font-black text-sm md:text-base hover:bg-brand-lt transition-all hover:-translate-y-1 shadow-2xl">
              Schedule Site Visit
            </button>
            <button className="border-2 border-white/30 text-white px-7 py-3.5 md:px-8 md:py-4 rounded-xl font-black text-sm md:text-base hover:bg-white/10 transition-all hover:-translate-y-1">
              Call 98228 75551
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
