import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2 } from 'lucide-react';
import contactHero from '../assets/images/contact_hero.png';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      e.target.reset();
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  const contactCards = [
    { 
      icon: <MapPin className="text-white" size={24} />, 
      title: 'Our Office', 
      desc: 'Shiv Sanjivani Landmark, Opp. Papaya Nursery, Trimbak Road, Satpur, Nashik',
      bg: 'bg-brand',
      textColor: 'text-white'
    },
    { 
      icon: <Phone className="text-brand" size={24} />, 
      title: 'Phone Call', 
      desc: 'General: 98228 75551\nSales: 98228 37551',
      bg: 'bg-white',
      textColor: 'text-gray-900'
    },
    { 
      icon: <Mail className="text-brand" size={24} />, 
      title: 'Email Us', 
      desc: 'sanjivanidevelopers7551@gmail.com',
      bg: 'bg-white',
      textColor: 'text-gray-900'
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="relative pt-24 md:pt-36 pb-16 md:pb-24 bg-gray-900 text-white overflow-hidden text-center">
        <img 
          src={contactHero} 
          className="absolute inset-0 w-full h-full object-cover opacity-30" 
          alt="Contact Hero" 
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
            <span className="text-white/60">Contact Us</span>
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
            Have questions about our projects or want to schedule a site visit? We're here to help you find your perfect home.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative -mt-20 z-20 container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className={`${card.bg} p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col items-start`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${card.bg === 'bg-brand' ? 'bg-white/20' : 'bg-brand-lt'}`}>
                {card.icon}
              </div>
              <h4 className={`text-2xl font-black mb-4 ${card.textColor}`}>{card.title}</h4>
              <p className={`text-sm leading-relaxed whitespace-pre-line ${card.bg === 'bg-brand' ? 'text-white/80' : 'text-gray-500'}`}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form & Map */}
      <section className="section-padding container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Send Us a <span className="gradient-text">Message</span></h2>
            <p className="text-gray-500 mb-12">Fill out the form below and our team will get back to you within 24 hours.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[0.65rem] font-black uppercase tracking-widest text-gray-400 ml-4">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter your name"
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:bg-white focus:border-brand focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[0.65rem] font-black uppercase tracking-widest text-gray-400 ml-4">Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="Enter phone number"
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:bg-white focus:border-brand focus:outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[0.65rem] font-black uppercase tracking-widest text-gray-400 ml-4">Email Address</label>
                <input 
                  type="email" 
                  required 
                  placeholder="Enter email address"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:bg-white focus:border-brand focus:outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[0.65rem] font-black uppercase tracking-widest text-gray-400 ml-4">Subject</label>
                <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:bg-white focus:border-brand focus:outline-none transition-all appearance-none">
                  <option>General Enquiry</option>
                  <option>Project Details</option>
                  <option>Site Visit Request</option>
                  <option>Redevelopment Enquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[0.65rem] font-black uppercase tracking-widest text-gray-400 ml-4">Message</label>
                <textarea 
                  rows="5" 
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:bg-white focus:border-brand focus:outline-none transition-all"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formState !== 'idle'}
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl flex items-center justify-center gap-3 ${
                  formState === 'success' 
                    ? 'bg-green-500 text-white shadow-green-500/20' 
                    : 'bg-brand hover:bg-brand-dk text-white shadow-brand/20 hover:-translate-y-1'
                }`}
              >
                {formState === 'idle' && (
                  <>
                    Send Message Now
                    <Send size={18} />
                  </>
                )}
                {formState === 'sending' && (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                )}
                {formState === 'success' && (
                  <>
                    Message Sent Successfully
                    <CheckCircle2 size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Map & Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white h-[450px] bg-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.123456789!2d73.746!3d19.989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU5JzIwLjQiTiA3M8KwNDQnNDUuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>

            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 text-brand font-black uppercase tracking-widest text-xs mb-6">
                  <Clock size={16} />
                  Office Hours
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="font-bold text-gray-900">Monday - Saturday</span>
                    <span className="text-gray-500">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-900">Sunday</span>
                    <span className="text-gray-500">By Appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
