import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

// Images
import img1 from '../assets/images/hero.jpg';
import img2 from '../assets/images/about_hero.jpg';
import img3 from '../assets/images/project1.jpg';
import img4 from '../assets/images/services_hero.jpg';
import img5 from '../assets/images/project2.jpg';
import img6 from '../assets/images/contact_hero.png';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { src: img1, title: 'Shiv Sanjivani Landmark Exterior', size: 'large' },
    { src: img3, title: 'Sanjivani Heights Elevation', size: 'small' },
    { src: img2, title: 'Commercial Retail Hub', size: 'medium' },
    { src: img4, title: 'Premium Apartment View', size: 'small' },
    { src: img5, title: 'Sanjivani Residency Facade', size: 'medium' },
    { src: img6, title: 'Night View of Landmark', size: 'small' },
  ];

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="relative pt-24 md:pt-36 pb-16 md:pb-24 bg-gray-900 text-white overflow-hidden text-center">
        <img 
          src={img1} 
          className="absolute inset-0 w-full h-full object-cover opacity-30" 
          alt="Gallery Hero" 
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
            <span className="text-white/60">Gallery</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-8xl font-black mb-8"
          >
            Our <span className="text-brand">Creations</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            A visual journey through our finest architectural achievements and premium developments in Nashik.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding container-custom">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedImg(img)}
              className="relative group cursor-pointer overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-gray-100 border border-gray-100"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 scale-0 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 size={24} />
                </div>
                <h4 className="text-white font-black text-sm uppercase tracking-widest">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-5 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImg.src} 
                alt={selectedImg.title} 
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              />
              <div className="mt-8 text-center">
                <h3 className="text-white font-black text-xl uppercase tracking-widest">{selectedImg.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
