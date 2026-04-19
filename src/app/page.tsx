"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import { ArrowRight, Star, TrendingUp, Users, CheckCircle, Search } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-brand-blue)] rounded-full mix-blend-screen filter blur-[128px] opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-900 rounded-full mix-blend-screen filter blur-[128px] opacity-50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card w-fit border border-white/10">
              <Star className="text-[var(--color-brand-gold)]" size={16} fill="currentColor" />
              <span className="text-sm font-medium text-slate-200">Premium Recruitment Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Unlock Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-gold)] to-yellow-200">
                True Potential
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
              Step-Up Career bridges the gap between top talent and industry-leading companies. Discover premium opportunities tailored for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a 
                href="#jobs" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-hover)] text-black font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,215,0,0.3)] text-lg"
              >
                Find Jobs <Search size={20} />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-full transition-all hover:scale-105 text-lg"
              >
                Post a Job <ArrowRight size={20} />
              </a>
            </div>
            
            <div className="flex items-center gap-8 mt-8 pt-8 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">50+</span>
                <span className="text-sm text-slate-400">Companies Hiring</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">500+</span>
                <span className="text-sm text-slate-400">Candidates Placed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">98%</span>
                <span className="text-sm text-slate-400">Success Rate</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Abstract floating UI elements instead of an image to look premium */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-blue)] to-transparent rounded-full opacity-20 animate-spin-slow"></div>
              
              {/* Floating Card 1 */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 p-6 glass-card rounded-2xl w-64 backdrop-blur-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <TrendingUp className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Software Engineer</h3>
                    <p className="text-xs text-slate-400">Google • Remote</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[var(--color-brand-gold)] font-medium">$120k - $150k</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">New</span>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-0 p-5 glass-card rounded-2xl w-72 backdrop-blur-xl"
              >
                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                  <Users size={18} className="text-[var(--color-brand-gold)]" /> Application Status
                </h3>
                <div className="space-y-3 mt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Resume Reviewed</p>
                      <p className="text-xs text-slate-400">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 opacity-50">
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-white/20"></span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Interview Scheduled</p>
                      <p className="text-xs text-slate-400">Pending</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section preview */}
      <section id="services" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Step-Up Career?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We provide an end-to-end premium recruitment experience for both job seekers and top-tier employers.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Smart Matching", desc: "Our algorithm connects you with roles that perfectly align with your skills and career trajectory." },
              { title: "Premium Network", desc: "Access exclusive opportunities from leading startups and Fortune 500 companies." },
              { title: "Career Guidance", desc: "Get one-on-one resume reviews and interview preparation from industry experts." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="p-8 glass-card rounded-2xl hover:bg-white/[0.05] transition-colors group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--color-brand-blue)] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[var(--color-brand-gold)] transition-all">
                  <Star className="text-[var(--color-brand-gold)]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
