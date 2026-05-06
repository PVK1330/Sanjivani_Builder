import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Search } from 'lucide-react';

// Images
import proj1 from '../assets/images/hero.jpg';
import proj2 from '../assets/images/project1.jpg';
import proj3 from '../assets/images/project2.jpg';
import proj4 from '../assets/images/services_hero.jpg';
import proj5 from '../assets/images/about_hero.jpg';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ongoing', name: 'Ongoing' },
    { id: 'completed', name: 'Completed' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'residential', name: 'Residential' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Shiv Sanjivani Landmark',
      desc: 'Premium mixed-use complex on Trimbak Road, Satpur — luxury residences above world-class retail showrooms.',
      location: 'Trimbak Road, Satpur, Nashik',
      category: ['ongoing', 'commercial', 'residential'],
      tag: 'Flagship Project',
      img: proj1
    },
    {
      id: 2,
      title: 'Sanjivani Heights',
      desc: 'Elegant multi-storey residences with spacious balconies, premium wood-finish interiors, and lush green surroundings.',
      location: 'Nashik',
      category: ['completed', 'residential'],
      tag: 'Residential',
      img: proj2
    },
    {
      id: 3,
      title: 'Sanjivani Residency',
      desc: 'Modern residential complex featuring contemporary facade, covered parking, and thoughtfully designed homes.',
      location: 'Nashik',
      category: ['completed', 'residential'],
      tag: 'Premium',
      img: proj3
    },
    {
      id: 4,
      title: 'Sanjivani Plaza',
      desc: 'High-end commercial spaces and retail shops in the prime business hub of Nashik.',
      location: 'Nashik',
      category: ['ongoing', 'commercial'],
      tag: 'Commercial',
      img: proj4
    },
    {
      id: 5,
      title: 'Sanjivani Avenue',
      desc: 'Upcoming residential development with state-of-the-art amenities and smart home features.',
      location: 'Nashik',
      category: ['ongoing', 'residential'],
      tag: 'New Launch',
      img: proj5
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="relative pt-24 md:pt-36 pb-16 md:pb-24 bg-gray-900 text-white overflow-hidden text-center">
        <img 
          src={proj1} 
          className="absolute inset-0 w-full h-full object-cover opacity-40 blur-[2px]" 
          alt="Projects Hero" 
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
            <span className="text-white/60">Our Projects</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-8xl font-black mb-8"
          >
            Get In <span className="text-brand">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Discover our exceptional range of residential and commercial developments across Nashik's most prime locations.
          </motion.p>
        </div>
      </section>

      {/* Project Filter & Grid */}
      <section className="section-padding bg-white min-h-screen">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full font-black text-[10px] md:text-sm uppercase tracking-widest transition-all duration-300 border-2 ${
                  filter === cat.id 
                    ? 'bg-brand text-white border-brand shadow-xl shadow-brand/30 scale-105' 
                    : 'bg-white text-gray-500 border-gray-100 hover:border-brand hover:text-brand'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="group bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                      <span className="bg-brand text-white text-[0.65rem] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg">
                        {project.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-brand transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-10 line-clamp-3">
                      {project.desc}
                    </p>
                    <div className="flex items-center justify-between pt-8 border-t border-gray-50">
                      <span className="text-xs font-bold text-gray-400 flex items-center gap-2">
                        <MapPin size={16} className="text-brand" />
                        {project.location}
                      </span>
                      <button className="btn-primary !px-5 !py-2.5 !rounded-lg !text-xs !shadow-none group/btn">
                        View Details
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Search size={48} className="mx-auto text-gray-200 mb-4" />
              <p className="text-gray-400 font-bold">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
