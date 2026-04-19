"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Target, Lightbulb, Zap, Users, Building, Briefcase } from "lucide-react";

export default function About() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-6 relative overflow-hidden min-h-screen">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[var(--color-brand-blue)] rounded-full mix-blend-screen filter blur-[128px] opacity-40"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-extrabold text-white mb-6">
              About <span className="text-[var(--color-brand-gold)]">Step-Up Career</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              At Step-Up Career, we believe that the right opportunity can transform a life—and the right talent can transform a business.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl mb-12"
          >
            <p className="text-slate-300 leading-relaxed text-lg">
              We are a fast-growing recruitment and staffing firm focused on bridging the gap between skilled candidates and forward-thinking companies across India. Whether it's IT roles, non-IT hiring, bulk recruitment, or short-term projects, we bring speed, quality, and precision to every hiring need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border-t border-white/10"
            >
              <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30">
                <Target size={32} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-400">
                To empower individuals with the right career opportunities while helping organizations build high-performing teams through efficient, transparent, and reliable hiring solutions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border-t border-[var(--color-brand-gold)]/20"
            >
              <div className="bg-yellow-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-yellow-500/30">
                <Lightbulb size={32} className="text-[var(--color-brand-gold)]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-400">
                To become a trusted and recognized recruitment partner across India, known for delivering quality talent, faster closures, and long-term value.
              </p>
            </motion.div>
          </div>

          <h2 className="text-3xl font-bold text-center text-white mb-10">What Makes Us Different</h2>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-20">
            {[
              { icon: Zap, title: "Speed-Driven Hiring", desc: "We understand urgency and deliver candidates faster without compromising quality." },
              { icon: Users, title: "Strong Candidate Network", desc: "Access to a wide pool of pre-screened candidates across industries." },
              { icon: Building, title: "Client-Centric Approach", desc: "Every hiring requirement is treated as a priority with customized solutions." },
              { icon: Briefcase, title: "End-to-End Support", desc: "From sourcing to onboarding, we stay involved at every stage." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl flex gap-4 items-start hover:bg-white/[0.03] transition-colors"
              >
                <div className="bg-white/5 p-3 rounded-lg border border-white/10 shrink-0">
                  <feature.icon className="text-[var(--color-brand-gold)]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-400">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="glass-card p-10 rounded-3xl border border-[var(--color-brand-gold)]/20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-brand-gold)]/5 to-transparent"></div>
            <h2 className="text-3xl font-bold text-white mb-8 relative z-10">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div>
                <div className="text-5xl font-extrabold text-[var(--color-brand-gold)] mb-2">500+</div>
                <div className="text-slate-300 font-medium">Candidates Placed</div>
              </div>
              <div>
                <div className="text-5xl font-extrabold text-[var(--color-brand-gold)] mb-2">50+</div>
                <div className="text-slate-300 font-medium">Hiring Partners</div>
              </div>
              <div>
                <div className="text-5xl font-extrabold text-[var(--color-brand-gold)] mb-2">100+</div>
                <div className="text-slate-300 font-medium">Active Opportunities</div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Step-Up Career?</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              We don't just fill positions—we build connections that drive growth. With a focus on quality hiring, quick turnaround, and strong relationships, Step-Up Career is your trusted partner in navigating today's competitive job market.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
