"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Link from "next/link";
import { 
  Target, Lightbulb, Database, Users, Building2, Briefcase, 
  ShieldCheck, CheckCircle2, Sparkles, ArrowRight, Layers,
  FileCheck, Globe, Cpu, Factory, BookOpen, Monitor
} from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: Database,
      badge: "Pillar A",
      color: "brand-accent",
      title: "AI Data Operations",
      desc: "We support AI and data teams with the people and operational workflows needed to collect, organise, annotate and review project data. From multimodal collection to human-in-the-loop validation, we turn project specifications into structured, quality-verified deliverables.",
      items: [
        "Data Collection & Multimodal Capture",
        "Annotation & Labelling (CV, NLP)",
        "Data Processing & Categorisation",
        "Quality Review & Validation",
        "Human-in-the-Loop Task Operations",
        "Project Workforce Coordination",
      ]
    },
    {
      icon: Users,
      badge: "Pillar B",
      color: "blue-500",
      title: "Workforce & Talent Solutions",
      desc: "We help organisations source, onboard and coordinate talent for recruitment mandates and defined project requirements. From individual specialist roles to bulk hiring drives and project-based workforce teams, we operate across India's key industrial and digital sectors.",
      items: [
        "IT & Non-IT Specialist Recruitment",
        "EMS, Electronics & Manufacturing Staffing",
        "Bulk & Volume Recruitment Drives",
        "BFSI, BPO, Sales & Operations Hiring",
        "Project-Based Workforce Coordination",
        "EdTech & Inside Sales Hiring",
      ]
    }
  ];

  const values = [
    { title: "Integrity", desc: "Honest, transparent communication in every candidate interaction and client engagement." },
    { title: "Quality Focus", desc: "Structured processes, documented workflows, and verification at every delivery stage." },
    { title: "Reliability", desc: "Consistent follow-through on commitments, timelines, and reporting obligations." },
    { title: "Accountability", desc: "Clear ownership of tasks, decisions, and outcomes across all engagements." },
    { title: "Collaboration", desc: "Working closely with clients to understand requirements and adapt delivery accordingly." },
    { title: "Continuous Improvement", desc: "Refining processes, tools, and team capability based on project feedback and results." },
  ];

  const industries = [
    { icon: Cpu, title: "EMS & Electronics", desc: "PCB assembly, SMT line operators, embedded hardware, and cleanroom technicians." },
    { icon: Factory, title: "Manufacturing & Heavy Engineering", desc: "Plant managers, production engineers, CNC technicians, and EHS safety leads." },
    { icon: BookOpen, title: "EdTech & Education", desc: "Academic counselors, BDA inside sales, curriculum designers, and LMS operations." },
    { icon: Monitor, title: "Information Technology", desc: "Full-stack engineers, cloud architects, DevOps specialists, and QA automation." },
    { icon: Building2, title: "BFSI, BPO & Operations", desc: "Customer support, process managers, financial analysts, and corporate account leads." },
    { icon: Database, title: "AI & Data Teams", desc: "Contributor cohorts, annotators, reviewers, and data operations coordinators." },
  ];

  return (
    <>
      <Header />
      <main className="pt-28 pb-24 bg-bg-main min-h-screen transition-colors overflow-x-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Hero Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold mb-4 border border-brand-accent/20">
              <Sparkles size={14} /> About Step-Up Career
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-text-heading mb-5 tracking-tight font-heading break-words">
              India-Focused AI Data Operations,{" "}
              <span className="text-brand-accent">Recruitment & Workforce Solutions</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-text-body max-w-3xl mx-auto leading-relaxed">
              Step-Up Career is an India-focused AI data operations, recruitment and workforce solutions venture. 
              We support organisations with human-powered data workflows, talent acquisition and project workforce coordination.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-2xl bg-bg-card border border-border-main flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center mb-5 border border-brand-accent/20">
                  <Target size={24} />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-text-heading mb-3 font-heading">Our Mission</h2>
                <p className="text-text-body text-sm leading-relaxed mb-4">
                  To help businesses execute data and workforce projects through reliable people, organised processes and responsible delivery.
                </p>
              </div>
              <ul className="space-y-2 text-xs font-semibold text-text-heading border-t border-border-main pt-4">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-accent shrink-0" /> Reliable human-powered delivery</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-accent shrink-0" /> Structured processes and clear reporting</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-accent shrink-0" /> India-wide operational reach</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-bg-card border border-border-main flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center mb-5 border border-brand-accent/20">
                  <Lightbulb size={24} />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-text-heading mb-3 font-heading">Our Vision</h2>
                <p className="text-text-body text-sm leading-relaxed mb-4">
                  To build a trusted partner for AI data operations, talent acquisition and project workforce solutions — built on quality, documentation and transparent delivery across India.
                </p>
              </div>
              <div className="border-t border-border-main pt-4 flex items-center gap-2 text-xs font-semibold text-brand-accent">
                <Globe size={14} /> National footprint across 20+ metropolitan and industrial hubs
              </div>
            </motion.div>
          </div>

          {/* Two Pillars */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold mb-3 border border-brand-accent/20">
                <Layers size={13} /> Two Integrated Business Pillars
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-heading font-heading mb-2">What We Do</h2>
              <p className="text-sm text-text-body max-w-2xl mx-auto">
                Our focus is on understanding project requirements, organising the right resources, coordinating execution and maintaining clear communication throughout delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.badge}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 sm:p-8 rounded-2xl bg-bg-card border border-border-main hover:border-brand-accent/50 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center border border-brand-accent/20">
                      <pillar.icon size={20} />
                    </div>
                    <span className="px-2 py-0.5 rounded bg-brand-accent/10 text-brand-accent text-[10px] font-bold uppercase tracking-wider">{pillar.badge}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-text-heading font-heading mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-text-body leading-relaxed mb-5">{pillar.desc}</p>
                  <ul className="space-y-2 pt-4 border-t border-border-main/60">
                    {pillar.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2 text-xs text-text-body">
                        <CheckCircle2 size={14} className="text-brand-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* How We Work */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold mb-3 border border-brand-accent/20">
                <FileCheck size={13} /> Our Approach
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-heading font-heading mb-2">A Structured Approach from Requirement to Delivery</h2>
              <p className="text-sm text-text-body max-w-xl mx-auto">We don't promise what we can't control. We focus on organised execution and clear communication at every stage.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { num: "01", title: "Understand the Requirement", desc: "Discuss project scope, skills, data types, volumes, instructions, timelines and acceptance criteria." },
                { num: "02", title: "Plan the Workflow", desc: "Confirm resources, onboarding, task process, quality checks and reporting cadence." },
                { num: "03", title: "Onboard & Coordinate", desc: "Brief contributors and coordinate access, task allocation and project communication." },
                { num: "04", title: "Execute & Review", desc: "Track progress, review work against agreed guidelines and coordinate corrections." },
                { num: "05", title: "Report & Reconcile", desc: "Share agreed progress and delivery reports and reconcile completed and accepted work." },
              ].map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-5 rounded-2xl bg-bg-card border border-border-main hover:border-brand-accent/40 transition-all"
                >
                  <span className="text-2xl font-extrabold text-brand-accent/40 font-heading font-mono block mb-3">{step.num}</span>
                  <h3 className="text-sm font-bold text-text-heading font-heading mb-2">{step.title}</h3>
                  <p className="text-xs text-text-body leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-heading font-heading mb-2">Our Core Values</h2>
              <p className="text-sm text-text-body max-w-lg mx-auto">The principles that shape how we plan, execute and report on every engagement.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-5 sm:p-6 bg-bg-card border border-border-main rounded-xl hover:border-brand-accent/40 transition-colors"
                >
                  <div className="w-7 h-7 rounded bg-brand-accent/10 text-brand-accent flex items-center justify-center text-xs font-bold mb-4">{i + 1}</div>
                  <h3 className="text-base font-bold text-text-heading font-heading mb-1.5">{val.title}</h3>
                  <p className="text-xs text-text-body leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Industry Focus */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-heading font-heading mb-2">Sectors We Serve</h2>
              <p className="text-sm text-text-body max-w-lg mx-auto">Deep operational experience and recruiter networks across India's key industrial and digital sectors.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {industries.map((ind, idx) => (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-5 sm:p-6 bg-bg-card border border-border-main rounded-xl hover:border-brand-accent/40 transition-all flex gap-4 items-start"
                >
                  <div className="p-2.5 rounded-lg bg-brand-accent/10 text-brand-accent shrink-0 border border-brand-accent/20">
                    <ind.icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text-heading font-heading mb-1">{ind.title}</h3>
                    <p className="text-xs text-text-body leading-relaxed">{ind.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Choose Step-Up Career */}
          <div className="p-6 sm:p-10 bg-bg-card border border-border-main rounded-2xl mb-16">
            <h2 className="text-xs uppercase tracking-widest text-brand-accent font-bold mb-6 text-center">Why Step-Up Career</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Recruitment and project workforce coordination under one partner",
                "India-wide talent sourcing capability across 20+ hubs",
                "Structured onboarding and task coordination",
                "Focus on quality, documentation and reporting",
                "Flexible project engagement based on agreed scope",
                "MSME Registered — Govt. of India Certified",
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-text-body">
                  <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-bg-card border border-border-main p-8 sm:p-10 rounded-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-heading font-heading mb-3">
              Have an AI Data, Recruitment or Workforce Requirement?
            </h2>
            <p className="text-sm text-text-body max-w-xl mx-auto mb-6">
              Share your project or hiring requirement with Step-Up Career. Our team will review the details and contact you to discuss scope, timelines and a suitable engagement model.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/917697334430?text=Hi%20Step-Up%20Career,%20I%20have%20a%20business%20requirement%20to%20discuss."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-brand-accent hover:bg-brand-accent-hover text-white text-sm font-bold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                Submit a Business Enquiry <ArrowRight size={16} />
              </a>
              <Link
                href="/jobs"
                className="w-full sm:w-auto px-6 py-3 bg-bg-main hover:bg-border-main border border-border-main text-text-heading text-sm font-bold rounded-xl transition-colors text-center"
              >
                Browse Active Jobs
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
