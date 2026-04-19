"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Monitor, Users, UsersRound, FileClock, Presentation, Cog, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "IT Staffing",
      desc: "We help companies hire skilled professionals across various IT domains including development, testing, support, and more.",
      icon: Monitor,
      points: ["Software Developers", "QA/Test Engineers", "Support & Operations", "Tech Leads & Specialists"]
    },
    {
      title: "Non-IT Hiring",
      desc: "From entry-level to experienced professionals, we provide hiring solutions for non-technical roles across industries.",
      icon: Users,
      points: ["Customer Support / BPO", "Sales & Business Development", "HR & Admin", "Operations Roles"]
    },
    {
      title: "Bulk Hiring",
      desc: "Need to hire at scale? We specialize in managing large-volume hiring with speed and efficiency.",
      icon: UsersRound,
      points: ["Mass recruitment drives", "Campus hiring support", "Walk-in coordination"]
    },
    {
      title: "Contract & Short-Term Hiring",
      desc: "Flexible workforce solutions for projects, events, and temporary requirements.",
      icon: FileClock,
      points: ["Project-based hiring", "Event staffing", "Seasonal workforce"]
    },
    {
      title: "Corporate Events & Staffing",
      desc: "We provide manpower and coordination support for corporate events, promotions, and campaigns.",
      icon: Presentation,
      points: ["Event staffing", "Brand promotions", "On-ground execution teams"]
    },
    {
      title: "Customized Recruitment",
      desc: "Every business is different. We design hiring strategies tailored to your exact requirements.",
      icon: Cog,
      points: ["Dedicated hiring support", "Industry-specific recruitment", "Fast-track closures"]
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-6 relative overflow-hidden min-h-screen">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-0 w-[30rem] h-[30rem] bg-indigo-900/40 rounded-full mix-blend-screen filter blur-[128px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-extrabold text-white mb-6">
              Our <span className="text-[var(--color-brand-gold)]">Services</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              At Step-Up Career, we offer a complete range of recruitment solutions designed to meet the evolving needs of businesses across industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {services.map((svc, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl hover:bg-white/[0.04] transition-all group"
              >
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[var(--color-brand-gold)] transition-transform">
                  <svc.icon className="text-[var(--color-brand-gold)]" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{svc.title}</h3>
                <p className="text-slate-400 mb-6 min-h-[80px]">{svc.desc}</p>
                <ul className="space-y-3">
                  {svc.points.map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 size={16} className="text-green-400 shrink-0" />
                      <span className="text-sm font-medium">{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-3xl"
            >
              <h2 className="text-3xl font-bold text-white mb-6">🎯 Our Approach</h2>
              <ul className="space-y-6">
                {[
                  "Understand your requirement",
                  "Source the right candidates",
                  "Screen & shortlist efficiently",
                  "Deliver quick closures"
                ].map((step, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-brand-gold)]/20 text-[var(--color-brand-gold)] flex items-center justify-center font-bold border border-[var(--color-brand-gold)]/30 shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-lg text-slate-200 font-medium">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-3xl border-t border-[var(--color-brand-gold)]/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-gold)]/10 rounded-full blur-2xl"></div>
              <h2 className="text-3xl font-bold text-white mb-6">🚀 Why Our Services Stand Out</h2>
              <ul className="space-y-4">
                {[
                  "Faster hiring turnaround",
                  "Quality candidate screening",
                  "Strong industry understanding",
                  "Reliable and scalable solutions"
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-brand-gold)] shrink-0"></div>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-blue-900/50 via-indigo-900/50 to-blue-900/50 p-12 rounded-3xl border border-white/10"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-white italic mb-8 max-w-4xl mx-auto leading-relaxed">
              “Whether you're a company looking to hire or a candidate looking to grow—Step-Up Career is here to make it happen.”
            </h2>
            <Link 
              href="/apply" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-hover)] text-black font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,215,0,0.3)] text-lg"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
}
