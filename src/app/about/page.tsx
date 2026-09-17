"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Link from "next/link";
import { 
  Target, Lightbulb, Zap, Users, Building2, Briefcase, 
  ShieldCheck, CheckCircle2, Award, Sparkles, TrendingUp, ArrowRight
} from "lucide-react";

export default function About() {
  const coreValues = [
    { title: "Integrity", desc: "Uncompromising honesty and ethical transparency in every candidate match and client contract." },
    { title: "Transparency", desc: "Clear communication, verified job openings, and upfront salary and role expectations." },
    { title: "Speed", desc: "Accelerating hiring turnaround times without sacrificing screening accuracy or candidate caliber." },
    { title: "Innovation", desc: "Leveraging modern sourcing workflows and AI matching technology to streamline recruitment." },
    { title: "Commitment", desc: "Dedicated to long-term candidate career growth and durable organizational partnerships." },
    { title: "Growth", desc: "Empowering talent and enterprises to unlock their full potential across Indian markets." },
  ];

  const differentiators = [
    { icon: Zap, title: "Speed-Driven Hiring", desc: "We understand commercial urgency and deliver vetted talent faster without quality compromises." },
    { icon: Users, title: "Pre-Screened Network", desc: "Access to a national pool of verified professionals across engineering, operations, and leadership." },
    { icon: Building2, title: "Enterprise-Centric Alignment", desc: "Every recruitment campaign is managed with customized solutions aligned to company goals." },
    { icon: Briefcase, title: "End-to-End Orchestration", desc: "Comprehensive management from initial talent sourcing and interviews to onboarding." },
  ];

  return (
    <>
      <Header />
      <main className="pt-28 pb-24 px-4 sm:px-6 bg-bg-main min-h-screen transition-colors">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold mb-3 border border-brand-accent/20">
              <Sparkles size={14} /> Corporate Overview & Mission
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-text-heading mb-4 tracking-tight font-heading">
              About <span className="text-brand-accent">Step-Up Career</span>
            </h1>
            <p className="text-base md:text-lg text-text-body max-w-2xl mx-auto leading-relaxed">
              Step-Up Career is a modern recruitment and workforce solutions company helping businesses hire faster while enabling professionals to discover verified career opportunities across India.
            </p>
          </motion.div>

          {/* Who We Are & Mission / Vision Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-xl bg-bg-card border border-border-main flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-brand-accent/10 text-brand-accent flex items-center justify-center mb-6 border border-brand-accent/20">
                  <Target size={24} />
                </div>
                <h2 className="text-2xl font-bold text-text-heading mb-3 font-heading">Our Mission</h2>
                <p className="text-text-body text-sm leading-relaxed mb-4">
                  To empower careers, connect top-tier talent, and build resilient, high-performing workforces through innovative, transparent, and reliable recruitment practices.
                </p>
              </div>
              <ul className="space-y-2 text-xs font-semibold text-text-heading border-t border-border-main pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-brand-accent" /> Empowering Careers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-brand-accent" /> Connecting Talent
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-brand-accent" /> Building Strong Workforces
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-xl bg-bg-card border border-border-main flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-brand-accent/10 text-brand-accent flex items-center justify-center mb-6 border border-brand-accent/20">
                  <Lightbulb size={24} />
                </div>
                <h2 className="text-2xl font-bold text-text-heading mb-3 font-heading">Our Vision</h2>
                <p className="text-text-body text-sm leading-relaxed mb-4">
                  To become India&apos;s most trusted recruitment and workforce solutions platform by simplifying hiring through modern technology, deep industry expertise, and exceptional candidate experiences.
                </p>
              </div>
              <div className="border-t border-border-main pt-4 flex items-center gap-2 text-xs font-semibold text-brand-accent">
                <TrendingUp size={14} /> National footprint across 20+ metropolitan hiring hubs
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-heading font-heading mb-2">Our Core Values</h2>
              <p className="text-sm text-text-body max-w-lg mx-auto">The foundational principles that guide our recruiter team and client relationships.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-6 bg-bg-card border border-border-main rounded-xl hover:border-brand-accent/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded bg-brand-accent/10 text-brand-accent flex items-center justify-center text-xs font-bold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-text-heading font-heading mb-1.5">{val.title}</h3>
                  <p className="text-xs text-text-body leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What Makes Us Different */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-heading font-heading mb-2">What Makes Us Different</h2>
              <p className="text-sm text-text-body max-w-lg mx-auto">Engineered for quality, speed, and precision in every hiring campaign.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {differentiators.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 bg-bg-card border border-border-main rounded-xl flex gap-4 items-start"
                >
                  <div className="p-2.5 rounded-lg bg-brand-accent/10 text-brand-accent shrink-0 border border-brand-accent/20">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-heading font-heading mb-1">{item.title}</h3>
                    <p className="text-xs text-text-body leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Impact Stats */}
          <div className="p-10 bg-bg-card border border-border-main rounded-2xl text-center mb-20">
            <h2 className="text-xs uppercase tracking-widest text-brand-accent font-bold mb-6">Our Verified Track Record</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-extrabold text-text-heading font-heading mb-1">500+</div>
                <div className="text-xs font-semibold text-text-body uppercase tracking-wider">Candidates Placed</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-extrabold text-text-heading font-heading mb-1">50+</div>
                <div className="text-xs font-semibold text-text-body uppercase tracking-wider">Corporate Partners</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-extrabold text-text-heading font-heading mb-1">100+</div>
                <div className="text-xs font-semibold text-text-body uppercase tracking-wider">Active Openings</div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-bg-card border border-border-main p-10 rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-text-heading font-heading mb-3">
              Ready to Accelerate Your Hiring or Career?
            </h2>
            <p className="text-sm text-text-body max-w-xl mx-auto mb-6">
              Connect with our recruitment advisors today and discover how Step-Up Career can support your organizational growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link 
                href="/jobs"
                className="w-full sm:w-auto px-6 py-3 bg-brand-accent hover:bg-brand-accent-hover text-white text-sm font-bold rounded-lg transition-colors shadow-sm"
              >
                Browse Active Jobs
              </Link>
              <a 
                href="https://wa.me/917697334430?text=Hi,%20we%20want%20to%20discuss%20hiring%20support%20with%20Step-Up%20Career."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-bg-main hover:bg-border-main border border-border-main text-text-heading text-sm font-bold rounded-lg transition-colors"
              >
                Schedule Employer Callback
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
